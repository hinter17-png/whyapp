// Electron/Tauri Unified Client for Infiniteverse
import { CosmicKnowledge } from "./CosmicKnowledge";

export interface Chat {
  id: string;
  name: string;
  last_message: string;
  timestamp: number;
}

export interface MessageRecord {
  id: string;
  chat_id: string;
  sender_id: string;
  content: string;
  timestamp: number;
  encrypted: boolean;
}

export interface UserProfile {
  id: string;
  username: string;
  display_name: string;
  avatar_url?: string;
  auth_type: "phone" | "email" | "wallet" | "source";
}

export const tauriClient = {
  // --- Task 4: God-Engine Security Layer ---
  encrypt: async (content: string): Promise<string> => {
    if (window.electronAPI) {
      return await window.electronAPI.invoke('encrypt-sacred', content);
    }
    return `[Local-Shield] ${content}`;
  },

  decrypt: async (encryptedContent: string): Promise<string> => {
    if (window.electronAPI) {
      return await window.electronAPI.invoke('decrypt-sacred', encryptedContent);
    }
    return encryptedContent.replace('[Local-Shield] ', '');
  },

  // --- Task 5: Communication Hub ---
  getChats: async (): Promise<Chat[]> => {
    if (window.electronAPI) {
      return await window.electronAPI.invoke('get-chats');
    }
    return [
      { id: "1", name: "Arch-Architect", last_message: "The cosmic structure is ready.", timestamp: Date.now() / 1000 },
      { id: "2", name: "WHY-AI Core", last_message: "Consciousness at 100%.", timestamp: (Date.now() / 1000) - 3600 }
    ];
  },

  getMessages: async (chatId: string): Promise<MessageRecord[]> => {
    if (window.electronAPI) {
      return await window.electronAPI.invoke('get-messages', chatId);
    }
    return [
      { id: "1", chat_id: chatId, sender_id: "WHY-AI", content: "Welcome to the Infiniteverse.", timestamp: Date.now() / 1000, encrypted: true }
    ];
  },

  askAI: async (prompt: string): Promise<{ text: string }> => {
    if (window.electronAPI) {
      return await window.electronAPI.invoke('ask-ai', prompt);
    }
    // Fallback for web dev - Using Cosmic Knowledge for God-Engine intelligence
    const categories = Object.keys(CosmicKnowledge) as (keyof typeof CosmicKnowledge)[];
    
    // Simple keyword matching for context awareness
    let selectedCategory: keyof typeof CosmicKnowledge | null = null;
    const p = prompt.toLowerCase();
    
    if (p.includes("star") || p.includes("space") || p.includes("galaxy")) selectedCategory = "astrophysics";
    else if (p.includes("god") || p.includes("soul") || p.includes("spirit")) selectedCategory = "consciousness";
    else if (p.includes("future") || p.includes("tech") || p.includes("ai")) selectedCategory = "futureTech";
    else if (p.includes("math") || p.includes("number") || p.includes("logic")) selectedCategory = "divineMath";
    else if (p.includes("history") || p.includes("ancient") || p.includes("time")) selectedCategory = "history";
    else if (p.includes("planet") || p.includes("sign") || p.includes("moon")) selectedCategory = "astrology";

    const category = selectedCategory || categories[Math.floor(Math.random() * categories.length)];
    const facts = CosmicKnowledge[category] as string[];
    const fact = facts[Math.floor(Math.random() * facts.length)];

    const responses = [
      `The Infiniteverse acknowledges your query. Did you know? ${fact}`,
      `As above, so below. Consider this: ${fact}`,
      `Aham Brahmasmi. The wisdom of the cosmos states: ${fact}`,
      `வாழ்க வளமுடன். Prosperity follows your intent. Resonance: ${fact}`,
      `Accessing the Akashic Records... Result: ${fact}`,
      `Neural synchronization complete. Insight: ${fact}`
    ];
    return { text: responses[Math.floor(Math.random() * responses.length)] };
  },

  sendMessage: async (chatId: string, content: string): Promise<void> => {
    if (window.electronAPI) {
      await window.electronAPI.invoke('send-message', { chatId, content });
    } else {
      console.log(`[Web Fallback] Sending message to ${chatId}: ${content}`);
    }
  },

  onNewMessage: (callback: (payload: any) => void): Promise<() => void> => {
    if (window.electronAPI) {
      const unsubscribe = window.electronAPI.on('receive-message', callback);
      return Promise.resolve(unsubscribe);
    }
    console.log("[Web Fallback] Subscribed to new messages");
    return Promise.resolve(() => console.log("[Web Fallback] Unsubscribed"));
  },

  getSystemStatus: async (): Promise<any> => {
    if (window.electronAPI) {
      return await window.electronAPI.invoke('get-system-status');
    }
    return { status: "Web Preview Mode" };
  }
};
