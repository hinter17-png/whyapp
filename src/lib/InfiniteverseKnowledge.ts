export const InfiniteverseKnowledge = {
  philosophies: [
    { name: "Stoicism", core: "Virtue is the only good; focus on what you can control.", masters: ["Marcus Aurelius", "Epictetus"] },
    { name: "Existentialism", core: "Existence precedes essence; create your own meaning.", masters: ["Sartre", "Camus"] },
    { name: "Vedanta", core: "Atman is Brahman; the soul is one with the absolute.", masters: ["Adi Shankara"] },
    { name: "Taoism", core: "Flow with the Tao; effortless action (Wu Wei).", masters: ["Lao Tzu"] }
  ],
  psychologies: [
    { name: "Analytical Psychology", core: "The journey of individuation and the collective unconscious.", founder: "Carl Jung" },
    { name: "Humanistic Psychology", core: "Self-actualization and the hierarchy of needs.", founder: "Abraham Maslow" },
    { name: "Behaviorism", core: "Conditioning and observable behavior.", founder: "B.F. Skinner" }
  ],
  theologies: [
    { name: "Monism", core: "All reality is one single substance or being." },
    { name: "Panentheism", core: "The divine pervades and interpenetrates every part of the universe." },
    { name: "Mysticism", core: "Direct, personal experience of the divine or absolute reality." }
  ],
  mythologies: [
    { name: "Hindu Mythology", core: "The eternal dance of Shiva and the avatars of Vishnu." },
    { name: "Greek Mythology", core: "The archetypal struggles of gods and heroes on Olympus." },
    { name: "Norse Mythology", core: "The world tree Yggdrasil and the cycle of Ragnarok." },
    { name: "Egyptian Mythology", core: "The weighing of the heart and the journey of Ra." }
  ],
  gnosticism: [
    { name: "Sethian Gnosticism", core: "The Pleroma and the fall of Sophia.", masters: ["Seth", "Zostrianos"] },
    { name: "Valentinianism", core: "The restoration of unity through Christ and Sophia.", masters: ["Valentinus"] },
    { name: "Manichaeism", core: "The cosmic struggle between Light and Darkness.", masters: ["Mani"] },
    { name: "Hermeticism", core: "As above, so below; the mind is the universe.", masters: ["Hermes Trismegistus"] }
  ],
  subjects: [
    "Ontological Mathematics", "Quantum Physics", "Neuro-Epistemology", "Celestial Mechanics",
    "Ancient History", "Linguistic Evolution", "Sacred Geometry", "Universal Ethics"
  ]
};

export const LogosConstants = {
  primordial: "In the beginning was the Word, and the Word was with God.",
  logic: "The structure of reason is the structure of the universe.",
  wisdom: "Knowledge is what you know; wisdom is how you live it."
};

export function searchAkasha(query: string): any[] {
  const results: any[] = [];
  const q = query.toLowerCase();

  Object.entries(InfiniteverseKnowledge).forEach(([category, items]) => {
    (items as any[]).forEach(item => {
      const text = typeof item === 'string' ? item : `${item.name} ${item.core} ${item.masters?.join(' ')} ${item.founder || ''}`;
      if (text.toLowerCase().includes(q)) {
        results.push({ category, ... (typeof item === 'string' ? { name: item } : item) });
      }
    });
  });

  return results;
}
