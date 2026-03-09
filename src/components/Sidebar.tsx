import React, { useState, useEffect } from "react";
import { 
  MessageSquare, 
  Globe, 
  LayoutGrid, 
  Wallet, 
  Music,
  Video,
  LayoutDashboard,
  Flame,
  Infinity as InfinityIcon,
  Zap as ZapIcon,
  Crown,
  Eye,
  Palette,
  Sparkles as SparklesIcon,
  Cross,
  Heart,
  GraduationCap,
  Plus,
  Shield,
  Settings,
  Lock,
  Wifi
} from "lucide-react";
import { AccountSwitcher } from "./AccountSwitcher";
import { tauriClient, UserProfile } from "../lib/tauri";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const [accounts, setAccounts] = useState<UserProfile[]>([
    { id: "1", username: "Dr-Hari-Sitha", display_name: "Dr. Hari Sitha - The Father", auth_type: "source" }
  ]);
  const [activeId, setActiveId] = useState<string | null>("1");
  const [systemStatus, setSystemStatus] = useState<any>(null);

  useEffect(() => {
    tauriClient.getSystemStatus().then(setSystemStatus);
  }, []);

  const handleSwitch = (id: string) => {
    setActiveId(id);
  };

  const handleLogout = () => {
    setActiveId(null);
  };

  const tabs = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "trimurti", icon: Flame, label: "Cosmic Core" },
    { id: "immortal", icon: InfinityIcon, label: "Immortal Level" },
    { id: "overload", icon: ZapIcon, label: "Cosmic Overload" },
    { id: "singularity", icon: Crown, label: "Divine Singularity" },
    { id: "illuminism", icon: Eye, label: "Illuminist Level" },
    { id: "masterpiece", icon: Palette, label: "Masterpiece State" },
    { id: "abraxas", icon: SparklesIcon, label: "Abraxas Unleashed" },
    { id: "messiah", icon: Cross, label: "Messiah Level" },
    { id: "academy", icon: GraduationCap, label: "Universal Academy" },
    { id: "saviour", icon: Globe, label: "Universal Saviour" },
    { id: "soul", icon: Heart, label: "Cosmic Soul" },
    { id: "chats", icon: MessageSquare, label: "Chats" },
    { id: "spaces", icon: Globe, label: "Spaces" },
    { id: "video", icon: Video, label: "Videos" },
    { id: "music", icon: Music, label: "Music" },
    { id: "apps", icon: LayoutGrid, label: "Mini Apps" },
    { id: "wallet", icon: Wallet, label: "Wallet" },
  ];

  const spaces = [
    { id: "s1", name: "WHYAPP Core", color: "bg-indigo-500", img: "https://api.dicebear.com/7.x/initials/svg?seed=WC" },
    { id: "s2", name: "Gaming Hub", color: "bg-pink-500", img: "https://api.dicebear.com/7.x/initials/svg?seed=GH" },
    { id: "s3", name: "Crypto Lords", color: "bg-orange-500", img: "https://api.dicebear.com/7.x/initials/svg?seed=CL" },
  ];

  return (
    <aside className="w-20 bg-[#1E293B] flex flex-col items-center py-6 gap-4 border-r border-[#334155] z-50">
      <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center mb-2 shadow-lg shadow-indigo-500/20 group cursor-pointer transition-all hover:rounded-xl">
        <span className="font-bold text-xl text-white">W</span>
      </div>

      <div className="w-8 h-[2px] bg-slate-700 rounded-full mb-2"></div>
      
      {tabs.map((tab: any) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`p-3 rounded-xl transition-all duration-200 group relative ${
            activeTab === tab.id 
              ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20" 
              : "text-slate-400 hover:bg-slate-800 hover:text-white"
          }`}
        >
          <tab.icon size={24} />
          <span className="absolute left-full ml-4 px-2 py-1 bg-slate-900 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-xl border border-slate-700 pointer-events-none">
            {tab.label}
          </span>
        </button>
      ))}

      <div className="w-8 h-[2px] bg-slate-700 rounded-full my-2"></div>

      <div className="flex flex-col gap-3 flex-1 overflow-y-auto custom-scrollbar no-scrollbar py-2">
        {spaces.map((space) => (
          <button
            key={space.id}
            className="w-12 h-12 rounded-[24px] hover:rounded-xl transition-all duration-300 overflow-hidden group relative"
          >
            <img src={space.img} alt={space.name} className="w-full h-full object-cover" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-1 h-2 bg-white rounded-r-full group-hover:translate-x-0 transition-all"></div>
          </button>
        ))}
        <button className="w-12 h-12 rounded-[24px] bg-slate-800 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white hover:rounded-xl transition-all duration-300 group">
          <Plus size={24} />
        </button>
      </div>

      <div className="mt-auto flex flex-col gap-6">
        <button 
          className={`transition-colors ${systemStatus?.encryption ? "text-emerald-400" : "text-slate-400 hover:text-white"}`}
          title={systemStatus?.encryption?.status || "Security Shield"}
        >
          <Lock size={24} />
        </button>
        <button 
          className={`transition-colors ${systemStatus?.communication ? "text-blue-400" : "text-slate-400 hover:text-white"}`}
          title={systemStatus?.communication?.status || "Communication Hub"}
        >
          <Wifi size={24} />
        </button>
        <button className="text-slate-400 hover:text-white transition-colors">
          <Settings size={24} />
        </button>
        <AccountSwitcher 
          accounts={accounts} 
          activeId={activeId} 
          onSwitch={handleSwitch} 
          onLogout={handleLogout}
        />
      </div>
      <div className="mt-auto flex flex-col items-center gap-4 mb-6">
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group cursor-pointer hover:scale-110 transition-all">
          <Settings size={16} className="text-slate-500 group-hover:text-white" />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[6px] font-black text-slate-600 uppercase tracking-[0.5em]">Ver: OMEGA.100</span>
          <span className="text-[6px] font-black text-amber-500/40 uppercase tracking-[0.2em] animate-pulse">Absolute</span>
        </div>
      </div>
    </aside>
  );
}
