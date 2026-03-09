import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Globe, 
  Users, 
  Plus, 
  Search, 
  MessageSquare, 
  Zap,
  Star,
  Shield
} from "lucide-react";

export function SpacesView() {
  const [activeSpace, setActiveSpace] = useState<number | null>(null);

  const spaces = [
    { 
      id: 1, 
      name: "WHYAPP Core", 
      members: "10M", 
      desc: "The central nervous system of the Infiniteverse.", 
      icon: Globe, 
      color: "bg-indigo-500", 
      verified: true 
    },
    { 
      id: 2, 
      name: "Gaming Hub", 
      members: "5.2M", 
      desc: "Connect with elite gamers across the multiverse.", 
      icon: Zap, 
      color: "bg-pink-500", 
      verified: true 
    },
    { 
      id: 3, 
      name: "Crypto Lords", 
      members: "3.8M", 
      desc: "DeFi strategies and alpha leaks from the gods.", 
      icon: Shield, 
      color: "bg-amber-500", 
      verified: false 
    },
    { 
      id: 4, 
      name: "Dev Sanctuary", 
      members: "1.1M", 
      desc: "Where code meets consciousness.", 
      icon: Star, 
      color: "bg-cyan-500", 
      verified: true 
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col bg-[#020617] overflow-hidden p-10 relative"
    >
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[150px] -ml-64 -mb-64 pointer-events-none"></div>

      <header className="flex justify-between items-end mb-12 relative z-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-white/5 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] border border-indigo-500/20 rounded-lg flex items-center gap-2">
              <Globe size={10} className="animate-spin-slow" /> Global Network
            </span>
          </div>
          <h1 className="text-5xl font-black text-white mb-2 tracking-tighter uppercase neon-text">Cosmic Spaces</h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">Infinite communities. Zero boundaries.</p>
        </div>
        <div className="flex gap-4">
          <div className="relative w-64 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="DISCOVER REALMS..."
              className="w-full glass-morphism border-white/5 rounded-2xl py-3 pl-10 pr-4 text-[10px] text-white focus:ring-1 focus:ring-indigo-500 transition-all outline-none shadow-2xl placeholder:text-slate-600 font-black uppercase tracking-widest"
            />
          </div>
          <button className="bg-white text-black px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shadow-2xl hover:scale-105 flex items-center gap-2">
            <Plus size={14} /> Create Space
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10 overflow-y-auto custom-scrollbar no-scrollbar pb-20">
        {spaces.map((space) => (
          <motion.div 
            key={space.id}
            whileHover={{ y: -5 }}
            className="supreme-card p-8 rounded-[40px] border-white/5 group cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[300px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className={`w-16 h-16 ${space.color} rounded-[24px] flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform`}>
                  <space.icon size={32} />
                </div>
                {space.verified && (
                  <div className="bg-green-500/10 p-2 rounded-full border border-green-500/20 text-green-500" title="Verified Realm">
                    <ShieldCheck size={16} />
                  </div>
                )}
              </div>
              
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 leading-none group-hover:text-indigo-400 transition-colors">{space.name}</h3>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6 leading-relaxed">{space.desc}</p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users size={14} className="text-slate-400" />
                <span className="text-xs font-black text-white">{space.members}</span>
              </div>
              <button className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-[8px] font-black text-white uppercase tracking-widest transition-all border border-white/5">
                Join Realm
              </button>
            </div>
          </motion.div>
        ))}

        {/* Create New Placeholder */}
        <div className="border-2 border-dashed border-white/10 rounded-[40px] p-8 flex flex-col items-center justify-center text-center gap-6 group hover:border-indigo-500/30 transition-all cursor-pointer min-h-[300px]">
          <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-white group-hover:bg-indigo-600 transition-all">
            <Plus size={32} />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-400 uppercase tracking-widest mb-2 group-hover:text-white transition-colors">Manifest Space</h3>
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Forge a new community</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// Helper component for local usage
function ShieldCheck({ size }: { size: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
