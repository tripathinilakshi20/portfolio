import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';

export default function Toast({ message, visible, type = 'success' }) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce transition-all">
      <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-navy-card/95 border border-electric-cyan/40 text-brand-white shadow-2xl backdrop-blur-xl">
        {type === 'success' ? (
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
        ) : (
          <Info className="w-4 h-4 text-electric-cyan" />
        )}
        <span className="font-mono text-xs font-medium">{message}</span>
      </div>
    </div>
  );
}
