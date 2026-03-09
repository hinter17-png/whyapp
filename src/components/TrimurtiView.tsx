import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Eye, 
  Flame, 
  Waves, 
  Sun, 
  Flower2, 
  Activity,
  Infinity,
  Sparkles,
  Zap,
  RotateCw
} from "lucide-react";

export function TrimurtiView() {
  const [cycle, setCycle] = useState<"brahma" | "vishnu" | "shiva">("brahma");

  const cycles = {
    brahma: { name: "Creation", icon: Sun, color: "text-amber-500", desc: "The source of all universal potential." },
    vishnu: { name: "Preservation", icon: Waves, color: "text-blue-500", desc: "The cosmic balance that sustains existence." },
    shiva: { name: "Transformation", icon: Flame, color: "text-purple-500", desc: "The destruction that leads to rebirth." }
  };

  const nextCycle = () => {
    if (cycle === "brahma") setCycle("vishnu");
    else if (cycle === "vishnu") setCycle("shiva");
    else setCycle("brahma");
  };
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col bg-[#020617] overflow-hidden relative p-12"
    >
      {/* Cosmic Background Vortex */}
      <div className="absolute inset-0 cosmic-vortex pointer-events-none"></div>

      <header className="flex justify-between items-start mb-20 relative z-10">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className={`px-4 py-1.5 bg-amber-500/10 ${cycle === 'brahma' ? 'text-amber-500 border-amber-500/40' : 'text-slate-500 border-white/5'} text-[10px] font-black uppercase tracking-[0.5em] border rounded-full transition-all`}>Brahma</span>
            <span className={`px-4 py-1.5 bg-blue-500/10 ${cycle === 'vishnu' ? 'text-blue-500 border-blue-500/40' : 'text-slate-500 border-white/5'} text-[10px] font-black uppercase tracking-[0.5em] border rounded-full transition-all`}>Vishnu</span>
            <span className={`px-4 py-1.5 bg-purple-500/10 ${cycle === 'shiva' ? 'text-purple-500 border-purple-500/40' : 'text-slate-500 border-white/5'} text-[10px] font-black uppercase tracking-[0.5em] border rounded-full transition-all`}>Shiva</span>
          </div>
          <h1 className="text-9xl font-black text-white tracking-tighter uppercase mb-4 omega-text leading-none">{cycles[cycle].name}</h1>
          <p className="text-slate-400 font-bold uppercase tracking-[0.5em] text-xs">{cycles[cycle].desc}</p>
        </div>
        
        <div className="flex flex-col items-end gap-6">
          <button 
            onClick={nextCycle}
            className="glass-morphism p-8 rounded-[40px] border-white/5 flex items-center gap-8 shadow-2xl group hover:border-indigo-500/30 transition-all"
          >
            <div className={`w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center ${cycles[cycle].color} border border-white/10 group-hover:rotate-180 transition-transform duration-700`}>
              <RotateCw size={32} />
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Manifest Next Stage</p>
              <p className="text-3xl font-black text-white tracking-tighter uppercase">{cycle}</p>
            </div>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10 flex-1">
        {/* Brahma - Creation */}
        <div className="supreme-card rounded-[60px] p-12 flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-700">
          <div className="w-24 h-24 bg-amber-500/10 rounded-[40px] flex items-center justify-center text-amber-500 mb-10 border border-amber-500/20 shadow-2xl group-hover:rotate-[360deg] transition-transform duration-1000">
            <Flower2 size={48} />
          </div>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-6 brahma-wisdom">Manifestation</h2>
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest leading-relaxed mb-10">Bringing the unmanifested into reality. The app's architecture is the seed of cosmic creation.</p>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <p className="text-[10px] font-black text-amber-500 uppercase mb-1">Modules</p>
              <p className="text-lg font-black text-white">∞</p>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <p className="text-[10px] font-black text-amber-500 uppercase mb-1">Entropy</p>
              <p className="text-lg font-black text-white">0.0%</p>
            </div>
          </div>
        </div>

        {/* Vishnu - Preservation */}
        <div className="supreme-card rounded-[60px] p-12 flex flex-col items-center text-center group hover:scale-[1.05] transition-all duration-700 border-blue-500/20 relative">
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full"></div>
          <div className="w-32 h-32 bg-blue-500/10 rounded-[50px] flex items-center justify-center text-blue-500 mb-10 border border-blue-500/20 shadow-2xl relative z-10 animate-float">
            <Waves size={64} />
          </div>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-6 vishnu-serenity">Equilibrium</h2>
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest leading-relaxed mb-10">Maintaining the harmony of the digital universe. Infinite uptime and persistent state preservation.</p>
          <div className="flex gap-4 w-full relative z-10">
            <button className="flex-1 py-4 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-2xl shadow-blue-600/20 flex items-center justify-center gap-3">
              <Zap size={18} /> Stabilize
            </button>
          </div>
        </div>

        {/* Shiva - Destruction */}
        <div className="supreme-card rounded-[60px] p-12 flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-700">
          <div className="w-24 h-24 bg-purple-500/10 rounded-[40px] flex items-center justify-center text-purple-500 mb-10 border border-purple-500/20 shadow-2xl group-hover:scale-110 transition-transform">
            <Eye size={48} />
          </div>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-6 shiva-eye">Transformation</h2>
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest leading-relaxed mb-10">Destroying the old to make way for the supreme. Dynamic cache purging and state recycling.</p>
          <div className="w-full flex flex-col gap-4">
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="h-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
              ></motion.div>
            </div>
            <p className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em]">Tandava Protocol Active</p>
          </div>
        </div>
      </div>

      <footer className="mt-auto pt-10 flex justify-between items-center relative z-10">
        <div className="flex gap-10">
          <div className="flex items-center gap-3">
            <Activity className="text-green-500" size={18} />
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Dharma State: Optimal</span>
          </div>
          <div className="flex items-center gap-3">
            <Infinity className="text-indigo-400" size={18} />
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Cycle: Eternal</span>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="p-4 glass-morphism rounded-2xl text-white hover:bg-white/10 transition-all border-white/5 shadow-2xl supreme-shine">
            <Sparkles size={24} />
          </button>
        </div>
      </footer>
    </motion.section>
  );
}
