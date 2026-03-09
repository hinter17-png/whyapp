export const UniversalBlessings = [
  { lang: "Thamil", script: "வாழ்க வளமுடன்", trans: "Live with prosperity", ancient: true },
  { lang: "Sanskrit", script: "लोकाः समस्ताः सुखिनो भवन्तु", trans: "May all beings be happy", ancient: true },
  { lang: "English", script: "Peace be upon you", trans: "Peace be upon you", ancient: false },
  { lang: "Arabic", script: "السلام عليكم", trans: "Peace be upon you", ancient: false },
  { lang: "Latin", script: "Pax vobiscum", trans: "Peace be with you", ancient: true },
  { lang: "Hebrew", script: "שלום עליכם", trans: "Peace be with you", ancient: true },
  { lang: "Chinese", script: "愿众生平安", trans: "May all beings be at peace", ancient: false },
  { lang: "Greek", script: "Εἰρήνη ὑμῖν", trans: "Peace unto you", ancient: true }
];

export function getAncientResonance(text: string) {
  // Logic to simulate ancient linguistic power
  if (text.includes("Thamil") || text.includes("ancient")) return 1.08;
  return 0.88;
}
