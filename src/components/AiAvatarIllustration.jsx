import React from 'react';

export default function AiAvatarIllustration() {
  return (
    <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center">
      {/* Outer ambient glow circles */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-electric-purple/20 via-electric-cyan/20 to-transparent blur-2xl animate-pulse-slow" />
      
      {/* Hologram rings & HUD container */}
      <div className="relative w-full h-full p-4 flex items-center justify-center">
        
        {/* SVG Hologram Artwork */}
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full max-w-[380px] max-h-[380px] filter drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#0B1020" />
            </linearGradient>

            <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>

            <linearGradient id="avatarShade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0B1020" />
            </linearGradient>

            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#080B18" stopOpacity="0" />
            </radialGradient>

            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Central Radial Light */}
          <circle cx="200" cy="200" r="170" fill="url(#centerGlow)" />

          {/* Outer Segmented HUD Ring */}
          <circle
            cx="200"
            cy="200"
            r="185"
            stroke="#22D3EE"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeDasharray="6 8 20 8 30 15"
            className="animate-spin"
            style={{ animationDuration: '60s' }}
          />

          {/* Secondary Counter-rotating Ring */}
          <circle
            cx="200"
            cy="200"
            r="168"
            stroke="#8B5CF6"
            strokeWidth="1.2"
            strokeOpacity="0.35"
            strokeDasharray="14 10 4 10"
            className="animate-spin"
            style={{ animationDuration: '45s', animationDirection: 'reverse' }}
          />

          {/* Precision Cardinal Coordinate Ticks */}
          <line x1="200" y1="8" x2="200" y2="22" stroke="#22D3EE" strokeWidth="2.5" />
          <line x1="200" y1="378" x2="200" y2="392" stroke="#22D3EE" strokeWidth="2.5" />
          <line x1="8" y1="200" x2="22" y2="200" stroke="#8B5CF6" strokeWidth="2.5" />
          <line x1="378" y1="200" x2="392" y2="200" stroke="#8B5CF6" strokeWidth="2.5" />

          {/* Octagonal AI Lab Boundary */}
          <polygon
            points="200,45 315,90 355,200 315,310 200,355 85,310 45,200 85,90"
            stroke="#22D3EE"
            strokeWidth="1.5"
            strokeOpacity="0.25"
            fill="none"
          />

          {/* Neural Network Circuit Pathways behind avatar */}
          <path
            d="M95 140 H 140 L 170 170 V 220 L 130 260 H 90"
            stroke="#8B5CF6"
            strokeWidth="1.2"
            strokeOpacity="0.4"
            fill="none"
          />
          <circle cx="95" cy="140" r="3" fill="#8B5CF6" />
          <circle cx="170" cy="170" r="3" fill="#22D3EE" />
          <circle cx="130" cy="260" r="3" fill="#22D3EE" />

          <path
            d="M305 140 H 260 L 230 170 V 220 L 270 260 H 310"
            stroke="#22D3EE"
            strokeWidth="1.2"
            strokeOpacity="0.4"
            fill="none"
          />
          <circle cx="305" cy="140" r="3" fill="#22D3EE" />
          <circle cx="230" cy="170" r="3" fill="#8B5CF6" />
          <circle cx="270" cy="260" r="3" fill="#8B5CF6" />

          {/* Stylized AI Engineer Silhouette Base */}
          {/* Shoulders / Lab Tech Jacket */}
          <path
            d="M110 325 C110 275, 145 255, 200 255 C255 255, 290 275, 290 325 C290 340, 280 345, 200 345 C120 345, 110 340, 110 325 Z"
            fill="url(#avatarShade)"
            stroke="#1E2B4D"
            strokeWidth="2"
          />

          {/* Jacket Collar Accent / Cyber Lapel */}
          <path
            d="M175 257 L200 295 L225 257"
            stroke="#22D3EE"
            strokeWidth="1.8"
            strokeOpacity="0.8"
            fill="none"
          />

          {/* Neck */}
          <rect x="186" y="222" width="28" height="36" rx="4" fill="#131D38" stroke="#1E2B4D" strokeWidth="1" />

          {/* Head & Face Contour */}
          <path
            d="M152 170 C152 118, 172 100, 200 100 C228 100, 248 118, 248 170 C248 215, 225 235, 200 235 C175 235, 152 215, 152 170 Z"
            fill="#0F172A"
            stroke="#22D3EE"
            strokeWidth="1.5"
          />

          {/* Sleek Hair Contour */}
          <path
            d="M148 165 C148 110, 168 92, 200 92 C232 92, 252 110, 252 165 C252 145, 242 115, 200 115 C158 115, 148 145, 148 165 Z"
            fill="#1E293B"
          />

          {/* Futuristic Cyber Visor / Smart Neural Eyewear */}
          <path
            d="M160 162 C160 156, 175 154, 200 154 C225 154, 240 156, 240 162 L236 178 C236 182, 222 185, 200 185 C178 185, 164 182, 164 178 Z"
            fill="#0B132B"
            stroke="url(#neonGlow)"
            strokeWidth="2"
            filter="url(#glowFilter)"
          />

          {/* Visor HUD scan beam */}
          <line x1="168" y1="169" x2="232" y2="169" stroke="#22D3EE" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
          <circle cx="218" cy="169" r="2.5" fill="#FFFFFF" />

          {/* Neural Interface Node on Temple */}
          <circle cx="152" cy="166" r="4" fill="#080B18" stroke="#8B5CF6" strokeWidth="2" />
          <circle cx="152" cy="166" r="1.5" fill="#22D3EE" />

          {/* Subtle Mouth & Chin Guide */}
          <path d="M192 212 Q200 216 208 212" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />

          {/* Hologram Floating Nodes */}
          <g className="animate-pulse">
            <circle cx="85" cy="90" r="4" fill="#22D3EE" />
            <circle cx="315" cy="90" r="4" fill="#8B5CF6" />
            <circle cx="355" cy="200" r="4" fill="#22D3EE" />
            <circle cx="45" cy="200" r="4" fill="#8B5CF6" />
          </g>

          {/* Live System Data Code Overlay in SVG */}
          <text x="55" y="32" fill="#22D3EE" fontSize="10" fontFamily="JetBrains Mono, monospace" opacity="0.75">SYS_ID: NILAKSHI-AI</text>
          <text x="250" y="32" fill="#8B5CF6" fontSize="10" fontFamily="JetBrains Mono, monospace" opacity="0.75">CORE: PY3.YOLOv8</text>
          <text x="145" y="375" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono, monospace" opacity="0.8">AI INNOVATION LAB</text>
        </svg>

        {/* Floating Mini Tech Tags */}
        <div className="absolute top-2 left-2 bg-navy-card/90 backdrop-blur-md px-2.5 py-1 rounded border border-electric-cyan/30 flex items-center gap-1.5 shadow-lg shadow-electric-cyan/5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-400 absolute" />
          <span className="text-[11px] font-mono text-electric-cyan font-medium ml-1">AI_RESEARCHER</span>
        </div>

        <div className="absolute bottom-4 right-2 bg-navy-card/90 backdrop-blur-md px-2.5 py-1 rounded border border-electric-purple/30 flex items-center gap-1.5 shadow-lg shadow-electric-purple/5">
          <span className="text-[10px] font-mono text-brand-muted">EXP:</span>
          <span className="text-[11px] font-mono text-electric-purple font-semibold">3RD_YEAR_AIML</span>
        </div>
      </div>
    </div>
  );
}
