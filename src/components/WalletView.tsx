import { motion } from "framer-motion";
import { useState } from "react";
import { Wallet, ArrowUpRight, ArrowDownLeft, RefreshCcw, CreditCard, ShieldCheck, Zap } from "lucide-react";
import { useSoulEngine } from "../lib/SoulEngine";

export function WalletView() {
  const soul = useSoulEngine();
  const [balance, setBalance] = useState(12482.90);
  const [processing, setProcessing] = useState<string | null>(null);
  const [transactions, setTransactions] = useState([
    { id: 1, type: "received", amount: "0.42 ETH", from: "0x71C...3E2", date: "2 mins ago" },
    { id: 2, type: "sent", amount: "120.00 USDC", to: "HyperBot", date: "1 hour ago" },
    { id: 3, type: "received", amount: "500 WHY", from: "WHYAPP Rewards", date: "Yesterday" },
  ]);

  const handleTransaction = (type: string) => {
    setProcessing(type);
    setTimeout(() => {
      if (type === 'receive') {
        setBalance(prev => prev + 500);
        setTransactions(prev => [{
          id: Date.now(),
          type: "received",
          amount: "500.00 USDC",
          from: "Cosmic Faucet",
          date: "Just now"
        }, ...prev]);
      } else if (type === 'transmit') {
        setBalance(prev => prev - 100);
        setTransactions(prev => [{
          id: Date.now(),
          type: "sent",
          amount: "100.00 USDC",
          to: "Unknown Node",
          date: "Just now"
        }, ...prev]);
      } else if (type === 'atomize') {
         // Visual effect only for now
      }
      setProcessing(null);
    }, 2000);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col bg-[#020617] overflow-hidden p-10 relative"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

      <header className="flex justify-between items-end mb-12 relative z-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 mb-2">
            <span className={`px-3 py-1 bg-white/5 ${soul.emotionalResonance === 'infinite' ? 'text-white' : 'text-slate-500'} text-[10px] font-black uppercase tracking-[0.4em] border border-white/10 rounded-lg flex items-center gap-2`}>
              <Zap size={10} className="animate-pulse" /> Synchronicity: {soul.synchronicityScore.toFixed(1)}%
            </span>
          </div>
          <h1 className="text-5xl font-black text-white mb-2 tracking-tighter uppercase neon-text">Neural Assets</h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">Secure multi-chain capital management</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-2xl shadow-indigo-600/20 flex items-center gap-3 border border-white/10">
          <CreditCard size={18} />
          Initialize Deposit
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12 relative z-10">
        <div className="lg:col-span-2 glass-morphism rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden group border-white/5">
          <div className="absolute inset-0 animated-gradient opacity-20"></div>
          <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <Wallet size={160} />
          </div>
          <div className="relative z-10">
            <p className="text-indigo-300 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Total Liquidity</p>
            <h2 className="text-7xl font-black mb-12 tracking-tighter neon-text">${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h2>
            <div className="flex gap-6">
              <button 
                onClick={() => handleTransaction('transmit')}
                disabled={!!processing}
                className="flex-1 glass-morphism hover:bg-white/10 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all font-black uppercase tracking-widest text-xs border-white/10 shadow-xl"
              >
                <ArrowUpRight size={20} className="text-indigo-400" /> {processing === 'transmit' ? 'Sending...' : 'Transmit'}
              </button>
              <button 
                onClick={() => handleTransaction('receive')}
                disabled={!!processing}
                className="flex-1 glass-morphism hover:bg-white/10 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all font-black uppercase tracking-widest text-xs border-white/10 shadow-xl"
              >
                <ArrowDownLeft size={20} className="text-green-400" /> {processing === 'receive' ? 'Syncing...' : 'Receive'}
              </button>
              <button 
                onClick={() => handleTransaction('atomize')}
                disabled={!!processing}
                className="flex-1 glass-morphism hover:bg-white/10 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all font-black uppercase tracking-widest text-xs border-white/10 shadow-xl"
              >
                <RefreshCcw size={20} className={`text-pink-400 ${processing === 'atomize' ? 'animate-spin' : ''}`} /> Atomize
              </button>
            </div>
          </div>
        </div>

        <div className="glass-morphism rounded-[40px] p-10 border-white/5 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-indigo-500/5 blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-5 mb-8">
              <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 border border-green-500/20 shadow-lg shadow-green-500/5">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="font-black text-lg text-white uppercase tracking-tight">E2EE Shield</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Local-Only Key Storage</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Protocol Sync</span>
                <span className="text-[10px] font-black text-green-500 flex items-center gap-2 uppercase">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span> Verified
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Neural Fee</span>
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">12 Gwei</span>
              </div>
            </div>
          </div>
          <button className="w-full py-4 bg-white/5 hover:bg-white/10 rounded-2xl text-[10px] font-black text-white uppercase tracking-[0.3em] transition-all border border-white/5">
            Security Audit
          </button>
        </div>
      </div>

      <div className="flex-1 glass-morphism rounded-[40px] border-white/5 flex flex-col overflow-hidden shadow-2xl relative z-10">
        <header className="px-10 py-8 border-b border-white/5 flex justify-between items-center bg-white/5">
          <h3 className="font-black text-white uppercase tracking-widest text-sm">Transmission History</h3>
          <button className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] hover:text-indigo-300 transition-colors">Log Explorer</button>
        </header>
        <div className="flex-1 overflow-y-auto custom-scrollbar no-scrollbar p-6">
          {transactions.map((tx) => (
            <div key={tx.id} className="p-4 mb-2 flex items-center gap-6 hover:bg-white/5 rounded-[24px] transition-all group cursor-pointer border border-transparent hover:border-white/5">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl border border-white/5 ${
                tx.type === 'received' ? 'bg-green-500/10 text-green-500' : 'bg-indigo-500/10 text-indigo-500'
              }`}>
                {tx.type === 'received' ? <ArrowDownLeft size={28} /> : <ArrowUpRight size={28} />}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-black text-lg text-white tracking-tight uppercase group-hover:text-indigo-400 transition-colors">{tx.type} {tx.amount}</h4>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest truncate">{tx.from || tx.to}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-black text-slate-300 uppercase tracking-tighter mb-1">{tx.date}</p>
                <div className="px-3 py-1 bg-green-500/10 text-green-500 text-[8px] font-black rounded-full uppercase tracking-widest border border-green-500/20">
                  Confirmed
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
