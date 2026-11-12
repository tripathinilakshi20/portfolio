import React, { useState } from 'react';
import { 
  Camera, 
  ShieldAlert, 
  Database, 
  Server, 
  Play, 
  RefreshCw, 
  CheckCircle2, 
  AlertTriangle,
  Info,
  Terminal,
  Layers
} from 'lucide-react';

const mockScenarios = [
  {
    id: 'boar',
    animal: 'Wild Boar',
    confidence: '94.2%',
    threatLevel: 'HIGH',
    threatColor: 'text-rose-400 border-rose-500/40 bg-rose-500/10',
    threatBadge: 'bg-rose-500 text-white',
    action: 'Trigger Farm Boundary Deterrent & Farmer SMS Alert',
    boundingBox: { top: '35%', left: '42%', width: '38%', height: '42%' },
    bgVector: 'farm-night',
    description: 'High threat to root crops and aggressive behavior near boundary fence.'
  },
  {
    id: 'elephant',
    animal: 'Asian Elephant',
    confidence: '96.8%',
    threatLevel: 'CRITICAL',
    threatColor: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
    threatBadge: 'bg-amber-500 text-black font-bold',
    action: 'High Priority Alert - Forest Department & Village Warning Broadcast',
    boundingBox: { top: '22%', left: '25%', width: '52%', height: '62%' },
    bgVector: 'jungle-edge',
    description: 'Critical corridor intrusion detected near agricultural perimeter.'
  },
  {
    id: 'nilgai',
    animal: 'Nilgai (Blue Bull)',
    confidence: '89.5%',
    threatLevel: 'MEDIUM',
    threatColor: 'text-yellow-400 border-yellow-500/40 bg-yellow-500/10',
    threatBadge: 'bg-yellow-500 text-black',
    action: 'Activate Strobe Light Deterrent & Log Intrusion Vector',
    boundingBox: { top: '30%', left: '38%', width: '40%', height: '50%' },
    bgVector: 'crop-field',
    description: 'Herbivore herd grazing hazard detected approaching standing crop.'
  },
  {
    id: 'cattle',
    animal: 'Stray Cattle',
    confidence: '92.1%',
    threatLevel: 'LOW',
    threatColor: 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10',
    threatBadge: 'bg-cyan-500 text-black',
    action: 'Standard Field Perimeter Warning Buzzer & Routine Log',
    boundingBox: { top: '40%', left: '35%', width: '34%', height: '44%' },
    bgVector: 'pasture',
    description: 'Domestic cattle grazing near peripheral buffer zone.'
  }
];

