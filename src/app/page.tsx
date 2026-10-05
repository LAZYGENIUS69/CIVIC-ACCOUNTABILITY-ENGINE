'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ErrorBoundary from '@/components/ErrorBoundary';
import { AnimatePresence } from 'framer-motion';
import { WARDS } from '@/data/ward-seed';
import { useCivicStore } from '@/store/civicStore';
import WardDetailPanel from '@/components/WardDetailPanel';
import ComplaintsTrackerModal from '@/components/ComplaintsTrackerModal';
import ComplaintsTab from '@/components/ComplaintsTab';
import DashboardTab from '@/components/DashboardTab';
import { ThemeToggle } from '@/components/ThemeToggle';
import TweaksBar from '@/components/TweaksBar';

const NagarAIMap = dynamic(() => import('@/components/NagarAIMap'), { ssr: false });

const CITIES = ['National Grid', 'Bangalore', 'Delhi', 'Mumbai', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow'];

type Tab = 'map' | 'complaints' | 'dashboard';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('map');
  const [selectedCity, setSelectedCity] = useState('National Grid');
  const [mapZoom, setMapZoom] = useState(4.2);
  
  const { issues, flyToLocation, setFlyToLocation, userStats, loadStatsFromLocalStorage } = useCivicStore();
  const [selectedWardId, setSelectedWardId] = useState<string | null>(null);
  const [showAllComplaints, setShowAllComplaints] = useState(false);

  // Load user stats on mount
  useEffect(() => {
    loadStatsFromLocalStorage();
  }, [loadStatsFromLocalStorage]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab') as Tab;
      const wardIdParam = params.get('wardId');
      
      if (tabParam === 'map' || tabParam === 'complaints' || tabParam === 'dashboard') {
        setActiveTab(tabParam);
      }
      
      if (wardIdParam) {
        setSelectedWardId(wardIdParam);
        const ward = WARDS.find(w => w.wardId === wardIdParam);
        if (ward) {
          setSelectedCity('Bangalore');
          setFlyToLocation({ lat: ward.coordinates[1], lng: ward.coordinates[0], zoom: 14, ts: Date.now() });
        }
      }
    }
  }, [setFlyToLocation]);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      params.set('tab', tab);
      window.history.pushState({}, '', `?${params.toString()}`);
    }
  };

  const handleNavigateToMap = (wardId?: string) => {
    handleTabChange('map');
    if (wardId) {
      setSelectedWardId(wardId);
      const ward = WARDS.find(w => w.wardId === wardId);
      if (ward) {
        setSelectedCity('Bangalore');
        setFlyToLocation({ lat: ward.coordinates[1], lng: ward.coordinates[0], zoom: 14, ts: Date.now() });
      }
    }
  };

  const selectedWard = WARDS.find(w => w.wardId === selectedWardId) || null;
  const totalTracked = issues.filter(i => i.wardId !== 'ward-none').length;
  const totalResolved = issues.filter(i => i.status === 'resolved' && i.wardId !== 'ward-none').length;

  const isNational = mapZoom < 9;
  const displayTracked = isNational ? 4891 : (selectedCity === 'Bangalore' ? totalTracked : 18);
  const displayResolved = isNational ? 1543 : (selectedCity === 'Bangalore' ? totalResolved : 6);
  const activeCount = isNational ? 28 : (selectedCity === 'Bangalore' ? 10 : 0);
  const activeLabel = isNational ? "states" : "wards active";
  const resolvedLabel = isNational ? "districts monitored" : "resolved from seed";

  const highestBadge = userStats.badges && userStats.badges.length > 0 
    ? userStats.badges[userStats.badges.length - 1] 
    : 'CITIZEN';

  const badgeEmojis: Record<string, string> = {
    CITIZEN: '👤',
    'CIVIC STARTER': '🏅',
    'WARD GUARDIAN': '🥈',
    'ACCOUNTABILITY CHAMPION': '🥇',
    'RTI WARRIOR': '⚔️',
    'COMMUNITY SENTINEL': '🛡️'
  };

  const badgeEmoji = badgeEmojis[highestBadge] || '👤';

  return (
    <div className="fixed inset-0 flex flex-col bg-[var(--bg-base)] overflow-hidden text-[var(--text-primary)] font-mono civic-atlas-shell tactical-shell">

      {/* ── TOP BAR (56px) ── */}
      <header className="flex-none h-14 flex items-center justify-between px-4 md:px-6 border-b border-[var(--border)] bg-[var(--bg-base)] z-50 tactical-navbar">

        {/* Left — Logo + tagline */}
        <div className="flex items-center gap-3 min-w-0 select-none cursor-pointer" onClick={() => handleTabChange('map')}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-none border border-[var(--accent)] bg-[var(--accent)]/5 flex items-center justify-center flex-shrink-0">
              <span className="text-[var(--accent)] font-extrabold text-sm font-mono">&gt;_</span>
            </div>
            <div className="leading-none">
              <div className="text-[var(--text-primary)] font-extrabold text-base tracking-wider font-mono flex items-center gap-1.5">
                NAGARAI <span className="text-[10px] text-[var(--accent)] px-1.5 py-0.5 bg-[var(--accent)]/10 border border-[var(--accent)]/20 font-normal">v1.2</span>
              </div>
              <div className="text-[10px] text-[var(--text-secondary)] font-mono hidden sm:block mt-0.5">CIVIC CONTROL TERMINAL</div>
            </div>
          </div>
        </div>

        {/* Center — Nav tabs */}
        <nav className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 top-0 h-14">
          {(['map', 'complaints', 'dashboard'] as Tab[]).map(tab => (
            <button
              key={tab}
              id={`tab-${tab}`}
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-1 text-xs font-bold tracking-widest uppercase transition-all duration-150 cursor-pointer border border-transparent rounded-none ${
                activeTab === tab
                  ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/5'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Right — City selector + Report button */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Civic Hero Badge Info */}
          <div 
            onClick={() => handleTabChange('dashboard')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-[var(--bg-surface)] border border-[var(--border)] font-mono text-xs text-[var(--text-primary)] cursor-pointer hover:border-[var(--accent)]/50 transition select-none"
            title={`Highest Badge: ${highestBadge}`}
          >
            <span>{badgeEmoji}</span>
            <span className="text-[var(--accent)] font-bold">⚡ {userStats.civicHeroScore} XP</span>
          </div>

          <div className="relative">
            <select
              id="city-selector"
              value={selectedCity}
              onChange={e => setSelectedCity(e.target.value)}
              className="appearance-none bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-primary)] text-xs font-semibold rounded-none px-3 py-1.5 pr-7 cursor-pointer hover:border-[var(--accent)]/40 transition-colors focus:outline-none focus:border-[var(--accent)] font-mono"
            >
              {CITIES.map(c => (
                <option key={c} value={c} className="bg-[var(--bg-surface)]">{c.toUpperCase()}</option>
              ))}
            </select>
            <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 text-[var(--text-secondary)] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <ThemeToggle />
          <button
            id="report-issue-btn"
            onClick={() => handleTabChange('complaints')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-none text-xs font-bold tracking-wider uppercase text-white bg-[var(--accent)] hover:brightness-110 border border-[var(--accent)] transition-all duration-150 active:scale-95 cursor-pointer font-mono"
          >
            <span className="text-sm leading-none font-bold">+</span>
            <span className="hidden sm:inline">REPORT</span>
          </button>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 relative overflow-hidden">

        {/* MAP TAB */}
        {activeTab === 'map' && (
          <>
            <ErrorBoundary name="NagarAI Map">
              <NagarAIMap
                selectedCity={selectedCity}
                data={{}}
                activeLayers={{}}
                onWardClick={(ward) => setSelectedWardId(ward.wardId)}
                onZoomChange={setMapZoom}
                onCitySelect={setSelectedCity}
                flyToLocation={flyToLocation}
              />
            </ErrorBoundary>

            {/* WARD DETAIL PANEL */}
            <AnimatePresence>
              {selectedWard && (
                <WardDetailPanel
                  ward={selectedWard}
                  issues={issues}
                  onClose={() => setSelectedWardId(null)}
                  onViewAllIssues={() => setShowAllComplaints(true)}
                />
              )}
            </AnimatePresence>

            {/* COMPLAINTS TRACKER MODAL */}
            <AnimatePresence>
              {showAllComplaints && selectedWard && (
                <ComplaintsTrackerModal
                  isOpen={showAllComplaints}
                  ward={selectedWard}
                  issues={issues}
                  onClose={() => setShowAllComplaints(false)}
                />
              )}
            </AnimatePresence>
          </>
        )}

        {/* COMPLAINTS TAB */}
        {activeTab === 'complaints' && (
          <ErrorBoundary name="NagarAI Complaints">
            <ComplaintsTab onNavigateToMap={handleNavigateToMap} />
          </ErrorBoundary>
        )}

        {/* DASHBOARD TAB */}
        {activeTab === 'dashboard' && (
          <ErrorBoundary name="NagarAI Dashboard">
            <DashboardTab onNavigateToMap={handleNavigateToMap} />
          </ErrorBoundary>
        )}
      </main>

      <TweaksBar />

      {/* ── BOTTOM HUD (60px) ── */}
      <footer className="flex-none h-12 flex items-center justify-between px-4 md:px-6 border-t border-[var(--border)] bg-[var(--bg-surface)] z-50 select-none font-mono text-xs">

        {/* Stats */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FF6B35] animate-pulse inline-block" />
            <span>
              <span className="text-[var(--text-primary)] font-bold font-mono">{displayTracked.toLocaleString()}</span>
              <span className="text-[var(--text-secondary)] ml-1.5 font-mono">TRACKED</span>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#10b981] inline-block" />
            <span>
              <span className="text-[#10b981] font-bold font-mono">{isNational ? "28" : activeCount}</span>
              <span className="text-[var(--text-secondary)] ml-1.5 font-mono">{activeLabel.toUpperCase()}</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#64748b] inline-block" />
            <span>
              <span className="text-[var(--text-secondary)] font-bold font-mono">{isNational ? "700+" : displayResolved.toLocaleString()}</span>
              <span className="text-[var(--text-secondary)] ml-1.5 font-mono">{resolvedLabel.toUpperCase()}</span>
            </span>
          </div>
        </div>

        {/* City + Status */}
        <div className="flex items-center gap-3 text-[10px] text-[var(--text-secondary)] tracking-wider uppercase font-mono">
          <span>{isNational ? "NATIONAL GRID" : selectedCity}</span>
          <span className="w-px h-3 bg-[#1e2d4a]" />
          <span className="text-[#10b981] font-bold flex items-center gap-1">● LIVE</span>
        </div>
      </footer>

    </div>
  );
}
