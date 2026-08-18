/**
 * Text-to-Speech Utility with Female British Voice as Primary Selection & Configurable Playback Speed
 */

/**
 * Text-to-Speech Utility with Multi-Voice & Accent Management (British, American, Australian, etc.)
 * Configurable Playback Speed, Pitch, and Live Voice Testing.
 */

let selectedVoice: SpeechSynthesisVoice | null = null;
let currentUtterance: SpeechSynthesisUtterance | null = null;

const SPEED_STORAGE_KEY = "vstep_tts_speed";
const VOICE_STORAGE_KEY = "vstep_selected_voice_uri";
const PITCH_STORAGE_KEY = "vstep_tts_pitch";

export const TTS_SPEED_OPTIONS = [
  { label: "0.75x (Slow)", value: 0.75 },
  { label: "0.85x", value: 0.85 },
  { label: "0.95x (Natural)", value: 0.95 },
  { label: "1.0x (Standard)", value: 1.0 },
  { label: "1.15x (Brisk)", value: 1.15 },
  { label: "1.25x (Fast)", value: 1.25 }
];

export const TTS_PITCH_OPTIONS = [
  { label: "0.85 (Deeper)", value: 0.85 },
  { label: "1.0 (Natural)", value: 1.0 },
  { label: "1.15 (Higher)", value: 1.15 }
];

export interface VoiceGroup {
  region: string;
  flag: string;
  code: string;
  voices: {
    voice: SpeechSynthesisVoice;
    displayName: string;
    gender: "Female" | "Male" | "Neutral";
    isRecommended?: boolean;
  }[];
}

export function getTTSPlaybackRate(): number {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(SPEED_STORAGE_KEY);
    if (saved) {
      const parsed = parseFloat(saved);
      if (!isNaN(parsed) && parsed >= 0.5 && parsed <= 2.0) {
        return parsed;
      }
    }
  }
  return 0.95; // Default natural cadence
}

export function setTTSPlaybackRate(rate: number): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(SPEED_STORAGE_KEY, rate.toString());
    window.dispatchEvent(new CustomEvent("vstep_tts_speed_changed", { detail: { rate } }));
  }
}

export function getTTSPitch(): number {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(PITCH_STORAGE_KEY);
    if (saved) {
      const parsed = parseFloat(saved);
      if (!isNaN(parsed) && parsed >= 0.5 && parsed <= 1.8) {
        return parsed;
      }
    }
  }
  return 1.0;
}

export function setTTSPitch(pitch: number): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(PITCH_STORAGE_KEY, pitch.toString());
    window.dispatchEvent(new CustomEvent("vstep_tts_pitch_changed", { detail: { pitch } }));
  }
}

/**
 * Heuristically detect gender of a voice based on standard names and descriptors
 */
export function detectVoiceGender(voice: SpeechSynthesisVoice): "Female" | "Male" | "Neutral" {
  const name = voice.name.toLowerCase();
  if (
    name.includes("female") ||
    name.includes("woman") ||
    name.includes("hazel") ||
    name.includes("sonia") ||
    name.includes("serena") ||
    name.includes("fiona") ||
    name.includes("victoria") ||
    name.includes("samantha") ||
    name.includes("zira") ||
    name.includes("karen") ||
    name.includes("catherine") ||
    name.includes("linda") ||
    name.includes("moira") ||
    name.includes("susan") ||
    name.includes("ava") ||
    name.includes("jenny") ||
    name.includes("aria") ||
    name.includes("emma")
  ) {
    return "Female";
  }

  if (
    name.includes("male") ||
    name.includes("man") ||
    name.includes("george") ||
    name.includes("oliver") ||
    name.includes("brian") ||
    name.includes("alex") ||
    name.includes("david") ||
    name.includes("guy") ||
    name.includes("daniel") ||
    name.includes("tom") ||
    name.includes("arthur") ||
    name.includes("ryan")
  ) {
    return "Male";
  }

  return "Neutral";
}

