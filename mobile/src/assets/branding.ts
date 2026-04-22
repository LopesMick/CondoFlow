export const BRANDING = {
  shield: require("../../assets/branding/condoflow-wordmark.png"),
  wordmark: require("../../assets/branding/condoflow-shield.png"),
  logoTransparent: require("../../assets/branding/condoflow-logo-transparent.png"),
  logoWithBackground: require("../../assets/branding/condoflow-logo-bg.png"),
} as const;

export const HOME_ICONS = {
  reservas: require("../../assets/icons/home/home-reservas.png"),
  chamadas: require("../../assets/icons/home/home-chamadas.png"),
  financeiro: require("../../assets/icons/home/home-financeiro.png"),
  visitantes: require("../../assets/icons/home/home-moradores.png"),
  moradores: require("../../assets/icons/home/home-moradores.png"),
  encomendas: require("../../assets/icons/home/home-encomendas.png"),
  notificacoes: require("../../assets/icons/home/home-notificacoes.png"),
  condominio: require("../../assets/icons/home/home-condominio.png"),
} as const;

export const BOTTOM_NAV_ICONS = {
  home: require("../../assets/icons/bottom-nav/nav-home.png"),
  search: require("../../assets/icons/bottom-nav/nav-search.png"),
  center: require("../../assets/icons/bottom-nav/nav-center.png"),
  notifications: require("../../assets/icons/bottom-nav/nav-notifications.png"),
  profile: require("../../assets/icons/bottom-nav/nav-profile.png"),
} as const;

// CondoFlow core palette and semantic tokens for consistent UI styling.
export const BRAND_COLORS = {
  primary: "#0C4EA6",
  primaryDark: "#0A2F74",
  primaryLight: "#2F79B3",
  accent: "#12D7E6",
  accentSoft: "#8FE7DF",
  accentDark: "#00C2E0",
  whiteOverlay: "rgba(255,255,255,0.14)",
  info: "#1D4ED8",
  infoSoft: "#71B0F4",
  success: "#067647",
  successBright: "#00F05A",
  warning: "#B45309",
  danger: "#B42318",
  badgeRed: "#FF0000",
  purple: "#7C3AED",
  pending: "#F59E0B",
  background: "#F4F6F8",
  backgroundSoft: "#EEF2F6",
  backgroundMuted: "#ECECED",
  surface: "#FFFFFF",
  surfaceSoft: "#EAF2FF",
  border: "#D9DDE3",
  borderSoft: "#EDF1F6",
  text: "#0F172A",
  textStrong: "#101828",
  mutedText: "#516179",
  textSubtle: "#667085",
  textOnPrimary: "#FFFFFF",
  white: "#FFFFFF",
} as const;
