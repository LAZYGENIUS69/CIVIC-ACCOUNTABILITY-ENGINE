'use client';

import { useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';

type Density = 'compact' | 'balanced' | 'roomy';

export default function TweaksBar() {
  const [open, setOpen] = useState(false);
  const [density, setDensity] = useState<Density>('balanced');
  const [mapEmphasis, setMapEmphasis] = useState(60);

  const updateDensity = (next: Density) => {
    setDensity(next);
    document.documentElement.dataset.density = next;
  };

  const updateMapEmphasis = (value: number) => {
    setMapEmphasis(value);
    document.documentElement.style.setProperty('--map-emphasis', `${value / 100}`);
  };

  return (
    <div className="tweaks-bar" data-open={open}>
      {open && (
        <div className="tweaks-panel" role="dialog" aria-label="Display tweaks">
          <div className="tweaks-panel-header">
            <div>
              <span className="atlas-kicker">VIEW SETTINGS</span>
              <h2>Shape the atlas</h2>
            </div>
            <button type="button" className="tweaks-close" aria-label="Close display tweaks" onClick={() => setOpen(false)}>
              <X size={15} />
            </button>
          </div>

          <div className="tweaks-group">
            <span className="tweaks-label">Information density</span>
            <div className="tweaks-segmented" role="group" aria-label="Information density">
              {(['compact', 'balanced', 'roomy'] as Density[]).map(option => (
                <button
                  type="button"
                  key={option}
                  className={density === option ? 'is-active' : ''}
                  onClick={() => updateDensity(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <label className="tweaks-group" htmlFor="map-emphasis">
            <span className="tweaks-label"><span>Map emphasis</span><output>{mapEmphasis}%</output></span>
            <input id="map-emphasis" type="range" min="25" max="90" value={mapEmphasis} onChange={event => updateMapEmphasis(Number(event.target.value))} />
            <span className="tweaks-hint">More map, less interface chrome</span>
          </label>
        </div>
      )}
      <button
        type="button"
        className="tweaks-trigger"
        aria-expanded={open}
        aria-label={open ? 'Close display tweaks' : 'Open display tweaks'}
        onClick={() => setOpen(value => !value)}
      >
        <SlidersHorizontal size={15} />
        <span>{open ? 'CLOSE' : 'TWEAKS'}</span>
      </button>
    </div>
  );
}
