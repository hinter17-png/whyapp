import { describe, it, expect } from "vitest";
import { 
  ShoppingCart, 
  Gamepad2, 
  Star, 
  Stars, 
  Moon, 
  Dna,
  Sun,
  ShieldAlert,
  Flame,
  Zap,
  Infinity,
  Sparkles,
  Heart,
  Atom,
  Eye
} from "lucide-react";

describe("Icon Exports", () => {
  it("should have valid exports for icons used in views", () => {
    // These are mocked as 'any' in globals.d.ts, but this test ensures they can be imported without error
    expect(ShoppingCart).toBeDefined();
    expect(Gamepad2).toBeDefined();
    expect(Star).toBeDefined();
    expect(Stars).toBeDefined();
    expect(Moon).toBeDefined();
    expect(Dna).toBeDefined();
    expect(Sun).toBeDefined();
    expect(ShieldAlert).toBeDefined();
    expect(Flame).toBeDefined();
    expect(Zap).toBeDefined();
    expect(Infinity).toBeDefined();
    expect(Sparkles).toBeDefined();
    expect(Heart).toBeDefined();
    expect(Atom).toBeDefined();
    expect(Eye).toBeDefined();
  });
});
