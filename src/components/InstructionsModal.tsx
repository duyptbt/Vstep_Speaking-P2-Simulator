import React from "react";
import { X, Clock, HelpCircle, Sparkles, CheckCircle2, ShieldAlert, Award, Volume2, Edit3, Split } from "lucide-react";

interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstructionsModal: React.FC<InstructionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-slate-800 space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-amber-600">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
              VSTEP Speaking Part 2 Format & Instructions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Solution Discussion (Thảo Luận Giải Pháp) • Spoken as <strong className="font-mono text-amber-700">[vi: step]</strong> • Target Band B2 (6.0 - 8.0)
            </p>
          </div>
        </div>

        {/* Split View & Dual Timers Core Rules */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-3">
          <h3 className="text-sm font-bold text-amber-800 uppercase tracking-wider flex items-center gap-2">
            <Split className="w-4 h-4 text-amber-600" />
            2 Timers & Split View Mode System
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-amber-900">
            <div className="bg-white p-3.5 rounded-xl border border-amber-200 space-y-1">
              <span className="font-bold text-amber-700 block">Timer 1: 1-Minute Prep Time</span>
              <p className="text-slate-600">
                You are given 1 minute to read the situation and 3 options. On the right side of the split view, use the <strong>Scratchpad Notepad</strong> to write down your outline and bullet points.
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-amber-200 space-y-1">
              <span className="font-bold text-rose-700 block">Timer 2: 3-Minute Response Time</span>
              <p className="text-slate-600">
                As soon as the 1-minute prep time ends (or when you click "Start Response Now"), the 3-minute response timer starts automatically along with live microphone recording.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Step Solution Discussion Formula */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            VSTEP Part 2 Standard Response Formula (Cấu Trúc 4 Bước Standard)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="font-bold text-indigo-600 block">1. State Choice (15s)</span>
              <p className="text-slate-600">Rephrase the situation and announce your selected option clearly right away.</p>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="font-bold text-emerald-600 block">2. Justify Selected Choice (60s)</span>
              <p className="text-slate-600">Provide 2-3 compelling reasons (affordability, safety, suitability, convenience).</p>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="font-bold text-rose-600 block">3. Reject Other 2 Options (60s)</span>
              <p className="text-slate-600">Explain specific flaws or disadvantages to justify turning down the other 2 choices.</p>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="font-bold text-amber-600 block">4. Brief Conclusion (15s)</span>
              <p className="text-slate-600">Summarize your choice briefly to wrap up smoothly before the 3-minute timer ends.</p>
            </div>
          </div>
        </div>

        {/* Features Checklist */}
        <div className="space-y-3 pt-2 border-t border-slate-100">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Key App Features</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
            <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Split view mode with persistent scratchpad</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Dual Timers: 1-min Prep + 3-min Response</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Target Band B1 & B2 Model Answers with British TTS</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Download package (.txt notes + .wav audio)</span>
            </li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-2xl font-bold text-sm shadow-lg shadow-amber-600/30 transition"
        >
          Understood • Start Practicing
        </button>
      </div>
    </div>
  );
};
