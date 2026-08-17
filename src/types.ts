export type AppMode = "instructions" | "test" | "practice" | "results";
export type AppTheme = "midnight" | "light" | "emerald" | "sunset";

export interface Part2Option {
  id: string;
  label: string; // e.g. "Option A", "Option B", "Option C"
  title: string;
  description: string;
  advantages: string[];
  disadvantages: string[];
}

export interface Part2Question {
  id: string;
  situationTitle: string;
  situation: string;
  options: [Part2Option, Part2Option, Part2Option]; // Exactly 3 options for VSTEP Part 2
  prompt: string;
  keywords: string[];
  tips: string[];
  pronunciationGuide: {
    english: {
      phonetic: string;
      intonation: string;
      stressAndLinking: string;
    };
    vietnamese: {
      huongDanPhatAm: string;
      nguDieuVaNhanGiong: string;
      meoTraLoi: string;
    };
  };
  modelAnswerB1: string; // Target Band B1 (4.0 - 5.5) Model Answer
  modelAnswerB2: string; // Target Band B2 (6.0 - 8.0) Model Answer
  modelAnswer: string; // Fallback / Default (Band B2)
  modelAnswerPhonetics?: string;
}

export interface QuestionSet {
  id: string;
  title: string;
  level: string;
  description: string;
  iconName: string;
  question: Part2Question;
}

export interface RecordingChunk {
  questionId?: string;
  blob: Blob;
  url: string;
  durationMs: number;
  timestamp: number;
  transcript?: string;
}

export interface TestResult {
  setId: string;
  setTitle: string;
  mode: "test" | "practice";
  prepDurationSeconds: number;
  responseDurationSeconds: number;
  totalDurationSeconds: number;
  recordedAt: string;
  notesTaken: string; // User notes taken during 1-min prep time
  combinedAudioBlob?: Blob;
  combinedAudioUrl?: string;
  userTranscripts: Record<string, string>;
  audioChunks: RecordingChunk[];
}

