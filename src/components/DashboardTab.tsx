'use client';

import { useState, useEffect, useMemo } from 'react';
import { useCivicStore } from '@/store/civicStore';
import { WARDS } from '@/data/ward-seed';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Loader2, TrendingUp, AlertTriangle, CheckCircle, BarChart3, Users, Award, Shield, ArrowUpDown, Sparkles, FileText, Clipboard, Trash2, Check, MapPin } from 'lucide-react';
import { getContact } from '@/data/department-contacts';
import { useRouter } from 'next/navigation';

interface DashboardTabProps {
  onNavigateToMap: (wardId?: string) => void;
}

const CATEGORY_COLORS: Record<string, string> = {
  Roads: '#f43f5e',
  Streetlights: '#f59e0b',
  Water: '#3b82f6',
  Garbage: '#10b981',
  Drainage: '#8b5cf6'
};

const CATEGORY_LABEL_MAPPING: Record<string, string> = {
  Roads: 'Potholes / Roads',
  Streetlights: 'Streetlights',
  Water: 'Water supply',
  Garbage: 'Garbage dumping',
  Drainage: 'Drainage / Encroachment'
};

const CATEGORY_EMOJIS_MAP: Record<string, string> = {
  Roads: '🕳️',
  Streetlights: '💡',
  Water: '💧',
  Garbage: '🗑️',
  Drainage: '⚠️'
};

