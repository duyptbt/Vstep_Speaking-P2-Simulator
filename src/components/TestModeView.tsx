import React, { useState, useEffect, useRef } from "react";
import { QuestionSet, TestResult, RecordingChunk, AppTheme } from "../types";
import { speakText, stopSpeaking } from "../utils/tts";
import { SpeechToTextEngine } from "../utils/audio";
import { THEMES } from "../utils/theme";
import {
  Clock,
  Mic,
  Volume2,
  CheckCircle2,
  AlertTriangle,
  Play,
  Sparkles,
  Edit3,
  FileText,
  Trash2,
  ArrowRight,
  ShieldAlert,
  Lightbulb
} from "lucide-react";

interface TestModeViewProps {
  questionSet: QuestionSet;
  onFinishTest: (result: TestResult) => void;
  currentTheme?: AppTheme;
}

export const TestModeView: React.FC<TestModeViewProps> = ({
  questionSet,
  onFinishTest,
  currentTheme = "midnight"
}) => {
  const theme = THEMES[currentTheme] || THEMES.midnight;

  // Phase: "idle" | "prep" | "response" | "finished"
  const [phase, setPhase] = useState<"idle" | "prep" | "response" | "finished">("idle");
  const [prepTimeLeft, setPrepTimeLeft] = useState<number>(60); // 1 minute prep time = 60s
  const [responseTimeLeft, setResponseTimeLeft] = useState<number>(180); // 3 minutes response time = 180s
  const [userNotes, setUserNotes] = useState<string>("");
  const [liveTranscript, setLiveTranscript] = useState<string>("");
  const [micActive, setMicActive] = useState<boolean>(false);
  const [audioLevel, setAudioLevel] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Audio Recording Refs
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const speechEngineRef = useRef<SpeechToTextEngine | null>(null);
  const timerIntervalRef = useRef<any>(null);
  const notesAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const { question } = questionSet;

  // Clean up timers & recording on unmount
  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      stopRecordingMedia();
      stopSpeaking();
    };
  }, []);

  // Timer Effect for Prep Mode (60s) & Response Mode (180s)
  useEffect(() => {
    if (phase === "prep") {
      timerIntervalRef.current = setInterval(() => {
        setPrepTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerIntervalRef.current);
            // Auto transition to response phase!
            startResponsePhase();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (phase === "response") {
      timerIntervalRef.current = setInterval(() => {
        setResponseTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerIntervalRef.current);
            completeTestSession();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [phase]);

  // Start Prep Session (1 minute prep timer + note taking split view)
  const startPrepPhase = () => {
    setErrorMessage(null);
    setLiveTranscript("");
    setUserNotes("");
    setPrepTimeLeft(60);
    setResponseTimeLeft(180);
    audioChunksRef.current = [];
    setPhase("prep");

    // Speak initial situation intro to guide student
    speakText(`VSTEP Speaking Part 2. ${question.situationTitle}. Read the situation and take notes for 1 minute.`);

    // Focus on notes editor after render
    setTimeout(() => {
      if (notesAreaRef.current) {
        notesAreaRef.current.focus();
      }
    }, 200);
  };

  // Start Response Phase (3 minutes response timer + microphone recording)
  const startResponsePhase = async () => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    stopSpeaking();

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Setup Web Audio Analyser for VU Meter
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const audioCtx = new AudioCtx();
      audioContextRef.current = audioCtx;
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);
      analyserRef.current = analyser;

      // Start VU meter animation loop
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      const updateLevel = () => {
        analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
          sum += dataArray[i];
        }
        const average = sum / dataArray.length;
        setAudioLevel(Math.min(100, Math.round((average / 128) * 100)));
        animFrameRef.current = requestAnimationFrame(updateLevel);
      };
      updateLevel();

      // Setup MediaRecorder
      const mediaRecorder = new MediaRecorder(stream, { mimeType: getSupportedMimeType() });
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.start(500); // chunk every 500ms
      setMicActive(true);

      // Start Speech Recognition
      const engine = new SpeechToTextEngine((transcript) => {
        setLiveTranscript(transcript);
      });
      speechEngineRef.current = engine;
      engine.start();

      setPhase("response");

      // Notify candidate that response timer started
      speakText("Prep time is up. Your 3-minute response timer has started. Speak your answer now.");
    } catch (err: any) {
      console.error("Microphone access failed:", err);
      setErrorMessage("Microphone access is required to record your speaking answer. Please grant microphone permission in your browser.");
      setPhase("idle");
    }
  };

  const getSupportedMimeType = () => {
    if (MediaRecorder.isTypeSupported("audio/webm;codecs=opus")) return "audio/webm;codecs=opus";
    if (MediaRecorder.isTypeSupported("audio/webm")) return "audio/webm";
    if (MediaRecorder.isTypeSupported("audio/mp4")) return "audio/mp4";
    if (MediaRecorder.isTypeSupported("audio/ogg")) return "audio/ogg";
    return "";
  };

  const stopRecordingMedia = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
    }
    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
      audioContextRef.current.close();
    }
    if (speechEngineRef.current) {
      speechEngineRef.current.stop();
    }
    setMicActive(false);
  };

  // Complete Test Session
  const completeTestSession = () => {
    setPhase("finished");
    stopSpeaking();
    stopRecordingMedia();

    const capturedTranscript = speechEngineRef.current ? speechEngineRef.current.stop() : liveTranscript;

    // Combine audio chunks into one Blob
    const mimeType = mediaRecorderRef.current?.mimeType || "audio/webm";
    const combinedBlob = new Blob(audioChunksRef.current, { type: mimeType });
    const combinedUrl = URL.createObjectURL(combinedBlob);

    const recordingChunk: RecordingChunk = {
      questionId: question.id,
      blob: combinedBlob,
      url: combinedUrl,
      durationMs: (180 - responseTimeLeft) * 1000,
      timestamp: Date.now(),
      transcript: capturedTranscript || liveTranscript || "Candidate spoke response in Part 2 Test Mode."
    };

    const result: TestResult = {
      setId: questionSet.id,
      setTitle: questionSet.title,
      mode: "test",
      prepDurationSeconds: 60 - prepTimeLeft,
      responseDurationSeconds: 180 - responseTimeLeft,
      totalDurationSeconds: (60 - prepTimeLeft) + (180 - responseTimeLeft),
      recordedAt: new Date().toLocaleString("vi-VN"),
      notesTaken: userNotes || "(No notes taken during prep time)",
      combinedAudioBlob: combinedBlob,
      combinedAudioUrl: combinedUrl,
      userTranscripts: {
        [question.id]: capturedTranscript || liveTranscript || "Recorded VSTEP Part 2 solution discussion response."
      },
      audioChunks: [recordingChunk]
    };

    onFinishTest(result);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6">
      {/* 1. IDLE / START BANNER */}
      {phase === "idle" && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-500" />

          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Clock className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            VSTEP Solution Discussion (Thảo Luận Giải Pháp)
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
            VSTEP Speaking Part 2 Test Simulator
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            You will be presented with a situation and 3 options. You have <strong>1 minute of Prep Time</strong> in split screen mode to take notes in your scratchpad. As soon as prep time is up, the <strong>3-minute Response Timer</strong> activates for your live speech recording.
          </p>

          {errorMessage && (
            <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs sm:text-sm flex items-center gap-2 max-w-lg mx-auto">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Test Structure Box */}
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 max-w-xl mx-auto mb-8 text-left space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Part 2 Test Timers & Split View Rules
            </div>
            <div className="text-xs sm:text-sm text-slate-300 space-y-2.5">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </span>
                <p>
                  <strong>Timer 1 - Prep Time (1 Minute):</strong> Situation & 3 options on left side; Scratchpad notepad on right side to write notes.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </span>
                <p>
                  <strong>Timer 2 - Response Time (3 Minutes):</strong> Speech recording starts automatically. Keep your notes visible while speaking your answer!
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </span>
                <p>
                  <strong>Split View Mode:</strong> Refer to the question details on one side and your notes on the other throughout the session.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={startPrepPhase}
            className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-amber-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-3 mx-auto"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>Start 1-Min Prep & Test Mode</span>
          </button>
        </div>
      )}

      {/* 2. ACTIVE TEST SCREEN (PREP OR RESPONSE PHASE) */}
      {(phase === "prep" || phase === "response") && (
        <div className="space-y-6 animate-in fade-in duration-300">
          
          {/* TOP CONTROL BAR: DUAL TIMERS & MIC METER */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Timer Display */}
            <div className="flex items-center space-x-4">
              {phase === "prep" ? (
                <div className="flex items-center space-x-3">
                  <div className="px-4 py-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-2xl font-extrabold flex items-center gap-2 animate-pulse">
                    <Clock className="w-6 h-6 text-amber-400" />
                    <span>{formatTime(prepTimeLeft)}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                      Timer 1: Prep Time (1 Min)
                    </span>
                    <span className="text-[11px] text-slate-400">Taking notes in split view</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <div className="px-4 py-2 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 font-mono text-2xl font-extrabold flex items-center gap-2">
                    <Clock className="w-6 h-6 text-rose-400 animate-spin" />
                    <span>{formatTime(responseTimeLeft)}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">
                      Timer 2: Response Time (3 Min)
                    </span>
                    <span className="text-[11px] text-slate-400">Recording live response</span>
                  </div>
                </div>
              )}
            </div>

            {/* Middle Status / Audio Meter */}
            <div className="flex items-center space-x-4 bg-slate-800/80 border border-slate-700/80 px-4 py-2.5 rounded-xl w-full md:w-auto justify-between md:justify-start">
              {phase === "prep" ? (
                <div className="flex items-center space-x-2 text-xs text-amber-300 font-semibold">
                  <Edit3 className="w-4 h-4 text-amber-400" />
                  <span>Prep Mode Active - Type Notes Below</span>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-rose-300">Recording Speech</span>
                  </div>

                  {/* Audio Meter Visualizer */}
                  <div className="flex items-end gap-1 h-5 w-20">
                    {[...Array(6)].map((_, i) => {
                      const barHeight = Math.min(100, Math.max(15, (audioLevel * (i + 1)) / 3));
                      return (
                        <div
                          key={i}
                          className="w-2 rounded-t bg-rose-500 transition-all duration-75"
                          style={{ height: `${barHeight}%` }}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div>
              {phase === "prep" ? (
                <button
                  onClick={startResponsePhase}
                  className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-rose-600/30 transition flex items-center gap-2 w-full md:w-auto justify-center"
                >
                  <span>Start Response Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={completeTestSession}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/30 transition flex items-center gap-2 w-full md:w-auto justify-center"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Finish & View Summary</span>
                </button>
              )}
            </div>
          </div>

          {/* Time Progress Bar */}
          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
            {phase === "prep" ? (
              <div
                className="bg-amber-500 h-2 transition-all duration-1000"
                style={{ width: `${(prepTimeLeft / 60) * 100}%` }}
              />
            ) : (
              <div
                className="bg-rose-500 h-2 transition-all duration-1000"
                style={{ width: `${(responseTimeLeft / 180) * 100}%` }}
              />
            )}
          </div>

          {/* SPLIT VIEW MODE: LEFT = QUESTION & OPTIONS | RIGHT = NOTES SCRATCHPAD & LIVE TRANSCRIPT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* LEFT COLUMN: SITUATION, OPTIONS & PROMPT */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xl space-y-6 flex flex-col justify-between">
              <div className="space-y-5">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <FileText className="w-4 h-4" />
                    VSTEP Part 2 Situation
                  </span>
                  <button
                    onClick={() => speakText(`Situation: ${question.situation}`)}
                    className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition flex items-center gap-1"
                    title="Listen Situation"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="hidden sm:inline">Listen</span>
                  </button>
                </div>

                {/* Situation Box */}
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">{question.situationTitle}</h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {question.situation}
                  </p>
                </div>

                {/* 3 Options Display */}
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Available Options (3 Choices):
                  </span>

                  {question.options.map((opt) => (
                    <div
                      key={opt.id}
                      className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2 hover:border-slate-700 transition"
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
                          <strong className="block text-emerald-400 font-semibold mb-0.5">Advantages:</strong>
                          <ul className="list-disc list-inside space-y-0.5">
                            {opt.advantages.map((adv, i) => (
                              <li key={i}>{adv}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-rose-950/30 border border-rose-800/30 rounded p-2 text-rose-300">
                          <strong className="block text-rose-400 font-semibold mb-0.5">Disadvantages:</strong>
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

                {/* Prompt Question */}
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">
                    Core Task Question:
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-amber-100 leading-snug">
                    "{question.prompt}"
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: SPLIT VIEW NOTE-TAKING NOTEPAD & LIVE TRANSCRIPT */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xl space-y-5 flex flex-col justify-between">
              <div className="space-y-4 flex-1 flex flex-col">
                
                {/* Header for Notepad */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center space-x-2">
                    <Edit3 className="w-4 h-4 text-amber-400" />
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      Scratchpad / Notes (1-Min Prep)
                    </h3>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        setUserNotes((prev) => prev + "\n- My Choice: Option A\n- Reason 1: \n- Reason 2: \n- Reject Option B: \n- Reject Option C: ")
                      }
                      className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-lg text-xs font-medium transition border border-slate-700"
                      title="Insert Template Outline"
                    >
                      + Outline Template
                    </button>
                    {userNotes && (
                      <button
                        onClick={() => setUserNotes("")}
                        className="p-1 text-slate-400 hover:text-rose-400 transition"
                        title="Clear Notes"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Notepad Textarea */}
                <div className="flex-1 flex flex-col">
                  <textarea
                    ref={notesAreaRef}
                    value={userNotes}
                    onChange={(e) => setUserNotes(e.target.value)}
                    placeholder="Type your notes & answer structure here during the 1-minute Prep Time...&#10;&#10;e.g.&#10;1. Introduction: Choose Option A (Camping)&#10;2. Advantages: Affordable budget, nature connection, team bonding around campfire&#10;3. Reject B (Beach): Exorbitant costs in peak season&#10;4. Reject C (Museum): Too similar to everyday urban routine&#10;5. Conclusion: Camping is ideal"
                    className="w-full flex-1 min-h-[260px] bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs sm:text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono leading-relaxed resize-none shadow-inner"
                  />
                  <p className="text-[11px] text-slate-500 mt-1.5 flex items-center justify-between">
                    <span>* Your notes remain visible while speaking so you can refer to your outline!</span>
                    <span>{userNotes.length} chars</span>
                  </p>
                </div>

                {/* Speech Transcript Box (Active in Response Mode) */}
                <div className="pt-2 border-t border-slate-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Mic className="w-3.5 h-3.5 text-rose-400" />
                      Live Speech Transcript Preview
                    </span>
                    <span className="text-[10px] text-slate-500">Auto-transcribed</span>
                  </div>
                  <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-3.5 min-h-[75px] max-h-32 overflow-y-auto text-xs text-slate-300 font-mono leading-relaxed">
                    {liveTranscript ? (
                      <span>{liveTranscript}</span>
                    ) : (
                      <span className="text-slate-500 italic">
                        {phase === "prep"
                          ? "Microphone will activate when response timer starts."
                          : "Listening to your voice... Speak into your microphone now."}
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
