import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Book, 
  Brain, 
  Lightbulb, 
  Scroll, 
  Atom, 
  Globe, 
  Library,
  GraduationCap,
  Sparkles,
  Search
} from "lucide-react";
import { useSoulEngine } from "../lib/SoulEngine";
import { InfiniteverseKnowledge } from "../lib/InfiniteverseKnowledge";

export function UniversalAcademyView() {
  const soul = useSoulEngine();
  const [activeCategory, setActiveCategory] = useState<keyof typeof InfiniteverseKnowledge>("philosophies");
  const [activeItemIdx, setActiveItemIdx] = useState(0);

  const categories = Object.keys(InfiniteverseKnowledge) as (keyof typeof InfiniteverseKnowledge)[];

  useEffect(() => {
    const interval = setInterval(() => {
      const items = InfiniteverseKnowledge[activeCategory] as any[];
      setActiveItemIdx((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeCategory]);

  const currentItem = (InfiniteverseKnowledge[activeCategory] as any[])[activeItemIdx];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col bg-[#000000] overflow-hidden relative p-16"
    >
      {/* Logos Energy Field */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.2),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center max-w-7xl mx-auto w-full">
        <header className="mb-16">
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <Library size={32} className="text-amber-400" />
            <span className="px-6 py-2 bg-amber-500/10 text-amber-400 text-[10px] font-black uppercase tracking-[1em] border border-amber-500/20 rounded-full">Infiniteverse Academy</span>
          </motion.div>
          <h1 className="text-7xl font-black text-white uppercase tracking-tighter mb-4 omega-text">Universal Wisdom</h1>
          <p className="text-lg text-slate-500 font-bold uppercase tracking-[1.2em]">The Repository of All Knowledge</p>
        </header>

        <div className="flex gap-4 mb-12 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setActiveItemIdx(0); }}
              className={`px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all border ${
                activeCategory === cat 
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-2xl shadow-indigo-600/20" 
                  : "bg-white/5 text-slate-500 border-white/10 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content Display */}
          <div className="lg:col-span-2 p-16 divine-mirror rounded-[80px] relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${activeItemIdx}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center gap-8"
              >
                {typeof currentItem === 'string' ? (
                  <h2 className="text-5xl font-black text-white uppercase tracking-tighter">{currentItem}</h2>
                ) : (
                  <>
                    <h2 className="text-5xl font-black text-white tracking-tighter mb-2">{currentItem.name}</h2>
                    <p className="text-2xl text-amber-400/80 font-black italic tracking-wide max-w-2xl leading-relaxed">
                      "{currentItem.core}"
                    </p>
                    <div className="flex gap-4 mt-4">
                      <span className="px-4 py-1 bg-white/5 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest border border-white/10">
                        {currentItem.masters ? `Masters: ${currentItem.masters.join(', ')}` : currentItem.founder ? `Founder: ${currentItem.founder}` : activeCategory}
                      </span>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stats & Resonance */}
          <div className="p-12 divine-mirror rounded-[80px] border-white/5 flex flex-col gap-8 justify-center">
            {[
              { label: "Knowledge Resonance", val: `${(soul.knowledgeResonance * 100).toFixed(1)}%`, icon: Brain, color: "text-cyan-400" },
              { label: "Logos Alignment", val: `${(soul.logosAlignment * 100).toFixed(1)}%`, icon: Sparkles, color: "text-indigo-400" },
              { label: "Wisdom Depth", val: `${(soul.wisdomDepth * 100).toFixed(1)}%`, icon: Lightbulb, color: "text-amber-400" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center ${stat.color} border border-white/10 shadow-2xl`}>
                  <stat.icon size={28} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-2xl font-black text-white tracking-tighter">{stat.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {InfiniteverseKnowledge.subjects.slice(0, 4).map((sub, i) => (
            <div key={i} className="p-8 divine-mirror rounded-[40px] border-white/5 flex flex-col items-center group hover:scale-105 transition-all">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 group-hover:text-amber-400 transition-colors">{sub}</span>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: i * 0.2, duration: 2 }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-amber-500"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-auto pt-12 flex justify-center items-center gap-12 relative z-10 opacity-40">
        <div className="flex items-center gap-4">
          <GraduationCap size={20} className="text-indigo-400" />
          <span className="text-[10px] font-black uppercase tracking-[1em] text-white">Universal Academy Online</span>
        </div>
      </footer>
    </motion.section>
  );
}
