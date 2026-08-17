import React, { useState, useEffect } from "react";
import { TestResult, QuestionSet } from "../types";
import { speakText } from "../utils/tts";
import { mergeAudioBlobs } from "../utils/audio";
import {
  generateQuestionsTextReport,
  triggerFileDownload,
  downloadQuestionsAndAudioPackage
} from "../utils/export";
import {
  Download,
  Volume2,
  CheckCircle2,
  FileText,
  RotateCcw,
  BookOpen,
  Sparkles,
  Globe,
  Award,
  Edit3,
  FolderDown,
  Check,
  X
} from "lucide-react";

interface ResultsViewProps {
  testResult: TestResult;
  questionSet: QuestionSet;
  onRetake: () => void;
  onOpenAudioTool: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  testResult,
  questionSet,
  onRetake,
  onOpenAudioTool
}) => {
  const [mergedAudioUrl, setMergedAudioUrl] = useState<string | null>(
    testResult.combinedAudioUrl || null
  );

  const { question } = questionSet;
  const userTranscript = testResult.userTranscripts[question.id] || "No recording transcript captured.";

  // Ensure combined audio blob is available for download
  useEffect(() => {
    if (!mergedAudioUrl && testResult.audioChunks && testResult.audioChunks.length > 0) {
      const generateMergedAudio = async () => {
        try {
          const blobs = testResult.audioChunks.map((c) => c.blob);
          const mergedBlob = await mergeAudioBlobs(blobs);
          const url = URL.createObjectURL(mergedBlob);
          setMergedAudioUrl(url);
        } catch (e) {
          console.warn("Audio merge error:", e);
        }
      };
      generateMergedAudio();
    }
  }, [testResult, mergedAudioUrl]);

  // Download Both Questions, Notes & Audio Package
  const handleDownloadPackage = () => {
    downloadQuestionsAndAudioPackage(
      questionSet,
      testResult.userTranscripts,
      testResult.notesTaken,
      mergedAudioUrl
    );
  };

  // Download Audio Only
  const downloadAudioOnly = () => {
    if (!mergedAudioUrl && testResult.combinedAudioBlob) {
      const url = URL.createObjectURL(testResult.combinedAudioBlob);
      triggerFileDownload(url, `${questionSet.title.replace(/[^a-zA-Z0-9]/g, "_")}_Answer.wav`);
    } else if (mergedAudioUrl) {
      triggerFileDownload(mergedAudioUrl, `${questionSet.title.replace(/[^a-zA-Z0-9]/g, "_")}_Answer.wav`);
    } else {
      alert("No audio recorded to download.");
    }
  };

  // Download Questions & Notes Text Report
  const downloadTextOnly = () => {
    const reportText = generateQuestionsTextReport(
      questionSet,
      testResult.userTranscripts,
      testResult.notesTaken,
      "VSTEP Speaking Part 2 - Solution Discussion Report"
    );
    const textBlob = new Blob([reportText], { type: "text/plain;charset=utf-8" });
    const sanitizedTitle = questionSet.title.replace(/[^a-zA-Z0-9]/g, "_");
    triggerFileDownload(textBlob, `${sanitizedTitle}_Report_and_Notes.txt`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header Result Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden text-slate-800">
        <div className="absolute top-0 left-0 right-0 h-2 bg-emerald-600" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="px-3.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold rounded-full inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              {testResult.mode === "test" ? "VSTEP Part 2 Test Completed" : "Practice Session Completed"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">Part 2 Solution Discussion Summary</h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {questionSet.title} • Date: {testResult.recordedAt}
            </p>
          </div>

          {/* Action Download Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleDownloadPackage}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-emerald-200 transition flex items-center gap-2"
              title="Download report (.txt) and audio (.wav) together"
            >
              <FolderDown className="w-4 h-4" />
              <span>Download Notes & Audio (.txt + .wav)</span>
            </button>

            <button
              onClick={downloadTextOnly}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-blue-200 transition flex items-center gap-2"
              title="Download text file with questions, notes, and answers"
            >
              <FileText className="w-4 h-4" />
              <span>Notes & Report (.txt)</span>
            </button>

            <button
              onClick={downloadAudioOnly}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2"
              title="Download audio recording (.wav)"
            >
              <Download className="w-4 h-4 text-emerald-600" />
              <span>Audio (.wav)</span>
            </button>

            <button
              onClick={onRetake}
              className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake</span>
            </button>
          </div>
        </div>

        {/* Recorded Audio Player Bar */}
        {mergedAudioUrl && (
          <div className="mt-6 pt-5 border-t border-slate-100 bg-slate-50 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
                <Volume2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Recorded Response Audio</p>
                <p className="text-[11px] text-slate-500">Your 3-minute VSTEP Part 2 solution discussion recording</p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <audio controls src={mergedAudioUrl} className="w-full sm:w-72 h-10 rounded-lg" />
              <button
                onClick={handleDownloadPackage}
                className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 flex-shrink-0"
              >
                <FolderDown className="w-3.5 h-3.5" />
                <span>Download Both</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Overview Metric Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Prep & Response Timers</span>
          <p className="text-2xl font-extrabold text-amber-600">1 Min Prep + 3 Min Response</p>
          <p className="text-xs text-slate-500">Split view scratchpad active</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Target Band Level</span>
          <p className="text-2xl font-extrabold text-blue-600">VSTEP B2 (6.0 - 8.0)</p>
          <p className="text-xs text-slate-500">Solution Discussion Criteria</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Notes & Speech Captured</span>
          <p className="text-2xl font-extrabold text-emerald-600">Fully Transcribed</p>
          <p className="text-xs text-slate-500">Ready for export and self-review</p>
        </div>
      </div>

      {/* Candidate Notes Taken During 1-Min Prep Time */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
        <div className="flex items-center space-x-2 text-amber-600 font-bold text-sm uppercase tracking-wider border-b border-slate-100 pb-3">
          <Edit3 className="w-5 h-5 text-amber-500" />
          <span>Your Scratchpad Notes (Written During 1-Min Prep)</span>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 font-mono whitespace-pre-wrap leading-relaxed">
          {testResult.notesTaken || "(No notes taken)"}
        </div>
      </div>

      {/* Transcripts, Evaluation Rubric & Model Comparison */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              {question.situationTitle}
            </span>
            <h3 className="text-lg font-bold text-slate-800 mt-0.5 leading-snug">{question.situation}</h3>
          </div>
          <button
            onClick={() => speakText(question.modelAnswer)}
            className="px-3.5 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold rounded-xl transition flex items-center gap-1.5 self-start sm:self-center"
          >
            <Volume2 className="w-4 h-4 text-blue-600" />
            <span>Listen Model Answer</span>
          </button>
        </div>

        {/* User Response Transcript */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1">
          <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">
            Your Recorded Response Transcript:
          </span>
          <p className="text-xs sm:text-sm text-slate-700 font-mono italic leading-relaxed">
            "{userTranscript}"
          </p>
        </div>

        {/* VSTEP Part 2 Evaluation Criteria Checklist */}
        <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 space-y-3">
          <span className="text-xs font-bold text-blue-800 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4 text-blue-600" />
            VSTEP Part 2 Scoring Rubric Self-Checklist
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
            <div className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-blue-100">
              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Task Fulfillment:</strong> Did you state your option choice clearly in the introduction?</span>
            </div>
            <div className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-blue-100">
              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Choice Justification:</strong> Did you give 2-3 detailed advantages for your chosen option?</span>
            </div>
            <div className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-blue-100">
              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Rejection of Alternatives:</strong> Did you explain specific drawbacks to reject the other 2 options?</span>
            </div>
            <div className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-blue-100">
              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Coherence & Transition:</strong> Used transition phrases like 'First and foremost', 'On the flip side', 'All in all'?</span>
            </div>
          </div>
        </div>

        {/* Key Vocabulary & Language Inputs (B1 vs B2) */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Language Input Kits (B1 vs B2 Vocabulary & Connectors)
            </span>
            <span className="text-xs text-slate-500">Compare required vocabulary complexity</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* B1 Language Kit */}
            <div className="bg-white border border-blue-200 rounded-xl p-4 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-700 font-bold text-xs">
                  Band B1 Vocabulary & Connectors
                </span>
                <span className="text-[11px] text-slate-500">Direct & Accessible</span>
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Core Vocabulary & Phrases:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(question.languageInputB1?.vocabulary || []).map((item, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-blue-50 border border-blue-100 rounded text-xs text-blue-900 font-medium"
                      title={item.meaningVi}
                    >
                      {item.phrase} <span className="text-blue-500 text-[10px]">({item.meaningVi})</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  B1 Connectors:
                </span>
                <div className="flex flex-wrap gap-1">
                  {(question.languageInputB1?.transitionPhrases || []).map((p, i) => (
                    <span key={i} className="px-2 py-0.5 bg-slate-100 rounded text-[11px] text-slate-700">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* B2 Language Kit */}
            <div className="bg-white border border-emerald-200 rounded-xl p-4 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold text-xs">
                  Band B2 Collocations & Idioms
                </span>
                <span className="text-[11px] text-slate-500">Nuanced & Academic</span>
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Advanced Collocations:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(question.languageInputB2?.vocabulary || []).map((item, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-emerald-50 border border-emerald-100 rounded text-xs text-emerald-900 font-medium"
                      title={item.meaningVi}
                    >
                      {item.phrase} <span className="text-emerald-600 text-[10px]">({item.meaningVi})</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  B2 Discourse Markers:
                </span>
                <div className="flex flex-wrap gap-1">
                  {(question.languageInputB2?.transitionPhrases || []).map((p, i) => (
                    <span key={i} className="px-2 py-0.5 bg-slate-100 rounded text-[11px] text-slate-700">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pronunciation & Intonation Guide */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5" />
            Pronunciation & Intonation Guide
          </span>
          <p className="font-mono text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
            Phonetic: {question.pronunciationGuide.english.phonetic}
          </p>
          <div className="space-y-1 text-slate-600 pt-1">
            <p>• <strong>Intonation:</strong> {question.pronunciationGuide.english.intonation}</p>
            <p>• <strong>Vietnamese guide:</strong> {question.pronunciationGuide.vietnamese.huongDanPhatAm}</p>
          </div>
        </div>

        {/* Model Answers: Band B1 and Band B2 Comparison */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-600" />
              VSTEP Part 2 Model Answers (B1 & B2 Benchmarks)
            </span>
            <span className="text-xs text-slate-500">Compare Band B1 (Intermediate) vs Band B2 (Upper-Intermediate)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Target Band B1 Box */}
            <div className="bg-white border border-blue-200 rounded-xl p-4 space-y-2.5 flex flex-col justify-between shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-700 font-bold text-xs">
                    Target Band B1 (4.0 - 5.5)
                  </span>
                  <button
                    onClick={() => speakText(question.modelAnswerB1 || question.modelAnswer)}
                    className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg text-xs font-semibold transition flex items-center gap-1"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Listen B1 TTS</span>
                  </button>
                </div>
                <p className="text-xs text-slate-500">
                  Direct reasoning, basic connectors (<em>First, Second, Also, In conclusion</em>).
                </p>
                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 text-xs text-slate-700 leading-relaxed font-sans whitespace-pre-line">
                  "{question.modelAnswerB1 || question.modelAnswer}"
                </div>
              </div>
            </div>

            {/* Target Band B2 Box */}
            <div className="bg-white border border-emerald-200 rounded-xl p-4 space-y-2.5 flex flex-col justify-between shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold text-xs">
                    Target Band B2 (6.0 - 8.0)
                  </span>
                  <button
                    onClick={() => speakText(question.modelAnswerB2 || question.modelAnswer)}
                    className="px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-semibold transition flex items-center gap-1"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Listen B2 TTS</span>
                  </button>
                </div>
                <p className="text-xs text-slate-500">
                  Nuanced collocations, complex sentence structures & detailed justifications.
                </p>
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-3 text-xs text-slate-700 leading-relaxed font-sans whitespace-pre-line">
                  "{question.modelAnswerB2 || question.modelAnswer}"
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
