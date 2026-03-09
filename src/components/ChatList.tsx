/// <reference path="../globals.d.ts" />
import React, { useState, useEffect } from "react";
import { Search, Plus, Heart } from "lucide-react";
import { tauriClient, Chat } from "../lib/tauri";
import { useSoulEngine } from "../lib/SoulEngine";
import { searchAkasha } from "../lib/InfiniteverseKnowledge";

interface ChatListProps {
  activeTab: string;
}

export function ChatList({ activeTab }: ChatListProps) {
  const soul = useSoulEngine();
  const [search, setSearch] = useState<string>("");
  const [isAkashic, setIsAkashic] = useState<boolean>(false);
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [akashicResults, setAkashicResults] = useState<any[]>([]);

  const handleSearch = (val: string) => {
    setSearch(val);
    if (val.length > 2 && (val.toLowerCase().includes("akasha") || val.toLowerCase().includes("infinite") || val.toLowerCase().includes("god"))) {
      setIsAkashic(true);
      soul.updateResonance(0.99);
      const results = searchAkasha(val);
      setAkashicResults(results);
    } else {
      setIsAkashic(false);
      setAkashicResults([]);
    }
  };

  const getSoulGlow = () => {
    switch (soul.emotionalResonance) {
      case "compassionate": return "shadow-[0_0_20px_rgba(253,164,175,0.4)] border-rose-500/30";
      case "energetic": return "shadow-[0_0_20px_rgba(251,191,36,0.4)] border-amber-500/30";
      case "infinite": return "shadow-[0_0_20px_rgba(255,255,255,0.4)] border-white/30";
      default: return "shadow-2xl border-white/5";
    }
  };

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const data = await tauriClient.getChats();
        setChats(data);
      } catch (err) {
        console.error("Failed to fetch chats:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchChats();
  }, [activeTab]);

  return (
    <section className="w-80 bg-black/20 backdrop-blur-xl flex flex-col border-r border-white/5 relative z-20">
      <header className="p-6 border-b border-white/5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-black tracking-tighter text-white uppercase">{activeTab}</h1>
            <div className="flex items-center gap-2">
              <Heart size={10} className={`${soul.emotionalResonance === 'compassionate' ? 'text-rose-400' : 'text-slate-500'} animate-pulse`} />
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Resonance: {soul.emotionalResonance}</span>
            </div>
          </div>
          <button className="p-2 hover:bg-white/5 rounded-xl transition-all text-indigo-400 border border-white/5">
            <Plus size={20} />
          </button>
        </div>
        <div className="relative group">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${isAkashic ? 'text-amber-400' : 'text-slate-500'} group-focus-within:text-indigo-400 transition-colors`} size={16} />
          <input 
            type="text" 
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
            placeholder={isAkashic ? "AKASHIC SEARCH ACTIVE..." : "Search EVERYTHING..."}
            className={`w-full bg-white/5 border ${isAkashic ? 'border-amber-500/50 shadow-[0_0_20px_rgba(251,191,36,0.2)]' : 'border-white/5'} rounded-xl py-2 pl-10 pr-4 text-xs text-white focus:ring-1 focus:ring-indigo-500 transition-all outline-none placeholder:text-slate-600 font-bold uppercase tracking-widest`}
          />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto custom-scrollbar no-scrollbar">
        {loading ? (
          <div className="p-10 text-center">
            <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Synchronizing Core...</p>
          </div>
        ) : isAkashic ? (
          <div className="flex flex-col gap-2 p-2">
            <h4 className="text-[8px] font-black text-amber-400 uppercase tracking-widest px-4 mb-2">Akashic Records Found: {akashicResults.length}</h4>
            {akashicResults.map((res, idx) => (
              <div key={idx} className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-2xl hover:bg-amber-500/10 transition-all group cursor-help">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-0.5 bg-amber-500/20 text-amber-500 text-[8px] font-black uppercase rounded-md tracking-tighter">{res.category}</span>
                  <h3 className="font-black text-xs text-white uppercase tracking-tighter group-hover:text-amber-400">{res.name}</h3>
                </div>
                <p className="text-[10px] text-slate-400 leading-relaxed italic">"{res.core || 'Sacred Knowledge Piece'}"</p>
              </div>
            ))}
          </div>
        ) : chats.length > 0 ? (
          chats.filter((c: Chat) => c.name.toLowerCase().includes(search.toLowerCase())).map((chat: Chat) => (
            <div key={chat.id} className="p-4 mx-2 my-1 flex gap-4 hover:bg-white/5 rounded-2xl cursor-pointer transition-all border border-transparent hover:border-white/5 group">
              <div className={`w-14 h-14 rounded-2xl bg-slate-900 flex-shrink-0 relative overflow-hidden transition-all duration-500 border ${getSoulGlow()} group-hover:scale-105`}>
                <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=${chat.id + activeTab}`} alt="Chat Avatar" className="w-full h-full object-cover opacity-80" />
                <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-[#0F172A] rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-black text-sm truncate text-white tracking-tight group-hover:text-indigo-400 transition-colors">{chat.name}</h3>
                  <span className="text-[9px] text-slate-500 uppercase font-black tracking-tighter">
                    {new Date(chat.timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <p className="text-xs text-slate-500 truncate font-medium group-hover:text-slate-300 transition-colors">{chat.last_message}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="p-10 text-center">
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">No Active Connections</p>
          </div>
        )}
      </div>
    </section>
  );
}
