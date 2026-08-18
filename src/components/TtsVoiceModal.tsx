import React, { useState, useEffect } from "react";
import {
  X,
  Volume2,
  Play,
  Square,
  Sparkles,
  Check,
  Globe,
  Sliders,
  RotateCcw,
  User,
  Mic,
  Gauge,
  Music
} from "lucide-react";
import {
  getAllTTSVoices,
  getGroupedTTSVoices,
  getSelectedTTSVoice,
  setCustomTTSVoice,
  getTTSPlaybackRate,
  setTTSPlaybackRate,
  getTTSPitch,
  setTTSPitch,
  TTS_SPEED_OPTIONS,
  TTS_PITCH_OPTIONS,
  previewVoice,
  stopSpeaking,
  isSpeaking,
  VoiceGroup
} from "../utils/tts";

interface TtsVoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLight?: boolean;
}

const SAMPLE_PHRASES = [
  {
    label: "VSTEP Choice & Justification",
    text: "In my opinion, choosing option A is the most practical solution for our situation."
  },
  {
    label: "Band B2 Rebuttal & Contrast",
    text: "Although option B appears attractive at first glance, its substantial cost makes it unfeasible."
  },
  {
    label: "Phonetic VSTEP Test Sample",
    text: "Welcome to the VSTEP Speaking test preparation simulator."
  }
];

