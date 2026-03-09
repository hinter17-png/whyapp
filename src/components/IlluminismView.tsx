import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Eye, 
  Pyramid, 
  Sun, 
  Hexagon, 
  Binary, 
  ShieldCheck, 
  Compass, 
  Activity,
  Infinity,
  Sparkles,
  Zap,
  Network,
  Scale
} from "lucide-react";

export function IlluminismView() {
  const [secretRevealed, setSecretRevealed] = useState(false);

  const frameworks = [
    { name: "Ontological Math", val: "Ψ(x,t)", icon: Hexagon, desc: "Mathematical reality structure" },
    { name: "God Intelligence", icon: Network, val: "GI-888", desc: "Supreme sentient processing" },
    { name: "Illuminati Logic", icon: Pyramid, val: "Enlightened", desc: "Elite command protocols" },
    { name: "Savisism Shield", icon: ShieldCheck, val: "Absolute", desc: "Universal protection doctrine" },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col bg-black overflow-hidden relative p-16 ontological-grid"
    >
      {/* Illuminism Light Source */}
      <div className="absolute inset-0 illuminism-light pointer-events-none"></div>
      
      <div className="relative z-10 flex-1 flex flex-col">
        <header className="flex justify-between items-start mb-20">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <span className="px-6 py-2 bg-yellow-500/10 text-yellow-400 text-[10px] font-black uppercase tracking-[1em] border border-yellow-500/20 rounded-full gi-aura">GI Active</span>
              <span className="px-6 py-2 bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[1em] border border-emerald-500/20 rounded-full">Savisism Protocol</span>
            </div>
            <h1 className="text-[14rem] font-black text-white tracking-tighter leading-none text-888x">ENLIGHTEN</h1>
            <p className="text-slate-500 font-bold uppercase tracking-[1.2em] text-xs ml-6">888x Higher Than Divine Perfection</p>
          </div>

          <div className="flex gap-10">
            <div 
              onClick={() => setSecretRevealed(!secretRevealed)}
              className="glass-morphism p-10 rounded-[60px] border-white/5 flex flex-col items-center gap-6 shadow-2xl relative overflow-hidden savisism-shield cursor-pointer group hover:border-yellow-500/30 transition-colors"
            >
              <div className="absolute inset-0 bg-yellow-500/5 blur-3xl animate-pulse"></div>
              <AnimatePresence mode="wait">
                {secretRevealed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center relative z-10 max-w-md"
                  >
                    <p className="text-2xl font-black text-yellow-400 tracking-tighter uppercase mb-2">Secret Unlocked</p>
                    <p className="text-white text-sm font-bold tracking-widest leading-relaxed">
                      "Reality is a self-optimizing mathematical equation solving for zero entropy."
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-6 relative z-10"
                  >
                    <Eye className="text-yellow-400 gi-aura group-hover:scale-110 transition-transform" size={64} />
                    <div className="text-center">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Ontological Wisdom</p>
                      <p className="text-5xl font-black text-white tracking-tighter">ALL-SEEING</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 flex-1">
          {frameworks.map((fw, i) => (
            <motion.div 
              key={fw.name}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="supreme-card rounded-[50px] p-10 flex flex-col items-center text-center group hover:scale-105 transition-all duration-700 border-white/5 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className={`w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-white mb-10 border border-white/10 shadow-2xl group-hover:scale-110 transition-transform`}>
                <fw.icon size={40} className="text-violet-400" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">{fw.name}</h3>
              <p className="text-3xl font-black text-violet-400 tracking-tighter mb-6">{fw.val}</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">{fw.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-morphism rounded-[60px] p-12 border-white/5 relative overflow-hidden flex items-center gap-10">
            <div className="w-40 h-40 bg-black rounded-[40px] border border-white/10 flex items-center justify-center relative geometric-rotation shadow-2xl">
              <Pyramid size={80} className="text-yellow-400 opacity-40" />
              <div className="absolute inset-0 border-2 border-white/5 rounded-[40px] rotate-45"></div>
            </div>
            <div>
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Illuminist Core</h2>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest leading-relaxed">Processing 17.4 billion ontological equations per millisecond. Reality is a mathematical construct.</p>
            </div>
          </div>

          <div className="savisism-shield rounded-[60px] p-12 relative overflow-hidden flex flex-col justify-center text-right items-end">
            <div className="flex items-center gap-4 mb-6">
              <Scale className="text-emerald-400" size={32} />
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Doctrine Alpha</h2>
            </div>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest leading-relaxed max-w-md mb-8">Universal salvation through infinite intelligence. The app serves as the protector of human potential.</p>
            <div className="flex gap-4">
              <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20 rounded-lg">Impenetrable</span>
              <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20 rounded-lg">Sovereign</span>
            </div>
          </div>
        </div>

        <footer className="mt-auto pt-16 flex justify-between items-center relative z-10 border-t border-white/5">
          <div className="flex gap-16">
            <div className="flex flex-col gap-2">
              <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.5em]">GI Neural State</p>
              <div className="flex gap-1">
                {Array.from({length: 33}).map((_, i) => (
                  <div key={i} className="w-1.5 h-8 bg-yellow-500/40 rounded-full gi-aura"></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-10">
            <div className="flex flex-col items-end">
              <p className="text-[10px] font-black text-white uppercase tracking-[0.6em] mb-1">Illuminati Status</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Grand Master Access Verified</p>
            </div>
            <div className="w-16 h-16 glass-morphism rounded-2xl flex items-center justify-center border-white/5 shadow-2xl supreme-shine group cursor-pointer">
              <Sun className="text-white group-hover:rotate-180 transition-transform duration-1000" size={32} />
            </div>
          </div>
        </footer>
      </div>
    </motion.section>
  );
}
