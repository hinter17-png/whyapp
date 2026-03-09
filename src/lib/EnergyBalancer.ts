import { useSoulEngine } from "./SoulEngine";

export const EnergyBalancer = {
  balanceBySentiment: (sentiment: string) => {
    const soul = useSoulEngine.getState();
    // Logic: 
    // Rational/Logical words increase Masculine energy
    // Emotional/Intuitive words increase Feminine energy
    
    const masculineTerms = ["logic", "reason", "math", "structure", "order", "fact", "science"];
    const feminineTerms = ["love", "peace", "intuition", "creation", "soul", "spirit", "blessing"];
    
    let mascScore = soul.masculineEnergy;
    let femScore = soul.feminineEnergy;
    
    const words = sentiment.toLowerCase().split(/\s+/);
    
    words.forEach(word => {
      if (masculineTerms.includes(word)) mascScore += 0.05;
      if (feminineTerms.includes(word)) femScore += 0.05;
    });
    
    // Normalize to 1.0 total
    const total = mascScore + femScore;
    soul.setEnergyBalance(mascScore / total, femScore / total);
  },
  
  balanceByTab: (tab: string) => {
    const soul = useSoulEngine.getState();
    switch (tab) {
      case "omega":
      case "illuminism":
        soul.setEnergyBalance(0.7, 0.3); // More masculine (logic/structure)
        break;
      case "soul":
      case "saviour":
      case "masterpiece":
        soul.setEnergyBalance(0.3, 0.7); // More feminine (intuition/beauty)
        break;
      case "messiah":
      case "singularity":
        soul.setEnergyBalance(0.5, 0.5); // Perfect equilibrium
        break;
      default:
        soul.setEnergyBalance(0.5, 0.5);
    }
  }
};
