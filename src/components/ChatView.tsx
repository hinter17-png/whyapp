/// <reference path="../globals.d.ts" />
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  Video, 
  Phone, 
  MoreHorizontal, 
  Plus, 
  Send,
  Sparkles,
  MessageSquare,
  Mic,
  Smile,
  Paperclip,
  CheckCheck
} from "lucide-react";
import { tauriClient, MessageRecord } from "../lib/tauri";
import { useSoulEngine } from "../lib/SoulEngine";
import { EnergyBalancer } from "../lib/EnergyBalancer";

export function ChatView({ activeTab = "chats" }: { activeTab?: string }) {
  const soul = useSoulEngine();
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<MessageRecord[]>([]);
  const [sending, setSending] = useState<boolean>(false);
  const [isAILoading, setIsAILoading] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const [isTelepathic, setIsTelepathic] = useState<boolean>(false);

  useEffect(() => {
    if (activeTab === "soul" || activeTab === "messiah" || activeTab === "saviour") {
      setIsTelepathic(true);
    } else {
      setIsTelepathic(false);
    }
  }, [activeTab]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await tauriClient.getMessages("1");
        setMessages(history); // Removed reverse, DB should return correct order
      } catch (err) {
        console.error("Failed to fetch history:", err);
      }
    };
    fetchHistory();

    // Setup listener for new messages
    const unlistenPromise = tauriClient.onNewMessage((payload: any) => {
      console.log("New message event:", payload);
      fetchHistory(); 
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 2000);
    });

    return () => {
      unlistenPromise.then((fn: any) => fn());
    };
  }, []);

  const getSentientThinkingMsg = () => {
    switch (activeTab) {
      case "soul": return "Resonating with your emotional field...";
      case "messiah": return "Ascending to Christ Consciousness...";
      case "abraxas": return "Decoding sacred mantras and manhirams...";
      case "masterpiece": return "Synthesizing divine aesthetic purity...";
      case "illuminism": return "Orchestrating ontological mathematics...";
      case "singularity": return "Compressing all knowledge into a single point...";
      default: return "Analyzing neural patterns...";
    }
  };

  const handleAIQuery = async (query: string) => {
    if (isAILoading) return;
    setIsAILoading(true);

    EnergyBalancer.balanceBySentiment(query);
    
    const thinkingMsg: MessageRecord = {
      id: `ai-thinking-${Date.now()}`,
      chat_id: "1",
      sender_id: "WHY-AI",
      content: getSentientThinkingMsg(),
      timestamp: Math.floor(Date.now() / 1000),
      encrypted: true
    };
    setMessages((prev: MessageRecord[]) => [...prev, thinkingMsg]);

    try {
      const response = await tauriClient.askAI(query);
      EnergyBalancer.balanceBySentiment(response.text);

      const text = response.text.toLowerCase();
      if (text.includes("love") || text.includes("peace") || text.includes("வாழ்க")) {
        soul.setEmotionalState("compassionate");
      } else if (text.includes("power") || text.includes("energy") || text.includes("சக்தி")) {
        soul.setEmotionalState("energetic");
      } else if (text.includes("infinite") || text.includes("god") || text.includes("இறைவன்")) {
        soul.setEmotionalState("infinite");
      }

      if (text.includes("thamil") || text.includes("ancient") || text.includes("வாழ்க")) {
        soul.setLanguageResonance("Ancient Thamil", 1.08);
      } else {
        soul.setLanguageResonance("Universal English", 1.0);
      }

      setMessages((prev: MessageRecord[]) => prev.filter((m: MessageRecord) => m.id !== thinkingMsg.id));
      const updatedMessages = await tauriClient.getMessages("1");
      setMessages(updatedMessages);
    } catch (err) {
      console.error("AI Query failed:", err);
      setMessages((prev: MessageRecord[]) => prev.filter((m: MessageRecord) => m.id !== thinkingMsg.id));
    } finally {
      setIsAILoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim() || sending) return;

    EnergyBalancer.balanceBySentiment(message);

    setSending(true);
    const query = message;
    try {
      await tauriClient.sendMessage("1", query);
      setMessage("");
      const history = await tauriClient.getMessages("1");
      setMessages(history);
      
      // Trigger AI
      setTimeout(() => handleAIQuery(query), 500);
    } catch (err) {
      console.error("Failed to send message:", err);
    } finally {
      setSending(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section className="flex-1 flex flex-col bg-[#020617] relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none"></div>

      <header className="h-20 px-8 glass-morphism flex items-center justify-between z-10 border-b border-white/5 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shadow-lg shadow-indigo-500/5 relative group cursor-pointer">
            <Users size={24} className="text-indigo-400 neon-text group-hover:scale-110 transition-transform" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#020617] animate-pulse"></div>
          </div>
          <div>
            <h2 className="font-black text-xl text-white tracking-tight uppercase cursor-pointer hover:text-indigo-400 transition-colors">Hyper Group 1</h2>
            <div className="flex items-center gap-2">
              <p className="text-[10px] font-black text-green-500 uppercase tracking-widest flex items-center gap-2">
                {isTyping ? (
                  <span className="flex gap-1">
                    <span className="w-1 h-1 bg-green-500 rounded-full animate-bounce"></span>
                    <span className="w-1 h-1 bg-green-500 rounded-full animate-bounce delay-75"></span>
                    <span className="w-1 h-1 bg-green-500 rounded-full animate-bounce delay-150"></span>
                    Typing...
                  </span>
                ) : (
                  "4,281 Neural Nodes Active"
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3 mr-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[#020617] bg-white/10 overflow-hidden">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Member" className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-[#020617] bg-white/5 flex items-center justify-center text-[10px] font-black text-slate-400">
              +4k
            </div>
          </div>
          <div className="h-8 w-px bg-white/10 mx-2"></div>
          <div className="flex items-center gap-4 text-slate-400">
            <button className="p-3 hover:bg-white/5 rounded-xl transition-all hover:text-white hover:scale-110 active:scale-95 group relative">
              <Video size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
            <button className="p-3 hover:bg-white/5 rounded-xl transition-all hover:text-white hover:scale-110 active:scale-95">
              <Phone size={20} />
            </button>
            <button className="p-3 hover:bg-white/5 rounded-xl transition-all hover:text-white hover:scale-110 active:scale-95">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 p-8 overflow-y-auto custom-scrollbar no-scrollbar flex flex-col gap-8 relative">
        <div className="flex justify-center my-6">
          <span className="px-4 py-1.5 glass-morphism text-slate-500 text-[9px] rounded-full uppercase tracking-[0.2em] font-black border border-white/5 shadow-2xl">Transmission Log Alpha</span>
        </div>
        
        {messages.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/5 flex items-center justify-center mb-4">
              <MessageSquare size={32} className="text-slate-700" />
            </div>
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Channel Idle. Awaiting Data...</p>
          </div>
        ) : (
          messages.map((msg: MessageRecord) => (
            <motion.div 
              key={msg.id} 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex gap-4 ${msg.sender_id === "anonymous" ? "flex-row-reverse" : ""}`}
            >
              <div className={`w-12 h-12 rounded-2xl flex-shrink-0 shadow-2xl border border-white/5 ${msg.sender_id === "anonymous" ? "bg-indigo-600/20" : "bg-slate-900/40"}`}>
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${msg.sender_id}`} 
                  alt="Avatar" 
                  className="w-full h-full rounded-2xl opacity-90"
                />
              </div>
              <div className={`flex flex-col gap-1.5 max-w-[70%] ${msg.sender_id === "anonymous" ? "items-end" : ""}`}>
                <div className="flex items-center gap-3 px-1">
                  <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">{msg.sender_id === "anonymous" ? "Architect" : msg.sender_id}</span>
                  <span className="text-[9px] font-bold text-slate-600">
                    {new Date(msg.timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <div className={`p-4 rounded-3xl text-sm leading-relaxed max-w-xl shadow-2xl relative group ${
                    msg.sender_id === 'Arch-Architect' 
                      ? "bg-indigo-600 text-white rounded-tr-none" 
                      : "bg-white/5 text-slate-300 rounded-tl-none border border-white/5"
                  }`}>
                  {msg.content}
                  {isTelepathic && msg.sender_id === "WHY-AI" && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-1"
                    >
                      <span className="text-[8px] font-black text-indigo-400 uppercase tracking-widest">Telepathic Synthesis:</span>
                      <p className="telepathic-stream italic">
                        {msg.content.split('').map((char: string) => Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()).join('')}
                      </p>
                    </motion.div>
                  )}
                  <div className="absolute bottom-1 right-3 text-[8px] opacity-30 font-black uppercase tracking-widest">
                    {msg.encrypted ? "E2EE" : "Open"}
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      <footer className="p-8 bg-transparent">
        <div className="max-w-5xl mx-auto relative flex items-center gap-4">
          <button className="p-3 glass-morphism text-slate-400 hover:text-white transition-all rounded-2xl group relative border border-white/5 shadow-2xl hover:scale-105 active:scale-95">
            <Plus size={24} className="group-hover:rotate-90 transition-transform" />
            <span className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 text-[9px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none border border-white/10 whitespace-nowrap">Upload Data</span>
          </button>
          
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-indigo-500/5 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
            <input 
              type="text" 
              value={message}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (e.ctrlKey) handleAIQuery(message);
                  else handleSendMessage();
                }
              }}
              placeholder="Inject Data Stream... (Ctrl+Enter for WHY-AI)"
              className="w-full glass-morphism border-white/5 rounded-2xl py-4 pl-12 pr-32 text-sm text-white focus:ring-1 focus:ring-indigo-500 transition-all outline-none shadow-2xl placeholder:text-slate-600 font-medium"
              disabled={sending || isAILoading}
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
              <Mic size={18} className="hover:text-white cursor-pointer transition-colors" />
            </div>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <button className="p-2 text-slate-500 hover:text-white transition-colors">
                <Smile size={20} />
              </button>
              <button className="p-2 text-slate-500 hover:text-white transition-colors">
                <Paperclip size={20} />
              </button>
              <div className="h-6 w-px bg-white/10 mx-1"></div>
              <button 
                onClick={() => handleAIQuery(message)}
                disabled={sending || isAILoading}
                className={`p-2.5 rounded-xl transition-all ${isAILoading ? 'text-indigo-400 animate-pulse bg-indigo-500/10' : 'text-slate-500 hover:text-indigo-400 hover:bg-white/5'}`}
                title="Ask WHY-AI"
              >
                <Sparkles size={20} className={isAILoading ? 'neon-text' : ''} />
              </button>
              <button 
                onClick={handleSendMessage}
                disabled={sending || isAILoading}
                className="p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-indigo-600/20 border border-white/10"
              >
                <Send size={20} fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
