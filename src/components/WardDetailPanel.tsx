import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Sparkles, AlertTriangle, ExternalLink, Loader2 } from 'lucide-react';
import { Issue } from '@/data/issues-seed';
import { Ward } from '@/data/ward-seed';
import { POLITICIANS } from '@/data/politicians';
import { useCivicStore } from '@/store/civicStore';
import { getContact } from '@/data/department-contacts';

interface WardDetailPanelProps {
  ward: Ward | null;
  issues: Issue[];
  onClose: () => void;
  onViewAllIssues: () => void;
}

const GEMINI_INSIGHTS: Record<string, string> = {
  "ward-186": "Waterlogging risk in 14 days. 23 drainage complaints clustered near Koramangala 4th Block indicate monsoon drainage failure.",
  "ward-110": "Road infrastructure critically stressed. 18 pothole reports in 30 days suggest subbase failure on Whitefield Main Road.",
  "ward-228": "Streetlight outages forming pattern along Electronic City Phase 1. BESCOM SLA breached 11 times this month.",
  "ward-70": "Hebbal flyover approach showing recurring water seepage. 3 complaints in same 200m stretch.",
  "ward-232": "HSR Layout Sector 2 garbage collection delayed 4+ days average. BBMP vehicle tracking shows route deviation.",
  "ward-120": "Indiranagar 100 Feet Road water main showing pressure drop reports. BWSSB inspection overdue by 12 days.",
  "ward-61": "Malleshwaram 8th Cross footpath encroachment blocking 60% pedestrian path. 3 RTI notices filed, no response.",
  "ward-128": "Shivajinagar bus stand approach road has 6 unresolved potholes causing traffic incidents daily.",
  "ward-198": "JP Nagar Phase 3 streetlights — 70% operational rate. Below BBMP standard of 95%.",
  "ward-196": "Jayanagar 4th Block park maintenance overdue. BBMP contractor not responding to 3 complaints."
};

const CATEGORY_EMOJIS: Record<string, string> = {
  'Roads': '🕳️',
  'Streetlights': '💡',
  'Water': '💧',
  'Garbage': '🗑️',
  'Drainage': '⛔'
};

