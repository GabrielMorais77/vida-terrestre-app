// src/theme.ts
export const theme = {
  colors: {
    background: "#020617",
    card: "rgba(15,23,42,0.9)",
    primary: "#22c55e",
    primaryTextOn: "#022c22",
    text: "#f9fafb",
    muted: "#9ca3af",
    border: "#1f2937",
  },
  radius: {
    sm: 8,
    md: 16,
    lg: 24,
    pill: 999,
  },
  spacing(multiplier: number) {
    return 4 * multiplier;
  },
};
