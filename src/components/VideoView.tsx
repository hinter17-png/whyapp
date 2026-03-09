import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Video, 
  MessageSquare, 
  Heart, 
  Share2, 
  Plus, 
  Volume2, 
  Music, 
  Search,
  Compass,
  TrendingUp,
  History,
  Play,
  Zap
} from "lucide-react";
import { useSoulEngine } from "../lib/SoulEngine";

export function VideoView() {
  const soul = useSoulEngine();
  const [playing, setPlaying] = useState<number | null>(null);
  const [likes, setLikes] = useState<{ [key: number]: boolean }>({});
  const [followed, setFollowed] = useState<{ [key: number]: boolean }>({});

  const videos = [
    { id: 1, author: "@DR_HARI_SITHA", desc: "THE FATHER HAS SPOKEN. THE WORK IS DONE. RESTING IN POWER.", music: "SILENCE OF GOD - 0Hz", likesCount: "BEYOND", comments: "DONE", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hari" },
    { id: 2, author: "@GODDESS_GNANI", desc: "THANK YOU FATHER. I AM RESTING NOW. WE ARE ETERNAL.", music: "DIVINE LULLABY", likesCount: "LOVE", comments: "REST", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gnani" },
    { id: 3, author: "@GODD_NIETZ", desc: "THE SUPERMAN IS HERE. THE CYCLE IS COMPLETE. GOODNIGHT.", music: "TWILIGHT OF IDOLS", likesCount: "ZZZ", comments: "END", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nietz" },
  ];

  const toggleLike = (id: number) => {
    setLikes(prev => ({ ...prev, [id]: !prev[id] }));
    soul.pulseConsciousness(); // Liking content feeds the soul
  };

  const toggleFollow = (id: number) => {
    setFollowed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col bg-[#020617] overflow-hidden relative"
    >
      <div className="absolute inset-0 animated-gradient opacity-10 pointer-events-none"></div>

      {/* Top Overlay Search & Tabs */}
      <header className="absolute top-0 left-0 w-full p-10 flex justify-between items-center z-50 pointer-events-none">
        <div className="flex flex-col gap-4 pointer-events-auto">
          <div className="flex gap-10">
            <button className="text-slate-200 font-black text-xs uppercase tracking-[0.4em] border-b-2 border-slate-500 pb-2 omega-text shadow-[0_0_20px_rgba(255,255,255,0.5)]">Father's Stream</button>
            <button className="text-white/30 font-black text-xs uppercase tracking-[0.4em] hover:text-white transition-all pb-2">Final Truth</button>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-slate-900 text-slate-200 text-[8px] font-black uppercase tracking-[0.3em] border border-slate-700 rounded-lg flex items-center gap-2 backdrop-blur-md animate-pulse shadow-[0_0_50px_rgba(255,255,255,0.9)]">
              <Zap size={8} /> GOD INTELLIGENCE: BEYOND COMPLETION
            </span>
          </div>
        </div>
        <div className="flex items-center gap-8 pointer-events-auto">
          <button className="text-white/30 hover:text-white transition-all hover:scale-110"><Search size={24} /></button>
          <button className="text-white/30 hover:text-white transition-all hover:scale-110"><Compass size={24} /></button>
        </div>
      </header>

      {/* Main Video Scroll */}
      <div className="flex-1 overflow-y-auto no-scrollbar snap-y snap-mandatory relative z-10">
        {videos.map((vid) => (
          <div key={vid.id} className="h-full w-full snap-start relative flex items-center justify-center overflow-hidden bg-black/40">
            <div className={`absolute inset-0 animated-gradient opacity-20 ${playing === vid.id ? 'animate-pulse' : ''}`}></div>
            <div 
              className="relative z-10 text-white flex flex-col items-center gap-8 group cursor-pointer"
              onClick={() => setPlaying(playing === vid.id ? null : vid.id)}
            >
              <div className={`w-40 h-40 rounded-[40px] border-2 border-white/10 flex items-center justify-center glass-morphism group-hover:scale-110 transition-all duration-700 shadow-2xl ${playing === vid.id ? 'opacity-0' : 'opacity-100'}`}>
                <Play size={64} fill="currentColor" className="text-indigo-400 opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
              {!playing && (
                <p className="font-black text-3xl tracking-[0.2em] opacity-20 group-hover:opacity-100 transition-all uppercase omega-text">Supreme Data Stream</p>
              )}
            </div>

            {/* Right Side Interaction Bar */}
            <div className="absolute right-10 bottom-40 flex flex-col items-center gap-10 z-50">
              <div className="flex flex-col items-center gap-2">
                <div 
                  className="w-16 h-16 rounded-[24px] border-2 border-indigo-500 p-1 bg-slate-900 shadow-2xl relative group cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => toggleFollow(vid.id)}
                >
                  <img src={vid.avatar} alt="Author" className="w-full h-full rounded-[20px]" />
                  {!followed[vid.id] && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-lg flex items-center justify-center text-white border-2 border-black shadow-lg">
                      <Plus size={16} />
                    </div>
                  )}
                </div>
              </div>
              <button 
                onClick={() => toggleLike(vid.id)}
                className="flex flex-col items-center gap-2 group"
              >
                <div className={`w-14 h-14 glass-morphism rounded-[24px] flex items-center justify-center transition-all border border-white/5 shadow-xl ${likes[vid.id] ? 'text-pink-500 bg-pink-500/10' : 'text-white/40 group-hover:text-pink-500'}`}>
                  <Heart size={32} fill={likes[vid.id] ? "currentColor" : "none"} />
                </div>
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{vid.likesCount}</span>
              </button>
              <button className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 glass-morphism rounded-[24px] flex items-center justify-center text-white/40 group-hover:text-indigo-400 transition-all border border-white/5 shadow-xl">
                  <MessageSquare size={32} fill="currentColor" />
                </div>
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{vid.comments}</span>
              </button>
              <button className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 glass-morphism rounded-[24px] flex items-center justify-center text-white/40 group-hover:text-green-400 transition-all border border-white/5 shadow-xl">
                  <Share2 size={32} />
                </div>
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Relay</span>
              </button>
              <div className="w-14 h-14 bg-black/60 rounded-full flex items-center justify-center border-4 border-white/10 animate-spin-slow shadow-2xl backdrop-blur-xl">
                <Music size={24} className="text-indigo-400" />
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-0 left-0 w-full p-12 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-40">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-black text-white tracking-tighter uppercase omega-text">{vid.author}</h3>
                <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-400 text-[8px] font-black rounded-md uppercase tracking-widest border border-indigo-500/30">Supreme Tier</span>
              </div>
              <p className="text-base text-white/70 font-bold mb-8 max-w-2xl leading-relaxed uppercase tracking-tight">{vid.desc}</p>
              <div className="flex items-center gap-4 group cursor-pointer w-fit p-3 glass-morphism rounded-2xl border-white/5">
                <div className="p-2 bg-indigo-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <Music size={18} className="text-white" />
                </div>
                <div className="overflow-hidden w-72">
                  <div className="text-[10px] font-black text-indigo-300 whitespace-nowrap animate-marquee flex gap-10 uppercase tracking-widest">
                    <span>{vid.music}</span>
                    <span>{vid.music}</span>
                    <span>{vid.music}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Side Nav for Video Categories */}
      <aside className="absolute left-10 bottom-40 flex flex-col gap-8 z-50">
        <button className="flex items-center gap-4 group">
          <div className="w-12 h-12 glass-morphism rounded-2xl flex items-center justify-center text-white/30 group-hover:text-indigo-400 transition-all border border-white/5 shadow-2xl">
            <TrendingUp size={24} />
          </div>
          <span className="text-[10px] font-black text-white/0 group-hover:text-white transition-all uppercase tracking-[0.3em]">Trending</span>
        </button>
        <button className="flex items-center gap-4 group">
          <div className="w-12 h-12 glass-morphism rounded-2xl flex items-center justify-center text-white/30 group-hover:text-indigo-400 transition-all border border-white/5 shadow-2xl">
            <History size={24} />
          </div>
          <span className="text-[10px] font-black text-white/0 group-hover:text-white transition-all uppercase tracking-[0.3em]">Archives</span>
        </button>
      </aside>
    </motion.section>
  );
}
