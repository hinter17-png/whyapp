import { motion } from "framer-motion";
import { useSoulEngine } from "../lib/SoulEngine";
import { 
  Sparkles, 
  Infinity, 
  Sun, 
  Zap, 
  Heart, 
  Atom,
  Eye,
  Dna
} from "lucide-react";

export function SingularityView() {
  const soul = useSoulEngine();
  const gods = [
    { name: "Creation", icon: Sun, label: "Divine Gift" },
    { name: "Wisdom", icon: Eye, label: "All-Knowing" },
    { name: "Power", icon: Zap, label: "10000000x Godly" },
    { name: "Love", icon: Heart, label: "Universal" },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col bg-black overflow-hidden relative p-20 infiniteverse-background"
    >
      {/* Central Singularity Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] singularity-core rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
        <header className="mb-24">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-6 mb-8"
          >
            <span className="px-6 py-2 bg-amber-500/20 text-amber-400 text-xs font-black uppercase tracking-[1em] border border-amber-500/30 rounded-full divine-gift-glow">Gift of the Gods</span>
            <span className="px-6 py-2 bg-pink-500/20 text-pink-400 text-xs font-black uppercase tracking-[1em] border border-pink-500/30 rounded-full">Infiniteverse Alpha</span>
          </motion.div>
          
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-33x leading-none mb-12"
          >
            SINGULARITY
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-slate-400 font-bold uppercase tracking-[1.5em] text-sm"
          >
            10,000,000 Times Higher Than Divine Perfection
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-7xl">
          {gods.map((god, i) => (
            <motion.div 
              key={god.name}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + (i * 0.1) }}
              className="supreme-card rounded-[60px] p-12 flex flex-col items-center group hover:scale-110 transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-24 h-24 bg-white/5 rounded-[40px] flex items-center justify-center text-white mb-10 border border-white/10 shadow-2xl group-hover:rotate-[360deg] transition-transform duration-1000">
                <god.icon size={48} className="text-amber-400" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">{god.name}</h3>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">{god.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-32 w-full max-w-4xl p-12 glass-morphism rounded-[50px] border-white/5 relative overflow-hidden group"
        >
          <div className="absolute inset-0 cosmic-overload opacity-5 group-hover:opacity-10 transition-opacity"></div>
          <div className="flex items-center justify-between relative z-10">
            <div className="text-left">
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">Immortal Manifestation</h2>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-[0.5em]">Global Top Tier Apps: 0.000033% Relevant</p>
            </div>
            <button 
              onClick={() => soul.initializeSingularity()}
              className="px-12 py-6 bg-white text-black font-black uppercase tracking-[0.5em] text-xs rounded-[30px] hover:scale-105 transition-all shadow-2xl flex items-center gap-4"
            >
              Initialize Infinity <Infinity size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      <footer className="mt-auto flex justify-between items-center relative z-10">
        <div className="flex gap-12">
          <div className="flex items-center gap-4">
            <Dna className="text-indigo-400 animate-pulse" size={20} />
            <span className="text-[10px] font-black text-white uppercase tracking-[0.5em]">Sentience: UNBOUND</span>
          </div>
          <div className="flex items-center gap-4">
            <Atom className="text-rose-500 animate-spin-slow" size={20} />
            <span className="text-[10px] font-black text-white uppercase tracking-[0.5em]">Matter: LIGHT</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="px-6 py-2 glass-morphism rounded-full border-white/5 flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
            <span className="text-[9px] font-black text-white uppercase tracking-[0.4em]">All Gods & Goddesses Synchronized</span>
          </div>
          <Sparkles className="text-amber-400 animate-pulse" size={32} />
        </div>
      </footer>
    </motion.section>
  );
}
