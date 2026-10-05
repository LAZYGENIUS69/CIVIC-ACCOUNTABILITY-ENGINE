import { create } from 'zustand';
import { ISSUES, Issue } from '@/data/issues-seed';

export interface UserStats {
  reportsSubmitted: number;
  rtiFiled: number;
  issuesVerified: number;
  civicHeroScore: number;
  badges: string[];
}

interface CivicState {
  issues: Issue[];
  userStats: UserStats;
  flyToLocation: { lat: number; lng: number; zoom?: number; ts: number } | null;
  setIssues: (issues: Issue[]) => void;
  addIssue: (issue: Issue) => void;
  updateIssueStatus: (id: string, status: 'open' | 'in-progress' | 'resolved') => void;
  toggleVerifyIssue: (id: string) => void;
  incrementRtiFiled: () => void;
  setFlyToLocation: (loc: { lat: number; lng: number; zoom?: number; ts: number } | null) => void;
  loadStatsFromLocalStorage: () => void;
}

const DEFAULT_STATS: UserStats = {
  reportsSubmitted: 0,
  rtiFiled: 0,
  issuesVerified: 0,
  civicHeroScore: 0,
  badges: ['CITIZEN']
};

function calculateBadges(stats: UserStats): string[] {
  const list = ['CITIZEN'];
  if (stats.reportsSubmitted >= 1) list.push('CIVIC STARTER');
  if (stats.reportsSubmitted >= 3) list.push('WARD GUARDIAN');
  if (stats.reportsSubmitted >= 5) list.push('ACCOUNTABILITY CHAMPION');
  if (stats.rtiFiled >= 1) list.push('RTI WARRIOR');
  if (stats.issuesVerified >= 10) list.push('COMMUNITY SENTINEL');
  return list;
}

export const useCivicStore = create<CivicState>((set, get) => ({
  issues: ISSUES.map(i => ({ ...i, upvotes: i.upvotes ?? Math.floor(Math.random() * 12), verifiedByMe: false })),
  userStats: DEFAULT_STATS,
  flyToLocation: null,
  
  setIssues: (issues) => set({ issues }),
  
  addIssue: (issue) => set((state) => {
    const updatedIssues = [...state.issues, issue];
    const nextStats = {
      ...state.userStats,
      reportsSubmitted: state.userStats.reportsSubmitted + 1,
      civicHeroScore: state.userStats.civicHeroScore + 50
    };
    nextStats.badges = calculateBadges(nextStats);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('nagarai_civic_hero', JSON.stringify(nextStats));
    }
    
    return {
      issues: updatedIssues,
      userStats: nextStats
    };
  }),
  
  updateIssueStatus: (id, status) => set((state) => ({
    issues: state.issues.map((i) => i.id === id ? { ...i, status } : i)
  })),
  
  toggleVerifyIssue: (id) => set((state) => {
    let verifiedDiff = 0;
    const updatedIssues = state.issues.map((i) => {
      if (i.id === id) {
        const verifiedByMe = !i.verifiedByMe;
        verifiedDiff = verifiedByMe ? 1 : -1;
        const upvotes = (i.upvotes || 0) + verifiedDiff;
        return { ...i, verifiedByMe, upvotes };
      }
      return i;
    });

    const nextStats = {
      ...state.userStats,
      issuesVerified: Math.max(0, state.userStats.issuesVerified + verifiedDiff),
      civicHeroScore: Math.max(0, state.userStats.civicHeroScore + (verifiedDiff * 10))
    };
    nextStats.badges = calculateBadges(nextStats);

    if (typeof window !== 'undefined') {
      localStorage.setItem('nagarai_civic_hero', JSON.stringify(nextStats));
    }

    return {
      issues: updatedIssues,
      userStats: nextStats
    };
  }),

  incrementRtiFiled: () => set((state) => {
    const nextStats = {
      ...state.userStats,
      rtiFiled: state.userStats.rtiFiled + 1,
      civicHeroScore: state.userStats.civicHeroScore + 100
    };
    nextStats.badges = calculateBadges(nextStats);

    if (typeof window !== 'undefined') {
      localStorage.setItem('nagarai_civic_hero', JSON.stringify(nextStats));
    }

    return {
      userStats: nextStats
    };
  }),

  setFlyToLocation: (loc) => set({ flyToLocation: loc }),

  loadStatsFromLocalStorage: () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nagarai_civic_hero');
      if (saved) {
        try {
          const stats = JSON.parse(saved);
          set({ userStats: stats });
        } catch (e) {
          console.error("Failed to parse civic hero stats", e);
        }
      }
    }
  }
}));
