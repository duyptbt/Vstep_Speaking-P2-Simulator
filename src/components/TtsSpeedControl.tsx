import React, { useState, useEffect } from "react";
import {
  TTS_SPEED_OPTIONS,
  getTTSPlaybackRate,
  setTTSPlaybackRate,
  getSelectedTTSVoice,
  getAllTTSVoices,
  setCustomTTSVoice,
  getGroupedTTSVoices,
  VoiceGroup
} from "../utils/tts";
import { Gauge, Volume2, Sliders, ChevronDown } from "lucide-react";

interface TtsSpeedControlProps {
  variant?: "compact" | "badge" | "full" | "voice-speed";
  className?: string;
  isLight?: boolean;
  onOpenVoiceStudio?: () => void;
}

export const TtsSpeedControl: React.FC<TtsSpeedControlProps> = ({
  variant = "voice-speed",
  className = "",
  isLight = false,
  onOpenVoiceStudio
}) => {
  const [currentSpeed, setCurrentSpeed] = useState<number>(() => getTTSPlaybackRate());
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [voiceGroups, setVoiceGroups] = useState<VoiceGroup[]>([]);

  const refreshVoices = () => {
    setSelectedVoice(getSelectedTTSVoice());
    setVoiceGroups(getGroupedTTSVoices());
  };

  useEffect(() => {
    refreshVoices();

    const handleSpeedChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ rate: number }>;
      if (customEvent.detail && customEvent.detail.rate) {
        setCurrentSpeed(customEvent.detail.rate);
      }
    };

    const handleVoiceChange = () => {
      setSelectedVoice(getSelectedTTSVoice());
    };

    window.addEventListener("vstep_tts_speed_changed", handleSpeedChange);
    window.addEventListener("vstep_tts_voice_changed", handleVoiceChange);
    
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = refreshVoices;
      }
    }

    return () => {
      window.removeEventListener("vstep_tts_speed_changed", handleSpeedChange);
      window.removeEventListener("vstep_tts_voice_changed", handleVoiceChange);
    };
  }, []);

  const handleSpeedChange = (newRate: number) => {
    setCurrentSpeed(newRate);
    setTTSPlaybackRate(newRate);
  };

  const handleVoiceSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const uri = e.target.value;
    const all = getAllTTSVoices();
    const found = all.find((v) => (v.voiceURI || v.name) === uri);
    if (found) {
      setCustomTTSVoice(found);
      setSelectedVoice(found);
    }
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
                onClick={() => handleSpeedChange(opt.value)}
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

  // Combined Voice & Speed Controls (Default in header and audio panels)
  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      
      {/* Quick Voice Accent Selector */}
      <div className="relative">
        <select
          value={selectedVoice?.voiceURI || selectedVoice?.name || ""}
          onChange={handleVoiceSelect}
          className={`appearance-none pl-7 pr-6 py-1.5 ${
            isLight
              ? "bg-slate-100 hover:bg-slate-200/80 text-slate-800 border-slate-300"
              : "bg-slate-800/90 hover:bg-slate-800 text-slate-100 border-slate-700"
          } border rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer transition shadow-2xs max-w-[150px] sm:max-w-[190px] truncate`}
          title="Select Spoken Voice & Accent"
        >
          {voiceGroups.length > 0 ? (
            voiceGroups.map((g) => (
              <optgroup key={g.code} label={`${g.flag} ${g.region}`}>
                {g.voices.map((v) => (
                  <option
                    key={v.voice.voiceURI || v.voice.name}
                    value={v.voice.voiceURI || v.voice.name}
                    className={isLight ? "bg-white text-slate-900" : "bg-slate-900 text-slate-100"}
                  >
                    {g.flag} {v.displayName} ({v.gender.charAt(0)})
                  </option>
                ))}
              </optgroup>
            ))
          ) : (
            <option value="">Default English Voice</option>
          )}
        </select>
        <Volume2 className={`w-3.5 h-3.5 ${isLight ? "text-amber-700" : "text-amber-400"} absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none`} />
        <ChevronDown className={`w-3 h-3 ${isLight ? "text-slate-500" : "text-slate-400"} absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none`} />
      </div>

      {/* Speed Rate Dropdown */}
      <div className="relative">
        <select
          value={currentSpeed}
          onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
          className={`appearance-none pl-6 pr-5 py-1.5 ${
            isLight
              ? "bg-slate-100 hover:bg-slate-200/80 text-amber-800 border-slate-300"
              : "bg-slate-800/90 hover:bg-slate-800 text-amber-300 border-slate-700"
          } border rounded-xl text-xs font-bold focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer transition shadow-2xs`}
          title="TTS Speed Rate"
        >
          {TTS_SPEED_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className={isLight ? "bg-white text-slate-900" : "bg-slate-900 text-slate-100"}>
              {opt.label.split(" ")[0]}
            </option>
          ))}
        </select>
        <Gauge className={`w-3.5 h-3.5 ${isLight ? "text-amber-700" : "text-amber-400"} absolute left-1.5 top-1/2 -translate-y-1/2 pointer-events-none`} />
      </div>

      {/* Voice Studio Modal Trigger */}
      {onOpenVoiceStudio && (
        <button
          type="button"
          onClick={onOpenVoiceStudio}
          className={`p-1.5 rounded-xl border transition cursor-pointer ${
            isLight
              ? "bg-amber-50 hover:bg-amber-100 text-amber-800 border-amber-200"
              : "bg-slate-800/80 hover:bg-slate-700 text-amber-300 border-slate-700"
          }`}
          title="Open Voice Studio (More Voices, Accents & Pitch)"
        >
          <Sliders className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};

