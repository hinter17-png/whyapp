import React from "react";
import { Minus, Square, X } from "lucide-react";

export function TitleBar() {
  const isElectron = !!window.electronAPI;

  const handleMinimize = () => window.electronAPI?.invoke("window-minimize");
  const handleMaximize = () => window.electronAPI?.invoke("window-maximize");
  const handleClose = () => window.electronAPI?.invoke("window-close");

  if (!isElectron) return null;

  return (
    <div className="h-8 bg-[#020617] flex items-center justify-between select-none z-[100] border-b border-white/5">
      <div className="flex-1 h-full drag-region" style={{ WebkitAppRegion: "drag" } as any}>
        <div className="flex items-center h-full px-4 gap-2">
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">WHYAPP | God Engine</span>
        </div>
      </div>
      
      <div className="flex h-full no-drag-region" style={{ WebkitAppRegion: "no-drag" } as any}>
        <button 
          onClick={handleMinimize}
          className="px-4 h-full hover:bg-white/5 text-slate-400 transition-colors"
        >
          <Minus size={14} />
        </button>
        <button 
          onClick={handleMaximize}
          className="px-4 h-full hover:bg-white/5 text-slate-400 transition-colors"
        >
          <Square size={12} />
        </button>
        <button 
          onClick={handleClose}
          className="px-4 h-full hover:bg-rose-500 hover:text-white text-slate-400 transition-colors"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
