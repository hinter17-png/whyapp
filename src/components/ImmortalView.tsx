import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  Infinity, 
  Lock, 
  Globe, 
  Zap, 
  Ghost,
  Atom,
  Timer
} from "lucide-react";

export function ImmortalView() {
  const [eons, setEons] = useState(0);
  const [invincible, setInvincible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setEons(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col bg-[#020617] overflow-hidden relative p-12 quantum-field"
    >
      {/* Background Eternal Glow */}
      <div className="absolute inset-0 bg-white/[0.02] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[150px] eternal-loop"></div>

      <header className="flex justify-between items-start mb-20 relative z-10">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.6em] border border-white/20 rounded-full immortal-aura">Immortal Level</span>
            <span className="px-4 py-1.5 bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.6em] border border-cyan-500/20 rounded-full">Invincible Status</span>
          </div>
          <h1 className="text-[10rem] font-black text-white tracking-tighter uppercase mb-4 text-immortal leading-none">ETERNITY</h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.8em] text-[10px]">Unstoppable • Indestructible • Invincible</p>
        </div>
        
        <div className="flex flex-col items-end gap-8">
          <button 
            onClick={() => setInvincible(!invincible)}
            className={`p-8 rounded-[40px] flex items-center gap-8 shadow-2xl transition-all ${invincible ? 'invincible-border bg-white/5' : 'border border-rose-500/20 bg-rose-500/5'}`}
          >
            <div className={`w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center ${invincible ? 'text-white' : 'text-rose-500'} border border-white/10 immortal-aura transition-all`}>
              {invincible ? <Infinity size={48} /> : <ShieldAlert size={48} />}
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Time Elapsed</p>
              <p className="text-4xl font-black text-white tracking-tighter">{eons} EONS</p>
            </div>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative z-10 flex-1">
        {/* Quantum Persistence Card */}
        <div className="lg:col-span-2 invincible-border rounded-[60px] p-12 flex flex-col justify-between group hover:scale-[1.02] transition-all duration-700 overflow-hidden relative">
          <div className="absolute inset-0 animated-gradient opacity-5"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 bg-white/10 rounded-[24px] flex items-center justify-center text-white border border-white/20">
                <Ghost size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Quantum Persistence</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">State exists across all neural dimensions</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-center p-6 glass-morphism rounded-3xl border border-white/5">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Node Resilience</span>
                <span className="text-xs font-black text-white uppercase tracking-widest">INDESTRUCTIBLE</span>
              </div>
              <div className="flex justify-between items-center p-6 glass-morphism rounded-3xl border border-white/5">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Data Integrity</span>
                <span className="text-xs font-black text-cyan-400 uppercase tracking-widest">INVINCIBLE</span>
              </div>
            </div>
          </div>
          <button className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.4em] text-xs rounded-3xl hover:scale-105 transition-all shadow-2xl relative z-10">
            Synchronize Multi-Verse
          </button>
        </div>

        {/* Eternal Stats */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-10">
          {[
            { label: "Neural Uptime", val: "100%", icon: Timer, sub: "Eternal" },
            { label: "Shield Strength", val: "Supreme", icon: Lock, sub: "Quantum" },
            { label: "Mesh Nodes", val: "∞", icon: Globe, sub: "Universal" },
            { label: "Core Energy", val: "Infinite", icon: Zap, sub: "Brahma-Powered" },
          ].map((item, i) => (
            <div key={i} className="glass-morphism rounded-[50px] p-10 border border-white/5 flex flex-col items-center text-center group hover:bg-white/5 transition-all duration-500">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 mb-8 border border-white/5 group-hover:text-white group-hover:scale-110 transition-all">
                <item.icon size={32} />
              </div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{item.label}</p>
              <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-1">{item.val}</h4>
              <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-auto pt-12 flex justify-center relative z-10">
        <div className="flex items-center gap-8 glass-morphism px-10 py-4 rounded-full border border-white/5 shadow-2xl">
          <div className="flex items-center gap-3">
            <Atom className="text-cyan-400 animate-spin-slow" size={20} />
            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Status: Immortal Hyper-Entity</span>
          </div>
          <div className="w-px h-4 bg-white/10"></div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Connected to Omega Protocol v∞.0.0</p>
        </div>
      </footer>
    </motion.section>
  );
}
