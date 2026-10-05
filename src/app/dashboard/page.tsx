'use client';

import { useRouter } from 'next/navigation';
import DashboardTab from '@/components/DashboardTab';

export default function DashboardPage() {
  const router = useRouter();

  const handleNavigateToMap = (wardId?: string) => {
    if (wardId) {
      router.push(`/?tab=map&wardId=${wardId}`);
    } else {
      router.push('/?tab=map');
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-[#0A0F2E] overflow-hidden">
      {/* ── TOP BAR (56px) ── */}
      <header className="flex-none h-14 flex items-center justify-between px-4 md:px-6 border-b border-white/10 bg-[rgba(10,15,46,0.98)] backdrop-blur-md z-50">
        {/* Left — Logo */}
        <div className="flex items-center gap-3 min-w-0" onClick={() => router.push('/')}>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                 style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #138808 100%)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" fill="white" fillOpacity="0.9"/>
              </svg>
            </div>
            <div className="leading-none">
              <div className="text-white font-bold text-base tracking-wide">NagarAI</div>
              <div className="text-[10px] text-white/40 hidden sm:block">Every complaint. Every delay. Every politician. All public.</div>
            </div>
          </div>
        </div>

        {/* Center — Nav tabs */}
        <nav className="flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          <button
            onClick={() => router.push('/?tab=map')}
            className="px-4 py-1.5 rounded-md text-xs font-bold tracking-widest uppercase text-white/40 hover:text-white/70 hover:bg-white/5 transition-all duration-150"
          >
            map
          </button>
          <button
            onClick={() => router.push('/?tab=complaints')}
            className="px-4 py-1.5 rounded-md text-xs font-bold tracking-widest uppercase text-white/40 hover:text-white/70 hover:bg-white/5 transition-all duration-150"
          >
            complaints
          </button>
          <button
            className="px-4 py-1.5 rounded-md text-xs font-bold tracking-widest uppercase bg-[#FF6B35] text-white shadow-lg shadow-orange-500/20 transition-all duration-150"
          >
            dashboard
          </button>
        </nav>

        {/* Right — Close/Home button */}
        <button
          onClick={() => router.push('/')}
          className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-white text-xs font-bold font-mono tracking-wide hover:bg-white/10 transition-colors"
        >
          GO BACK
        </button>
      </header>

      {/* Main Dashboard Tab Content */}
      <main className="flex-1 relative overflow-hidden">
        <DashboardTab onNavigateToMap={handleNavigateToMap} />
      </main>

      {/* Footer */}
      <footer className="flex-none h-[60px] flex items-center justify-between px-4 md:px-8 border-t border-white/10 bg-[rgba(10,15,46,0.98)] backdrop-blur-md z-50 text-[10px] text-white/30 tracking-widest uppercase">
        <span>NAGARAI ANALYTICS HUB</span>
        <span className="text-[#138808]">● Connected</span>
      </footer>
    </div>
  );
}
