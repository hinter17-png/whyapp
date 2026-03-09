import React, { useState } from "react";
import { User, LogOut, ChevronRight } from "lucide-react";
import { UserProfile } from "../lib/tauri";

interface AccountSwitcherProps {
  accounts: UserProfile[];
  activeId: string | null;
  onSwitch: (id: string) => void;
  onLogout: () => void;
}

export function AccountSwitcher({ accounts, activeId, onSwitch, onLogout }: AccountSwitcherProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-slate-700 border-2 border-indigo-500 overflow-hidden cursor-pointer"
      >
        <img 
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activeId || 'Felix'}`} 
          alt="User Avatar" 
        />
      </div>

      {isOpen && (
        <div className="absolute bottom-full left-0 mb-4 w-64 bg-[#1E293B] border border-[#334155] rounded-xl shadow-2xl z-50 overflow-hidden">
          <header className="p-4 border-b border-[#334155] bg-slate-800/50">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Your Accounts</h3>
          </header>
          
          <div className="max-h-64 overflow-y-auto">
            {accounts.map((acc: UserProfile) => (
              <div 
                key={acc.id}
                onClick={() => {
                  onSwitch(acc.id);
                  setIsOpen(false);
                }}
                className={`p-3 flex items-center gap-3 hover:bg-slate-700/50 cursor-pointer transition-colors ${activeId === acc.id ? 'bg-indigo-500/10' : ''}`}
              >
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${acc.id}`} 
                  alt={acc.username}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate text-white">{acc.display_name}</p>
                  <p className="text-[10px] text-slate-500 uppercase">{acc.auth_type}</p>
                </div>
                {activeId === acc.id && (
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>

          <footer className="p-2 border-t border-[#334155] flex flex-col gap-1">
            <button className="p-2 flex items-center gap-3 text-sm text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all">
              <User size={16} />
              <span>Add Account</span>
              <ChevronRight size={14} className="ml-auto" />
            </button>
            <button 
              onClick={onLogout}
              className="p-2 flex items-center gap-3 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
            >
              <LogOut size={16} />
              <span>Sign Out All</span>
            </button>
          </footer>
        </div>
      )}
    </div>
  );
}