export default function AegisSimulator() {
  const [selectedScenario, setSelectedScenario] = useState(mockScenarios[0]);
  const [activeTab, setActiveTab] = useState('feed'); // 'feed' | 'api' | 'sqlite'
  const [isScanning, setIsScanning] = useState(false);

  const handleScenarioChange = (scenario) => {
    setIsScanning(true);
    setTimeout(() => {
      setSelectedScenario(scenario);
      setIsScanning(false);
    }, 350);
  };

  return (
    <div className="w-full rounded-2xl border border-electric-cyan/25 bg-navy-card/90 backdrop-blur-xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
      {/* High-tech top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy-border pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-electric-cyan/10 border border-electric-cyan/30 flex items-center justify-center text-electric-cyan">
            <Camera className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-electric-cyan">
                AEGISNOVA // SIMULATION CONSOLE
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-electric-purple/20 text-electric-purple border border-electric-purple/30">
                STUDENT PROJECT PROTOTYPE
              </span>
            </div>
            <p className="text-xs text-brand-muted">
              Live pipeline demonstration: YOLOv8 Inference → Threat Classifier → FastAPI → SQLite
            </p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center bg-navy-deep p-1 rounded-lg border border-navy-border text-xs font-mono">
          <button
            onClick={() => setActiveTab('feed')}
            className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
              activeTab === 'feed'
                ? 'bg-electric-cyan/20 text-electric-cyan border border-electric-cyan/40 shadow-sm'
                : 'text-brand-muted hover:text-brand-white'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Detection Feed</span>
          </button>
          <button
            onClick={() => setActiveTab('api')}
            className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
              activeTab === 'api'
                ? 'bg-electric-purple/20 text-electric-purple border border-electric-purple/40 shadow-sm'
                : 'text-brand-muted hover:text-brand-white'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>FastAPI Payload</span>
          </button>
          <button
            onClick={() => setActiveTab('sqlite')}
            className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
              activeTab === 'sqlite'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'text-brand-muted hover:text-brand-white'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>SQLite Records</span>
          </button>
        </div>
      </div>

      {/* Scenario selector chips */}
      <div className="mb-4">
        <label className="text-[11px] font-mono uppercase tracking-wider text-brand-muted block mb-2">
          Select Test Intrusion Scenario (Camera Feed Simulation):
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {mockScenarios.map((sc) => (
            <button
              key={sc.id}
              onClick={() => handleScenarioChange(sc)}
              className={`px-3 py-2 rounded-lg text-left text-xs font-mono transition-all border flex flex-col justify-between ${
                selectedScenario.id === sc.id
                  ? 'border-electric-cyan bg-electric-cyan/10 text-white shadow-md shadow-electric-cyan/10'
                  : 'border-navy-border bg-navy-surface/50 text-brand-muted hover:border-brand-muted hover:text-white'
              }`}
            >
              <span className="font-semibold">{sc.animal}</span>
              <span className="text-[10px] text-brand-muted mt-1">Threat: {sc.threatLevel}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Preview Container */}
      <div className="relative rounded-xl overflow-hidden border border-navy-border bg-navy-deep min-h-[300px]">
        {activeTab === 'feed' && (
          <div className="relative w-full h-[320px] sm:h-[360px] bg-gradient-to-b from-navy-surface to-navy-deep flex items-center justify-center p-4">
            
            {/* Surveillance Grid Lines and Reticles */}
            <div className="absolute inset-0 bg-cyber-grid bg-[size:32px_32px] opacity-20 pointer-events-none" />
            <div className="absolute top-3 left-3 flex items-center gap-2 text-[10px] font-mono text-emerald-400 bg-navy-deep/80 px-2 py-1 rounded border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE CAM-02 // PERIMETER NORTH</span>
            </div>
            <div className="absolute top-3 right-3 text-[10px] font-mono text-brand-muted bg-navy-deep/80 px-2 py-1 rounded border border-navy-border">
              MODEL: YOLOv8-CUSTOM // 28.4ms
            </div>

            {/* Farm Fence / Landscape Illustration Backdrop */}
            <svg
              className="absolute inset-0 w-full h-full opacity-35"
              viewBox="0 0 800 400"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 290 Q200 270 400 285 T800 280 V400 H0 Z" fill="#0B132B" />
              <path d="M0 310 Q250 300 500 315 T800 305 V400 H0 Z" fill="#0E1A38" />
              {/* Fence Posts */}
              <line x1="80" y1="260" x2="80" y2="330" stroke="#1E2B4D" strokeWidth="3" />
              <line x1="200" y1="260" x2="200" y2="330" stroke="#1E2B4D" strokeWidth="3" />
              <line x1="320" y1="260" x2="320" y2="330" stroke="#1E2B4D" strokeWidth="3" />
              <line x1="440" y1="260" x2="440" y2="330" stroke="#1E2B4D" strokeWidth="3" />
              <line x1="560" y1="260" x2="560" y2="330" stroke="#1E2B4D" strokeWidth="3" />
              <line x1="680" y1="260" x2="680" y2="330" stroke="#1E2B4D" strokeWidth="3" />
              {/* Fence Wires */}
              <line x1="0" y1="280" x2="800" y2="280" stroke="#1E2B4D" strokeWidth="1.5" strokeDasharray="4 2" />
              <line x1="0" y1="305" x2="800" y2="305" stroke="#1E2B4D" strokeWidth="1.5" strokeDasharray="4 2" />
            </svg>

            {/* Simulated Animal Silhouette & Bounding Box */}
            <div
              className={`absolute transition-all duration-500 rounded-lg border-2 ${
                isScanning ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
              } ${
                selectedScenario.threatLevel === 'HIGH' || selectedScenario.threatLevel === 'CRITICAL'
                  ? 'border-rose-400 bg-rose-500/10'
                  : 'border-electric-cyan bg-electric-cyan/10'
              }`}
              style={{
                top: selectedScenario.boundingBox.top,
                left: selectedScenario.boundingBox.left,
                width: selectedScenario.boundingBox.width,
                height: selectedScenario.boundingBox.height
              }}
            >
              {/* Top Bounding Box Label */}
              <div className="absolute -top-7 left-0 flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-navy-deep border border-electric-cyan text-electric-cyan shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan animate-pulse" />
                <span>{selectedScenario.animal}</span>
                <span className="text-white/80">({selectedScenario.confidence})</span>
              </div>

              {/* Corner targeting brackets */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-electric-cyan" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-electric-cyan" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-electric-cyan" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-electric-cyan" />

              {/* Animal Silhouette Graphic */}
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-2">
                <div className="w-12 h-12 rounded-full bg-navy-card/80 border border-white/20 flex items-center justify-center text-white mb-1 shadow-inner">
                  <ShieldAlert className="w-6 h-6 text-electric-cyan" />
                </div>
                <span className="text-xs font-mono font-semibold text-white tracking-wide">
                  TARGET LOCK: {selectedScenario.animal}
                </span>
                <span className="text-[10px] font-mono text-brand-muted">
                  CONFIDENCE: {selectedScenario.confidence}
                </span>
              </div>
            </div>

            {/* Bottom HUD readout */}
            <div className="absolute bottom-3 left-3 right-3 bg-navy-deep/90 backdrop-blur-md p-3 rounded-lg border border-navy-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded text-[10px] ${selectedScenario.threatBadge}`}>
                  THREAT: {selectedScenario.threatLevel}
                </span>
                <span className="text-brand-white font-medium truncate">
                  Action: {selectedScenario.action}
                </span>
              </div>
              <div className="text-brand-muted text-[11px] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-electric-cyan" />
                <span>Zone: Sector-4 Boundary</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: FastAPI Endpoint Payload */}
        {activeTab === 'api' && (
          <div className="p-4 sm:p-5 font-mono text-xs overflow-x-auto bg-navy-deep">
            <div className="flex items-center justify-between border-b border-navy-border pb-3 mb-3">
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">POST</span>
                <span className="text-brand-white">/api/v1/detections/ingest</span>
              </div>
              <span className="text-brand-muted text-[11px]">HTTP/1.1 201 Created</span>
            </div>
            <pre className="text-electric-cyan leading-relaxed">
{`{
  "event_id": "EVT-2025-0814-${selectedScenario.id.toUpperCase()}",
  "timestamp": "2025-11-05T14:22:18.491Z",
  "camera_source": "CAM_PERIMETER_NORTH_02",
  "detection": {
    "species": "${selectedScenario.animal}",
    "confidence_score": ${parseFloat(selectedScenario.confidence) / 100},
    "threat_level": "${selectedScenario.threatLevel}",
    "coordinates": {
      "x_center": 0.54,
      "y_center": 0.48,
      "width": 0.38,
      "height": 0.42
    }
  },
  "action_dispatched": {
    "sms_alert": ${selectedScenario.threatLevel === 'HIGH' || selectedScenario.threatLevel === 'CRITICAL' ? 'true' : 'false'},
    "strobe_alarm": ${selectedScenario.threatLevel !== 'LOW' ? 'true' : 'false'},
    "log_status": "COMMITTED_TO_SQLITE"
  }
}`}
            </pre>
          </div>
        )}

        {/* Tab 3: SQLite Database Event Log */}
        {activeTab === 'sqlite' && (
          <div className="p-4 sm:p-5 font-mono text-xs overflow-x-auto bg-navy-deep">
            <div className="flex items-center justify-between border-b border-navy-border pb-3 mb-3">
              <span className="text-electric-purple font-semibold">TABLE: detection_events.db</span>
              <span className="text-brand-muted text-[11px]">SQLite 3.x Engine</span>
            </div>
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-navy-border text-brand-muted">
                  <th className="py-2 px-3">ID</th>
                  <th className="py-2 px-3">TIMESTAMP</th>
                  <th className="py-2 px-3">SPECIES</th>
                  <th className="py-2 px-3">CONFIDENCE</th>
                  <th className="py-2 px-3">THREAT</th>
                  <th className="py-2 px-3">ACTION_TAKEN</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-border/50 text-brand-white">
                <tr className="bg-electric-cyan/5">
                  <td className="py-2.5 px-3 text-electric-cyan">#1084</td>
                  <td className="py-2.5 px-3 text-brand-muted">14:22:18</td>
                  <td className="py-2.5 px-3 font-semibold text-white">{selectedScenario.animal}</td>
                  <td className="py-2.5 px-3 text-brand-muted">{selectedScenario.confidence}</td>
                  <td className="py-2.5 px-3">
                    <span className={`px-1.5 py-0.5 rounded text-[10px] ${selectedScenario.threatBadge}`}>
                      {selectedScenario.threatLevel}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-brand-muted truncate max-w-[180px]">Alert Logged</td>
                </tr>
                <tr className="opacity-75">
                  <td className="py-2.5 px-3 text-electric-cyan">#1083</td>
                  <td className="py-2.5 px-3 text-brand-muted">13:45:02</td>
                  <td className="py-2.5 px-3">Wild Boar</td>
                  <td className="py-2.5 px-3 text-brand-muted">93.8%</td>
                  <td className="py-2.5 px-3">
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-rose-500/20 text-rose-300">HIGH</span>
                  </td>
                  <td className="py-2.5 px-3 text-brand-muted">Deterrent triggered</td>
                </tr>
                <tr className="opacity-60">
                  <td className="py-2.5 px-3 text-electric-cyan">#1082</td>
                  <td className="py-2.5 px-3 text-brand-muted">11:12:40</td>
                  <td className="py-2.5 px-3">Stray Cattle</td>
                  <td className="py-2.5 px-3 text-brand-muted">90.4%</td>
                  <td className="py-2.5 px-3">
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-cyan-500/20 text-cyan-300">LOW</span>
                  </td>
                  <td className="py-2.5 px-3 text-brand-muted">Logged</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Student project transparency disclaimer */}
      <div className="mt-4 flex items-start gap-2.5 p-3 rounded-xl bg-navy-surface/60 border border-navy-border text-xs text-brand-muted">
        <Info className="w-4 h-4 text-electric-cyan shrink-0 mt-0.5" />
        <p>
          <strong className="text-brand-white">Academic Project Notice:</strong> AEGISNOVA was developed as a student engineering project using Python, Ultralytics YOLO models, FastAPI, and SQLite. This interactive panel demonstrates the architectural data flow and detection logic implemented in the prototype.
        </p>
      </div>
    </div>
  );
}
