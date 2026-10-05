'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    typeof window !== 'undefined' && localStorage.getItem('nagaiai-theme') === 'light' ? 'light' : 'dark'
  );

  useEffect(() => {
    const saved = localStorage.getItem('nagaiai-theme');
    const next = saved === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
  }, []);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('nagaiai-theme', next);
    window.dispatchEvent(new CustomEvent('nagaiai-theme-change', { detail: next }));
  };

  return (
    <button
      type="button"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      onClick={toggle}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-mono text-xs uppercase border transition-all duration-200"
      style={{
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border)',
        color: 'var(--text-secondary)',
      }}
    >
      {theme === 'light' ? '🌙 DARK' : '☀️ LIGHT'}
    </button>
  );
}
