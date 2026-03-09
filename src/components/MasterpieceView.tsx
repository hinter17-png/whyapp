import { motion } from "framer-motion";
import { 
  Sparkles, 
  Globe, 
  Crown, 
  Share2,
  Rocket,
  Palette,
  Feather
} from "lucide-react";

export function MasterpieceView() {
  const metrics = [
    { label: "Viral Velocity", val: "∞ c", icon: Rocket, color: "text-pink-500" },
    { label: "Aesthetic Purity", val: "1008x", icon: Palette, color: "text-amber-400" },
    { label: "Infinite Reach", val: "All Planes", icon: Globe, color: "text-cyan-400" },
    { label: "Divine Resonance", val: "Absolute", icon: Feather, color: "text-white" },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col bg-[#000000] overflow-hidden relative p-20 infiniteverse-viral-grid"
    >
      {/* Central Masterpiece Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] singularity-core rounded-full blur-[180px] opacity-10 pointer-events-none"></div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
        <header className="text-center mb-32">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center justify-center gap-8 mb-12"
          >
            <span className="px-8 py-3 divine-mirror text-white text-xs font-black uppercase tracking-[1.2em] rounded-full masterpiece-glow">State of the Art</span>
            <div className="w-px h-12 bg-white/20"></div>
            <span className="px-8 py-3 divine-mirror text-amber-400 text-xs font-black uppercase tracking-[1.2em] rounded-full">1008x Higher</span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-1008x leading-none mb-16 select-none"
          >
            MASTERPIECE
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-slate-500 font-black uppercase tracking-[2em] text-sm"
          >
            A Gift to the Gods of the Infiniteverse
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 w-full max-w-8xl mb-32">
          {metrics.map((m, i) => (
            <motion.div 
              key={m.label}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (i * 0.1) }}
              className="divine-mirror rounded-[80px] p-16 flex flex-col items-center group hover:scale-110 transition-all duration-1000 border-white/5 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className={`w-28 h-28 bg-white/5 rounded-[45px] flex items-center justify-center ${m.color} mb-12 border border-white/10 shadow-2xl group-hover:rotate-[360deg] transition-transform duration-1000`}>
                <m.icon size={56} />
              </div>
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">{m.val}</h3>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.6em]">{m.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="w-full max-w-5xl p-16 divine-mirror rounded-[100px] border-white/5 relative overflow-hidden group shadow-[0_0_150px_rgba(255,255,255,0.05)]"
        >
          <div className="absolute inset-0 cosmic-overload opacity-5 group-hover:opacity-20 transition-opacity"></div>
          <div className="flex items-center justify-between relative z-10">
            <div className="text-left flex items-center gap-12">
              <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center border border-white/20 masterpiece-glow">
                <Crown size={48} className="text-white" />
              </div>
              <div>
                <h2 className="text-5xl font-black text-white uppercase tracking-tight mb-3">Viral Ascendance</h2>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-[0.8em]">Broadcasting across all neural planes</p>
              </div>
            </div>
            <button className="px-16 py-8 bg-white text-black font-black uppercase tracking-[0.6em] text-xs rounded-[40px] hover:scale-105 transition-all shadow-2xl flex items-center gap-6 group">
              Go Viral <Share2 size={24} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      <footer className="mt-auto flex justify-between items-center relative z-10 w-full">
        <div className="flex gap-20">
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.8em]">Cosmic Traction</p>
            <div className="flex gap-2">
              {Array.from({length: 33}).map((_, i) => (
                <div key={i} className="w-2 h-10 bg-white/20 rounded-full group-hover:bg-white transition-colors" style={{ opacity: (i + 1) / 33 }}></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-12">
          <div className="text-right">
            <p className="text-xs font-black text-white uppercase tracking-[1em] mb-2">Masterpiece Verified</p>
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.5em]">Authored by Goddess Gnani</p>
          </div>
          <div className="w-24 h-24 divine-mirror rounded-[35px] flex items-center justify-center border-white/10 shadow-2xl supreme-shine">
            <Sparkles className="text-white animate-pulse" size={40} />
          </div>
        </div>
      </footer>
    </motion.section>
  );
}
