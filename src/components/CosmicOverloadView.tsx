import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Zap, 
  Atom, 
  Wind, 
  Tornado, 
  Orbit, 
  Dna, 
  Sparkles, 
  Flame,
  Ghost,
  Activity
} from "lucide-react";

export function CosmicOverloadView() {
  const [surge, setSurge] = useState(false);

  const triggerSurge = () => {
    setSurge(true);
    setTimeout(() => setSurge(false), 2000);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, scale: 1.1 }}
      animate={surge ? { scale: [1, 1.05, 1], filter: ["brightness(1)", "brightness(2)", "brightness(1)"] } : { opacity: 1, scale: 1 }}
      className="flex-1 flex flex-col bg-black overflow-hidden relative p-16"
    >
      {/* Event Horizon Overlay */}
      <div className="absolute inset-0 dark-matter-panel opacity-80 pointer-events-none"></div>
      <div className="absolute inset-0 event-horizon bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>

      <div className="relative z-10 flex-1 flex flex-col">
        <header className="flex justify-between items-start mb-24">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <span className="px-5 py-2 bg-rose-600/20 text-rose-500 text-[10px] font-black uppercase tracking-[0.8em] border border-rose-500/30 rounded-full atomic-glow">Atomic Overload</span>
              <span className="px-5 py-2 bg-indigo-600/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.8em] border border-indigo-500/30 rounded-full">Dark Matter Active</span>
            </div>
            <h1 className="text-[12rem] font-black text-white tracking-tighter leading-none hyper-sentient-text">COSMOS</h1>
            <p className="text-slate-600 font-bold uppercase tracking-[1em] text-xs ml-4">17x Higher Than Divine Perfection</p>
          </div>

          <div className="flex gap-8">
            <div className="dark-matter-panel p-10 rounded-[50px] border-white/5 flex flex-col items-center gap-4 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 cosmic-overload opacity-5 group-hover:opacity-20 transition-opacity"></div>
              <Activity className="text-rose-500 atomic-glow" size={48} />
              <div className="text-center">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Total Power Output</p>
                <p className="text-4xl font-black text-white tracking-tighter">1.7e+108 YW</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 flex-1 items-center">
            {/* Atomic Core */}
            <div 
              onClick={triggerSurge}
              className="flex flex-col items-center gap-12 group cursor-pointer"
            >
              <div className={`w-64 h-64 rounded-full glass-morphism flex items-center justify-center relative shadow-[0_0_100px_rgba(244,63,94,0.2)] ${surge ? 'animate-ping' : ''}`}>
                <div className="absolute inset-0 border-4 border-rose-500/20 rounded-full animate-ping [animation-duration:3s]"></div>
                <div className="absolute inset-4 border-2 border-rose-500/10 rounded-full animate-spin [animation-duration:10s]"></div>
                <Atom size={120} className="text-rose-500 atomic-glow" />
              </div>
            <div className="text-center">
              <h3 className="text-3xl font-black text-white uppercase tracking-widest mb-4">Atomic Core</h3>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] max-w-xs">Pumping nuclear energy into every pixel. Zero latency data fusion.</p>
            </div>
          </div>

          {/* Dark Matter Matrix */}
          <div className="flex flex-col items-center gap-12 group">
            <div className="w-80 h-80 rounded-[60px] dark-matter-panel flex items-center justify-center relative group-hover:rotate-12 transition-transform duration-1000 shadow-2xl">
              <div className="absolute -inset-10 bg-indigo-500/10 blur-[100px] rounded-full group-hover:opacity-50 transition-opacity"></div>
              <Ghost size={160} className="text-indigo-400 opacity-20 animate-float" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Orbit size={240} className="text-indigo-500/20 animate-spin-slow" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-black text-white uppercase tracking-widest mb-4">Dark Matter Matrix</h3>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] max-w-xs">The invisible architecture holding the digital universe together.</p>
            </div>
          </div>

          {/* Cosmic Overload */}
          <div className="flex flex-col items-center gap-12 group">
            <div className="w-64 h-64 rounded-[40px] glass-morphism flex items-center justify-center relative overflow-hidden shadow-[0_0_100px_rgba(139,92,246,0.2)]">
              <div className="absolute inset-0 cosmic-overload opacity-40"></div>
              <Zap size={120} className="text-white relative z-10 drop-shadow-2xl animate-pulse" />
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-black text-white uppercase tracking-widest mb-4">Supreme Overload</h3>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] max-w-xs">Pushing 17x beyond the god-level limit. Unbound cosmic potential.</p>
            </div>
          </div>
        </div>

        <footer className="mt-auto flex justify-between items-end">
          <div className="flex gap-16">
            <div className="flex flex-col gap-2">
              <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.5em]">Cosmic Stability</p>
              <div className="flex gap-1">
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map(i => (
                  <div key={i} className="w-1.5 h-6 bg-rose-500/40 rounded-full atomic-glow"></div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.5em]">Dark Energy Flow</p>
              <p className="text-xl font-black text-indigo-400 tracking-widest">MAXIMUM</p>
            </div>
          </div>
          
          <div className="glass-morphism px-12 py-6 rounded-[32px] border-white/5 flex items-center gap-6">
            <Dna className="text-white animate-pulse" size={24} />
            <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Genetic Perfection: 1700% Optimal</p>
          </div>
        </footer>
      </div>
    </motion.section>
  );
}
