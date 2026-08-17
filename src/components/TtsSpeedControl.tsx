import React, { useState, useEffect } from "react";
import {
  TTS_SPEED_OPTIONS,
  getTTSPlaybackRate,
  setTTSPlaybackRate
} from "../utils/tts";
import { Gauge, FastForward } from "lucide-react";

interface TtsSpeedControlProps {
  variant?: "compact" | "badge" | "full";
  className?: string;
  isLight?: boolean;
}

export const TtsSpeedControl: React.FC<TtsSpeedControlProps> = ({
  variant = "compact",
  className = "",
  isLight = false
}) => {
  const [currentSpeed, setCurrentSpeed] = useState<number>(() => getTTSPlaybackRate());

  useEffect(() => {
    const handleSpeedChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ rate: number }>;
      if (customEvent.detail && customEvent.detail.rate) {
        setCurrentSpeed(customEvent.detail.rate);
      }
    };

    window.addEventListener("vstep_tts_speed_changed", handleSpeedChange);
    return () => {
      window.removeEventListener("vstep_tts_speed_changed", handleSpeedChange);
    };
  }, []);

  const handleChange = (newRate: number) => {
    setCurrentSpeed(newRate);
    setTTSPlaybackRate(newRate);
  };

  if (variant === "badge") {
    return (
      <div className={`inline-flex items-center gap-1.5 ${className}`}>
        <span className={`text-[11px] font-semibold ${isLight ? "text-slate-500" : "text-slate-400"}`}>Speed:</span>
        <div className={`inline-flex rounded-lg p-0.5 border ${isLight ? "bg-slate-100 border-slate-300" : "bg-slate-800/80 border-slate-700"}`}>
          {TTS_SPEED_OPTIONS.map((opt) => {
            const isSelected = Math.abs(currentSpeed - opt.value) < 0.01;
            return (
              <button
                key={opt.value}
                onClick={() => handleChange(opt.value)}
                className={`px-2 py-0.5 text-[11px] font-bold rounded transition ${
                  isSelected
                    ? isLight
                      ? "bg-amber-600 text-white shadow-xs"
                      : "bg-amber-500 text-slate-950 shadow-xs"
                    : isLight
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-slate-400 hover:text-slate-200"
                }`}
                title={`Set TTS speech rate to ${opt.value}x`}
              >
                {opt.value}x
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Compact dropdown (useful in Header or cards)
  return (
    <div className={`relative inline-flex items-center gap-1.5 ${className}`}>
      <div className="relative">
        <select
          value={currentSpeed}
          onChange={(e) => handleChange(parseFloat(e.target.value))}
          className={`appearance-none pl-7 pr-6 py-1.5 ${
            isLight
              ? "bg-slate-100 hover:bg-slate-200/80 text-amber-800 border-slate-300"
              : "bg-slate-800/90 hover:bg-slate-800 text-amber-300 border-slate-700"
          } border rounded-xl text-xs font-bold focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer transition shadow-2xs`}
          title="Adjust TTS Voice Playback Speed"
        >
          {TTS_SPEED_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className={isLight ? "bg-white text-slate-900" : "bg-slate-900 text-slate-100"}>
              Voice: {opt.label}
            </option>
          ))}
        </select>
        <Gauge className={`w-3.5 h-3.5 ${isLight ? "text-amber-700" : "text-amber-400"} absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none`} />
      </div>
    </div>
  );
};
