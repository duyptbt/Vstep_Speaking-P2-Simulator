import { AppTheme } from "../types";

export interface ThemeConfig {
  id: AppTheme;
  name: string;
  isLight: boolean;
  canvasBg: string;
  headerBg: string;
  headerBorder: string;
  cardBg: string;
  cardBorder: string;
  subCardBg: string;
  subCardBorder: string;
  inputBg: string;
  inputBorder: string;
  inputText: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accentText: string;
  accentBg: string;
  accentBorder: string;
  btnPrimary: string;
  btnSecondary: string;
  badgeBg: string;
}

export const THEMES: Record<AppTheme, ThemeConfig> = {
  midnight: {
    id: "midnight",
    name: "Midnight Dark",
    isLight: false,
    canvasBg: "bg-slate-950 text-slate-100",
    headerBg: "bg-slate-900",
    headerBorder: "border-slate-800",
    cardBg: "bg-slate-900 border-slate-800 text-slate-100",
    cardBorder: "border-slate-800",
    subCardBg: "bg-slate-800/80",
    subCardBorder: "border-slate-700/80",
    inputBg: "bg-slate-950 border-slate-700 focus:border-amber-500",
    inputBorder: "border-slate-700",
    inputText: "text-slate-100 placeholder-slate-500",
    textPrimary: "text-white",
    textSecondary: "text-slate-200",
    textMuted: "text-slate-400",
    accentText: "text-indigo-400",
    accentBg: "bg-indigo-500/20",
    accentBorder: "border-indigo-500/30",
    btnPrimary: "bg-indigo-600 hover:bg-indigo-500 text-white",
    btnSecondary: "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700",
    badgeBg: "bg-slate-800 text-slate-300 border-slate-700"
  },
  light: {
    id: "light",
    name: "Academy Crisp Light",
    isLight: true,
    canvasBg: "bg-slate-100/80 text-slate-900",
    headerBg: "bg-white",
    headerBorder: "border-slate-200 shadow-xs",
    cardBg: "bg-white border-slate-200 text-slate-800 shadow-sm",
    cardBorder: "border-slate-200",
    subCardBg: "bg-slate-50 border-slate-200",
    subCardBorder: "border-slate-200",
    inputBg: "bg-white border-slate-300 focus:border-blue-500 focus:ring-blue-500/20",
    inputBorder: "border-slate-300",
    inputText: "text-slate-900 placeholder-slate-400",
    textPrimary: "text-slate-900",
    textSecondary: "text-slate-700",
    textMuted: "text-slate-500",
    accentText: "text-blue-600",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-200",
    btnPrimary: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm",
    btnSecondary: "bg-white hover:bg-slate-100 text-slate-700 border-slate-300 shadow-2xs",
    badgeBg: "bg-slate-100 text-slate-700 border-slate-200"
  },
  warmLight: {
    id: "warmLight",
    name: "Paper Warm Light",
    isLight: true,
    canvasBg: "bg-amber-50/40 text-stone-900",
    headerBg: "bg-white/95 backdrop-blur",
    headerBorder: "border-stone-200 shadow-xs",
    cardBg: "bg-white border-stone-200 text-stone-800 shadow-sm",
    cardBorder: "border-stone-200",
    subCardBg: "bg-stone-50 border-stone-200",
    subCardBorder: "border-stone-200",
    inputBg: "bg-white border-stone-300 focus:border-amber-600 focus:ring-amber-500/20",
    inputBorder: "border-stone-300",
    inputText: "text-stone-900 placeholder-stone-400",
    textPrimary: "text-stone-900",
    textSecondary: "text-stone-700",
    textMuted: "text-stone-500",
    accentText: "text-amber-700",
    accentBg: "bg-amber-50",
    accentBorder: "border-amber-200",
    btnPrimary: "bg-amber-700 hover:bg-amber-800 text-white shadow-sm",
    btnSecondary: "bg-stone-100 hover:bg-stone-200 text-stone-800 border-stone-300",
    badgeBg: "bg-stone-100 text-stone-700 border-stone-200"
  },
  emerald: {
    id: "emerald",
    name: "Emerald Zen",
    isLight: false,
    canvasBg: "bg-zinc-950 text-zinc-100",
    headerBg: "bg-zinc-900",
    headerBorder: "border-zinc-800",
    cardBg: "bg-zinc-900 border-zinc-800 text-zinc-100",
    cardBorder: "border-zinc-800",
    subCardBg: "bg-emerald-950/40",
    subCardBorder: "border-emerald-800/40",
    inputBg: "bg-zinc-950 border-zinc-700 focus:border-emerald-500",
    inputBorder: "border-zinc-700",
    inputText: "text-zinc-100 placeholder-zinc-500",
    textPrimary: "text-zinc-100",
    textSecondary: "text-zinc-200",
    textMuted: "text-zinc-400",
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/20",
    accentBorder: "border-emerald-500/30",
    btnPrimary: "bg-emerald-600 hover:bg-emerald-500 text-white",
    btnSecondary: "bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border-zinc-700",
    badgeBg: "bg-zinc-800 text-zinc-300 border-zinc-700"
  },
  sunset: {
    id: "sunset",
    name: "Sunset Twilight",
    isLight: false,
    canvasBg: "bg-neutral-950 text-neutral-100",
    headerBg: "bg-neutral-900",
    headerBorder: "border-neutral-800",
    cardBg: "bg-neutral-900 border-neutral-800 text-neutral-100",
    cardBorder: "border-neutral-800",
    subCardBg: "bg-amber-950/30",
    subCardBorder: "border-amber-800/30",
    inputBg: "bg-neutral-950 border-neutral-700 focus:border-amber-500",
    inputBorder: "border-neutral-700",
    inputText: "text-neutral-100 placeholder-neutral-500",
    textPrimary: "text-neutral-100",
    textSecondary: "text-neutral-200",
    textMuted: "text-neutral-400",
    accentText: "text-amber-400",
    accentBg: "bg-amber-500/20",
    accentBorder: "border-amber-500/30",
    btnPrimary: "bg-amber-600 hover:bg-amber-500 text-white",
    btnSecondary: "bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border-neutral-700",
    badgeBg: "bg-neutral-800 text-neutral-300 border-neutral-700"
  }
};

