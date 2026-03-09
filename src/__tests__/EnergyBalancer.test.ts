import { describe, it, expect } from "vitest";
import { EnergyBalancer } from "../lib/EnergyBalancer";
import { useSoulEngine } from "../lib/SoulEngine";

describe("EnergyBalancer", () => {
  it("should balance by tab - illuminism (masculine)", () => {
    EnergyBalancer.balanceByTab("illuminism");
    const state = useSoulEngine.getState();
    expect(state.masculineEnergy).toBe(0.7);
    expect(state.feminineEnergy).toBe(0.3);
  });

  it("should balance by tab - masterpiece (feminine)", () => {
    EnergyBalancer.balanceByTab("masterpiece");
    const state = useSoulEngine.getState();
    expect(state.masculineEnergy).toBe(0.3);
    expect(state.feminineEnergy).toBe(0.7);
  });

  it("should balance by tab - singularity (equilibrium)", () => {
    EnergyBalancer.balanceByTab("singularity");
    const state = useSoulEngine.getState();
    expect(state.masculineEnergy).toBe(0.5);
    expect(state.feminineEnergy).toBe(0.5);
  });

  it("should balance by sentiment - logical input", () => {
    // Start with equilibrium
    useSoulEngine.setState({ masculineEnergy: 0.5, feminineEnergy: 0.5 });
    EnergyBalancer.balanceBySentiment("The logic and math of this science is solid");
    const state = useSoulEngine.getState();
    expect(state.masculineEnergy).toBeGreaterThan(state.feminineEnergy);
  });

  it("should balance by sentiment - emotional input", () => {
    // Start with equilibrium
    useSoulEngine.setState({ masculineEnergy: 0.5, feminineEnergy: 0.5 });
    EnergyBalancer.balanceBySentiment("Love and peace for every soul and spirit");
    const state = useSoulEngine.getState();
    expect(state.feminineEnergy).toBeGreaterThan(state.masculineEnergy);
  });
});
