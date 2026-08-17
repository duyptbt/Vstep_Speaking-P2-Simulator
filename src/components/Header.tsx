import React from "react";
import { AppMode, QuestionSet, AppTheme } from "../types";
import { QUESTION_SETS } from "../data/questionSets";
import { THEMES } from "../utils/theme";
import { TtsSpeedControl } from "./TtsSpeedControl";
import {
  Clock,
  Sparkles,
  HelpCircle,
  FolderDown,
  Layers,
  ChevronDown,
  Compass,
  Bus,
  Gift,
  Globe,
  Split,
  Palette,
  RotateCcw
} from "lucide-react";

interface HeaderProps {
  currentMode: AppMode;
  onSelectMode: (mode: AppMode) => void;
  selectedSet: QuestionSet;
  onSelectSet: (set: QuestionSet) => void;
  onOpenInstructions: () => void;
  onOpenAudioTool: () => void;
  currentTheme: AppTheme;
  onSelectTheme: (theme: AppTheme) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  selectedSet,
  onSelectSet,
  onOpenInstructions,
  onOpenAudioTool,
  currentTheme,
  onSelectTheme
}) => {
  const theme = THEMES[currentTheme] || THEMES.midnight;

  const getSetIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-4 h-4 text-amber-400" />;
      case "Bus":
        return <Bus className="w-4 h-4 text-amber-400" />;
      case "Gift":
        return <Gift className="w-4 h-4 text-amber-400" />;
      case "Globe":
        return <Globe className="w-4 h-4 text-amber-400" />;
      default:
        return <Clock className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <header className={`${theme.headerBg} border-b ${theme.headerBorder} sticky top-0 z-40 backdrop-blur-md transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Logo & App Branding */}
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-400 flex items-center justify-center shadow-inner">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className={`text-base sm:text-lg font-extrabold ${theme.textPrimary} tracking-tight`}>
                VSTEP Speaking Part 2
              </h1>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold uppercase tracking-wider">
                Solution Discussion
              </span>
            </div>
            <p className={`text-[11px] ${theme.textMuted}`}>
              Split View • 1-Min Prep Timer + 3-Min Response Timer
            </p>
          </div>
        </div>

        {/* Question Set Selection & Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          
          {/* Question Set Selector */}
          <div className="relative group">
            <select
              value={selectedSet.id}
              onChange={(e) => {
                const found = QUESTION_SETS.find((s) => s.id === e.target.value);
                if (found) onSelectSet(found);
              }}
              className="appearance-none pl-9 pr-8 py-2 bg-slate-800/90 hover:bg-slate-800 text-slate-100 border border-slate-700 rounded-xl text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer transition shadow-sm"
            >
              {QUESTION_SETS.map((set) => (
                <option key={set.id} value={set.id} className="bg-slate-900 text-slate-100">
                  {set.title}
                </option>
              ))}
            </select>
            <div className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
              {getSetIcon(selectedSet.iconName)}
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Mode Switcher Buttons */}
          <div className="bg-slate-800/80 p-1 border border-slate-700/80 rounded-xl flex items-center space-x-1">
            <button
              onClick={() => onSelectMode("test")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                currentMode === "test"
                  ? "bg-amber-600 text-white shadow-md"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <Split className="w-3.5 h-3.5" />
              <span>Test Mode (2 Timers)</span>
            </button>

            <button
              onClick={() => onSelectMode("practice")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                currentMode === "practice"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Practice Mode</span>
            </button>
          </div>

          {/* TTS Voice Speed Controller */}
          <TtsSpeedControl />

          {/* Audio Merger & Downloader Tool Modal Button */}
          <button
            onClick={onOpenAudioTool}
            className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-emerald-400 border border-slate-700/80 rounded-xl transition flex items-center gap-1.5 text-xs font-bold"
            title="Questions & Audio Downloader"
          >
            <Layers className="w-4 h-4" />
            <span className="hidden sm:inline">Downloader</span>
          </button>

          {/* Instructions Modal Button */}
          <button
            onClick={onOpenInstructions}
            className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-amber-300 border border-slate-700/80 rounded-xl transition"
            title="Format Instructions"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* Theme Switcher Selector */}
          <div className="relative">
            <select
              value={currentTheme}
              onChange={(e) => onSelectTheme(e.target.value as AppTheme)}
              className="appearance-none pl-7 pr-6 py-2 bg-slate-800/90 hover:bg-slate-800 text-slate-300 border border-slate-700 rounded-xl text-xs font-semibold focus:outline-none cursor-pointer transition"
            >
              <option value="midnight">Midnight</option>
              <option value="light">Light</option>
              <option value="emerald">Emerald</option>
              <option value="sunset">Sunset</option>
            </select>
            <Palette className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

        </div>

      </div>
    </header>
  );
};
