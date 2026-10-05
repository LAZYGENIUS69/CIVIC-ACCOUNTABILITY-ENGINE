'use client';

import { useState, useEffect, useRef } from 'react';
import { useCivicStore } from '@/store/civicStore';
import { WARDS } from '@/data/ward-seed';
import { Upload, Camera, Check, FileText, Share2, Clipboard, MapPin, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { getContact } from '@/data/department-contacts';

interface ComplaintsTabProps {
  onNavigateToMap: (wardId?: string) => void;
}

const CATEGORY_MAPPING: Record<string, 'Roads' | 'Streetlights' | 'Water' | 'Garbage' | 'Drainage'> = {
  pothole: 'Roads',
  streetlight: 'Streetlights',
  water: 'Water',
  garbage: 'Garbage',
  encroachment: 'Roads',
  other: 'Drainage'
};

const CATEGORY_EMOJIS: Record<string, string> = {
  pothole: '🕳️',
  streetlight: '💡',
  water: '💧',
  garbage: '🗑️',
  encroachment: '⛔',
  other: '⚠️'
};

export default function ComplaintsTab({ onNavigateToMap }: ComplaintsTabProps) {
  const { addIssue, userStats, loadStatsFromLocalStorage } = useCivicStore();

  // LEFT PANEL: Know Your Rights
  const [rightsText, setRightsText] = useState('');
  const [rightsLoading, setRightsLoading] = useState(false);
  const [rightsResult, setRightsResult] = useState<any>(null);

  // RIGHT PANEL: Stepped Report Flow
  const [step, setStep] = useState(1);
  const [fileBase64, setFileBase64] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [analyzeLoading, setAnalyzeLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  // Step 3 Pre-filled Details
  const [city, setCity] = useState('Bangalore');
  const [wardArea, setWardArea] = useState('');
  const [matchedWardId, setMatchedWardId] = useState('ward-186'); // Default Koramangala
  const [description, setDescription] = useState('');
  const [reporterName, setReporterName] = useState('');
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);

  // Step 3 Location Geocoding
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  // Step 4 Letters
  const [generatedComplaint, setGeneratedComplaint] = useState('');
  const [generatedRti, setGeneratedRti] = useState('');
  const [scoreAnimation, setScoreAnimation] = useState({ from: 31, to: 29 });
  const [currentAnimatedScore, setCurrentAnimatedScore] = useState(31);

  // Badges tracking
  useEffect(() => {
    loadStatsFromLocalStorage();
  }, [loadStatsFromLocalStorage]);

  // Silent Location Fetch on Tab Load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ lat: latitude, lng: longitude });
          silentGeocode(latitude, longitude);
        },
        () => console.log("Background location fetch denied. Standard inputs will be used.")
      );
    }
  }, []);

  const silentGeocode = async (lat: number, lng: number) => {
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
      const data = await res.json();
      if (data && data.address) {
        const address = data.address;
        const neighbourhood = address.neighbourhood || address.suburb || address.village || address.quarter || '';
        const cityVal = address.city || address.town || address.county || '';
        if (cityVal.toLowerCase().includes('bengaluru') || cityVal.toLowerCase().includes('bangalore')) {
          setCity('Bangalore');
        } else if (cityVal.toLowerCase().includes('mumbai')) {
          setCity('Mumbai');
        } else if (cityVal.toLowerCase().includes('delhi')) {
          setCity('Delhi');
        }
        if (neighbourhood) {
          setWardArea(neighbourhood);
          const closest = findClosestWard(lat, lng);
          setMatchedWardId(closest);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const findClosestWard = (lat: number, lng: number): string => {
    let closestId = 'ward-186';
    let minDist = Infinity;
    for (const w of WARDS) {
      if (w.city === 'Bangalore') {
        const [wLng, wLat] = w.coordinates;
        const dist = Math.sqrt(Math.pow(lat - wLat, 2) + Math.pow(lng - wLng, 2));
        if (dist < minDist) {
          minDist = dist;
          closestId = w.wardId;
        }
      }
    }
    return closestId;
  };

  // Analyze Rights Action
  const handleAnalyzeRights = async () => {
    if (!rightsText.trim()) return;
    setRightsLoading(true);
    setRightsResult(null);
    try {
      const res = await fetch('/api/insights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: rightsText })
      });
      const json = await res.json();
      if (json.success) {
        setRightsResult(json.data);
      } else {
        alert("Rights analysis failed: " + (json.error || "unknown error"));
      }
    } catch (e) {
      console.error(e);
      alert("Network error occurred during rights analysis.");
    } finally {
      setRightsLoading(false);
    }
  };

  // Step 1: Handle File Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Str = reader.result as string;
      setFileBase64(base64Str);
      setImagePreview(base64Str);
      setStep(2);
      triggerGeminiAnalysis(base64Str, file.type);
    };
    reader.readAsDataURL(file);
  };

  // Step 2: Gemini Vision Analysis
  const triggerGeminiAnalysis = async (base64Data: string, mimeType: string) => {
    setAnalyzeLoading(true);
    try {
      const res = await fetch('/api/analyze-issue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: base64Data, mimeType })
      });
      const json = await res.json();
      if (json.success && json.data) {
        setAnalysisResult(json.data);
        setDescription(json.data.description || '');
      } else {
        alert("Analysis failed. Please fill details manually.");
        setStep(3);
      }
    } catch (e) {
      console.error(e);
      alert("Error reaching Gemini analysis. Please input details manually.");
      setStep(3);
    } finally {
      setAnalyzeLoading(false);
    }
  };

  // Step 3: Geolocation Request
  const handleUseMyLocation = () => {
    setLocationLoading(true);
    setLocationError(null);
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      setLocationLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setCoords({ lat: latitude, lng: longitude });
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
          const data = await res.json();
          if (data && data.address) {
            const addr = data.address;
            const neighbourhood = addr.neighbourhood || addr.suburb || addr.village || addr.quarter || '';
            const cityVal = addr.city || addr.town || addr.county || '';
            if (cityVal.toLowerCase().includes('bengaluru') || cityVal.toLowerCase().includes('bangalore')) {
              setCity('Bangalore');
            } else if (cityVal.toLowerCase().includes('mumbai')) {
              setCity('Mumbai');
            } else if (cityVal.toLowerCase().includes('delhi')) {
              setCity('Delhi');
            } else if (cityVal.toLowerCase().includes('chennai')) {
              setCity('Chennai');
            } else if (cityVal.toLowerCase().includes('hyderabad')) {
              setCity('Hyderabad');
            }
            setWardArea(neighbourhood || 'Detected Area');
            const closest = findClosestWard(latitude, longitude);
            setMatchedWardId(closest);

            // Fly Map inside Zustand Store
            useCivicStore.getState().setFlyToLocation({ lat: latitude, lng: longitude, zoom: 15, ts: Date.now() });
          }
        } catch (e) {
          console.error(e);
          setLocationError("Reverse geocoding failed. Using raw coordinates.");
        } finally {
          setLocationLoading(false);
        }
      },
      (err) => {
        setLocationError("Location access denied. Please enter area manually.");
        setLocationLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  // Step 3 Submit
  const handleSubmitReport = async () => {
    const activeCategory = CATEGORY_MAPPING[analysisResult?.issueType || 'other'] || 'Roads';
    const activeWard = WARDS.find(w => w.wardId === matchedWardId) || WARDS[0];

    // Seed animation scores
    const startScore = activeWard.civicScore;
    const endScore = Math.max(0, startScore - 2);
    setScoreAnimation({ from: startScore, to: endScore });
    setCurrentAnimatedScore(startScore);

    const issueId = `KOR-${Date.now().toString().slice(-6)}`;
    const newIssue = {
      id: issueId,
      wardId: matchedWardId,
      category: activeCategory,
      title: `${CATEGORY_EMOJIS[analysisResult?.issueType || 'other'] || '⚠️'} ${analysisResult?.issueType?.toUpperCase() || 'CIVIC ISSUE'} in ${wardArea || activeWard.name}`,
      description: description || analysisResult?.description || 'No description provided.',
      status: 'open' as const,
      createdAt: new Date().toISOString().split('T')[0],
      coordinates: coords ? [coords.lng, coords.lat] : (activeWard.coordinates as [number, number]),
      upvotes: 0,
      verifiedByMe: false
    };

    addIssue(newIssue);

    // Save to citizen personal issues store
    try {
      const myIssues = JSON.parse(localStorage.getItem('nagaiai_my_issues') || '[]');
      const issueToStore = {
        ...newIssue,
        issueType: analysisResult?.issueType || 'other',
        wardName: activeWard.name,
        city: city,
        address: wardArea || activeWard.name,
        reportedAt: newIssue.createdAt,
        slaDeadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        department: analysisResult?.responsibleDepartment || 'Local Corporation',
        severity: analysisResult?.severity || 3,
        reporterName: reporterName || 'Concerned Citizen',
        issueId: newIssue.id
      };
      myIssues.push(issueToStore);
      localStorage.setItem('nagaiai_my_issues', JSON.stringify(myIssues));
    } catch (e) {
      console.error("Local storage my_issues write failed", e);
    }

    setStep(4);

    // Score deduction count-down animation effect
    let current = startScore;
    const interval = setInterval(() => {
      if (current > endScore) {
        current -= 1;
        setCurrentAnimatedScore(current);
      } else {
        clearInterval(interval);
      }
    }, 100);

    // Call API endpoints to pre-generate Complaint and RTI letters in background
    try {
      const complaintRes = await fetch('/api/generate-complaint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          issue: {
            issueType: analysisResult?.issueType || 'other',
            severity: analysisResult?.severity || 3,
            responsibleDepartment: analysisResult?.responsibleDepartment || 'PWD',
            description: description || analysisResult?.description || '',
            estimatedSLADays: analysisResult?.estimatedSLADays || 7
          },
          wardName: activeWard.name,
          city: city,
          reporterName: reporterName || 'Concerned Citizen'
        })
      });
      const complaintJson = await complaintRes.json();
      if (complaintJson.success) setGeneratedComplaint(complaintJson.complaint);

      const rtiRes = await fetch('/api/generate-rti', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          issueType: analysisResult?.issueType || 'other',
          wardName: activeWard.name,
          city: city,
          address: wardArea || activeWard.name,
          coordinates: coords ? [coords.lng, coords.lat] : activeWard.coordinates,
          reportedAt: newIssue.createdAt,
          slaDeadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          department: analysisResult?.responsibleDepartment || 'PWD',
          description: description || analysisResult?.description || '',
          severity: analysisResult?.severity || 3,
          reporterName: reporterName || 'Concerned Citizen',
          issueId: newIssue.id
        })
      });
      const rtiJson = await rtiRes.json();
      if (rtiJson.success) setGeneratedRti(rtiJson.rti);
    } catch (e) {
      console.error("Failed to generate letters", e);
    }
  };

  const downloadFile = (filename: string, text: string) => {
    const element = document.createElement("a");
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden bg-[#06060c] text-white civic-atlas-surface">
      {/* LEFT COLUMN: Know Your Rights (40%) */}
      <div className="w-full md:w-[40%] flex flex-col border-r border-[#1e2d4a]/50 p-6 overflow-y-auto bg-[#0a0f1b]/50">
        <div>
          <div className="font-mono uppercase text-[10px] tracking-widest text-[#64748b] font-bold">KNOW YOUR RIGHTS</div>
          <h2 className="text-white text-lg font-bold mt-1 tracking-tight">AI Civic Rights Assistant</h2>
          <p className="text-xs text-slate-400 mt-1">Input details about your civic grievances to discover department jurisdictions, timelines, and legal entitlements.</p>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <textarea
            value={rightsText}
            onChange={(e) => setRightsText(e.target.value)}
            placeholder="Describe your issue in plain language (e.g. 'There is garbage piled up near the school for a week. It smells bad and dogs are gathering.')"
            className="w-full h-28 p-3 rounded bg-[#030712] border border-[#1e2d4a] text-slate-200 text-xs font-mono placeholder:text-slate-600 focus:outline-none focus:border-[#3b82f6]/50 resize-none"
          />
          <button
            onClick={handleAnalyzeRights}
            disabled={rightsLoading || !rightsText.trim()}
            className="bg-[#3b82f6] hover:bg-[#2563eb] disabled:bg-[#1e2d4a]/40 text-white font-mono text-xs uppercase tracking-wider py-2.5 px-4 rounded-sm transition select-none flex items-center justify-center gap-2 cursor-pointer font-bold"
          >
            {rightsLoading ? <Loader2 size={13} className="animate-spin" /> : null}
            {rightsLoading ? 'ANALYZING GRIEVANCE...' : 'ANALYZE RIGHTS →'}
          </button>
        </div>

        {/* Rights Results Cards */}
        {rightsResult && (
          <div className="mt-8 flex flex-col gap-4 animate-fadeIn">
            <h3 className="text-[10px] font-mono font-bold text-[#64748b] tracking-wider uppercase">Your Legal Dossier</h3>

            {/* Department */}
            <div className="bg-[#0f172a]/60 border border-[#1e2d4a]/40 p-4 rounded">
              <div className="text-[9px] font-bold font-mono text-[#3b82f6] tracking-wider uppercase">Responsible Agency</div>
              <div className="text-white text-sm font-semibold mt-1">{rightsResult.responsibleDepartment}</div>
            </div>

            {/* Law/Act */}
            <div className="bg-[#0f172a]/60 border border-[#1e2d4a]/40 p-4 rounded">
              <div className="text-[9px] font-bold font-mono text-[#3b82f6] tracking-wider uppercase">Governing Legislation</div>
              <div className="text-slate-350 text-xs mt-1 font-mono leading-relaxed">{rightsResult.relevantAct}</div>
            </div>

            {/* SLA Days */}
            <div className="bg-[#0f172a]/60 border border-[#1e2d4a]/40 p-4 rounded">
              <div className="text-[9px] font-bold font-mono text-[#3b82f6] tracking-wider uppercase">Expected Timeline</div>
              <div className="text-white text-sm font-semibold mt-1">Resolution within {rightsResult.slaDays} working days</div>
            </div>

            {/* Helpline numbers */}
            <div className="bg-[#0f172a]/60 border border-[#1e2d4a]/40 p-4 rounded">
              <div className="text-[9px] font-bold font-mono text-[#3b82f6] tracking-wider uppercase">Emergency Contacts</div>
              <div className="text-slate-350 text-xs font-mono mt-1 space-y-1">
                <div>BBMP (Corporation): <span className="text-[#3b82f6] font-bold">1533</span></div>
                <div>BESCOM (Power): <span className="text-[#3b82f6] font-bold">1912</span></div>
                <div>BWSSB (Water): <span className="text-[#3b82f6] font-bold">1916</span></div>
                <div>Police: <span className="text-[#3b82f6] font-bold">100</span></div>
              </div>
            </div>

            {/* RTI Eligibility */}
            <div className="bg-[#0f172a]/60 border border-[#1e2d4a]/40 p-4 rounded">
              <div className="text-[9px] font-bold font-mono text-[#3b82f6] tracking-wider uppercase">RTI Filing Status</div>
              <div className="text-slate-350 text-xs mt-1 leading-relaxed">{rightsResult.rtiEligibility}</div>
            </div>
          </div>
        )}
      </div>

      {/* RIGHT COLUMN: Report Issue (60%) */}
      <div className="w-full md:w-[60%] flex flex-col p-6 overflow-y-auto bg-[#070b14]/40">
        {/* Step Indicator */}
        <div className="flex items-center justify-between border-b border-[#1e2d4a]/30 pb-4 mb-6 font-mono text-[10px] tracking-wide select-none">
          <div className="flex items-center gap-1.5">
            <span className={step === 1 ? 'text-[#3b82f6] font-bold' : step > 1 ? 'text-[#10b981] font-bold' : 'text-slate-600'}>[1 CAPTURE]</span>
            <span className="text-slate-700">—</span>
            <span className={step === 2 ? 'text-[#3b82f6] font-bold' : step > 2 ? 'text-[#10b981] font-bold' : 'text-slate-600'}>[2 ANALYZE]</span>
            <span className="text-slate-700">—</span>
            <span className={step === 3 ? 'text-[#3b82f6] font-bold' : step > 3 ? 'text-[#10b981] font-bold' : 'text-slate-600'}>[3 DETAILS]</span>
            <span className="text-slate-700">—</span>
            <span className={step === 4 ? 'text-[#10b981] font-bold' : 'text-slate-600'}>[4 SUBMIT]</span>
          </div>
          <div className="text-slate-500 font-bold">STEP {step} OF 4</div>
        </div>

        {/* STEP 1: CAPTURE */}
        {step === 1 && (
          <div className="flex-1 flex flex-col justify-center items-center py-8">
            <label className="w-full max-w-lg h-64 flex flex-col justify-center items-center border-2 border-dashed border-[#1e2d4a] hover:border-[#3b82f6] bg-[#0a0f1b] hover:bg-[#0f1629] rounded-sm cursor-pointer transition-all duration-200 select-none">
              <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
              <Camera size={48} className="text-[#334155]" />
              <span className="text-[#334155] font-mono text-sm uppercase tracking-widest mt-4">DROP PHOTO TO ANALYZE</span>
              <span className="text-[#1e2d4a] font-mono text-xs mt-1">or click to upload · JPG PNG HEIC</span>
            </label>
          </div>
        )}

        {/* STEP 2: GEMINI ANALYSIS */}
        {step === 2 && (
          <div className="flex-1 flex flex-col gap-6">
            {/* Loading Scanner State */}
            {analyzeLoading && (
              <div className="flex flex-col items-center py-12 relative overflow-hidden rounded bg-[#0f1629]/20 border border-[#1e2d4a]/30">
                {imagePreview && (
                  <img src={imagePreview} className="w-36 h-36 object-cover rounded opacity-30 blur-sm mb-4" alt="scanning" />
                )}
                {/* Scan line animation */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent animate-scan" />
                <Loader2 className="animate-spin text-[#3b82f6] mb-3" size={24} />
                <span className="text-[#3b82f6] font-mono text-xs font-bold uppercase tracking-wider animate-pulse">NagarAI Agent analyzing civic issue...</span>
              </div>
            )}

            {!analyzeLoading && analysisResult && (
              <div className="flex flex-col gap-6 animate-fadeIn">
                <div className="flex items-center gap-4 bg-[#0f1629]/40 border border-[#1e2d4a]/40 p-4 rounded">
                  {imagePreview && (
                    <img src={imagePreview} className="w-20 h-20 object-cover rounded border border-[#1e2d4a]" alt="preview" />
                  )}
                  <div>
                    <h3 className="text-white text-sm font-semibold">Gemini Vision Dossier</h3>
                    <p className="text-slate-400 text-xs mt-0.5 font-mono">Civic classification index compiled successfully.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Category Card */}
                  <div className="bg-[#0f1629]/30 border border-[#1e2d4a]/30 p-4 rounded flex items-center gap-3.5 transition-all duration-300">
                    <span className="text-3xl">{CATEGORY_EMOJIS[analysisResult.issueType] || '⚠️'}</span>
                    <div>
                      <div className="text-[9px] font-bold font-mono text-[#3b82f6] uppercase tracking-wider">IDENTIFIED BY GEMINI AI</div>
                      <div className="text-white font-semibold text-sm mt-0.5">{analysisResult.issueType?.toUpperCase()}</div>
                    </div>
                  </div>

                  {/* Severity Card */}
                  <div className="bg-[#0f1629]/30 border border-[#1e2d4a]/30 p-4 rounded flex flex-col justify-between">
                    <div className="text-[9px] font-bold font-mono text-slate-500 uppercase tracking-wider">SEVERITY LEVEL</div>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-white font-bold text-lg font-mono">{analysisResult.severity}/5</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => {
                          const isFilled = s <= analysisResult.severity;
                          const color = analysisResult.severity <= 2 ? '#10b981' : analysisResult.severity === 3 ? '#f59e0b' : '#f43f5e';
                          return (
                            <span 
                              key={s} 
                              className="w-2 h-4 rounded-sm"
                              style={{ backgroundColor: isFilled ? color : '#1e2d4a' }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Responsible Dept */}
                  <div className="bg-[#0f1629]/30 border border-[#1e2d4a]/30 p-4 rounded">
                    <div className="text-[9px] font-bold font-mono text-slate-500 uppercase tracking-wider">RESPONSIBLE AUTHORITY</div>
                    <div className="text-white font-semibold text-sm mt-1">{analysisResult.responsibleDepartment}</div>
                    <div className="text-[#3b82f6] text-[9px] font-bold font-mono mt-1 uppercase tracking-wider">SLA Target: Must resolve in {analysisResult.estimatedSLADays} days</div>
                  </div>

                  {/* Action Card */}
                  <div className="bg-[#0f1629]/30 border border-[#1e2d4a]/30 p-4 rounded">
                    <div className="text-[9px] font-bold font-mono text-[#3b82f6] uppercase tracking-wider">RECOMMENDED ACTION</div>
                    <div className="text-slate-350 text-xs leading-relaxed mt-1 font-mono">{analysisResult.suggestedAction}</div>
                  </div>
                </div>

                {/* AI Assessment Description */}
                <div className="bg-[#0f1629]/30 border border-[#1e2d4a]/30 p-4 rounded">
                  <div className="text-[9px] font-bold font-mono text-[#3b82f6] uppercase tracking-wider">AI ASSESSMENT</div>
                  <p className="text-slate-300 text-xs mt-1 leading-relaxed font-mono">{analysisResult.description}</p>
                </div>

                <div className="flex gap-3 justify-end mt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="border border-[#1e2d4a] text-slate-400 font-mono text-xs uppercase tracking-wider py-2 px-4 rounded hover:text-white transition cursor-pointer"
                  >
                    ← RE-UPLOAD
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-mono text-xs uppercase tracking-wider py-2 px-6 rounded font-bold cursor-pointer transition"
                  >
                    CONFIRM & CONTINUE →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* STEP 3: DETAILS & GEOLOCATION */}
        {step === 3 && (
          <div className="flex-1 flex flex-col gap-5 animate-fadeIn">
            {/* Form Fields */}
            <div className="flex flex-col gap-4">
              {/* City selector dropdown */}
              <div>
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">City</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full mt-1.5 p-2.5 rounded bg-[#030712] border border-[#1e2d4a] text-slate-200 text-xs font-mono focus:outline-none focus:border-[#3b82f6]/50 cursor-pointer"
                >
                  <option value="Bangalore">Bangalore</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Hyderabad">Hyderabad</option>
                </select>
              </div>

              {/* USE MY LOCATION Button */}
              <div className="flex flex-col gap-1.5">
                <button
                  onClick={handleUseMyLocation}
                  disabled={locationLoading}
                  className="w-full bg-[#0f1629] border border-[#1e2d4a] hover:border-[#3b82f6] hover:text-[#3b82f6] disabled:border-[#1e2d4a]/30 disabled:text-slate-650 font-mono text-xs uppercase px-4 py-2 rounded-sm transition duration-150 flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                >
                  {locationLoading ? <Loader2 size={11} className="animate-spin" /> : '📍'} 
                  {locationLoading ? 'Detecting Location...' : 'USE MY LOCATION'}
                </button>
                
                {locationError && (
                  <div className="text-[#f43f5e] font-mono text-[9px] mt-1 flex items-center gap-1 select-none">
                    <AlertCircle size={10} /> {locationError}
                  </div>
                )}

                {coords && !locationLoading && (
                  <div className="text-[#10b981] font-mono text-[9px] mt-1 font-bold tracking-wider uppercase select-none">
                    ✓ GPS Location Captured: {coords.lat.toFixed(5)}, {coords.lng.toFixed(5)}
                  </div>
                )}
              </div>

              {/* Ward / Area */}
              <div>
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Ward / Suburb / Area</label>
                <input
                  type="text"
                  value={wardArea}
                  onChange={(e) => setWardArea(e.target.value)}
                  placeholder="e.g. Koramangala 4th Block, Bandra West, etc."
                  className="w-full mt-1.5 p-2.5 rounded bg-[#030712] border border-[#1e2d4a] text-slate-200 text-xs font-mono placeholder:text-slate-700 focus:outline-none focus:border-[#3b82f6]/50"
                />
              </div>

              {/* Description */}
              <div>
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Issue Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Verify or refine the description..."
                  className="w-full h-24 mt-1.5 p-2.5 rounded bg-[#030712] border border-[#1e2d4a] text-slate-200 text-xs font-mono placeholder:text-slate-750 focus:outline-none focus:border-[#3b82f6]/50 resize-none"
                />
              </div>

              {/* Name (Optional) */}
              <div>
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Your Name (Optional)</label>
                <input
                  type="text"
                  value={reporterName}
                  onChange={(e) => setReporterName(e.target.value)}
                  placeholder="Anonymous if left empty"
                  className="w-full mt-1.5 p-2.5 rounded bg-[#030712] border border-[#1e2d4a] text-slate-200 text-xs font-mono placeholder:text-slate-700 focus:outline-none focus:border-[#3b82f6]/50"
                />
              </div>
            </div>

            <div className="flex gap-3 justify-end mt-4">
              <button
                onClick={() => setStep(2)}
                className="border border-[#1e2d4a] text-slate-400 font-mono text-xs uppercase tracking-wider py-2 px-4 rounded hover:text-white transition cursor-pointer"
              >
                ← BACK
              </button>
              <button
                onClick={handleSubmitReport}
                disabled={!wardArea.trim() || !description.trim()}
                className="bg-[#3b82f6] hover:bg-[#2563eb] disabled:bg-[#1e2d4a]/40 text-white font-mono text-xs uppercase tracking-wider py-2 px-6 rounded font-bold transition cursor-pointer"
              >
                SUBMIT TO NAGAIAI →
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: SUCCESS SUMMARY */}
        {step === 4 && (() => {
          const contact = getContact(city, analysisResult?.issueType || 'pothole');
          return (
            <div className="flex-1 flex flex-col gap-6 animate-fadeIn py-4">
              <div className="text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-[#10b981]/15 border border-[#10b981]/30 rounded-full flex items-center justify-center text-[#10b981] mb-3">
                  <Check size={20} />
                </div>
                <h2 className="text-white text-base font-bold tracking-tight">ISSUE REGISTERED</h2>
                <div className="text-slate-500 font-mono text-[10px] mt-0.5">Issue ID: #KOR-{Date.now().toString().slice(-6)}</div>
              </div>

              {/* Score update animation card */}
              <div className="bg-[#0f1629]/20 border border-[#1e2d4a]/30 p-4 rounded text-center">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Ward Performance Index impact</div>
                <div className="flex items-center justify-center gap-3 mt-2">
                  <span className="text-rose-400 font-mono text-sm font-bold">Ward Score:</span>
                  <span className="text-rose-500 font-mono text-lg font-extrabold tracking-tight">
                    {scoreAnimation.from}/100 → {currentAnimatedScore}/100
                  </span>
                </div>
              </div>

              {/* Civic Hero Badge Card */}
              <div className="bg-[#0f1629] border border-[#f59e0b]/30 p-4 rounded flex items-center gap-3.5 relative overflow-hidden">
                <span className="text-3xl">🏅</span>
                <div>
                  <div className="text-[#f59e0b] font-mono text-[10px] font-bold uppercase tracking-wider">Badge Unlocked</div>
                  <div className="text-white font-bold text-xs font-mono mt-0.5">CIVIC STARTER</div>
                  <p className="text-slate-500 text-[10px] mt-0.5">You earned your first civic starter badge for accountability contribution.</p>
                </div>
              </div>

              {/* 2x2 Actions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {/* Complaint Letter */}
                <button
                  onClick={() => downloadFile(`complaint_letter_${city}_${wardArea}.txt`, generatedComplaint || 'Complaint drafting in progress...')}
                  disabled={!generatedComplaint}
                  className="bg-[#0f1629]/40 border border-[#1e2d4a]/40 hover:border-[#3b82f6] text-slate-300 hover:text-white rounded p-3.5 text-[10px] font-mono font-bold uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <FileText size={11} className="text-[#3b82f6]" /> {generatedComplaint ? 'Download Complaint' : 'Drafting Complaint...'}
                </button>

                {/* RTI Document */}
                <button
                  onClick={() => downloadFile(`rti_application_${city}_${wardArea}.txt`, generatedRti || 'RTI drafting in progress...')}
                  disabled={!generatedRti}
                  className="bg-[#0f1629]/40 border border-[#1e2d4a]/40 hover:border-[#3b82f6] text-slate-300 hover:text-white rounded p-3.5 text-[10px] font-mono font-bold uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <FileText size={11} className="text-[#3b82f6]" /> {generatedRti ? 'Download RTI Doc' : 'Drafting RTI...'}
                </button>

                {/* Email Dept */}
                {contact.email ? (
                  <a
                    href={`mailto:${contact.email}?subject=${encodeURIComponent(`Civic Complaint: Unresolved ${analysisResult?.issueType} in ${wardArea}`)}&body=${encodeURIComponent(generatedComplaint || 'Complaint details attached.')}`}
                    className="bg-[#0f1629]/40 border border-[#1e2d4a]/40 hover:border-[#3b82f6] text-slate-300 hover:text-white rounded p-3.5 text-[10px] font-mono font-bold uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer text-center"
                  >
                    📧 Email Dept
                  </a>
                ) : (
                  <div className="bg-[#0f1629]/10 border border-[#1e2d4a]/20 text-slate-500 rounded p-3.5 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 select-none">
                    📧 Email Unavailable
                  </div>
                )}

                {/* WhatsApp Dept */}
                {contact.whatsapp ? (
                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#0f1629]/40 border border-[#1e2d4a]/40 hover:border-[#25d366] text-slate-300 hover:text-white rounded p-3.5 text-[10px] font-mono font-bold uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer text-center"
                  >
                    💬 WhatsApp
                  </a>
                ) : (
                  <div className="bg-[#0f1629]/10 border border-[#1e2d4a]/20 text-slate-500 rounded p-3.5 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 select-none">
                    💬 WhatsApp Unavailable
                  </div>
                )}

                {/* Portal URL */}
                <a
                  href={contact.portal}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#0f1629]/40 border border-[#1e2d4a]/40 hover:border-[#3b82f6] text-slate-300 hover:text-white rounded p-3.5 text-[10px] font-mono font-bold uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  🌐 {contact.portalName}
                </a>

                {/* Fallback CPGRAMS Portal */}
                {contact.portalName !== 'CPGRAMS' && (
                  <a
                    href="https://pgportal.gov.in"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#0f1629]/40 border border-[#1e2d4a]/40 hover:border-[#3b82f6] text-slate-300 hover:text-white rounded p-3.5 text-[10px] font-mono font-bold uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer text-center"
                  >
                    🌐 CPGRAMS Fallback
                  </a>
                )}

                {/* Copy complaint text */}
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(generatedComplaint || 'Complaint text in progress.');
                    alert('Complaint text copied!');
                  }}
                  className="bg-[#0f1629]/40 border border-[#1e2d4a]/40 hover:border-[#3b82f6] text-slate-300 hover:text-white rounded p-3.5 text-[10px] font-mono font-bold uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  📋 Copy Complaint
                </button>
              </div>

              <button
                onClick={() => onNavigateToMap(matchedWardId)}
                className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-mono text-xs uppercase tracking-wider py-2.5 rounded font-bold transition mt-4 select-none text-center cursor-pointer active:scale-95"
              >
                VIEW ON MAP →
              </button>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
