import React, { useState, useEffect } from "react";
import { AppMode, QuestionSet, TestResult, AppTheme } from "./types";
import { QUESTION_SETS } from "./data/questionSets";
import { initializeTTSVoices, getSelectedTTSVoice } from "./utils/tts";
import { THEMES } from "./utils/theme";
import { Header } from "./components/Header";
import { InstructionsModal } from "./components/InstructionsModal";
import { TestModeView } from "./components/TestModeView";
import { PracticeModeView } from "./components/PracticeModeView";
import { ResultsView } from "./components/ResultsView";
import { AudioMergerModal } from "./components/AudioMergerModal";
import { TtsVoiceModal } from "./components/TtsVoiceModal";
import { Clock, Split, Sparkles, BookOpen } from "lucide-react";

export default function App() {
  const [currentMode, setCurrentMode] = useState<AppMode>("test");
  const [selectedSet, setSelectedSet] = useState<QuestionSet>(QUESTION_SETS[0]);
  const [currentTheme, setCurrentTheme] = useState<AppTheme>("midnight");
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState<boolean>(false);
  const [isAudioToolOpen, setIsAudioToolOpen] = useState<boolean>(false);
  const [isVoiceStudioOpen, setIsVoiceStudioOpen] = useState<boolean>(false);

  const theme = THEMES[currentTheme] || THEMES.midnight;

  // Initialize Speech Synthesis Voices (Female British voice priority)
  useEffect(() => {
    initializeTTSVoices();
  }, []);

  // Handle Mode Selection
  const handleSelectMode = (mode: AppMode) => {
    if (mode === "instructions") {
      setIsInstructionsOpen(true);
    } else {
      setIsInstructionsOpen(false);
      setCurrentMode(mode);
    }
  };

  // When Test finishes
  const handleFinishTest = (result: TestResult) => {
    setTestResult(result);
    setCurrentMode("results");
  };

  // When Practice finishes
  const handleFinishPractice = (result: TestResult) => {
    setTestResult(result);
    setCurrentMode("results");
  };

  return (
    <div className={`min-h-screen ${theme.canvasBg} flex flex-col font-sans transition-colors duration-200 selection:bg-amber-500 selection:text-white`}>
      {/* Header */}
      <Header
        currentMode={currentMode}
        onSelectMode={handleSelectMode}
        selectedSet={selectedSet}
        onSelectSet={(set) => {
          setSelectedSet(set);
          setTestResult(null);
        }}
        onOpenInstructions={() => setIsInstructionsOpen(true)}
        onOpenAudioTool={() => setIsAudioToolOpen(true)}
        onOpenVoiceStudio={() => setIsVoiceStudioOpen(true)}
        currentTheme={currentTheme}
        onSelectTheme={setCurrentTheme}
      />

      {/* Main Container */}
      <main className="flex-1 pb-16">
        {currentMode === "test" && (
          <TestModeView
            questionSet={selectedSet}
            onFinishTest={handleFinishTest}
            currentTheme={currentTheme}
          />
        )}

        {currentMode === "practice" && (
          <PracticeModeView
            questionSet={selectedSet}
            onFinishPractice={handleFinishPractice}
            currentTheme={currentTheme}
          />
        )}

        {currentMode === "results" && testResult && (
          <ResultsView
            testResult={testResult}
            questionSet={selectedSet}
            onRetake={() => setCurrentMode("test")}
            onOpenAudioTool={() => setIsAudioToolOpen(true)}
          />
        )}

        {/* Instructions Mode / Welcome Landing Screen */}
        {currentMode === "instructions" && (
          <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>VSTEP Speaking Part 2 - Solution Discussion</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Master VSTEP Speaking Part 2 Solution Discussion
            </h1>

            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Target <strong>Band B1 (4.0 - 5.5)</strong> & <strong>Band B2 (6.0 - 8.0)</strong> with real-time <strong>1-minute Prep Timer</strong>, <strong>3-minute Response Timer</strong>, split-view scratchpad notepad, bilingual EN & VI guides, British female TTS model answers, and combined audio export.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  setIsInstructionsOpen(false);
                  setCurrentMode("test");
                }}
                className="px-6 py-3.5 bg-amber-600 hover:bg-amber-500 text-white rounded-2xl font-bold text-sm shadow-xl shadow-amber-600/30 transition hover:scale-[1.02] flex items-center gap-2"
              >
                <Split className="w-4 h-4" />
                <span>Start Test Mode (2 Timers & Split View)</span>
              </button>

              <button
                onClick={() => {
                  setIsInstructionsOpen(false);
                  setCurrentMode("practice");
                }}
                className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-sm shadow-xl shadow-indigo-600/30 transition hover:scale-[1.02] flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Enter Practice Mode (Guided Study)</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Instructions Modal */}
      <InstructionsModal
        isOpen={isInstructionsOpen}
        onClose={() => setIsInstructionsOpen(false)}
      />

      {/* Audio & Notes Downloader Tool Modal */}
      <AudioMergerModal
        isOpen={isAudioToolOpen}
        onClose={() => setIsAudioToolOpen(false)}
        audioChunks={testResult?.audioChunks || []}
        questionSet={selectedSet}
        userTranscripts={testResult?.userTranscripts}
        notesTaken={testResult?.notesTaken}
      />

      {/* TTS Voice Studio & Accent Selector Modal */}
      <TtsVoiceModal
        isOpen={isVoiceStudioOpen}
        onClose={() => setIsVoiceStudioOpen(false)}
        isLight={theme.isLight}
      />
    </div>
  );
}
