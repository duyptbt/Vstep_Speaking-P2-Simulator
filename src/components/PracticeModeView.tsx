import React, { useState, useRef } from "react";
import { QuestionSet, RecordingChunk, TestResult, AppTheme } from "../types";
import { speakText, stopSpeaking } from "../utils/tts";
import { SpeechToTextEngine } from "../utils/audio";
import { THEMES } from "../utils/theme";
import {
  Volume2,
  Mic,
  Square,
  Play,
  RotateCcw,
  Sparkles,
  BookOpen,
  Lightbulb,
  Globe,
  Award,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Edit3,
  Trash2,
  FileText
} from "lucide-react";

interface PracticeModeViewProps {
  questionSet: QuestionSet;
  onFinishPractice: (result: TestResult) => void;
  currentTheme?: AppTheme;
}

export const PracticeModeView: React.FC<PracticeModeViewProps> = ({
  questionSet,
  onFinishPractice,
  currentTheme = "midnight"
}) => {
  const theme = THEMES[currentTheme] || THEMES.midnight;

  const [recordingState, setRecordingState] = useState<"idle" | "recording" | "recorded">("idle");
  const [practiceTranscript, setPracticeTranscript] = useState<string>("");
  const [recordedChunk, setRecordedChunk] = useState<RecordingChunk | null>(null);
  const [practiceNotes, setPracticeNotes] = useState<string>("");
  const [isPronunciationOpen, setIsPronunciationOpen] = useState<boolean>(true);
  const [selectedBand, setSelectedBand] = useState<"B1" | "B2">("B2");

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const currentChunksRef = useRef<Blob[]>([]);
  const speechEngineRef = useRef<SpeechToTextEngine | null>(null);

  const { question } = questionSet;

  // Start recording answer
  const startPracticeRecording = async () => {
    stopSpeaking();
    currentChunksRef.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          currentChunksRef.current.push(e.data);
        }
      };

      mediaRecorder.start(200);

      // Start speech to text
      const engine = new SpeechToTextEngine((transcript) => {
        setPracticeTranscript(transcript);
      });
      speechEngineRef.current = engine;
      engine.start();

      setRecordingState("recording");
    } catch (err) {
      console.error("Mic access error in practice:", err);
      alert("Microphone permission required to practice recording.");
    }
  };

  // Stop recording answer
  const stopPracticeRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
    }

    let finalTranscript = "";
    if (speechEngineRef.current) {
      finalTranscript = speechEngineRef.current.stop();
    }

    const mimeType = mediaRecorderRef.current?.mimeType || "audio/webm";
    const blob = new Blob(currentChunksRef.current, { type: mimeType });
    const url = URL.createObjectURL(blob);

    const chunk: RecordingChunk = {
      questionId: question.id,
      blob,
      url,
      durationMs: 180000,
      timestamp: Date.now(),
      transcript: finalTranscript || practiceTranscript || "Practice solution discussion answer recorded."
    };

    setRecordedChunk(chunk);
    setRecordingState("recorded");
  };

  // Play candidate's recorded audio
  const playRecordedAudio = () => {
    if (!recordedChunk) return;
    const audio = new Audio(recordedChunk.url);
    audio.play();
  };

  // Finish practice session
  const submitPracticeSession = () => {
    const audioChunks = recordedChunk ? [recordedChunk] : [];
    const combinedBlob = recordedChunk?.blob;
    const combinedUrl = recordedChunk?.url;

    const result: TestResult = {
      setId: questionSet.id,
      setTitle: questionSet.title,
      mode: "practice",
      prepDurationSeconds: 60,
      responseDurationSeconds: 180,
      totalDurationSeconds: 240,
      recordedAt: new Date().toLocaleString("vi-VN"),
      notesTaken: practiceNotes || "(No notes taken in practice mode)",
      combinedAudioBlob: combinedBlob,
      combinedAudioUrl: combinedUrl,
      userTranscripts: {
        [question.id]: practiceTranscript || "Practice response recorded."
      },
      audioChunks
    };

    onFinishPractice(result);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 space-y-6">
      
      {/* Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Practice & Guided Study Mode (Part 2)</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">{questionSet.title}</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Review B2 collocations, solution discussion formula, <strong>bilingual EN/VI pronunciation guides</strong>, and model answers.
          </p>
        </div>

        <button
          onClick={submitPracticeSession}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg transition flex items-center gap-2 flex-shrink-0"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>Finish Practice Session</span>
        </button>
      </div>

      {/* SPLIT VIEW PRACTICE MODE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* LEFT COLUMN: SITUATION, OPTIONS & PRACTICE NOTEPAD */}
        <div className="space-y-6">
          
          {/* Situation & 3 Options Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                VSTEP Part 2 Situation
              </span>
              <button
                onClick={() => speakText(`Situation: ${question.situation}`)}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-semibold transition flex items-center gap-1.5"
              >
                <Volume2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Listen (British Female)</span>
              </button>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">{question.situationTitle}</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {question.situation}
              </p>
            </div>

            {/* 3 Options */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                3 Options To Compare & Discuss:
              </span>

              {question.options.map((opt) => (
                <div
                  key={opt.id}
                  className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold text-xs">
                      {opt.label}
                    </span>
                    <span className="text-xs font-bold text-white">{opt.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">{opt.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]">
                    <div className="bg-emerald-950/30 border border-emerald-800/30 rounded p-2 text-emerald-300">
                      <strong className="block text-emerald-400 font-semibold mb-0.5">Pros:</strong>
                      <ul className="list-disc list-inside space-y-0.5">
                        {opt.advantages.map((adv, i) => (
                          <li key={i}>{adv}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-rose-950/30 border border-rose-800/30 rounded p-2 text-rose-300">
                      <strong className="block text-rose-400 font-semibold mb-0.5">Cons:</strong>
                      <ul className="list-disc list-inside space-y-0.5">
                        {opt.disadvantages.map((dis, i) => (
                          <li key={i}>{dis}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-4">
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block mb-1">
                Prompt:
              </span>
              <p className="text-xs sm:text-sm font-bold text-indigo-100">
                "{question.prompt}"
              </p>
            </div>
          </div>

          {/* Practice Scratchpad Notepad */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <Edit3 className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Practice Outline & Notes
                </h3>
              </div>
              {practiceNotes && (
                <button
                  onClick={() => setPracticeNotes("")}
                  className="p-1 text-slate-400 hover:text-rose-400 transition"
                  title="Clear Notes"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>

            <textarea
              value={practiceNotes}
              onChange={(e) => setPracticeNotes(e.target.value)}
              placeholder="Draft your outline bullet points here..."
              className="w-full h-40 bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs sm:text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono leading-relaxed resize-none shadow-inner"
            />
          </div>

        </div>

        {/* RIGHT COLUMN: GUIDES, MODEL ANSWER & RECORDER */}
        <div className="space-y-6">
          
          {/* Key B2 Vocabulary & Phrases */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Key B2 Vocabulary & Phrases (Từ Vựng & Cụm Từ B2)</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {question.keywords.map((kw, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-slate-800 border border-slate-700/80 rounded-lg text-xs text-slate-200 font-medium"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Response Formula & Tips */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              <span>Response Structure Formula (Mẹo Cấu Trúc Trả Lời)</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {question.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/50">
                  <span className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-300 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bilingual EN-VI Pronunciation & Intonation Guide */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <button
              onClick={() => setIsPronunciationOpen(!isPronunciationOpen)}
              className="w-full px-5 py-3.5 bg-indigo-950/40 hover:bg-indigo-950/60 text-indigo-300 font-bold text-xs sm:text-sm flex items-center justify-between border-b border-indigo-500/20 transition"
            >
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-indigo-400" />
                <span>Bilingual EN-VI Pronunciation & Intonation Guide</span>
              </div>
              {isPronunciationOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {isPronunciationOpen && (
              <div className="p-5 space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="space-y-2 border-b border-slate-800 pb-3">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    English Phonetics & Pitch Contour:
                  </p>
                  <p className="font-mono text-emerald-400 bg-slate-950 px-3 py-2 rounded-lg border border-slate-800">
                    {question.pronunciationGuide.english.phonetic}
                  </p>
                  <p><strong>Intonation:</strong> {question.pronunciationGuide.english.intonation}</p>
                  <p><strong>Stress & Linking:</strong> {question.pronunciationGuide.english.stressAndLinking}</p>
                </div>

                <div className="space-y-1.5 text-slate-300">
                  <p className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
                    Hướng Dẫn Bằng Tiếng Việt (Vietnamese Guide):
                  </p>
                  <p>• <strong>Phát âm:</strong> {question.pronunciationGuide.vietnamese.huongDanPhatAm}</p>
                  <p>• <strong>Ngữ điệu:</strong> {question.pronunciationGuide.vietnamese.nguDieuVaNhanGiong}</p>
                  <p>• <strong>Mẹo:</strong> {question.pronunciationGuide.vietnamese.meoTraLoi}</p>
                </div>
              </div>
            )}
          </div>

          {/* Target Band Model Answers (B1 & B2) */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  VSTEP Model Answer Comparison
                </span>
              </div>

              {/* Band B1 vs B2 Switcher */}
              <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setSelectedBand("B1")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                    selectedBand === "B1"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span>Band B1 (4.0 - 5.5)</span>
                </button>

                <button
                  onClick={() => setSelectedBand("B2")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                    selectedBand === "B2"
                      ? "bg-emerald-600 text-white shadow-md"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span>Band B2 (6.0 - 8.0)</span>
                </button>
              </div>
            </div>

            {/* Band Description & TTS Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <div className="text-xs text-slate-300">
                {selectedBand === "B1" ? (
                  <p>
                    <strong className="text-blue-400">Band B1 Level:</strong> Clear, accessible sentences with standard connectors (<em>First</em>, <em>Second</em>, <em>Also</em>, <em>In conclusion</em>). Easy to memorize and deliver fluently.
                  </p>
                ) : (
                  <p>
                    <strong className="text-emerald-400">Band B2 Level:</strong> Advanced collocations, compound-complex structures, and nuanced justification (<em>first and foremost</em>, <em>cost-effective</em>, <em>rule out</em>, <em>all things considered</em>).
                  </p>
                )}
              </div>

              <button
                onClick={() =>
                  speakText(
                    selectedBand === "B1"
                      ? question.modelAnswerB1 || question.modelAnswer
                      : question.modelAnswerB2 || question.modelAnswer
                  )
                }
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 shadow-md flex-shrink-0 text-white ${
                  selectedBand === "B1"
                    ? "bg-blue-600 hover:bg-blue-500"
                    : "bg-emerald-600 hover:bg-emerald-500"
                }`}
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Listen {selectedBand} Model (British TTS)</span>
              </button>
            </div>

            {/* Model Answer Box */}
            <div
              className={`bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-line border-l-4 ${
                selectedBand === "B1" ? "border-l-blue-500" : "border-l-emerald-500"
              }`}
            >
              "{selectedBand === "B1" ? question.modelAnswerB1 || question.modelAnswer : question.modelAnswerB2 || question.modelAnswer}"
            </div>
          </div>

          {/* Candidate Practice Recorder */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <Mic className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Record Practice Response</span>
              </div>

              <div className="flex items-center space-x-2">
                {recordingState === "idle" && (
                  <button
                    onClick={startPracticeRecording}
                    className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-md"
                  >
                    <Mic className="w-3.5 h-3.5" />
                    <span>Record Answer</span>
                  </button>
                )}

                {recordingState === "recording" && (
                  <button
                    onClick={stopPracticeRecording}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-rose-400 text-xs font-bold rounded-xl transition flex items-center gap-1.5 border border-rose-500/40 animate-pulse"
                  >
                    <Square className="w-3.5 h-3.5 fill-current" />
                    <span>Stop Recording</span>
                  </button>
                )}

                {recordingState === "recorded" && (
                  <>
                    <button
                      onClick={playRecordedAudio}
                      className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Play Recording</span>
                    </button>
                    <button
                      onClick={startPracticeRecording}
                      className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition flex items-center gap-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Re-record</span>
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="text-xs text-slate-300 bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono min-h-[60px]">
              {practiceTranscript ? (
                <span>{practiceTranscript}</span>
              ) : (
                <span className="text-slate-500 italic">Click "Record Answer" above to practice speaking into your microphone.</span>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
