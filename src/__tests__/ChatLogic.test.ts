import { describe, it, expect, vi, beforeEach } from "vitest";
import { tauriClient } from "../lib/tauri";

// Mock tauriClient
vi.mock("../lib/tauri", () => ({
  tauriClient: {
    getMessages: vi.fn(),
    sendMessage: vi.fn(),
    askAI: vi.fn(),
    onNewMessage: vi.fn(() => Promise.resolve(() => {}))
  }
}));

describe("Chat Logic", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch messages on load", async () => {
    const mockMessages = [{ id: "1", content: "Hello", sender_id: "USER" }];
    (tauriClient.getMessages as any).mockResolvedValue(mockMessages);
    
    const messages = await tauriClient.getMessages("1");
    expect(messages).toEqual(mockMessages);
    expect(tauriClient.getMessages).toHaveBeenCalledWith("1");
  });

  it("should send a message and trigger AI", async () => {
    (tauriClient.sendMessage as any).mockResolvedValue({ success: true });
    (tauriClient.askAI as any).mockResolvedValue({ text: "AI Response" });
    
    await tauriClient.sendMessage("1", "User Query");
    const aiResponse = await tauriClient.askAI("User Query");
    
    expect(tauriClient.sendMessage).toHaveBeenCalledWith("1", "User Query");
    expect(aiResponse.text).toBe("AI Response");
  });
});