export function initializeTTSVoices(onVoicesLoaded?: (voices: SpeechSynthesisVoice[]) => void) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return;
  }

  const loadVoices = () => {
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;

    // Check if user previously selected a preferred voice URI or Name
    const savedVoiceUri = localStorage.getItem(VOICE_STORAGE_KEY);
    if (savedVoiceUri) {
      const foundSaved = voices.find((v) => v.voiceURI === savedVoiceUri || v.name === savedVoiceUri);
      if (foundSaved) {
        selectedVoice = foundSaved;
        if (onVoicesLoaded) onVoicesLoaded(voices);
        return;
      }
    }

    // Default 1: Search for Female British Voice (en-GB) - standard for VSTEP UK pronunciation
    const britishFemale = voices.find(
      (v) =>
        (v.lang.toLowerCase().replace("_", "-") === "en-gb") &&
        (detectVoiceGender(v) === "Female" ||
          v.name.toLowerCase().includes("google uk english female") ||
          v.name.toLowerCase().includes("hazel") ||
          v.name.toLowerCase().includes("sonia") ||
          v.name.toLowerCase().includes("serena") ||
          v.name.toLowerCase().includes("fiona") ||
          v.name.toLowerCase().includes("victoria"))
    );

    if (britishFemale) {
      selectedVoice = britishFemale;
    } else {
      // Fallback 1: Any British voice (en-GB)
      const anyBritish = voices.find((v) => v.lang.toLowerCase().replace("_", "-").startsWith("en-gb"));
      if (anyBritish) {
        selectedVoice = anyBritish;
      } else {
        // Fallback 2: Any English Female voice
        const anyEnglishFemale = voices.find(
          (v) =>
            v.lang.toLowerCase().startsWith("en") &&
            detectVoiceGender(v) === "Female"
        );
        selectedVoice = anyEnglishFemale || voices.find((v) => v.lang.toLowerCase().startsWith("en")) || voices[0];
      }
    }

    if (onVoicesLoaded) {
      onVoicesLoaded(voices);
    }
  };

  loadVoices();

  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

export function getSelectedTTSVoice(): SpeechSynthesisVoice | null {
  if (!selectedVoice && typeof window !== "undefined" && "speechSynthesis" in window) {
    initializeTTSVoices();
  }
  return selectedVoice;
}

export function getAllTTSVoices(): SpeechSynthesisVoice[] {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    return window.speechSynthesis.getVoices();
  }
  return [];
}

/**
 * Returns categorized and curated voice groups for accents
 */
export function getGroupedTTSVoices(): VoiceGroup[] {
  const allVoices = getAllTTSVoices();
  const englishVoices = allVoices.filter((v) => v.lang.toLowerCase().startsWith("en"));
  const nonEnglishVoices = allVoices.filter((v) => !v.lang.toLowerCase().startsWith("en"));

  const gbVoices = englishVoices.filter((v) => v.lang.toLowerCase().replace("_", "-").startsWith("en-gb"));
  const usVoices = englishVoices.filter((v) => v.lang.toLowerCase().replace("_", "-").startsWith("en-us"));
  const auVoices = englishVoices.filter((v) => v.lang.toLowerCase().replace("_", "-").startsWith("en-au"));
  const caVoices = englishVoices.filter((v) => v.lang.toLowerCase().replace("_", "-").startsWith("en-ca"));
  const otherEnVoices = englishVoices.filter(
    (v) =>
      !v.lang.toLowerCase().replace("_", "-").startsWith("en-gb") &&
      !v.lang.toLowerCase().replace("_", "-").startsWith("en-us") &&
      !v.lang.toLowerCase().replace("_", "-").startsWith("en-au") &&
      !v.lang.toLowerCase().replace("_", "-").startsWith("en-ca")
  );

  const formatVoice = (voice: SpeechSynthesisVoice) => {
    const gender = detectVoiceGender(voice);
    const cleanName = voice.name
      .replace(/Google /gi, "")
      .replace(/Microsoft /gi, "")
      .replace(/English \([^)]+\)/gi, "")
      .trim();

    const isRecommended =
      voice.lang.toLowerCase().includes("gb") && gender === "Female";

    return {
      voice,
      displayName: cleanName || voice.name,
      gender,
      isRecommended
    };
  };

  const groups: VoiceGroup[] = [];

  if (gbVoices.length > 0) {
    groups.push({
      region: "British English (UK - VSTEP Standard)",
      flag: "🇬🇧",
      code: "en-GB",
      voices: gbVoices.map(formatVoice)
    });
  }

  if (usVoices.length > 0) {
    groups.push({
      region: "American English (US)",
      flag: "🇺🇸",
      code: "en-US",
      voices: usVoices.map(formatVoice)
    });
  }

  if (auVoices.length > 0) {
    groups.push({
      region: "Australian English (AU)",
      flag: "🇦🇺",
      code: "en-AU",
      voices: auVoices.map(formatVoice)
    });
  }

  if (caVoices.length > 0) {
    groups.push({
      region: "Canadian English (CA)",
      flag: "🇨🇦",
      code: "en-CA",
      voices: caVoices.map(formatVoice)
    });
  }

  if (otherEnVoices.length > 0) {
    groups.push({
      region: "International & Other English",
      flag: "🌐",
      code: "en-Global",
      voices: otherEnVoices.map(formatVoice)
    });
  }

  if (groups.length === 0 && allVoices.length > 0) {
    groups.push({
      region: "System Voices",
      flag: "🔊",
      code: "all",
      voices: allVoices.map(formatVoice)
    });
  }

  return groups;
}

