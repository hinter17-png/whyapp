import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Play, 
  Pause,
  SkipBack, 
  SkipForward, 
  Heart, 
  Repeat, 
  Shuffle, 
  Music, 
  Disc, 
  ListMusic, 
  Search,
  Mic2,
  Volume2,
  Activity,
  Compass
} from "lucide-react";
import { useSoulEngine } from "../lib/SoulEngine";

export function MusicView() {
  const soul = useSoulEngine();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongId, setCurrentSongId] = useState(1);
  const [progress, setProgress] = useState(30); // Percentage

  const songs = [
    { id: 1, title: "Cyberpunk Night", artist: "Neon Drift", duration: "3:45", cover: "https://api.dicebear.com/7.x/shapes/svg?seed=music1" },
    { id: 2, title: "Digital Horizon", artist: "Synth Wave", duration: "4:12", cover: "https://api.dicebear.com/7.x/shapes/svg?seed=music2" },
    { id: 3, title: "Binary Dreams", artist: "Code Flow", duration: "2:58", cover: "https://api.dicebear.com/7.x/shapes/svg?seed=music3" },
    { id: 4, title: "Silicon Soul", artist: "Neural Link", duration: "5:20", cover: "https://api.dicebear.com/7.x/shapes/svg?seed=music4" },
  ];

  const currentSong = songs.find(s => s.id === currentSongId) || songs[0];

  const togglePlay = () => setIsPlaying(!isPlaying);
  const nextSong = () => setCurrentSongId(prev => prev === 4 ? 1 : prev + 1);
  const prevSong = () => setCurrentSongId(prev => prev === 1 ? 4 : prev - 1);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(p => p >= 100 ? 0 : p + 0.5);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col bg-[#020617] overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 w-full h-full animated-gradient opacity-5 pointer-events-none"></div>
      
      <div className="flex-1 flex overflow-hidden relative z-10">
        {/* Left Side: Navigation & Library */}
        <div className="w-72 glass-morphism border-r border-white/5 flex flex-col p-8 gap-10">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search NEURAL AUDIO..."
              className="w-full bg-white/5 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-[10px] text-white focus:ring-1 focus:ring-indigo-500 outline-none font-black uppercase tracking-widest placeholder:text-slate-700"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em] px-2">Neural Discovery</h3>
            <div className="flex items-center gap-3 px-2 mb-2">
              <Activity size={12} className={`${soul.emotionalResonance === 'energetic' ? 'text-amber-400' : 'text-slate-500'} animate-pulse`} />
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Resonance: {soul.emotionalResonance}</span>
            </div>
            <button className="flex items-center gap-4 p-3 text-indigo-400 bg-indigo-500/10 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-indigo-500/20 shadow-lg">
              <Compass size={20} /> Explore
            </button>
            <button className="flex items-center gap-4 p-3 text-slate-500 hover:text-white hover:bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
              <Mic2 size={20} /> Artists
            </button>
            <button className="flex items-center gap-4 p-3 text-slate-500 hover:text-white hover:bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
              <Music size={20} /> Albums
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em] px-2">Data Vault</h3>
            <button className="flex items-center gap-4 p-3 text-slate-500 hover:text-white hover:bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
              <Heart size={20} /> Favorites
            </button>
            <button className="flex items-center gap-4 p-3 text-slate-500 hover:text-white hover:bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
              <ListMusic size={20} /> Playlists
            </button>
          </div>
        </div>

        {/* Main Music Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar no-scrollbar p-10">
          <header className="mb-12 relative group">
            <div className="h-80 rounded-[50px] overflow-hidden relative shadow-2xl supreme-card">
              <div className="absolute inset-0 animated-gradient opacity-30"></div>
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
              <div className="absolute bottom-0 left-0 p-12 flex gap-10 items-end">
                <div className="w-48 h-48 glass-morphism rounded-[40px] shadow-2xl flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform duration-700">
                  <Disc className="text-white/20 animate-spin-slow" size={100} />
                </div>
                <div>
                  <span className="px-4 py-1.5 bg-amber-500 text-[9px] font-black rounded-full uppercase tracking-[0.3em] mb-6 inline-block shadow-lg">Supreme Curation</span>
                  <h1 className="text-7xl font-black text-white mb-4 tracking-tighter uppercase omega-text">Omega Beats</h1>
                  <p className="text-white/60 font-bold uppercase tracking-[0.2em] text-xs">Architected for high-performance neural nodes. 24 transmissions • 1h 45m</p>
                </div>
              </div>
            </div>
          </header>

          <div className="space-y-3">
            <div className="grid grid-cols-12 px-6 py-4 text-[9px] font-black text-slate-600 uppercase tracking-[0.4em]">
              <div className="col-span-1">#</div>
              <div className="col-span-6">Transmission</div>
              <div className="col-span-3">Entity</div>
              <div className="col-span-2 text-right">Time</div>
            </div>
            {songs.map((song, i) => (
              <div 
                key={song.id} 
                onClick={() => { setCurrentSongId(song.id); setIsPlaying(true); }}
                className={`grid grid-cols-12 items-center p-5 rounded-[24px] transition-all cursor-pointer group border border-transparent hover:border-white/5 ${currentSongId === song.id ? 'bg-white/10' : 'hover:bg-white/5'}`}
              >
                <div className={`col-span-1 font-black group-hover:text-indigo-400 ${currentSongId === song.id ? 'text-indigo-400' : 'text-slate-600'}`}>
                  {currentSongId === song.id && isPlaying ? <Activity size={14} className="animate-pulse" /> : i + 1}
                </div>
                <div className="col-span-6 flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-2xl border border-white/5 group-hover:scale-105 transition-transform">
                    <img src={song.cover} alt={song.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-black text-white truncate uppercase tracking-tight group-hover:text-indigo-400 transition-colors">{song.title}</h4>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{song.artist}</p>
                  </div>
                </div>
                <div className="col-span-3 text-[10px] text-slate-500 font-black uppercase tracking-widest">{song.artist}</div>
                <div className="col-span-2 text-right text-[10px] text-slate-600 font-black group-hover:text-white transition-colors">{song.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Player Controller */}
      <footer className="h-28 glass-morphism border-t border-white/5 flex items-center px-10 gap-10 relative z-20">
        <div className="flex items-center gap-6 w-1/4">
          <div className="w-16 h-16 rounded-[20px] overflow-hidden shadow-2xl border border-white/10 animate-float">
            <img src={currentSong.cover} alt="Now Playing" className="w-full h-full object-cover" />
          </div>
          <div className="min-w-0">
            <h4 className="text-lg font-black text-white truncate tracking-tight uppercase omega-text">{currentSong.title}</h4>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{currentSong.artist}</p>
          </div>
          <button className="text-slate-600 hover:text-pink-500 transition-colors ml-4 hover:scale-110 active:scale-95">
            <Heart size={24} className={currentSongId === 1 ? "fill-pink-500 text-pink-500" : ""} />
          </button>
        </div>

        <div className="flex-1 flex flex-col gap-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-10">
            <button className="text-slate-600 hover:text-white transition-colors"><Shuffle size={20} /></button>
            <button onClick={prevSong} className="text-slate-400 hover:text-white transition-all hover:scale-110"><SkipBack size={28} fill="currentColor" /></button>
            <button 
              onClick={togglePlay}
              className="w-16 h-16 bg-white rounded-[24px] flex items-center justify-center text-black hover:scale-110 transition-all shadow-2xl shadow-white/10 group"
            >
              {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
            </button>
            <button onClick={nextSong} className="text-slate-400 hover:text-white transition-all hover:scale-110"><SkipForward size={28} fill="currentColor" /></button>
            <button className="text-slate-600 hover:text-white transition-colors"><Repeat size={20} /></button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest min-w-[40px]">{(progress * 3.5 / 100).toFixed(2).replace('.',':')}</span>
            <div className="flex-1 h-1.5 bg-white/5 rounded-full relative group cursor-pointer overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 animated-gradient rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)] transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest min-w-[40px]">{currentSong.duration}</span>
          </div>
        </div>

        <div className="w-1/4 flex items-center justify-end gap-6">
          <button className="text-slate-500 hover:text-white transition-colors hover:scale-110"><Volume2 size={24} /></button>
          <div className="w-32 h-1 bg-white/5 rounded-full relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-2/3 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
          </div>
          <button className="text-slate-500 hover:text-white transition-colors hover:scale-110"><ListMusic size={24} /></button>
        </div>
      </footer>
    </motion.section>
  );
}

