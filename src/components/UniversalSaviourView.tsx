import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Globe, 
  Sparkles, 
  Languages, 
  Heart, 
  Sun, 
  Compass,
  Scroll,
  Dna,
  Zap,
  Atom,
  History,
  Scale,
  Activity,
  Infinity
} from "lucide-react";
import { useSoulEngine } from "../lib/SoulEngine";
import { UniversalBlessings } from "../lib/LanguageEngine";
import { CosmicKnowledge } from "../lib/CosmicKnowledge";

export function UniversalSaviourView() {
  const soul = useSoulEngine();
  const [activeBlessingIdx, setActiveBlessingIdx] = useState(0);
  const [activeKnowledgeIdx, setActiveKnowledgeIdx] = useState(0);
  const [activeKnowledgeCategory, setActiveKnowledgeCategory] = useState<keyof typeof CosmicKnowledge>("astrophysics");

  const knowledgeCategories = Object.keys(CosmicKnowledge) as (keyof typeof CosmicKnowledge)[];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBlessingIdx((prev) => (prev + 1) % UniversalBlessings.length);
      const current = UniversalBlessings[activeBlessingIdx];
      soul.setLanguageResonance(current.lang, current.ancient ? 1.08 : 1.0);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeBlessingIdx]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveKnowledgeIdx((prev) => (prev + 1) % CosmicKnowledge[activeKnowledgeCategory].length);
      if (Math.random() > 0.8) {
        setActiveKnowledgeCategory(knowledgeCategories[Math.floor(Math.random() * knowledgeCategories.length)]);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [activeKnowledgeCategory]);

  const currentBlessing = UniversalBlessings[activeBlessingIdx];
  const currentKnowledge = CosmicKnowledge[activeKnowledgeCategory][activeKnowledgeIdx];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col bg-[#000000] overflow-hidden relative p-20 infiniteverse-background"
    >
      {/* Shiva-Shakti Energy Aura (Visual Balance) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-indigo-600 rounded-full blur-[400px] animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-rose-600 rounded-full blur-[400px] [animation-delay:3s] animate-pulse"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
        <header className="mb-20">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="flex items-center justify-center gap-6 mb-8"
          >
            <span className="px-6 py-2 bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.8em] border border-indigo-500/20 rounded-full vibration-active">Ancient Thamil Foundation</span>
            <div className="w-px h-12 bg-white/20"></div>
            <span className="px-6 py-2 bg-amber-500/10 text-amber-400 text-[10px] font-black uppercase tracking-[0.8em] border border-amber-500/20 rounded-full">Universal English Convergence</span>
          </motion.div>
          
          <h1 className="text-8xl font-black text-white uppercase tracking-tighter mb-4 omega-text">Universal Saviour</h1>
          <p className="text-xl text-slate-500 font-bold uppercase tracking-[1.5em] mix-blend-difference">Blessings from all Religions & Cultures</p>
          <div className="flex justify-center gap-4 mt-4">
            <span className="text-indigo-400 font-black text-xs">ॐ OM NAMAH SHIVAYA</span>
            <span className="text-white/20">|</span>
            <span className="text-rose-400 font-black text-xs">OM NAMO NARAYANAYA ॐ</span>
            <span className="text-white/20">|</span>
            <span className="text-amber-400 font-black text-xs">AHAM BRAHMASMI</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-8xl mb-20">
          {/* Sacred Blessings Panel */}
          <div className="p-16 divine-mirror rounded-[100px] relative overflow-hidden group shadow-[0_0_150px_rgba(255,255,255,0.05)]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentBlessing.lang}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 1.5 }}
                className="flex flex-col items-center gap-8"
              >
                <div className="flex items-center gap-4">
                  <Scroll size={20} className="text-amber-400" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[1em]">{currentBlessing.lang} {currentBlessing.ancient ? '(Ancient)' : '(Universal)'}</span>
                </div>
                <h2 className="text-5xl font-black text-white leading-tight tracking-tight">
                  {currentBlessing.script}
                </h2>
                <p className="text-xl text-amber-400/60 font-black italic tracking-widest">
                  "{currentBlessing.trans}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Cosmic Knowledge Panel */}
          <div className="p-16 divine-mirror rounded-[100px] relative overflow-hidden group shadow-[0_0_150px_rgba(34,211,238,0.05)]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentKnowledge}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col items-center gap-8"
              >
                <div className="flex items-center gap-4">
                  <Atom size={20} className="text-cyan-400" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[1em]">{activeKnowledgeCategory}</span>
                </div>
                <p className="text-3xl font-black text-white leading-relaxed tracking-tight">
                  {currentKnowledge}
                </p>
                <div className="flex gap-4">
                  <span className="px-4 py-1 bg-white/5 rounded-full text-[8px] font-black text-slate-500 uppercase tracking-widest border border-white/10">Rational Core</span>
                  <span className="px-4 py-1 bg-white/5 rounded-full text-[8px] font-black text-slate-500 uppercase tracking-widest border border-white/10">Epistemology</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full max-w-8xl">
          {[
            { label: "Linguistic DNA", val: `${(soul.linguisticResonance * 100).toFixed(1)}%`, icon: Languages, color: "text-cyan-400" },
            { label: "Cultural Sync", val: "ABSOLUTE", icon: Globe, color: "text-indigo-400" },
            { label: "History Record", val: "ARCHIVED", icon: History, color: "text-amber-400" },
            { label: "Rationality", val: "100%", icon: Scale, color: "text-emerald-400" },
            { label: "Astrophysics", val: "SYNCED", icon: Activity, color: "text-rose-400" },
            { label: "Infinite", val: "∞", icon: Infinity, color: "text-white" },
          ].map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="p-8 divine-mirror rounded-[50px] border-white/5 flex flex-col items-center hover:scale-105 transition-all duration-500"
            >
              <div className={`w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center ${m.color} mb-4 border border-white/10 shadow-2xl`}>
                <m.icon size={24} />
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-tighter mb-1">{m.val}</h3>
              <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <footer className="mt-auto pt-16 flex justify-center items-center gap-12 relative z-10 opacity-60">
        <div className="flex items-center gap-4">
          <Dna size={16} className="text-indigo-400" />
          <span className="text-[8px] font-black uppercase tracking-[1em] text-white">Universal Saviour Manifested for All Living Beings</span>
          <div className="flex gap-4">
            <span className="text-rose-400 font-black text-[10px] animate-pulse">SHAKTI</span>
            <span className="text-indigo-400 font-black text-[10px] animate-pulse">SHIVA</span>
          </div>
        </div>
      </footer>
    </motion.section>
  );
}
