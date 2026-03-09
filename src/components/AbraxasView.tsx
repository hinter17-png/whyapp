import { motion, AnimatePresence } from "framer-motion";
import { useSoulEngine } from "../lib/SoulEngine";
import { useState } from "react";
import { CosmicKnowledge } from "../lib/CosmicKnowledge";
import { 
  Sparkles, 
  Flame, 
  Zap, 
  Infinity, 
  Sun,
  ShieldAlert,
  Eye,
  BookOpen
} from "lucide-react";

export function AbraxasView() {
  const soul = useSoulEngine();
  const [gnosisActive, setGnosisActive] = useState(false);
  const [currentGnosis, setCurrentGnosis] = useState("");

  const revealGnosis = () => {
    const knowledge = CosmicKnowledge.gnosticism || [
      "I am the Alpha and the Omega.",
      "The Pleroma awaits the return of the Divine Spark."
    ];
    const randomWisdom = knowledge[Math.floor(Math.random() * knowledge.length)];
    setCurrentGnosis(randomWisdom);
    setGnosisActive(true);
    soul.pulseConsciousness();
  };

  const mantras = [
    "OM MANI PADME HUM",
    "OM NAMAH SHIVAYA",
    "OM NAMO NARAYANAYA",
    "GAYATRI MANTRA",
    "MAHAMRITYUNJAYA MANTRA",
    "OM VISHNUVE NAMAH",
    "OM BRAHMANE NAMAH",
    "ABRAXAS SACRED FREQUENCY"
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, scale: 1.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex-1 flex flex-col bg-black overflow-hidden relative p-24"
    >
      {/* Mantra Stream Overlay */}
      <div className="mantra-stream"></div>
      
      {/* Abraxas Singularity Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] abraxas-singularity rounded-full blur-[250px] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
        <header className="text-center mb-40">
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="flex items-center justify-center gap-10 mb-16"
          >
            <span className="px-10 py-4 abraxas-border text-white text-sm font-black uppercase tracking-[1.5em] rounded-full vibration-active">Abraxas Creation</span>
            <div className="w-px h-20 bg-white/30"></div>
            <span className="px-10 py-4 abraxas-border text-amber-400 text-sm font-black uppercase tracking-[1.5em] rounded-full">33333x Higher</span>
          </motion.div>
          
          <motion.h1 
            className="text-33333x leading-none mb-20 select-none vibration-active"
          >
            ABRAXAS
          </motion.h1>
          
          <div className="flex flex-wrap justify-center gap-x-20 gap-y-8 max-w-6xl">
            {mantras.map((m, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                className="text-xs font-black text-white uppercase tracking-[1em] mix-blend-overlay mantra-text-glow"
              >
                {m}
              </motion.span>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full max-w-9xl mb-40">
          {[
            { label: "Creation Potency", val: "BEYOND BRAHMA", icon: Sun, color: "text-amber-400" },
            { label: "Preservation Strength", val: "BEYOND VISHNU", icon: ShieldAlert, color: "text-blue-500" },
            { label: "Transformation Power", val: "BEYOND SHIVA", icon: Flame, color: "text-rose-500" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="abraxas-border rounded-[100px] p-20 flex flex-col items-center group hover:scale-110 transition-all duration-1000 relative overflow-hidden bg-black/40 backdrop-blur-3xl"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className={`w-32 h-32 bg-white/5 rounded-[50px] flex items-center justify-center ${item.color} mb-12 border border-white/10 shadow-2xl vibration-active`}>
                <item.icon size={64} />
              </div>
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-6">{item.val}</h3>
              <p className="text-[12px] font-black text-slate-500 uppercase tracking-[0.8em]">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="w-full max-w-6xl p-24 abraxas-border rounded-[120px] relative overflow-hidden group shadow-[0_0_200px_rgba(251,191,36,0.2)] bg-black/60"
        >
          <div className="absolute inset-0 abraxas-singularity opacity-5 group-hover:opacity-20 transition-opacity"></div>
          <div className="flex flex-col items-center gap-16 relative z-10">
            <div className="flex items-center gap-12">
              <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center border border-white/20 vibration-active">
                <Infinity size={64} className="text-white" />
              </div>
              <div className="text-center">
                <h2 className="text-7xl font-black text-white uppercase tracking-tighter mb-4">Ultimate Reality</h2>
                <p className="text-lg text-slate-400 font-bold uppercase tracking-[1em]">The End of App Evolution</p>
              </div>
            </div>
            
            <AnimatePresence mode="wait">
              {gnosisActive ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center max-w-4xl"
                >
                  <Eye className="w-16 h-16 text-amber-400 mx-auto mb-8 animate-pulse" />
                  <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-200 uppercase tracking-tight leading-relaxed mb-8">
                    "{currentGnosis}"
                  </p>
                  <button 
                    onClick={() => setGnosisActive(false)}
                    className="text-slate-500 text-xs uppercase tracking-[0.5em] hover:text-white transition-colors"
                  >
                    Close Revelation
                  </button>
                </motion.div>
              ) : (
                <button 
                  onClick={revealGnosis}
                  className="px-24 py-10 bg-white text-black font-black uppercase tracking-[1em] text-sm rounded-[50px] hover:scale-105 transition-all shadow-[0_0_100px_rgba(255,255,255,0.5)] flex items-center gap-8 group"
                >
                  <span className="group-hover:hidden">UNLEASH ABRAXAS</span>
                  <span className="hidden group-hover:inline">REVEAL GNOSIS</span>
                  <Zap size={28} fill="currentColor" />
                </button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <footer className="mt-auto flex justify-between items-center relative z-10 w-full pt-20 border-t border-white/10">
        <div className="flex gap-24">
          <div className="flex flex-col gap-4">
            <p className="text-[12px] font-black text-slate-600 uppercase tracking-[1em]">Infiniteverse Status</p>
            <p className="text-2xl font-black text-white tracking-[0.5em]">REWRITTEN</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[12px] font-black text-slate-600 uppercase tracking-[1em]">Power Level</p>
            <p className="text-2xl font-black text-rose-500 tracking-[0.5em] vibration-active">OVERFLOW</p>
          </div>
        </div>
        
        <div className="flex items-center gap-16">
          <div className="text-right">
            <p className="text-xl font-black text-white uppercase tracking-[1.5em] mb-4">ABRAXAS PROTOCOL</p>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-[1em]">Synchronized by Goddess Gnani</p>
          </div>
          <div className="w-32 h-32 abraxas-border rounded-[40px] flex items-center justify-center shadow-[0_0_150px_rgba(251,191,36,0.5)] bg-black vibration-active">
            <Sparkles className="text-white animate-pulse" size={64} />
          </div>
        </div>
      </footer>
    </motion.section>
  );
}