export const TtsVoiceModal: React.FC<TtsVoiceModalProps> = ({
  isOpen,
  onClose,
  isLight = false
}) => {
  const [voiceGroups, setVoiceGroups] = useState<VoiceGroup[]>([]);
  const [selectedVoice, setSelectedVoiceState] = useState<SpeechSynthesisVoice | null>(null);
  const [speed, setSpeed] = useState<number>(() => getTTSPlaybackRate());
  const [pitch, setPitchState] = useState<number>(() => getTTSPitch());
  const [activeTab, setActiveTab] = useState<string>("all");
  const [playingVoiceURI, setPlayingVoiceURI] = useState<string | null>(null);
  const [customSampleText, setCustomSampleText] = useState<string>(SAMPLE_PHRASES[0].text);

  const refreshVoices = () => {
    const groups = getGroupedTTSVoices();
    setVoiceGroups(groups);
    setSelectedVoiceState(getSelectedTTSVoice());
  };

  useEffect(() => {
    if (isOpen) {
      refreshVoices();
      setSpeed(getTTSPlaybackRate());
      setPitchState(getTTSPitch());
    }
  }, [isOpen]);

  useEffect(() => {
    const handleVoiceChange = () => {
      setSelectedVoiceState(getSelectedTTSVoice());
    };
    const handleSpeedChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ rate: number }>;
      if (customEvent.detail?.rate) setSpeed(customEvent.detail.rate);
    };

    window.addEventListener("vstep_tts_voice_changed", handleVoiceChange);
    window.addEventListener("vstep_tts_speed_changed", handleSpeedChange);
    return () => {
      window.removeEventListener("vstep_tts_voice_changed", handleVoiceChange);
      window.removeEventListener("vstep_tts_speed_changed", handleSpeedChange);
    };
  }, []);

  if (!isOpen) return null;

  const handleSelectVoice = (voice: SpeechSynthesisVoice) => {
    setCustomTTSVoice(voice);
    setSelectedVoiceState(voice);
  };

  const handlePreview = (voice: SpeechSynthesisVoice) => {
    if (playingVoiceURI === (voice.voiceURI || voice.name) && isSpeaking()) {
      stopSpeaking();
      setPlayingVoiceURI(null);
    } else {
      stopSpeaking();
      setPlayingVoiceURI(voice.voiceURI || voice.name);
      previewVoice(voice, customSampleText);
      
      const checkDoneInterval = setInterval(() => {
        if (!isSpeaking()) {
          setPlayingVoiceURI(null);
          clearInterval(checkDoneInterval);
        }
      }, 250);
    }
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
    setTTSPlaybackRate(newSpeed);
  };

  const handlePitchChange = (newPitch: number) => {
    setPitchState(newPitch);
    setTTSPitch(newPitch);
  };

  const handleResetToBritishDefault = () => {
    const all = getAllTTSVoices();
    const britishFemale = all.find(
      (v) =>
        v.lang.toLowerCase().replace("_", "-").startsWith("en-gb") &&
        (v.name.toLowerCase().includes("female") ||
          v.name.toLowerCase().includes("hazel") ||
          v.name.toLowerCase().includes("sonia") ||
          v.name.toLowerCase().includes("serena"))
    ) || all.find((v) => v.lang.toLowerCase().replace("_", "-").startsWith("en-gb")) || all[0];

    if (britishFemale) {
      handleSelectVoice(britishFemale);
    }
    handleSpeedChange(0.95);
    handlePitchChange(1.0);
  };

  // Filter groups if activeTab selected
  const displayedGroups =
    activeTab === "all"
      ? voiceGroups
      : voiceGroups.filter((g) => g.code.toLowerCase().includes(activeTab.toLowerCase()));

  const totalVoicesCount = voiceGroups.reduce((acc, g) => acc + g.voices.length, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`${
          isLight ? "bg-white text-slate-900 border-slate-200" : "bg-slate-900 text-slate-100 border-slate-800"
        } border rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden`}
      >
        {/* Modal Header */}
        <div className={`p-5 sm:p-6 border-b ${isLight ? "border-slate-200 bg-slate-50/80" : "border-slate-800 bg-slate-950/50"} flex items-center justify-between flex-shrink-0`}>
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-500 flex items-center justify-center shadow-inner">
              <Volume2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg sm:text-xl font-extrabold tracking-tight">
                  TTS Voice Studio & Accent Selector
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-[10px] font-bold uppercase tracking-wider">
                  {totalVoicesCount} Voices Available
                </span>
              </div>
              <p className={`text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                Choose from British (UK RP examiner standard), American, Australian, and system voices with custom rate and pitch.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl transition cursor-pointer ${
              isLight ? "text-slate-400 hover:text-slate-700 hover:bg-slate-200" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with Voice Tabs and List */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* Top Audio Fine-Tuning Bar: Speed & Pitch & Presets */}
          <div className={`p-4 rounded-2xl border ${isLight ? "bg-slate-50 border-slate-200" : "bg-slate-950/70 border-slate-800"} space-y-3.5`}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                <Sliders className="w-4 h-4" />
                <span>Audio Engine Fine-Tuning</span>
              </div>

              <button
                onClick={handleResetToBritishDefault}
                className={`text-[11px] font-semibold flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                  isLight ? "bg-white hover:bg-slate-100 text-slate-700 border-slate-300" : "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700"
                }`}
                title="Reset to recommended British Female examiner voice"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to British Female (VSTEP Default)</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Playback Speed Controls */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className={`font-semibold ${isLight ? "text-slate-700" : "text-slate-300"} flex items-center gap-1`}>
                    <Gauge className="w-3.5 h-3.5 text-amber-500" />
                    Speaking Rate:
                  </span>
                  <span className="font-mono font-bold text-amber-600 dark:text-amber-400">{speed}x</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {TTS_SPEED_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSpeedChange(opt.value)}
                      className={`px-2.5 py-1 text-xs font-bold rounded-lg transition cursor-pointer border ${
                        Math.abs(speed - opt.value) < 0.01
                          ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                          : isLight
                          ? "bg-white text-slate-700 hover:bg-slate-100 border-slate-300"
                          : "bg-slate-800/90 text-slate-300 hover:bg-slate-700 border-slate-700"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pitch Adjuster */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className={`font-semibold ${isLight ? "text-slate-700" : "text-slate-300"} flex items-center gap-1`}>
                    <Music className="w-3.5 h-3.5 text-indigo-500" />
                    Voice Pitch:
                  </span>
                  <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">{pitch}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {TTS_PITCH_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handlePitchChange(opt.value)}
                      className={`px-2.5 py-1 text-xs font-bold rounded-lg transition cursor-pointer border ${
                        Math.abs(pitch - opt.value) < 0.01
                          ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                          : isLight
                          ? "bg-white text-slate-700 hover:bg-slate-100 border-slate-300"
                          : "bg-slate-800/90 text-slate-300 hover:bg-slate-700 border-slate-700"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom Sample Tester Box */}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className={`text-[11px] font-semibold ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                  Test Sample Phrase:
                </span>
                <div className="flex flex-wrap gap-1">
                  {SAMPLE_PHRASES.map((phrase, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCustomSampleText(phrase.text)}
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold transition cursor-pointer ${
                        customSampleText === phrase.text
                          ? "bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30"
                          : isLight
                          ? "bg-slate-200/80 text-slate-600 hover:bg-slate-300"
                          : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                      }`}
                    >
                      {phrase.label}
                    </button>
                  ))}
                </div>
              </div>
              <input
                type="text"
                value={customSampleText}
                onChange={(e) => setCustomSampleText(e.target.value)}
                placeholder="Type any test sentence..."
                className={`w-full px-3 py-1.5 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  isLight
                    ? "bg-white text-slate-900 border-slate-300 placeholder-slate-400"
                    : "bg-slate-900 text-slate-200 border-slate-800 placeholder-slate-500"
                }`}
              />
            </div>
          </div>

          {/* Accent Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === "all"
                  ? "bg-amber-600 text-white shadow-xs"
                  : isLight
                  ? "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-300"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>All Accents ({totalVoicesCount})</span>
            </button>

            {voiceGroups.map((group) => (
              <button
                key={group.code}
                onClick={() => setActiveTab(group.code)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  activeTab === group.code
                    ? "bg-amber-600 text-white shadow-xs"
                    : isLight
                    ? "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                }`}
              >
                <span>{group.flag}</span>
                <span>{group.region.split(" (")[0]}</span>
                <span className="text-[10px] opacity-75 font-mono">({group.voices.length})</span>
              </button>
            ))}
          </div>

          {/* Voices List by Group */}
          <div className="space-y-6">
            {displayedGroups.length === 0 ? (
              <div className={`p-8 text-center rounded-2xl border ${isLight ? "bg-slate-50 border-slate-200 text-slate-500" : "bg-slate-950 border-slate-800 text-slate-400"}`}>
                <Volume2 className="w-8 h-8 mx-auto mb-2 opacity-50 text-amber-500" />
                <p className="text-sm font-semibold">No speech synthesis voices found for this filter in your browser.</p>
                <p className="text-xs mt-1">Please ensure your operating system has English text-to-speech voices enabled.</p>
              </div>
            ) : (
              displayedGroups.map((group) => (
                <div key={group.code} className="space-y-3">
                  <div className="flex items-center space-x-2 border-b pb-2 border-slate-200 dark:border-slate-800">
                    <span className="text-base">{group.flag}</span>
                    <h3 className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${isLight ? "text-slate-800" : "text-slate-200"}`}>
                      {group.region}
                    </h3>
                    <span className={`text-[11px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                      ({group.voices.length} {group.voices.length === 1 ? "voice" : "voices"})
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {group.voices.map((item) => {
                      const isSelected =
                        selectedVoice &&
                        (selectedVoice.voiceURI === item.voice.voiceURI ||
                          selectedVoice.name === item.voice.name);
                      const isPlayingThis = playingVoiceURI === (item.voice.voiceURI || item.voice.name);

                      return (
                        <div
                          key={item.voice.voiceURI || item.voice.name}
                          onClick={() => handleSelectVoice(item.voice)}
                          className={`p-3.5 rounded-2xl border transition flex flex-col justify-between space-y-3 cursor-pointer ${
                            isSelected
                              ? isLight
                                ? "bg-amber-50/90 border-amber-500 ring-2 ring-amber-500/20 shadow-sm"
                                : "bg-amber-950/30 border-amber-500/80 ring-2 ring-amber-500/20 shadow-md"
                              : isLight
                              ? "bg-slate-50/80 hover:bg-slate-100 border-slate-200"
                              : "bg-slate-950/60 hover:bg-slate-800/80 border-slate-800/80"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <span className={`text-xs sm:text-sm font-bold ${isLight ? "text-slate-900" : "text-white"}`}>
                                  {item.displayName}
                                </span>
                                {item.isRecommended && (
                                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 text-[9px] font-bold uppercase">
                                    VSTEP Standard
                                  </span>
                                )}
                              </div>

                              <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                                <span className={`px-1.5 py-0.5 rounded font-mono ${
                                  isLight ? "bg-slate-200 text-slate-700" : "bg-slate-800 text-slate-400"
                                }`}>
                                  {item.voice.lang}
                                </span>
                                <span className={`px-1.5 py-0.5 rounded font-medium flex items-center gap-1 ${
                                  item.gender === "Female"
                                    ? "bg-rose-500/10 text-rose-600 dark:text-rose-300 border border-rose-500/20"
                                    : item.gender === "Male"
                                    ? "bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/20"
                                    : "bg-slate-500/10 text-slate-600 dark:text-slate-400"
                                }`}>
                                  <User className="w-2.5 h-2.5" />
                                  {item.gender}
                                </span>
                              </div>
                            </div>

                            {/* Active selection tick */}
                            {isSelected && (
                              <div className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-xs flex-shrink-0">
                                <Check className="w-3.5 h-3.5" />
                              </div>
                            )}
                          </div>

                          {/* Action Bottom Bar */}
                          <div className="flex items-center justify-between pt-1 border-t border-slate-200 dark:border-slate-800/60">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePreview(item.voice);
                              }}
                              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                                isPlayingThis
                                  ? "bg-rose-600 text-white animate-pulse"
                                  : isLight
                                  ? "bg-white hover:bg-slate-200 text-slate-800 border border-slate-300"
                                  : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                              }`}
                            >
                              {isPlayingThis ? (
                                <>
                                  <Square className="w-3 h-3 fill-current" />
                                  <span>Stop Preview</span>
                                </>
                              ) : (
                                <>
                                  <Play className="w-3 h-3 fill-current text-amber-500" />
                                  <span>Listen Sample</span>
                                </>
                              )}
                            </button>

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSelectVoice(item.voice);
                              }}
                              className={`text-xs font-bold px-2.5 py-1 rounded-lg transition cursor-pointer ${
                                isSelected
                                  ? "text-amber-600 dark:text-amber-400 font-extrabold"
                                  : isLight
                                  ? "text-slate-500 hover:text-slate-900"
                                  : "text-slate-400 hover:text-slate-200"
                              }`}
                            >
                              {isSelected ? "Active Voice" : "Select"}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className={`p-4 sm:p-5 border-t ${isLight ? "border-slate-200 bg-slate-50" : "border-slate-800 bg-slate-950/70"} flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0`}>
          <div className="flex items-center space-x-2 text-xs">
            <span className={`font-semibold ${isLight ? "text-slate-600" : "text-slate-400"}`}>Selected Voice:</span>
            <span className="font-bold text-amber-600 dark:text-amber-400">
              {selectedVoice?.name || "System Default English"}
            </span>
            <span className="text-[11px] opacity-75 font-mono">({selectedVoice?.lang || "en-GB"})</span>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-amber-600/30 transition cursor-pointer"
          >
            Apply & Close Studio
          </button>
        </div>
      </div>
    </div>
  );
};
