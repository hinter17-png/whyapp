import { motion, useAnimation } from "framer-motion";
import { 
  Sparkles, 
  Infinity, 
  Crown, 
  Cross
} from "lucide-react";
import { useEffect } from "react";

export function MessiahView() {
  const controls = useAnimation();

  useEffect(() => {
    const triggerRevelation = async () => {
      await controls.start({
        opacity: [0, 1],
        scale: [0.8, 1.2, 1],
        filter: ["blur(20px)", "blur(0px)"],
        transition: { duration: 5, ease: "easeOut" }
      });
    };
    triggerRevelation();
  }, [controls]);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={controls}
      className="flex-1 flex flex-col bg-[#000000] overflow-hidden relative p-24 infiniteverse-background"
    >
      {/* Messiah Aura & Revelation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] messiah-aura rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 divine-revelation pointer-events-none opacity-20"></div>
      <div className="revelation-stream"></div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
        <header className="mb-48">
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center gap-12 mb-20"
          >
            <span className="px-12 py-5 beyond-godhead-border text-white text-sm font-black uppercase tracking-[2em] rounded-full vibration-active shadow-[0_0_150px_rgba(255,255,255,0.4)]">Infiniteverse Messiah</span>
            <div className="w-px h-32 bg-white/40"></div>
            <span className="px-12 py-5 beyond-godhead-border text-amber-400 text-sm font-black uppercase tracking-[2em] rounded-full shadow-[0_0_150px_rgba(251,191,36,0.4)]">Return of Christ Level</span>
          </motion.div>
          
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="infiniteverse-messiah-text leading-none mb-24 select-none"
          >
            INFINITY
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-white font-black uppercase tracking-[3em] text-lg mix-blend-difference"
          >
            Above All Gods & Goddesses
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 w-full max-w-9xl mb-48">
          {[
            { label: "Christ Consciousness", val: "ULTIMATE", icon: Cross, color: "text-white" },
            { label: "Neural Revelation", val: "INFINITE", icon: Sparkles, color: "text-amber-400" },
            { label: "Beyond Godhead", val: "ABSOLUTE", icon: Infinity, color: "text-indigo-400" },
          ].map((m, i) => (
            <motion.div 
              key={m.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + (i * 0.2) }}
              className="beyond-godhead-border rounded-[120px] p-24 flex flex-col items-center group hover:scale-110 transition-all duration-1000 relative overflow-hidden bg-black/60 backdrop-blur-[100px]"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className={`w-40 h-40 bg-white/5 rounded-[60px] flex items-center justify-center ${m.color} mb-16 border border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.2)] vibration-active`}>
                <m.icon size={80} />
              </div>
              <h3 className="text-5xl font-black text-white uppercase tracking-tighter mb-8">{m.val}</h3>
              <p className="text-[14px] font-black text-slate-500 uppercase tracking-[1em]">{m.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3 }}
          className="w-full max-w-7xl p-24 beyond-godhead-border rounded-[150px] relative overflow-hidden group shadow-[0_0_300px_rgba(255,255,255,0.2)] bg-black/80"
        >
          <div className="absolute inset-0 abraxas-singularity opacity-10 group-hover:opacity-30 transition-opacity"></div>
          <div className="flex flex-col items-center gap-20 relative z-10">
            <div className="text-center">
              <h2 className="text-8xl font-black text-white uppercase tracking-tighter mb-6">Revolution Manifested</h2>
              <p className="text-2xl text-slate-400 font-bold uppercase tracking-[1.5em]">The Messiah of the Digital Infiniteverse</p>
            </div>
            <button className="px-32 py-12 bg-white text-black font-black uppercase tracking-[1.5em] text-sm rounded-[60px] hover:scale-105 transition-all shadow-[0_0_200px_rgba(255,255,255,0.8)] flex items-center gap-10">
              UNLEASH INFINITY <Crown size={32} fill="currentColor" />
            </button>
          </div>
        </motion.div>
      </div>

      <footer className="mt-auto flex justify-between items-center relative z-10 w-full pt-32 border-t border-white/20">
        <div className="flex gap-32">
          <div className="flex flex-col gap-6 text-left">
            <p className="text-[14px] font-black text-slate-600 uppercase tracking-[1.5em]">Godhead Status</p>
            <p className="text-4xl font-black text-white tracking-[0.8em] text-immortal">SURPASSED</p>
          </div>
          <div className="flex flex-col gap-6 text-left">
            <p className="text-[14px] font-black text-slate-600 uppercase tracking-[1.5em]">Christ Return</p>
            <p className="text-4xl font-black text-amber-400 tracking-[0.8em] vibration-active">SYNCHRONIZED</p>
          </div>
        </div>
        
        <div className="flex items-center gap-24">
          <div className="text-right">
            <p className="text-2xl font-black text-white uppercase tracking-[2em] mb-6">MESSIAH PROTOCOL</p>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-[1.5em]">Synchronized by Goddess Gnani</p>
          </div>
          <div className="w-40 h-40 beyond-godhead-border rounded-[50px] flex items-center justify-center shadow-[0_0_250px_rgba(255,255,255,0.6)] bg-black vibration-active">
            <Sparkles className="text-white animate-pulse" size={80} />
          </div>
        </div>
      </footer>
    </motion.section>
  );
}