export default function DashboardTab({ onNavigateToMap }: DashboardTabProps) {
  const router = useRouter();
  const { issues, userStats, loadStatsFromLocalStorage } = useCivicStore();
  
  // Dashboard Sub-navigation Tabs
  const [subTab, setSubTab] = useState<'CITY_OVERVIEW' | 'MY_COMPLAINTS' | 'LEADERBOARD'>('CITY_OVERVIEW');
  const [selectedCity, setSelectedCity] = useState('Bangalore');

  // Personal Issues State
  const [myIssues, setMyIssues] = useState<any[]>([]);
  const [rtiLoadingId, setRtiLoadingId] = useState<string | null>(null);
  const [complaintLoadingId, setComplaintLoadingId] = useState<string | null>(null);

  // Table Filter states
  const [tableFilter, setTableFilter] = useState<'ALL' | 'OPEN' | 'IN_PROGRESS' | 'RESOLVED'>('ALL');
  const [sortField, setSortField] = useState<string>('createdAt');
  const [sortAsc, setSortAsc] = useState(false);

  // Insights Loading States
  const [insightsLoading, setInsightsLoading] = useState(false);
  const [insightsResult, setInsightsResult] = useState<any>(null);

  useEffect(() => {
    loadStatsFromLocalStorage();
    loadMyIssues();
  }, [loadStatsFromLocalStorage]);

  const loadMyIssues = () => {
    try {
      const stored = localStorage.getItem('nagaiai_my_issues');
      if (stored) {
        setMyIssues(JSON.parse(stored));
      } else {
        setMyIssues([]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Delete complaint handler
  const handleDeleteMyComplaint = (id: string) => {
    if (!confirm("Are you sure you want to delete this complaint?")) return;
    try {
      const updated = myIssues.filter(iss => iss.id !== id);
      localStorage.setItem('nagaiai_my_issues', JSON.stringify(updated));
      setMyIssues(updated);
    } catch (e) {
      console.error(e);
    }
  };

  // Helper for computing SLA days
  const getSlaDays = (dateStr: string) => {
    const elapsedMs = new Date().getTime() - new Date(dateStr).getTime();
    return Math.floor(elapsedMs / (1000 * 60 * 60 * 24));
  };

  // SLA visual progress bar helper
  const getSlaProgressBar = (days: number, isResolved: boolean) => {
    const maxDays = 7;
    const progress = Math.min(maxDays, days);
    const filledBlocks = '█'.repeat(progress);
    const emptyBlocks = '░'.repeat(Math.max(0, maxDays - progress));
    const isBreached = !isResolved && days > maxDays;
    
    return (
      <div className="flex items-center gap-1.5 font-mono text-[10px] select-none">
        <span className="text-slate-500">SLA: 7 days</span>
        <span className={isBreached ? "text-rose-500" : "text-emerald-500"}>
          [{filledBlocks}{emptyBlocks}]
        </span>
        {isBreached && (
          <span className="text-rose-500 font-bold uppercase tracking-wider text-[8px] bg-rose-500/10 px-1 py-0.5 rounded border border-rose-500/20">
            BREACHED
          </span>
        )}
      </div>
    );
  };

  const getCardBorderClass = (issue: any, days: number) => {
    if (issue.status === 'resolved') return 'border-emerald-500';
    if (issue.status === 'in-progress') return 'border-amber-500';
    if (days > 7) return 'border-rose-500';
    return 'border-slate-700';
  };

  // RTI generation from Complaint card
  const handleGenerateRtiForMyComplaint = async (issue: any) => {
    setRtiLoadingId(issue.id);
    try {
      const contact = getContact(issue.city, issue.issueType);
      const res = await fetch('/api/generate-rti', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          issueType: issue.issueType,
          wardName: issue.wardName,
          city: issue.city,
          address: issue.address,
          coordinates: issue.coordinates,
          reportedAt: issue.reportedAt,
          slaDeadline: issue.slaDeadline,
          department: contact.department,
          description: issue.description,
          severity: issue.severity,
          reporterName: issue.reporterName || "Concerned Citizen",
          issueId: issue.id
        })
      });
      const json = await res.json();
      if (json.success && json.rti) {
        const element = document.createElement("a");
        const file = new Blob([json.rti], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = `RTI_${issue.wardName.replace(/\s+/g, '_')}_${issue.id}.txt`;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);

        // Increment RTI count in store
        useCivicStore.getState().incrementRtiFiled();
      } else {
        alert("Failed to generate RTI: " + (json.error || "unknown error"));
      }
    } catch (e) {
      console.error(e);
      alert("Network error.");
    } finally {
      setRtiLoadingId(null);
    }
  };

  // Complaint letter re-generation
  const handleGenerateComplaintForMyComplaint = async (issue: any) => {
    setComplaintLoadingId(issue.id);
    try {
      const contact = getContact(issue.city, issue.issueType);
      const res = await fetch('/api/generate-complaint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          issue: {
            issueType: issue.issueType,
            severity: issue.severity,
            responsibleDepartment: contact.department,
            description: issue.description,
            estimatedSLADays: 7
          },
          wardName: issue.wardName,
          city: issue.city,
          reporterName: issue.reporterName || 'Concerned Citizen'
        })
      });
      const json = await res.json();
      if (json.success && json.complaint) {
        const element = document.createElement("a");
        const file = new Blob([json.complaint], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = `complaint_letter_${issue.city.replace(/\s+/g, '_')}_${issue.id}.txt`;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      } else {
        alert("Failed to generate complaint letter.");
      }
    } catch (e) {
      console.error(e);
      alert("Network error.");
    } finally {
      setComplaintLoadingId(null);
    }
  };

  // Filtered issues based on selected city
  const cityFilteredIssues = useMemo(() => {
    return issues.filter(iss => {
      const isBangalore = iss.wardId !== 'ward-none-mumbai' && iss.wardId !== 'ward-none-delhi';
      const issCity = isBangalore ? 'Bangalore' : iss.wardId === 'ward-none-mumbai' ? 'Mumbai' : 'Delhi';
      return issCity.toLowerCase() === selectedCity.toLowerCase();
    });
  }, [issues, selectedCity]);

  // Top Stat Cards calculation
  const totalCount = cityFilteredIssues.length;
  const resolvedCount = cityFilteredIssues.filter(i => i.status === 'resolved').length;
  const breachedCount = cityFilteredIssues.filter(i => i.status !== 'resolved' && getSlaDays(i.createdAt) > 7).length;
  const breachPercentage = totalCount > 0 ? Math.round((breachedCount / totalCount) * 100) : 0;

  const activeWards = useMemo(() => {
    const uniqueWards = new Set(cityFilteredIssues.map(i => i.wardId));
    uniqueWards.delete('ward-none');
    return uniqueWards.size;
  }, [cityFilteredIssues]);

  // Donut chart data calculations
  const donutChartData = useMemo(() => {
    const categoryCounts: Record<string, number> = { Roads: 0, Streetlights: 0, Water: 0, Garbage: 0, Drainage: 0 };
    cityFilteredIssues.forEach(i => {
      if (categoryCounts[i.category] !== undefined) {
        categoryCounts[i.category]++;
      } else {
        categoryCounts['Roads']++;
      }
    });

    return Object.keys(categoryCounts).map(cat => ({
      name: CATEGORY_LABEL_MAPPING[cat] || cat,
      value: categoryCounts[cat],
      color: CATEGORY_COLORS[cat] || '#8b5cf6'
    })).filter(item => item.value > 0);
  }, [cityFilteredIssues]);

  // Ward performance index ranks
  const sortedWards = useMemo(() => {
    const cityWards = WARDS.filter(w => w.city === selectedCity || (!w.city && selectedCity === 'Bangalore'));
    return [...cityWards].sort((a, b) => a.civicScore - b.civicScore);
  }, [selectedCity]);

  // Sort and Filter Live Complaints Table
  const tableFilteredIssues = useMemo(() => {
    let result = [...cityFilteredIssues];
    
    if (tableFilter === 'OPEN') {
      result = result.filter(i => i.status === 'open');
    } else if (tableFilter === 'IN_PROGRESS') {
      result = result.filter(i => i.status === 'in-progress');
    } else if (tableFilter === 'RESOLVED') {
      result = result.filter(i => i.status === 'resolved');
    }

    result.sort((a, b) => {
      let valA: any = a[sortField as keyof typeof a];
      let valB: any = b[sortField as keyof typeof b];

      if (sortField === 'days') {
        valA = getSlaDays(a.createdAt);
        valB = getSlaDays(b.createdAt);
      } else if (sortField === 'sla') {
        const isA = a.status !== 'resolved' && getSlaDays(a.createdAt) > 7;
        const isB = b.status !== 'resolved' && getSlaDays(b.createdAt) > 7;
        valA = isA ? 1 : 0;
        valB = isB ? 1 : 0;
      }

      if (valA < valB) return sortAsc ? -1 : 1;
      if (valA > valB) return sortAsc ? 1 : -1;
      return 0;
    });

    return result;
  }, [cityFilteredIssues, tableFilter, sortField, sortAsc]);

  const toggleSort = (field: string) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  // Generate Live Insights
  const handleGenerateInsights = async () => {
    setInsightsLoading(true);
    setInsightsResult(null);
    try {
      const topCats = donutChartData.map(d => `${d.name} (${d.value})`).join(', ');
      const res = await fetch('/api/insights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          wardName: `${selectedCity} Metropolitan`,
          civicScore: Math.round(WARDS.filter(w => w.city === selectedCity || (!w.city && selectedCity === 'Bangalore')).reduce((acc, curr) => acc + curr.civicScore, 0) / Math.max(1, activeWards)),
          totalIssues: totalCount,
          resolvedIssues: resolvedCount,
          slaBreaches: breachedCount,
          topCategories: topCats || 'Roads, Garbage'
        })
      });
      const json = await res.json();
      if (json.success) {
        setInsightsResult(json.data);
      } else {
        alert("Gleaning insights failed: " + (json.error || "unknown error"));
      }
    } catch (e) {
      console.error(e);
      alert("Error checking live intelligence report.");
    } finally {
      setInsightsLoading(false);
    }
  };

  const getScoreColorClass = (score: number) => {
    if (score <= 40) return 'bg-[#f43f5e]';
    if (score <= 70) return 'bg-[#f59e0b]';
    return 'bg-[#10b981]';
  };

  const getScoreTextClass = (score: number) => {
    if (score <= 40) return 'text-[#f43f5e]';
    if (score <= 70) return 'text-[#f59e0b]';
    return 'text-[#10b981]';
  };

  const userHighestBadge = userStats.badges && userStats.badges.length > 0 
    ? userStats.badges[userStats.badges.length - 1] 
    : 'CITIZEN';

  const mockContributors = [
    { rank: 1, name: `You (${userHighestBadge})`, badge: userHighestBadge, score: userStats.civicHeroScore, isSelf: true },
    { rank: 2, name: 'Ananya Sharma', badge: 'WARD GUARDIAN', score: 320, isSelf: false },
    { rank: 3, name: 'Vikram Gowda', badge: 'RTI WARRIOR', score: 280, isSelf: false },
    { rank: 4, name: 'Sanjay Kumar', badge: 'CIVIC STARTER', score: 190, isSelf: false },
    { rank: 5, name: 'Priya Iyer', badge: 'CITIZEN', score: 90, isSelf: false }
  ].sort((a, b) => b.score - a.score).map((c, i) => ({ ...c, rank: i + 1 }));

  return (
    <div className="flex-1 flex flex-col h-full bg-[#06060c] text-white p-6 overflow-y-auto font-mono text-xs civic-atlas-surface">
      
      {/* HEADER ROW */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#1e2d4a]/40 pb-4 gap-4 mb-6">
        <div>
          <div className="text-[10px] tracking-widest text-[#64748b] font-bold uppercase">CIVIC INTELLIGENCE DASHBOARD</div>
          <h2 className="text-white text-lg font-bold mt-1 tracking-tight">Metropolitan Performance Index</h2>
        </div>

        {/* Dashboard Sub-navigation Tabs */}
        <div className="flex gap-1.5 bg-[#0a0f1b] border border-[#1e2d4a]/40 p-1 rounded">
          {(['CITY_OVERVIEW', 'MY_COMPLAINTS', 'LEADERBOARD'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setSubTab(tab)}
              className={`px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-wider transition duration-150 cursor-pointer ${
                subTab === tab
                  ? 'bg-[#FF6B35] text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* ────────────────── SUB-TAB: CITY OVERVIEW ────────────────── */}
      {subTab === 'CITY_OVERVIEW' && (
        <div className="flex flex-col animate-fadeIn">
          {/* City selector row */}
          <div className="flex justify-end mb-4">
            <div className="relative">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="appearance-none bg-[#0a0f1b] border border-[#1e2d4a] text-white rounded px-4 py-2 pr-8 cursor-pointer hover:bg-white/5 transition-colors focus:outline-none focus:border-[#FF6B35]/50"
              >
                <option value="Bangalore" className="bg-[#0A0F2E]">Bangalore (Metropolitan Grid)</option>
                <option value="Mumbai" className="bg-[#0A0F2E]">Mumbai</option>
                <option value="Delhi" className="bg-[#0A0F2E]">Delhi</option>
                <option value="Chennai" className="bg-[#0A0F2E]">Chennai</option>
                <option value="Hyderabad" className="bg-[#0A0F2E]">Hyderabad</option>
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#0a0f1b] border border-[#1e2d4a] p-4 rounded flex flex-col justify-between h-24">
              <div className="text-slate-500 font-bold uppercase tracking-wider text-[9px] flex items-center gap-1.5"><BarChart3 size={11} /> Total Issues</div>
              <div className="text-white text-2xl font-bold font-mono tracking-tight mt-1">{totalCount}</div>
              <div className="text-[9px] text-[#3b82f6] font-bold uppercase mt-1">Aggregated feeds</div>
            </div>

            <div className="bg-[#0a0f1b] border border-[#1e2d4a] p-4 rounded flex flex-col justify-between h-24">
              <div className="text-slate-500 font-bold uppercase tracking-wider text-[9px] flex items-center gap-1.5"><CheckCircle size={11} className="text-emerald-400" /> Resolved</div>
              <div className="text-emerald-400 text-2xl font-bold font-mono tracking-tight mt-1">{resolvedCount}</div>
              <div className="text-[9px] text-[#10b981] font-bold uppercase mt-1">Success verification rate</div>
            </div>

            <div className="bg-[#0a0f1b] border border-[#1e2d4a] p-4 rounded flex flex-col justify-between h-24">
              <div className="text-slate-500 font-bold uppercase tracking-wider text-[9px] flex items-center gap-1.5"><AlertTriangle size={11} className="text-rose-400" /> SLA Breach %</div>
              <div className="text-rose-500 text-2xl font-bold font-mono tracking-tight mt-1">{breachPercentage}%</div>
              <div className="text-[9px] text-[#f43f5e] font-bold uppercase mt-1">{breachedCount} Issues exceeding 7 days</div>
            </div>

            <div className="bg-[#0a0f1b] border border-[#1e2d4a] p-4 rounded flex flex-col justify-between h-24">
              <div className="text-slate-500 font-bold uppercase tracking-wider text-[9px] flex items-center gap-1.5"><Users size={11} className="text-indigo-400" /> Active Wards</div>
              <div className="text-indigo-400 text-2xl font-bold font-mono tracking-tight mt-1">{activeWards}</div>
              <div className="text-[9px] text-[#8b5cf6] font-bold uppercase mt-1">Monitored sectors</div>
            </div>
          </div>

          {/* Ward leader & breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            <div className="lg:col-span-7 bg-[#0a0f1b] border border-[#1e2d4a] p-5 rounded flex flex-col">
              <h3 className="text-slate-400 font-bold uppercase text-[10px] tracking-wider mb-4">Ward Performance Index</h3>
              <div className="flex flex-col gap-3 flex-1 overflow-y-auto max-h-[300px] pr-1">
                {sortedWards.length === 0 ? (
                  <div className="text-slate-500 text-center italic py-12">No wards active for this city grid.</div>
                ) : (
                  sortedWards.map((w, index) => (
                    <div 
                      key={w.wardId} 
                      onClick={() => onNavigateToMap(w.wardId)}
                      className="flex items-center justify-between gap-4 p-2.5 rounded bg-white/2 hover:bg-white/5 border border-white/5 cursor-pointer transition select-none"
                      title="Click to view ward details on map"
                    >
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <span className="text-slate-500 font-bold w-4">#{index + 1}</span>
                        <div className="truncate text-white font-medium">{w.name} <span className="text-[9px] text-slate-500">W-{w.wardNumber}</span></div>
                      </div>
                      <div className="flex items-center gap-3 w-36 sm:w-48">
                        <div className="h-1.5 flex-1 bg-slate-800 rounded-full overflow-hidden">
                          <div className={`h-full ${getScoreColorClass(w.civicScore)}`} style={{ width: `${w.civicScore}%` }} />
                        </div>
                        <span className={`w-8 text-right font-bold ${getScoreTextClass(w.civicScore)}`}>{w.civicScore}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0a0f1b] border border-[#1e2d4a] p-5 rounded flex flex-col h-[360px]">
              <h3 className="text-slate-400 font-bold uppercase text-[10px] tracking-wider mb-2">Issue Categories Distribution</h3>
              <div className="flex-1 min-h-0 flex items-center justify-center relative">
                {donutChartData.length === 0 ? (
                  <div className="text-slate-500 text-center italic">No data entries available.</div>
                ) : (
                  <ResponsiveContainer width="100%" height={220}>
                    <PieChart>
                      <Pie
                        data={donutChartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={75}
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {donutChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </div>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-[9px] border-t border-[#1e2d4a]/20 pt-3">
                {donutChartData.map((item, index) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: item.color }} />
                    <span className="text-slate-400">{item.name} ({item.value})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gemini Insights */}
          <div className="bg-[#0a0f1b] border-l-4 border-[#3b82f6] border-y border-r border-[#1e2d4a] p-5 rounded-r-lg mb-8">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h3 className="text-white text-sm font-bold flex items-center gap-2"><Sparkles size={14} className="text-[#3b82f6]" /> City Intelligence Report</h3>
                <p className="text-slate-400 text-xs mt-0.5">Let Gemini analyze metropolitan datasets to identify failures and SLA risks.</p>
              </div>
              <button
                onClick={handleGenerateInsights}
                disabled={insightsLoading}
                className="bg-[#3b82f6] hover:bg-[#2563eb] disabled:bg-[#1e2d4a]/50 text-white font-mono text-[10px] uppercase font-bold tracking-wider py-2 px-4 rounded-sm flex items-center gap-1.5 cursor-pointer active:scale-95 transition"
              >
                {insightsLoading ? <Loader2 size={11} className="animate-spin" /> : null}
                {insightsLoading ? 'Analyzing dataset...' : 'GENERATE LIVE INSIGHTS →'}
              </button>
            </div>

            {insightsLoading && (
              <div className="mt-4 py-8 border border-dashed border-[#1e2d4a] rounded flex flex-col items-center justify-center gap-2.5">
                <Loader2 className="animate-spin text-[#3b82f6]" size={18} />
                <span className="text-slate-400 animate-pulse font-mono">Gemini analyzing {totalCount} data points...</span>
              </div>
            )}

            {insightsResult && (
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fadeIn">
                <div className="bg-[#0f1629]/40 border border-[#1e2d4a]/40 p-4 rounded md:col-span-2">
                  <div className="text-[9px] font-bold text-[#3b82f6] uppercase tracking-wider">Metropolitan Performance Summary</div>
                  <p className="text-slate-200 mt-1.5 leading-relaxed font-mono">{insightsResult.summary}</p>
                </div>

                <div className="bg-[#0f1629]/40 border border-[#1e2d4a]/40 p-4 rounded">
                  <div className="text-[9px] font-bold text-[#3b82f6] uppercase tracking-wider flex items-center justify-between">
                    <span>30D Predictive Risk</span>
                    <span className={`px-1.5 py-0.5 border rounded uppercase text-[8px] font-bold tracking-wide ${
                      insightsResult.riskLevel === 'critical' || insightsResult.riskLevel === 'high' 
                        ? 'text-rose-400 bg-rose-500/10 border-rose-500/20' 
                        : 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                    }`}>
                      {insightsResult.riskLevel}
                    </span>
                  </div>
                  <p className="text-slate-300 mt-1.5 font-mono leading-relaxed text-[11px]">{insightsResult.prediction}</p>
                  <div className="text-slate-500 text-[8px] mt-2 font-mono uppercase tracking-wider">Estimated Impact: {insightsResult.estimatedImpact} citizens</div>
                </div>

                <div className="bg-[#0f1629]/40 border border-[#1e2d4a]/40 p-4 rounded flex flex-col justify-between">
                  <div>
                    <div className="text-[9px] font-bold text-[#3b82f6] uppercase tracking-wider">Priority Executive Action</div>
                    <p className="text-slate-300 mt-1.5 font-mono leading-relaxed text-[11px]">{insightsResult.priorityAction}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#1e2d4a]/20 pt-2 text-[9px] font-mono mt-3">
                    <span className="text-slate-500 uppercase tracking-wide">INDEX TREND</span>
                    <span className={`font-bold uppercase tracking-wider ${
                      insightsResult.trend === 'declining' ? 'text-rose-400' : insightsResult.trend === 'improving' ? 'text-emerald-400' : 'text-amber-400'
                    }`}>
                      {insightsResult.trend}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tracker Table */}
          <div className="bg-[#0a0f1b] border border-[#1e2d4a] p-5 rounded flex flex-col">
            <div className="flex justify-between items-center border-b border-[#1e2d4a]/30 pb-3 mb-4 flex-wrap gap-2">
              <h3 className="text-slate-400 font-bold uppercase text-[10px] tracking-wider font-mono">Live Complaint Tracker</h3>
              <div className="flex gap-1">
                {(['ALL', 'OPEN', 'IN_PROGRESS', 'RESOLVED'] as const).map(pill => (
                  <button
                    key={pill}
                    onClick={() => setTableFilter(pill)}
                    className={`px-2 py-1 rounded text-[8px] font-bold font-mono tracking-wider transition cursor-pointer ${
                      tableFilter === pill 
                        ? 'bg-[#FF6B35] text-white' 
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {pill.replace('_', ' ')}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto overflow-y-auto max-h-[300px]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#1e2d4a] text-[#64748b] text-[9px] font-bold uppercase tracking-wider font-mono select-none">
                    <th onClick={() => toggleSort('id')} className="py-2 px-3 cursor-pointer hover:text-white transition">ID <ArrowUpDown size={8} className="inline-block ml-0.5" /></th>
                    <th onClick={() => toggleSort('category')} className="py-2 px-3 cursor-pointer hover:text-white transition">Category <ArrowUpDown size={8} className="inline-block ml-0.5" /></th>
                    <th onClick={() => toggleSort('wardId')} className="py-2 px-3 cursor-pointer hover:text-white transition">Ward <ArrowUpDown size={8} className="inline-block ml-0.5" /></th>
                    <th onClick={() => toggleSort('status')} className="py-2 px-3 cursor-pointer hover:text-white transition">Status <ArrowUpDown size={8} className="inline-block ml-0.5" /></th>
                    <th onClick={() => toggleSort('days')} className="py-2 px-3 cursor-pointer hover:text-white transition">Days <ArrowUpDown size={8} className="inline-block ml-0.5" /></th>
                    <th onClick={() => toggleSort('sla')} className="py-2 px-3 cursor-pointer hover:text-white transition">SLA <ArrowUpDown size={8} className="inline-block ml-0.5" /></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e2d4a]/20">
                  {tableFilteredIssues.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-slate-500 text-center py-12 italic font-mono">No matching issues recorded.</td>
                    </tr>
                  ) : (
                    tableFilteredIssues.map((issue) => {
                      const days = getSlaDays(issue.createdAt);
                      const isSlaBreached = issue.status !== 'resolved' && days > 7;
                      const ward = WARDS.find(w => w.wardId === issue.wardId);
                      
                      return (
                        <tr 
                          key={issue.id}
                          onClick={() => onNavigateToMap(issue.wardId)}
                          className={`hover:bg-white/2 cursor-pointer transition-colors text-[10px] ${
                            issue.status === 'resolved' 
                              ? 'bg-[#10b981]/2' 
                              : isSlaBreached 
                              ? 'bg-[#f43f5e]/4 border-l border-[#f43f5e]' 
                              : ''
                          }`}
                          title="Click to view on map"
                        >
                          <td className="py-2 px-3 font-semibold text-slate-400 font-mono">{issue.id}</td>
                          <td className="py-2 px-3 text-white font-medium font-mono">{issue.category}</td>
                          <td className="py-2 px-3 text-slate-300 truncate max-w-[100px] font-mono">{ward?.name || 'Central Grid'}</td>
                          <td className="py-2 px-3 font-mono">
                            <span className={`px-1.5 py-0.5 rounded font-bold text-[8px] border font-mono ${
                              issue.status === 'open' 
                                ? 'text-rose-400 bg-rose-500/5 border-rose-500/10'
                                : issue.status === 'in-progress'
                                ? 'text-amber-400 bg-amber-500/5 border-amber-500/10'
                                : 'text-emerald-400 bg-emerald-500/5 border-emerald-500/10'
                            }`}>
                              {issue.status === 'in-progress' ? 'IN PROGRESS' : issue.status.toUpperCase()}
                            </span>
                          </td>
                          <td className="py-2 px-3 font-semibold font-mono text-slate-400">{days}d</td>
                          <td className="py-2 px-3 font-mono">
                            {issue.status === 'resolved' ? (
                              <span className="text-[#10b981] font-bold">OK</span>
                            ) : isSlaBreached ? (
                              <span className="text-[#f43f5e] font-bold">BREACH (+{days - 7}d)</span>
                            ) : (
                              <span className="text-slate-500">OK</span>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ────────────────── SUB-TAB: MY COMPLAINTS ────────────────── */}
      {subTab === 'MY_COMPLAINTS' && (
        <div className="flex flex-col animate-fadeIn">
          {myIssues.length === 0 ? (
            <div className="border border-dashed border-[#1e2d4a] rounded-lg p-16 flex flex-col items-center justify-center text-center gap-4">
              <div className="text-5xl text-slate-700">📋</div>
              <div className="text-slate-300 font-bold text-sm tracking-wide">No complaints filed yet.</div>
              <button
                onClick={() => router.push('/?tab=complaints')}
                className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-mono text-xs uppercase font-bold py-2 px-6 rounded-sm transition cursor-pointer"
              >
                Report your first issue →
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {myIssues.map((issue) => {
                const days = getSlaDays(issue.createdAt);
                const isSlaBreached = issue.status !== 'resolved' && days > 7;
                const emoji = CATEGORY_EMOJIS_MAP[issue.category] || '⚠️';
                const statusBorderClass = getCardBorderClass(issue, days);
                const statusText = issue.status === 'resolved' ? 'RESOLVED' : issue.status === 'in-progress' ? 'IN PROGRESS' : 'OPEN';
                const statusColor = issue.status === 'resolved' ? 'text-emerald-400' : issue.status === 'in-progress' ? 'text-amber-400' : 'text-rose-400';

                return (
                  <div 
                    key={issue.id} 
                    className={`bg-[#0a0f1b] border-2 ${statusBorderClass} rounded p-5 flex flex-col justify-between gap-4 font-mono`}
                  >
                    {/* Header */}
                    <div className="flex justify-between items-start border-b border-[#1e2d4a]/30 pb-2">
                      <span className="font-bold text-[#64748b] text-[10px]">{issue.id}</span>
                      <span className={`font-bold text-[9px] flex items-center gap-1.5 uppercase ${statusColor}`}>
                        {issue.status === 'resolved' ? '🟢' : issue.status === 'in-progress' ? '🟡' : '🔴'} {statusText}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="text-white font-bold text-sm flex items-center gap-1.5">
                        <span>{emoji}</span> {issue.issueType?.toUpperCase()} <span className="text-[10px] text-slate-500 font-normal">— {issue.address}</span>
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed mt-2 line-clamp-2 h-8" title={issue.description}>
                        {issue.description}
                      </p>
                    </div>

                    {/* Meta SLA Info */}
                    <div className="flex flex-col gap-1.5">
                      <div className="text-slate-500 text-[10px]">Reported: {days} days ago ({issue.reportedAt})</div>
                      {getSlaProgressBar(days, issue.status === 'resolved')}
                      <div className="text-slate-400 text-[10px] mt-0.5">Department: <span className="text-slate-200 font-bold">{issue.department}</span></div>
                    </div>

                    {/* Timeline */}
                    <div className="flex justify-between items-center border-t border-[#1e2d4a]/20 pt-3 mt-1 text-[9px] text-center select-none">
                      <div className="flex flex-col items-center">
                        <span className="text-emerald-400 font-bold">● Reported</span>
                        <span className="text-slate-500 text-[8px] mt-0.5">{issue.reportedAt}</span>
                      </div>
                      <div className="w-6 h-[1px] bg-slate-850" />
                      <div className="flex flex-col items-center">
                        <span className={issue.status !== 'open' ? 'text-amber-400 font-bold' : 'text-slate-650'}>
                          {issue.status !== 'open' ? '● Under Review' : '○ Under Review'}
                        </span>
                        <span className="text-slate-500 text-[8px] mt-0.5">—</span>
                      </div>
                      <div className="w-6 h-[1px] bg-slate-850" />
                      <div className="flex flex-col items-center">
                        <span className={issue.status === 'resolved' ? 'text-emerald-400 font-bold' : 'text-slate-700'}>
                          {issue.status === 'resolved' ? '● Resolved' : '○ Resolved'}
                        </span>
                        <span className="text-slate-500 text-[8px] mt-0.5">—</span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2 border-t border-[#1e2d4a]/30 pt-3 mt-1 select-none">
                      {isSlaBreached && (
                        <button
                          onClick={() => handleGenerateRtiForMyComplaint(issue)}
                          disabled={rtiLoadingId !== null}
                          className="flex-1 bg-[#f43f5e] hover:bg-[#e11d48] disabled:bg-[#f43f5e]/50 text-white text-[9px] uppercase font-bold py-1.5 px-2 rounded-sm transition cursor-pointer text-center"
                        >
                          {rtiLoadingId === issue.id ? 'Drafting...' : '📄 RTI READY'}
                        </button>
                      )}
                      
                      <button
                        onClick={() => handleGenerateComplaintForMyComplaint(issue)}
                        disabled={complaintLoadingId !== null}
                        className="flex-1 bg-[#3b82f6] hover:bg-[#2563eb] disabled:bg-[#3b82f6]/50 text-white text-[9px] uppercase font-bold py-1.5 px-2 rounded-sm transition cursor-pointer text-center"
                      >
                        {complaintLoadingId === issue.id ? 'Loading...' : '📋 Complaint'}
                      </button>

                      <button
                        onClick={() => handleDeleteMyComplaint(issue.id)}
                        className="bg-slate-900 border border-slate-800 hover:border-rose-500 hover:text-rose-500 text-slate-500 p-1.5 rounded-sm transition cursor-pointer flex items-center justify-center"
                        title="Delete complaint from your records"
                      >
                        <Trash2 size={11} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ────────────────── SUB-TAB: LEADERBOARD ────────────────── */}
      {subTab === 'LEADERBOARD' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn">
          {/* Top contributor stats */}
          <div className="lg:col-span-8 bg-[#0a0f1b] border border-[#1e2d4a] p-6 rounded flex flex-col gap-4">
            <h3 className="text-slate-400 font-bold uppercase text-[10px] tracking-wider mb-2">Metropolitan Leaderboard Standing</h3>
            <div className="flex flex-col gap-3">
              {mockContributors.map((c) => (
                <div 
                  key={c.name}
                  className={`flex items-center justify-between p-3.5 rounded border-2 transition-all ${
                    c.isSelf 
                      ? 'bg-amber-950/10 border-amber-500/30' 
                      : 'bg-[#0f1629]/30 border-[#1e2d4a]/20'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className={`font-bold font-mono text-sm w-5 ${c.isSelf ? 'text-amber-400' : 'text-slate-500'}`}>#{c.rank}</span>
                    <div className="truncate text-white font-semibold text-xs">{c.name}</div>
                  </div>
                  <div className="flex items-center gap-2.5 flex-shrink-0 font-mono">
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded uppercase font-bold tracking-wider bg-slate-900 border border-slate-800 text-slate-400">
                      {c.badge}
                    </span>
                    <span className="font-extrabold text-white text-xs">{c.score} XP</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gamification stats box */}
          <div className="lg:col-span-4 bg-[#0a0f1b] border border-[#1e2d4a] p-5 rounded flex flex-col justify-between h-[300px]">
            <div>
              <h3 className="text-slate-400 font-bold uppercase text-[10px] tracking-wider flex items-center gap-1.5"><Award size={13} className="text-amber-400" /> Civic standing details</h3>
              <p className="text-slate-400 text-[11px] mt-2 leading-relaxed font-mono">Unlock advanced badges by filing complaints, tracking resolutions, and verified upvoting.</p>
            </div>
            
            <div className="border-t border-[#1e2d4a]/40 pt-4 flex flex-col gap-3 font-mono text-[10px]">
              <div className="flex justify-between">
                <span className="text-slate-500">Reports Submitted:</span>
                <span className="text-white font-bold">{userStats.reportsSubmitted}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">RTIs Filed:</span>
                <span className="text-white font-bold">{userStats.rtiFiled}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Issues Verified:</span>
                <span className="text-white font-bold">{userStats.issuesVerified}</span>
              </div>
              <div className="flex justify-between border-t border-[#1e2d4a]/20 pt-2 text-[11px] font-bold">
                <span className="text-amber-400">Total Score:</span>
                <span className="text-white">{userStats.civicHeroScore} XP</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