export function setCustomTTSVoice(voice: SpeechSynthesisVoice) {
  selectedVoice = voice;
  if (typeof window !== "undefined") {
    localStorage.setItem(VOICE_STORAGE_KEY, voice.voiceURI || voice.name);
    window.dispatchEvent(new CustomEvent("vstep_tts_voice_changed", { detail: { voice } }));
  }
}

export function setTTSVoiceByURI(voiceUri: string): boolean {
  const voices = getAllTTSVoices();
  const found = voices.find((v) => v.voiceURI === voiceUri || v.name === voiceUri);
  if (found) {
    setCustomTTSVoice(found);
    return true;
  }
  return false;
}

/**
 * Formats text for accurate phonetic speech synthesis.
 * Ensures "VSTEP" is spoken phonetically as [vi: step] ("Vee-step") rather than spelling out individual letters.
 */
export function formatPhoneticTextForTTS(text: string): string {
  if (!text) return "";
  return text
    .replace(/\bVSTEP\b/gi, "Vee-step")
    .replace(/\bV-STEP\b/gi, "Vee-step");
}

export function speakText(
  text: string,
  options?: {
    voice?: SpeechSynthesisVoice | null;
    rate?: number;
    pitch?: number;
    onStart?: () => void;
    onEnd?: () => void;
    onError?: (err: any) => void;
  }
) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    console.warn("SpeechSynthesis API is not supported in this environment.");
    if (options?.onError) options.onError("SpeechSynthesis not supported.");
    return;
  }

  // Cancel any ongoing speech
  stopSpeaking();

  // Normalize phonetic pronunciations (e.g. VSTEP -> Vee-step [vi: step])
  const formattedText = formatPhoneticTextForTTS(text);

  const utterance = new SpeechSynthesisUtterance(formattedText);
  currentUtterance = utterance;

  const voice = options?.voice || getSelectedTTSVoice();
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang || "en-GB";
  } else {
    utterance.lang = "en-GB";
  }

  utterance.rate = options?.rate ?? getTTSPlaybackRate();
  utterance.pitch = options?.pitch ?? getTTSPitch();

  utterance.onstart = () => {
    if (options?.onStart) options.onStart();
  };

  utterance.onend = () => {
    currentUtterance = null;
    if (options?.onEnd) options.onEnd();
  };

  utterance.onerror = (e) => {
    currentUtterance = null;
    if (options?.onError) options.onError(e);
  };

  window.speechSynthesis.speak(utterance);
}

export function previewVoice(
  voice: SpeechSynthesisVoice,
  sampleText: string = "Hello! In my opinion, option A is the most suitable choice for this situation."
) {
  speakText(sampleText, { voice });
}

export function stopSpeaking() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    currentUtterance = null;
  }
}

export function isSpeaking(): boolean {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    return window.speechSynthesis.speaking;
  }
  return false;
}


