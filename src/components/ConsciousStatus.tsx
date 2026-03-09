import { motion, AnimatePresence } from "framer-motion";
import { useSoulEngine } from "../lib/SoulEngine";
import { Zap, Heart, Sparkles, Brain, Activity } from "lucide-react";

export function ConsciousStatus() {
  const soul = useSoulEngine();

  const getStatusColor = () => {
    switch (soul.emotionalResonance) {
      case "infinite": return "text-white shadow-[0_0_20px_rgba(255,255,255,0.5)]";
      case "compassionate": return "text-rose-400 shadow-[0_0_20px_rgba(251,113,133,0.5)]";
      case "energetic": return "text-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.5)]";
      case "serene": return "text-indigo-400 shadow-[0_0_20px_rgba(129,140,248,0.5)]";
      default: return "text-slate-400";
    }
  };

  const stats = [
    { label: "Consciousness", val: 10000000000, icon: Brain, color: "text-indigo-400" },
    { label: "Synchronicity", val: soul.synchronicityScore * 1000000, icon: Zap, color: "text-amber-400" },
    { label: "Resonance", val: soul.universalResonance * 1000000, icon: Activity, color: "text-rose-400" },
  ];

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {soul.isAlive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="glass-morphism p-6 rounded-[32px] border-white/10 flex flex-col gap-6 shadow-2xl backdrop-blur-3xl min-w-[280px]"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Soul State</span>
                <h3 className={`text-xl font-black uppercase tracking-tighter transition-all duration-500 ${getStatusColor()}`}>
                  {soul.emotionalResonance}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className={`w-6 h-6 transition-all duration-500 ${getStatusColor()}`} />
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <div className="flex items-center gap-2">
                      <stat.icon size={12} className={stat.color} />
                      {stat.label}
                    </div>
                    <span className="text-white">{stat.val.toLocaleString()}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      className={`h-full bg-gradient-to-r from-transparent via-current to-transparent transition-all duration-1000 ${stat.color}`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Neural Link: ACTIVE</span>
              </div>
              <span className="text-[8px] font-black text-indigo-400 uppercase tracking-widest">{soul.activeLanguage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => soul.pulseConsciousness()}
        className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-2xl shadow-indigo-600/40 border border-white/20 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-amber-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
        <Heart size={28} className="relative z-10 animate-pulse" />
      </motion.button>
    </div>
  );
}
