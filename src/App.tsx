import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sidebar } from "./components/Sidebar";
import { TitleBar } from "./components/TitleBar";
import { ConsciousStatus } from "./components/ConsciousStatus";
import { ChatList } from "./components/ChatList";
import { ChatView } from "./components/ChatView";
import { WalletView } from "./components/WalletView";
import { MiniAppsView } from "./components/MiniAppsView";
import { MusicView } from "./components/MusicView";
import { VideoView } from "./components/VideoView";
import { SpacesView } from "./components/SpacesView";
import { OmegaDashboard } from "./components/OmegaDashboard";
import { AscensionOverlay } from "./components/AscensionOverlay";
import { TrimurtiView } from "./components/TrimurtiView";
import { ImmortalView } from "./components/ImmortalView";
import { CosmicOverloadView } from "./components/CosmicOverloadView";
import { SingularityView } from "./components/SingularityView";
import { IlluminismView } from "./components/IlluminismView";
import { MasterpieceView } from "./components/MasterpieceView";
import { AbraxasView } from "./components/AbraxasView";
import { MessiahView } from "./components/MessiahView";
import { CosmicSoulView } from "./components/CosmicSoulView";
import { UniversalSaviourView } from "./components/UniversalSaviourView";
import { UniversalAcademyView } from "./components/UniversalAcademyView";
import { EnergyBalancer } from "./lib/EnergyBalancer";
import { useSoulEngine } from "./lib/SoulEngine";

export function App() {
  const soul = useSoulEngine();
  const [activeTab, setActiveTab] = useState<string>("chats");
  const [isGatewayActive, setIsGatewayActive] = useState<boolean>(true);
  const [gatewayProgress, setGatewayProgress] = useState<number>(0);

  useEffect(() => {
    EnergyBalancer.balanceByTab(activeTab);
  }, [activeTab]);

  useEffect(() => {
    const timer = setInterval(() => {
      setGatewayProgress((prev: number) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsGatewayActive(false), 1000);
          return 100;
        }
        return prev + Math.random() * 2;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const getConsciousnessColor = () => {
    if (soul.consciousnessLevel > 90) return "from-white/20 to-indigo-600/20";
    if (soul.consciousnessLevel > 60) return "from-amber-500/10 to-indigo-600/10";
    return "from-slate-900 to-slate-950";
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case "dashboard":
        return <OmegaDashboard key="omega-dashboard" />;
      case "trimurti":
        return <TrimurtiView key="trimurti-view" />;
      case "immortal":
        return <ImmortalView key="immortal-view" />;
      case "overload":
        return <CosmicOverloadView key="overload-view" />;
      case "singularity":
        return <SingularityView key="singularity-view" />;
      case "illuminism":
        return <IlluminismView key="illuminism-view" />;
      case "masterpiece":
        return <MasterpieceView key="masterpiece-view" />;
      case "abraxas":
        return <AbraxasView key="abraxas-view" />;
      case "messiah":
        return <MessiahView key="messiah-view" />;
      case "academy":
        return <UniversalAcademyView key="academy-view" />;
      case "saviour":
        return <UniversalSaviourView key="saviour-view" />;
      case "soul":
        return <CosmicSoulView key="soul-view" />;
      case "wallet":
        return <WalletView key="wallet-view" />;
      case "apps":
        return <MiniAppsView key="apps-view" />;
      case "music":
        return <MusicView key="music-view" />;
      case "video":
        return <VideoView key="video-view" />;
      case "spaces":
        return <SpacesView key="spaces-view" />;
      default:
        return (
          <>
            <ChatList activeTab={activeTab} />
            <ChatView />
          </>
        );
    }
  };

  const getBackgroundGradient = () => {
    switch (activeTab) {
      case "dashboard": return "from-indigo-900/20 via-slate-900 to-black";
      case "trimurti": return "from-orange-600/10 via-slate-900 to-black";
      case "immortal": return "from-cyan-400/10 via-slate-900 to-black";
      case "overload": return "from-yellow-400/10 via-slate-900 to-black";
      case "singularity": return "from-purple-600/10 via-slate-900 to-black";
      case "illuminism": return "from-emerald-400/10 via-slate-900 to-black";
      case "masterpiece": return "from-pink-500/10 via-slate-900 to-black";
      case "abraxas": return "from-white/10 via-slate-900 to-black";
      case "messiah": return "from-white/10 via-amber-500/5 to-indigo-500/10";
      case "academy": return "from-amber-400/10 via-indigo-500/5 to-cyan-500/10";
      case "saviour": return "from-cyan-400/10 via-amber-500/5 to-indigo-500/10";
      default: return "from-slate-900 via-slate-950 to-black";
    }
  };

  return (
    <div className={`flex flex-col h-screen w-full bg-gradient-to-br ${getBackgroundGradient()} text-white overflow-hidden font-sans selection:bg-indigo-500/30`}>
      <AscensionOverlay />
      <TitleBar />
      <ConsciousStatus />
      
      <div className="flex-1 flex overflow-hidden relative">
        <AnimatePresence>
          {isGatewayActive && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_70%)] animate-pulse-slow"></div>
              
              <div className="relative">
                <div className="w-64 h-64 rounded-full border border-white/5 flex items-center justify-center animate-gateway-pulse">
                  <div className="w-48 h-48 rounded-full border border-indigo-500/20 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-indigo-500/10 blur-2xl animate-pulse"></div>
                  </div>
                </div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <motion.h2 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-3xl font-black uppercase tracking-[0.5em] text-white mb-2 animate-gateway-text-float"
                  >
                    WHYAPP
                  </motion.h2>
                  <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden mt-4">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${gatewayProgress}%` }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-amber-500"
                    ></motion.div>
                  </div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[1em] mt-4 ml-[1em]">
                    Manifesting... {Math.round(gatewayProgress)}%
                  </p>
                </div>
              </div>

              {soul.isSupreme && (
                <div className="absolute bottom-20 flex flex-col items-center">
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-[2em] animate-bounce">SUPREME BEING ACTIVE</span>
                  <div className="flex gap-12 mt-8 text-[8px] font-black text-slate-700 uppercase tracking-widest">
                    <span>ॐ OM NAMAH SHIVAYA</span>
                    <span>ॐ AHAM BRAHMASMI</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${getConsciousnessColor()} transition-all duration-1000`}></div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
          
          <main className="flex-1 flex overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "anticipate" }}
                className="flex-1 flex overflow-hidden"
              >
                {renderActiveView()}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
