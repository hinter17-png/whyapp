import { motion } from "framer-motion";
import { useState } from "react";
// @ts-ignore
import { Search, ShoppingCart, Gamepad2, Compass, LayoutGrid, Star, Zap, MoreHorizontal, Heart } from "lucide-react";
import { useSoulEngine } from "../lib/SoulEngine";

export function MiniAppsView() {
  const soul = useSoulEngine();
  const [activeApps, setActiveApps] = useState<number[]>([]);
  const [launching, setLaunching] = useState<number | null>(null);

  const handleInitialize = (id: number) => {
    setLaunching(id);
    setTimeout(() => {
      setActiveApps(prev => [...prev, id]);
      setLaunching(null);
    }, 1500);
  };

  const apps = [
    { id: 1, name: "HyperMarket", category: "Shopping", icon: ShoppingCart, color: "bg-orange-500", rating: 4.8 },
    { id: 2, name: "Neon Quest", category: "Gaming", icon: Gamepad2, color: "bg-pink-500", rating: 4.9 },
    { id: 3, name: "Zen Flow", category: "Health", icon: Compass, color: "bg-cyan-500", rating: 4.7 },
    { id: 4, name: "Tasker Pro", category: "Utility", icon: LayoutGrid, color: "bg-indigo-500", rating: 4.6 },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col bg-[#020617] overflow-hidden p-10 relative"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

      <header className="flex justify-between items-end mb-12 relative z-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 mb-2">
            <span className={`px-4 py-1.5 bg-white/5 ${soul.emotionalResonance === 'compassionate' ? 'text-rose-400 border-rose-500/30' : 'text-slate-500 border-white/10'} text-[10px] font-black uppercase tracking-[0.5em] border rounded-full flex items-center gap-2 transition-all`}>
              <Heart size={10} className="animate-pulse" /> Soul Resonance: {soul.emotionalResonance}
            </span>
          </div>
          <h1 className="text-5xl font-black text-white mb-2 tracking-tighter uppercase omega-text">Supreme Apps</h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">Secure sandboxed mini-program ecosystem</p>
        </div>
        <div className="relative w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search NEURAL PROGRAMS..."
            className="w-full glass-morphism border-white/5 rounded-2xl py-4 pl-12 pr-4 text-xs text-white focus:ring-1 focus:ring-indigo-500 transition-all outline-none shadow-2xl placeholder:text-slate-600 font-black uppercase tracking-widest"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 relative z-10">
        {apps.map((app) => (
          <div key={app.id} className="supreme-card hover:bg-white/5 p-8 rounded-[40px] border-white/5 transition-all group cursor-pointer shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className={`w-16 h-16 ${app.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-2xl group-hover:scale-110 transition-transform relative z-10`}>
              <app.icon size={32} />
            </div>
            <div className="flex justify-between items-start mb-2 relative z-10">
              <h3 className="font-black text-xl text-white tracking-tight uppercase group-hover:text-indigo-400 transition-colors">{app.name}</h3>
              <div className="flex items-center gap-1 text-amber-500">
                <Star size={14} fill="currentColor" />
                <span className="text-xs font-black">{app.rating}</span>
              </div>
            </div>
            <p className="text-[10px] text-slate-500 font-black mb-8 uppercase tracking-[0.2em] relative z-10">{app.category}</p>
            <button 
              onClick={() => !activeApps.includes(app.id) && handleInitialize(app.id)}
              disabled={launching === app.id}
              className={`w-full py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border border-white/10 relative z-10 shadow-xl ${
                activeApps.includes(app.id) 
                  ? 'bg-green-500 text-white cursor-default' 
                  : launching === app.id 
                    ? 'bg-indigo-600 animate-pulse text-white' 
                    : 'bg-white/5 group-hover:bg-indigo-600 text-white'
              }`}
            >
              {activeApps.includes(app.id) ? "Active" : launching === app.id ? "Initializing..." : "Initialize"}
            </button>
          </div>
        ))}
      </div>

      <div className="flex-1 flex flex-col gap-8 relative z-10">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] flex items-center gap-3">
            <Zap size={20} className="text-amber-500 animate-pulse" />
            Hyper Trending
          </h3>
          <button className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] hover:text-indigo-300">Global Registry</button>
        </div>

        <div className="flex-1 glass-morphism rounded-[40px] border-white/5 overflow-hidden p-8 grid grid-cols-1 gap-4 overflow-y-auto custom-scrollbar no-scrollbar shadow-2xl">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-6 p-6 hover:bg-white/5 rounded-[32px] transition-all cursor-pointer group border border-transparent hover:border-white/5">
              <div className="w-20 h-20 bg-slate-900 rounded-[24px] flex-shrink-0 overflow-hidden relative shadow-2xl border border-white/5">
                <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=app${i}`} alt="App Icon" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-black text-xl text-white mb-1 uppercase tracking-tight group-hover:text-indigo-400 transition-colors">Neural Module {i}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-2xl">Deploying supreme level productivity tools. Integrated with WHY-AI and E2EE data streams for infinite scalability.</p>
              </div>
              <div className="flex flex-col items-end gap-3">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[8px] font-black rounded-full uppercase tracking-widest border border-indigo-500/20">Supreme</span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 text-[8px] font-black rounded-full uppercase tracking-widest border border-green-500/20">Verified</span>
                </div>
                <button className="p-3 hover:bg-white/5 rounded-xl transition-all text-slate-500 hover:text-white border border-transparent hover:border-white/10">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
