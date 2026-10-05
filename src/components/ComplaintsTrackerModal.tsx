import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, AlertTriangle, ChevronDown, ThumbsUp } from 'lucide-react';
import { Issue } from '@/data/issues-seed';
import { Ward } from '@/data/ward-seed';

interface ComplaintsTrackerModalProps {
  isOpen: boolean;
  ward: Ward | null;
  issues: Issue[];
  onClose: () => void;
}

const CATEGORY_EMOJIS: Record<string, string> = {
  'Roads': '🕳️',
  'Streetlights': '💡',
  'Water': '💧',
  'Garbage': '🗑️',
  'Drainage': '⛔'
};

export default function ComplaintsTrackerModal({ isOpen, ward, issues, onClose }: ComplaintsTrackerModalProps) {
  const [statusFilter, setStatusFilter] = useState<'all' | 'open' | 'in-progress' | 'resolved'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'upvotes'>('newest');

  // ESC key press to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen || !ward) return null;

  const getScoreColor = (score: number) => {
    if (score <= 40) return '#f43f5e'; // red
    if (score <= 70) return '#f59e0b'; // yellow
    return '#10b981'; // green
  };

  const getScoreTextClass = (score: number) => {
    if (score <= 40) return 'text-[#f43f5e]';
    if (score <= 70) return 'text-[#f59e0b]';
    return 'text-[#10b981]';
  };

  const getScoreBgClass = (score: number) => {
    if (score <= 40) return 'bg-[#f43f5e]';
    if (score <= 70) return 'bg-[#f59e0b]';
    return 'bg-[#10b981]';
  };

  const scoreColor = getScoreColor(ward.civicScore);
  const wardIssues = issues.filter(i => i.wardId === ward.wardId);

  // Derive unique categories present
  const categories = ['ALL', ...Array.from(new Set(wardIssues.map(i => i.category.toUpperCase())))];

  // Map to calculate days elapsed
  const getDaysElapsed = (dateStr: string) => {
    const elapsedMs = new Date().getTime() - new Date(dateStr).getTime();
    return Math.floor(elapsedMs / (1000 * 60 * 60 * 24));
  };

  // Upvote counts mock mapping (seeded deterministic values based on ID)
  const getUpvoteCount = (id: string) => {
    const num = parseInt(id.replace(/\D/g, '')) || 0;
    return (num % 47) + 5;
  };

  // Filter issues
  const filteredIssues = wardIssues
    .filter(issue => {
      if (statusFilter !== 'all' && issue.status !== statusFilter) return false;
      if (categoryFilter !== 'ALL' && issue.category.toUpperCase() !== categoryFilter) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      if (sortBy === 'oldest') {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
      if (sortBy === 'upvotes') {
        return getUpvoteCount(b.id) - getUpvoteCount(a.id);
      }
      return 0;
    });

  return (
    <motion.div
      initial={{ y: '100vh', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100vh', opacity: 0 }}
      transition={{ type: "spring", damping: 30, stiffness: 180 }}
      className="fixed inset-0 w-full h-full bg-slate-950/98 backdrop-blur-xl z-[600] flex flex-col pointer-events-auto font-mono text-white overflow-hidden complaint-tracker-modal"
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all focus:outline-none z-50"
      >
        <X size={24} />
      </button>

      {/* HEADER CONTENT */}
      <div className="p-6 md:p-8 flex-shrink-0 border-b border-white/5 relative tactical-modal-header">
        <h1 className="text-2xl font-bold tracking-tight text-white">COMPLAINT TRACKER</h1>
        <p className="text-slate-400 text-xs mt-1">
          {ward.name} · Ward {ward.wardNumber}
        </p>

        {/* THIN ACCENT LINE */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ backgroundColor: scoreColor }} />
      </div>

      {/* FILTER BAR */}
      <div className="px-6 md:px-8 py-4 bg-slate-900/10 border-b border-white/5 flex flex-wrap gap-4 items-center justify-between flex-shrink-0 tactical-filter-bar">
        {/* Status Tabs */}
        <div className="flex bg-slate-900/40 p-1 border border-slate-800 rounded-lg">
          {(['all', 'open', 'in-progress', 'resolved'] as const).map(status => {
            const isActive = statusFilter === status;
            return (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className="px-3 py-1.5 rounded text-[10px] font-bold uppercase transition-all tracking-wider"
                style={isActive ? { backgroundColor: scoreColor, color: '#fff' } : { color: '#94a3b8' }}
              >
                {status === 'in-progress' ? 'IN PROGRESS' : status}
              </button>
            );
          })}
        </div>

        {/* Filters Selectors */}
        <div className="flex gap-3 text-[10px]">
          {/* Category Dropdown */}
          <div className="relative">
            <select
              value={categoryFilter}
              onChange={e => setCategoryFilter(e.target.value)}
              className="appearance-none bg-slate-900/50 border border-slate-800 hover:border-slate-700 text-slate-300 font-bold px-3 py-2 pr-8 rounded-lg cursor-pointer focus:outline-none focus:border-slate-600"
            >
              {categories.map(cat => (
                <option key={cat} value={cat} className="bg-slate-950">{cat === 'ALL' ? 'ALL CATEGORIES' : cat}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="appearance-none bg-slate-900/50 border border-slate-800 hover:border-slate-700 text-slate-300 font-bold px-3 py-2 pr-8 rounded-lg cursor-pointer focus:outline-none focus:border-slate-600"
            >
              <option value="newest" className="bg-slate-950">SORT: NEWEST</option>
              <option value="oldest" className="bg-slate-950">SORT: OLDEST</option>
              <option value="upvotes" className="bg-slate-950">SORT: UPVOTES</option>
            </select>
            <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* COMPLAINTS GRID (SCROLLABLE) */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-950/20 scrollbar-thin scrollbar-thumb-slate-800 tactical-complaint-grid">
        {filteredIssues.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-500">
            <div className="text-3xl mb-2">🔍</div>
            <p className="text-sm">No matching complaints found in this ward.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredIssues.map(issue => {
              const days = getDaysElapsed(issue.createdAt);
              const isSlaBreached = issue.status !== 'resolved' && days > 7;
              const upvotes = getUpvoteCount(issue.id);

              return (
                <div 
                  key={issue.id} 
                  className="bg-slate-900/25 border border-slate-850 hover:border-slate-800 rounded-lg p-5 flex flex-col justify-between gap-4 transition-all tactical-complaint-card"
                >
                  <div className="flex flex-col gap-2">
                    {/* Header */}
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <span className="flex items-center gap-1 text-slate-300">
                        <span>{CATEGORY_EMOJIS[issue.category] || '📌'}</span>
                        <span>{issue.category.toUpperCase()}</span>
                      </span>
                      {isSlaBreached && (
                        <span className="text-rose-400 bg-rose-500/5 px-2 py-0.5 rounded border border-rose-500/10 flex items-center gap-1 font-sans text-[9px] tracking-widest uppercase">
                          <AlertTriangle size={9} /> SLA BREACHED
                        </span>
                      )}
                    </div>

                    {/* ID & Title */}
                    <div>
                      <div className="text-[10px] text-slate-500 font-bold tracking-wide">Issue #{issue.id.toUpperCase()}</div>
                      <h3 className="text-[14px] text-white font-bold mt-1 tracking-tight leading-snug">{issue.title}</h3>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed">{issue.description}</p>
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex flex-col gap-3.5 mt-2">
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[10px] text-slate-400 border-t border-b border-white/5 py-2.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-slate-600">📍</span>
                        <span className="truncate">{ward.name} Ward</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-600">🏢</span>
                        <span>BBMP (Municipal Authority)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-600">📅</span>
                        <span>Reported {days}d ago</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-600">⏱</span>
                        <span className={isSlaBreached ? 'text-rose-400 font-bold' : ''}>
                          SLA: 7 days {isSlaBreached ? `(+${days - 7}d)` : `(${7 - days}d left)`}
                        </span>
                      </div>
                    </div>

                    {/* Upvote & Action row */}
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-[10px] font-bold flex items-center gap-1.5">
                        <ThumbsUp size={11} className={getScoreTextClass(ward.civicScore)} />
                        <span>{upvotes} UPVOTES</span>
                      </span>
                      
                      <div className="flex gap-2 text-[9px] font-bold">
                        <span className={`px-2 py-1 rounded border tracking-widest ${
                          issue.status === 'open' 
                            ? 'text-rose-400 bg-rose-500/5 border-rose-500/10'
                            : issue.status === 'in-progress'
                            ? 'text-amber-400 bg-amber-500/5 border-amber-500/10'
                            : 'text-emerald-400 bg-emerald-500/5 border-emerald-500/10'
                        }`}>
                          {issue.status === 'in-progress' ? 'IN PROGRESS' : issue.status.toUpperCase()}
                        </span>
                        
                        <button 
                          onClick={() => alert(`RTI Generation initiated for Issue #${issue.id.toUpperCase()}`)}
                          className="bg-slate-800 hover:bg-slate-700 hover:border-slate-600 border border-slate-800 text-white rounded px-2.5 py-1 tracking-widest cursor-pointer uppercase transition-all"
                        >
                          📄 RTI
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
}