export default function WardDetailPanel({ ward, issues, onClose, onViewAllIssues }: WardDetailPanelProps) {
  const [rtiLoadingId, setRtiLoadingId] = useState<string | null>(null);

  if (!ward) return null;

  const mla = POLITICIANS[ward.wardId];
  const wardIssues = issues.filter(i => i.wardId === ward.wardId);
  const totalCount = wardIssues.length;
  const resolvedCount = wardIssues.filter(i => i.status === 'resolved').length;
  const unresolvedCount = totalCount - resolvedCount;

  // Sort recent issues (last 5)
  const recentIssues = [...wardIssues]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  // Helper for score color
  const getScoreColor = (score: number) => {
    if (score <= 40) return '#f43f5e'; // red
    if (score <= 70) return '#f59e0b'; // yellow
    return '#10b981'; // green
  };

  const getScoreColorClass = (score: number) => {
    if (score <= 40) return 'text-[#f43f5e]';
    if (score <= 70) return 'text-[#f59e0b]';
    return 'text-[#10b981]';
  };

  const getScoreBgClass = (score: number) => {
    if (score <= 40) return 'bg-[#f43f5e]/10 border-[#f43f5e]/20 text-[#f43f5e]';
    if (score <= 70) return 'bg-[#f59e0b]/10 border-[#f59e0b]/20 text-[#f59e0b]';
    return 'bg-[#10b981]/10 border-[#10b981]/20 text-[#10b981]';
  };

  const getScoreProgressClass = (score: number) => {
    if (score <= 40) return 'bg-[#f43f5e]';
    if (score <= 70) return 'bg-[#f59e0b]';
    return 'bg-[#10b981]';
  };

  const getWardZone = (wardId: string) => {
    const zones: Record<string, string> = {
      'ward-186': 'South Zone',
      'ward-110': 'Mahadevapura Zone',
      'ward-228': 'Bommanahalli Zone',
      'ward-70': 'East Zone',
      'ward-232': 'Bommanahalli Zone',
      'ward-120': 'East Zone',
      'ward-61': 'West Zone',
      'ward-128': 'East Zone',
      'ward-198': 'South Zone',
      'ward-196': 'South Zone'
    };
    return zones[wardId] || 'South Zone';
  };

  const getSlaDays = (dateStr: string) => {
    const elapsedMs = new Date().getTime() - new Date(dateStr).getTime();
    return Math.floor(elapsedMs / (1000 * 60 * 60 * 24));
  };

  const breachedIssues = wardIssues.filter(i => i.status !== 'resolved' && getSlaDays(i.createdAt) > 7);
  const breachCount = breachedIssues.length;
  const mlaScore = Math.max(10, 100 - (breachCount * 12));

  const handleGenerateRtiForIssue = async (issue: Issue) => {
    setRtiLoadingId(issue.id);
    try {
      const resolvedCity = ward.city || 'Bangalore';
      const contact = getContact(resolvedCity, issue.category);
      const res = await fetch('/api/generate-rti', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          issueType: issue.category,
          wardName: ward.name,
          city: resolvedCity,
          address: issue.title,
          coordinates: issue.coordinates,
          reportedAt: issue.createdAt,
          slaDeadline: new Date(new Date(issue.createdAt).getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          department: contact.department,
          description: issue.description,
          severity: 4,
          reporterName: "Concerned Citizen",
          issueId: issue.id
        })
      });
      const json = await res.json();
      if (json.success && json.rti) {
        const element = document.createElement("a");
        const file = new Blob([json.rti], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = `RTI_${ward.name.replace(/\s+/g, '_')}_${issue.id}.txt`;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);

        // Increment RTI count in Zustand store to unlock badge
        useCivicStore.getState().incrementRtiFiled();
      } else {
        alert("Failed to generate RTI: " + (json.error || "unknown error"));
      }
    } catch (e) {
      console.error(e);
      alert("Network error occurred during RTI generation.");
    } finally {
      setRtiLoadingId(null);
    }
  };

  const scoreColor = getScoreColor(ward.civicScore);
  const badgeText = ward.civicScore <= 40 ? 'CRITICAL' : ward.civicScore <= 70 ? 'MODERATE' : 'EXCELLENT';
  const partyColor = mla?.party === 'INC' ? '#00873F' : '#FF9933';

  // Copy report action
  const handleCopyReport = () => {
    const reportText = `NAGARAI CIVIC REPORT
Ward: ${ward.name} (Ward ${ward.wardNumber})
Civic Score: ${ward.civicScore}/100
Responsible MLA: ${mla?.name} (${mla?.party})
Total Issues: ${totalCount} | Resolved: ${resolvedCount} | Unresolved: ${unresolvedCount}
AI Insight: ${GEMINI_INSIGHTS[ward.wardId] || 'None'}`;
    navigator.clipboard.writeText(reportText);
    alert('Report copied to clipboard!');
  };

  return (
    <motion.div
      initial={{ x: -420, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -420, opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed top-14 left-0 w-[420px] h-[calc(100vh-56px)] bg-[#0f1629] border-r border-[#1e2d4a] z-[450] overflow-y-auto flex flex-col pointer-events-auto scrollbar-thin scrollbar-thumb-[#1e2d4a] select-none font-mono text-xs text-[#f1f5f9] ward-detail-panel"
    >
      {/* HEADER DIVIDER ACCENT */}
      <div className="h-[2px] w-full flex-shrink-0" style={{ backgroundColor: scoreColor }} />

      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-1.5 border border-[#1e2d4a] text-slate-400 hover:text-white hover:bg-white/5 transition-all focus:outline-none rounded-none bg-[#0a0f1b]"
      >
        <X size={14} />
      </button>

      {/* RTI LOADING OVERLAY */}
      {rtiLoadingId && (
        <div className="absolute inset-0 bg-[#0a0f1b]/95 z-50 flex flex-col items-center justify-center font-mono text-xs text-[#f43f5e] gap-3">
          <Loader2 className="animate-spin text-[#f43f5e]" size={22} />
          <span className="font-bold tracking-wide animate-pulse">Drafting RTI under Section 6(1)...</span>
        </div>
      )}

      <div className="p-5 flex flex-col gap-6">

        {/* SLA BREACH WARNING BANNER */}
        {breachCount > 0 && (
          <div className="bg-[#f43f5e]/5 border border-[#f43f5e]/30 rounded-none p-3.5 flex items-start gap-3 text-xs text-[#f43f5e]">
            <AlertTriangle size={14} className="flex-shrink-0 mt-0.5" />
            <div className="font-mono">
              <div className="font-bold uppercase tracking-wider">⚠ {breachCount} SLA BREACHES DETECTED</div>
              <div className="text-[#64748b] mt-1 text-[10px] leading-relaxed">NagarAI has prepared legal RTI documents to audit these failures. Click "GENERATE RTI" on any breached issue.</div>
            </div>
          </div>
        )}
        
        {/* SECTION 1 — WARD HEADER */}
        <div>
          <div className="flex items-baseline gap-1.5 font-mono">
            <span className={`text-4xl font-extrabold tracking-tight ${getScoreColorClass(ward.civicScore)}`}>
              {ward.civicScore}
            </span>
            <span className="text-xs text-[#64748b]">/100</span>
          </div>
          <div className="mt-1 flex items-center">
            <span className={`text-[9px] font-bold px-2 py-0.5 border rounded-none font-mono tracking-wider ${getScoreBgClass(ward.civicScore)}`}>
              {badgeText}
            </span>
          </div>
          <h2 className="mt-3 text-white text-lg font-bold tracking-tight font-mono">{ward.name}</h2>
          <p className="text-slate-400 text-xs mt-0.5 tracking-wide font-mono">
            Ward {ward.wardNumber} · {getWardZone(ward.wardId)} · {ward.city || 'Bangalore'}
          </p>
        </div>

        {/* SECTION 2 — CIVIC METRICS (2x2 grid) */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-[#0a0f1b] border border-[#1e2d4a] rounded-none p-3 flex flex-col justify-between">
            <div className="text-[16px] font-extrabold text-white font-mono">{totalCount}</div>
            <div className="text-[9px] text-[#64748b] font-bold uppercase tracking-wider mt-1">Total Issues</div>
          </div>
          <div className="bg-[#0a0f1b] border border-[#1e2d4a] rounded-none p-3 flex flex-col justify-between">
            <div className="text-[16px] font-extrabold text-[#10b981] font-mono">{resolvedCount}</div>
            <div className="text-[9px] text-[#64748b] font-bold uppercase tracking-wider mt-1">Resolved</div>
          </div>
          <div className="bg-[#0a0f1b] border border-[#1e2d4a] rounded-none p-3 flex flex-col justify-between">
            <div className="text-[16px] font-extrabold text-[#f43f5e] font-mono">{unresolvedCount}</div>
            <div className="text-[9px] text-[#64748b] font-bold uppercase tracking-wider mt-1">Unresolved</div>
          </div>
          <div className="bg-[#0a0f1b] border border-[#1e2d4a] rounded-none p-3 flex flex-col justify-between">
            <div className="text-[16px] font-extrabold text-[#FF6B35] font-mono">8d avg</div>
            <div className="text-[9px] text-[#64748b] font-bold uppercase tracking-wider mt-1">Resolution</div>
          </div>
        </div>

        {/* SECTION 3 — POLITICIAN PROFILE */}
        {mla && (
          <div className="flex flex-col gap-2">
            <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Responsible Authority</h3>
            <div 
              className="bg-[#0a0f1b] border border-[#1e2d4a] rounded-none p-4 flex flex-col gap-3 relative overflow-hidden"
              style={{ borderLeft: `3px solid ${partyColor}` }}
            >
              <div className="politician-profile-head">
                <img
                  src={`https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(mla.name)}&backgroundColor=0f172a&fontFamily=Arial&fontSize=38`}
                  alt={`${mla.name} profile avatar`}
                  width={52}
                  height={52}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="politician-avatar"
                  style={{ borderColor: partyColor }}
                />
                <div className="flex items-center justify-between">
                  <h4 className="text-white text-sm font-bold tracking-tight">{mla.name}</h4>
                  <span 
                    className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded-none"
                    style={{ backgroundColor: `${partyColor}15`, color: partyColor, border: `1px solid ${partyColor}25` }}
                  >
                    {mla.party}
                  </span>
                </div>
                <p className="text-[#64748b] text-[10px] mt-0.5">MLA · {mla.constituency}</p>
              </div>

              <div className="flex gap-3 font-mono text-[9px] font-bold tracking-wide">
                <span className="text-[#f43f5e] bg-[#f43f5e]/5 px-2 py-0.5 rounded-none border border-[#f43f5e]/20">
                  {mla.criminalCases} CRIMINAL CASES
                </span>
                <span className="text-[#f59e0b] bg-[#f59e0b]/5 px-2 py-0.5 rounded-none border border-[#f59e0b]/20">
                  {mla.assets} ASSETS
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-[8px] font-bold text-[#64748b] tracking-wider">
                  <span>ACCOUNTABILITY INDEX</span>
                  <span className={getScoreColorClass(mla.accountabilityScore)}>{mla.accountabilityScore}/100</span>
                </div>
                <div className="h-1 w-full bg-[#121628] rounded-none overflow-hidden">
                  <div 
                    className={`h-full ${getScoreProgressClass(mla.accountabilityScore)}`} 
                    style={{ width: `${mla.accountabilityScore}%` }} 
                  />
                </div>
              </div>

              <a 
                href={mla.myNetaUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#FF6B35] text-[10px] underline flex items-center gap-1 hover:text-[#e0561f] transition-colors mt-0.5 font-medium select-none"
              >
                View on MyNeta.info <ExternalLink size={9} />
              </a>
            </div>
          </div>
        )}

        {/* SECTION 3.5 — ACCOUNTABILITY ALERT */}
        {mla && breachCount > 0 && (
          <div className="flex flex-col gap-2 bg-[#f43f5e]/5 border border-[#f43f5e]/20 rounded-none p-4 font-mono">
            <h4 className="text-[9px] font-bold uppercase text-[#f43f5e] tracking-widest flex items-center gap-1.5">
              🚨 ACCOUNTABILITY ALERT
            </h4>
            <div className="mt-2 text-[#f1f5f9] text-[10px] leading-relaxed">
              MLA <span className="text-white font-bold">{mla.name}</span> has <span className="text-[#f43f5e] font-bold">{breachCount} SLA breaches</span> active under their direct watch.
            </div>
            
            <div className="mt-3 flex items-center justify-between border-t border-[#f43f5e]/20 pt-2 text-[9px]">
              <span className="text-[#64748b] uppercase tracking-wide">PUBLIC ACCOUNTABILITY SCORE</span>
              <span className={getScoreColorClass(mlaScore)}>{mlaScore}/100</span>
            </div>
            
            <div className="h-1 w-full bg-[#121628] rounded-none mt-1.5 overflow-hidden">
              <div 
                className="h-full bg-[#f43f5e]" 
                style={{ width: `${mlaScore}%` }} 
              />
            </div>
          </div>
        )}

        {/* SECTION 4 — AI INSIGHT */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[#64748b] text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles size={10} className="text-[#FF6B35]" /> Gemini Insight
          </h3>
          <div className="bg-[#0a0f1b] border border-[#1e2d4a] rounded-none p-4 text-slate-350 text-[11px] leading-relaxed font-mono">
            {GEMINI_INSIGHTS[ward.wardId] || `${ward.name} is showing a cluster of issues around road quality and utility SLA breaches. Gemini vision analysis flags multiple recurring violations.`}
          </div>
        </div>

        {/* SECTION 5 — RECENT ISSUES */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Recent Complaints</h3>
            <button 
              onClick={onViewAllIssues}
              className="text-[#FF6B35] hover:text-[#e0561f] text-[10px] font-bold tracking-wide transition-colors font-mono"
            >
              View All →
            </button>
          </div>
          <div className="flex flex-col gap-2.5 font-mono">
            {recentIssues.length === 0 ? (
              <div className="text-slate-500 text-xs italic py-3 text-center">No complaints recorded for this ward.</div>
            ) : (
              recentIssues.map((issue) => {
                const days = getSlaDays(issue.createdAt);
                const isSlaBreached = issue.status !== 'resolved' && days > 7;
                return (
                  <div key={issue.id} className="flex flex-col gap-2 bg-[#0a0f1b] border border-[#1e2d4a] rounded-none p-3 text-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 min-w-0 flex-1 pr-3">
                        <span className="text-sm flex-shrink-0">{CATEGORY_EMOJIS[issue.category] || '📌'}</span>
                        <div className="min-w-0">
                          <div className="text-white truncate font-bold text-[11px] max-w-[200px]" title={issue.title}>
                            {issue.title}
                          </div>
                          {isSlaBreached && (
                            <div className="text-[#f43f5e] text-[8px] font-bold flex items-center gap-1 mt-0.5 tracking-wider">
                              <AlertTriangle size={8} /> SLA BREACHED (+{days - 7}d)
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 flex-shrink-0 font-mono text-[9px]">
                        <span className="text-[#64748b] font-bold">{days}d</span>
                        <span className={`px-2 py-0.5 rounded-none font-bold tracking-wider text-[8px] border ${
                          issue.status === 'open' 
                            ? 'text-rose-450 bg-rose-500/5 border-rose-500/20'
                            : issue.status === 'in-progress'
                            ? 'text-amber-450 bg-amber-500/5 border-amber-500/20'
                            : 'text-emerald-450 bg-emerald-500/5 border-emerald-500/20'
                        }`}>
                          {issue.status === 'in-progress' ? 'IN PROGRESS' : issue.status.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-[#1e2d4a]/20 pt-2 mt-1 select-none font-mono text-[8px]">
                      <span className="text-[#64748b]">👍 {issue.upvotes || 0} UPVOTES</span>
                      {(issue.upvotes || 0) > 10 && (
                        <span className="text-[#10b981] font-bold tracking-wider bg-[#10b981]/5 border border-[#10b981]/20 px-1.5 py-0.5 rounded-none">
                          ✓ PUBLIC VERIFIED
                        </span>
                      )}
                      {isSlaBreached && (
                        <button
                          onClick={() => handleGenerateRtiForIssue(issue)}
                          className="bg-[#f43f5e] hover:bg-[#e11d48] text-white font-mono text-[8px] font-bold uppercase py-0.5 px-2 rounded-none cursor-pointer select-none transition"
                        >
                          GENERATE RTI
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* SECTION 6 — ACTION BUTTONS */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[#64748b] text-[9px] font-bold uppercase tracking-widest">Actions</h3>
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={async () => {
                if (breachedIssues.length > 0) {
                  await handleGenerateRtiForIssue(breachedIssues[0]);
                } else {
                  alert("No breached issues found in this ward to generate RTI.");
                }
              }}
              className="bg-[#0a0f1b] border border-[#1e2d4a] hover:bg-white/2 hover:border-[#FF6B35] text-white rounded-none p-2.5 text-[9px] font-mono font-bold uppercase transition select-none flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
            >
              📄 Generate RTI
            </button>
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Tagging MLA ${mla?.name} regarding unresolved issues in ${ward.name} ward of Bangalore. #CivicAccountability #NagarAI`)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#0a0f1b] border border-[#1e2d4a] hover:bg-white/2 hover:border-[#FF6B35] text-white rounded-none p-2.5 text-[9px] font-mono font-bold uppercase transition select-none flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 text-center"
            >
              🐦 Post to X
            </a>
            <button 
              onClick={() => window.open(`mailto:mla.${mla?.name.toLowerCase().replace(/\s+/g, '')}@govt.in?subject=Civic Complaint - ${ward.name} Ward ${ward.wardNumber}&body=Dear MLA ${mla?.name},%0D%0A%0D%0AI am writing to highlight issues in ${ward.name} Ward.`)}
              className="bg-[#0a0f1b] border border-[#1e2d4a] hover:bg-white/2 hover:border-[#FF6B35] text-white rounded-none p-2.5 text-[9px] font-mono font-bold uppercase transition select-none flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
            >
              📧 Email MLA
            </button>
            <button 
              onClick={handleCopyReport}
              className="bg-[#0a0f1b] border border-[#1e2d4a] hover:bg-white/2 hover:border-[#FF6B35] text-white rounded-none p-2.5 text-[9px] font-mono font-bold uppercase transition select-none flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
            >
              📋 Copy Report
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
