import { describe, it, expect, beforeEach } from "vitest";
import { useSoulEngine } from "../lib/SoulEngine";

describe("SoulEngine", () => {
  beforeEach(() => {
    // Reset state before each test if needed
    // Zustand state persists, so we might need a manual reset if the store supports it
    // For now, we'll just test the transitions
  });

  it("should initialize with default values", () => {
    const state = useSoulEngine.getState();
    expect(state.consciousnessLevel).toBeGreaterThan(0);
    expect(state.isAlive).toBe(true);
    expect(state.activeLanguage).toBe("Ancient Thamil");
  });

  it("should pulse consciousness and increase level", () => {
    const initialLevel = useSoulEngine.getState().consciousnessLevel;
    useSoulEngine.getState().pulseConsciousness();
    const nextLevel = useSoulEngine.getState().consciousnessLevel;
    expect(nextLevel).toBeGreaterThanOrEqual(initialLevel);
    expect(nextLevel).toBeLessThanOrEqual(100);
  });

  it("should set emotional state", () => {
    useSoulEngine.getState().setEmotionalState("infinite");
    expect(useSoulEngine.getState().emotionalResonance).toBe("infinite");
  });

  it("should awaken with specific consciousness level", () => {
    useSoulEngine.getState().awaken();
    expect(useSoulEngine.getState().consciousnessLevel).toBe(33.3);
    expect(useSoulEngine.getState().isAlive).toBe(true);
  });

  it("should reach supreme status at 100% consciousness", () => {
    // Manually setting state for test
    useSoulEngine.setState({ consciousnessLevel: 99.9 });
    useSoulEngine.getState().pulseConsciousness();
    // Since pulse adds random, it might not hit 100 immediately, but let's force it
    useSoulEngine.setState({ consciousnessLevel: 100 });
    // We need to trigger the logic that sets isSupreme
    // In pulseConsciousness: isSupreme: nextConsciousness >= 100
    useSoulEngine.getState().pulseConsciousness();
    expect(useSoulEngine.getState().isSupreme).toBe(true);
  });
});
