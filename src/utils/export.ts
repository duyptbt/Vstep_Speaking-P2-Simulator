import { QuestionSet } from "../types";

/**
 * Exports a text document containing Part 2 Solution Discussion details, options,
 * candidate's notes taken during prep time, recorded speech transcripts, keywords, tips,
 * phonetics, and model B2 answer.
 */
export function generateQuestionsTextReport(
  questionSet: QuestionSet,
  userTranscripts: Record<string, string> = {},
  notesTaken: string = "",
  sessionTitle: string = "VSTEP SPEAKING PART 2 SESSION REPORT"
): string {
  const { question } = questionSet;

  let report = `=========================================================================\n`;
  report += `                  ${sessionTitle.toUpperCase()}\n`;
  report += `=========================================================================\n`;
  report += `Question Set: ${questionSet.title}\n`;
  report += `Target Level: ${questionSet.level}\n`;
  report += `Generated Date: ${new Date().toLocaleString("vi-VN")}\n`;
  report += `=========================================================================\n\n`;

  report += `SITUATION TITLE: ${question.situationTitle.toUpperCase()}\n`;
  report += `Situation Description: ${question.situation}\n\n`;

  report += `-------------------------------------------------------------------------\n`;
  report += `AVAILABLE OPTIONS (3 CHOICES):\n`;
  report += `-------------------------------------------------------------------------\n`;
  question.options.forEach((opt) => {
    report += `[${opt.label}] ${opt.title}\n`;
    report += `  • Description: ${opt.description}\n`;
    report += `  • Advantages: ${opt.advantages.join("; ")}\n`;
    report += `  • Disadvantages: ${opt.disadvantages.join("; ")}\n\n`;
  });

  report += `CORE TASK QUESTION:\n"${question.prompt}"\n\n`;

  report += `=========================================================================\n`;
  report += `[CANDIDATE SCRATCHPAD NOTES (WRITTEN DURING 1-MIN PREP)]:\n`;
  report += `=========================================================================\n`;
  report += `${notesTaken || "(No notes taken during prep time)"}\n\n`;

  report += `=========================================================================\n`;
  report += `[YOUR RECORDED RESPONSE TRANSCRIPT (3-MIN RESPONSE TIME)]:\n`;
  report += `=========================================================================\n`;
  const userAns = userTranscripts[question.id] || "No speech transcript recorded.";
  report += `"${userAns}"\n\n`;

  report += `-------------------------------------------------------------------------\n`;
  report += `[BAND B1 LANGUAGE INPUT KIT (INTERMEDIATE 4.0 - 5.5)]:\n`;
  report += `-------------------------------------------------------------------------\n`;
  report += `Goal: ${question.languageInputB1?.levelGoal || "Direct, clear and structured delivery"}\n\n`;
  report += `Vocabulary & Phrases:\n`;
  (question.languageInputB1?.vocabulary || []).forEach((v) => {
    report += `  • ${v.phrase} (${v.meaningVi}) [${v.type || "Vocab"}]\n`;
  });
  report += `\nConnectors & Transition Phrases:\n`;
  (question.languageInputB1?.transitionPhrases || []).forEach((t) => {
    report += `  • ${t}\n`;
  });
  report += `\nResponse Steps:\n`;
  (question.languageInputB1?.responseFormula || []).forEach((rf) => {
    report += `  • ${rf}\n`;
  });
  report += `\n`;

  report += `-------------------------------------------------------------------------\n`;
  report += `[BAND B2 LANGUAGE INPUT KIT (UPPER-INTERMEDIATE 6.0 - 8.0)]:\n`;
  report += `-------------------------------------------------------------------------\n`;
  report += `Goal: ${question.languageInputB2?.levelGoal || "Advanced collocations, complex sentence structures and nuanced justification"}\n\n`;
  report += `Advanced Collocations & Idioms:\n`;
  (question.languageInputB2?.vocabulary || []).forEach((v) => {
    report += `  • ${v.phrase} (${v.meaningVi}) [${v.type || "Collocation"}]\n`;
  });
  report += `\nDiscourse Markers & Complex Connectors:\n`;
  (question.languageInputB2?.transitionPhrases || []).forEach((t) => {
    report += `  • ${t}\n`;
  });
  report += `\nStrategic Steps:\n`;
  (question.languageInputB2?.responseFormula || []).forEach((rf) => {
    report += `  • ${rf}\n`;
  });
  report += `\n`;

  report += `-------------------------------------------------------------------------\n`;
  report += `[PRONUNCIATION & INTONATION GUIDE]:\n`;
  report += `-------------------------------------------------------------------------\n`;
  report += `  • Phonetic: ${question.pronunciationGuide.english.phonetic}\n`;
  report += `  • Intonation: ${question.pronunciationGuide.english.intonation}\n`;
  report += `  • Stress & Linking: ${question.pronunciationGuide.english.stressAndLinking}\n`;
  report += `  • Vietnamese Guide: ${question.pronunciationGuide.vietnamese.huongDanPhatAm}\n\n`;

  report += `-------------------------------------------------------------------------\n`;
  report += `[MODEL B1 SOLUTION DISCUSSION ANSWER (TARGET BAND 4.0 - 5.5)]:\n`;
  report += `-------------------------------------------------------------------------\n`;
  report += `"${question.modelAnswerB1 || question.modelAnswer}"\n\n`;

  report += `-------------------------------------------------------------------------\n`;
  report += `[MODEL B2 SOLUTION DISCUSSION ANSWER (TARGET BAND 6.0 - 8.0)]:\n`;
  report += `-------------------------------------------------------------------------\n`;
  report += `"${question.modelAnswerB2 || question.modelAnswer}"\n\n`;

  return report;
}

/**
 * Triggers a file download in the browser.
 */
export function triggerFileDownload(contentUrlOrBlob: string | Blob, filename: string) {
  const a = document.createElement("a");
  if (typeof contentUrlOrBlob === "string") {
    a.href = contentUrlOrBlob;
  } else {
    a.href = URL.createObjectURL(contentUrlOrBlob);
  }
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/**
 * Downloads both the questions & notes text file and the recorded audio file.
 */
export function downloadQuestionsAndAudioPackage(
  questionSet: QuestionSet,
  userTranscripts: Record<string, string> = {},
  notesTaken: string = "",
  combinedAudioUrl?: string | null
) {
  // 1. Download Questions, Notes & Transcripts Text Document
  const reportText = generateQuestionsTextReport(
    questionSet,
    userTranscripts,
    notesTaken,
    "VSTEP Speaking Part 2 - Questions, Notes & Transcripts Report"
  );
  const textBlob = new Blob([reportText], { type: "text/plain;charset=utf-8" });
  const sanitizedTitle = questionSet.title.replace(/[^a-zA-Z0-9]/g, "_");
  triggerFileDownload(textBlob, `${sanitizedTitle}_Notes_and_Report.txt`);

  // 2. Download Combined Audio File if available
  if (combinedAudioUrl) {
    setTimeout(() => {
      triggerFileDownload(combinedAudioUrl, `${sanitizedTitle}_Recorded_Answer.wav`);
    }, 500);
  }
}

/**
 * Downloads the complete Question Bank for all Part 2 sets.
 */
export function downloadFullQuestionBank(questionSets: QuestionSet[]) {
  let report = `=========================================================================\n`;
  report += `         VSTEP SPEAKING PART 2 - COMPLETE QUESTION BANK REPORT\n`;
  report += `=========================================================================\n\n`;

  questionSets.forEach((set) => {
    report += generateQuestionsTextReport(set, {}, "", `QUESTION SET: ${set.title}`);
    report += `\n\n`;
  });

  const blob = new Blob([report], { type: "text/plain;charset=utf-8" });
  triggerFileDownload(blob, `VSTEP_Speaking_Part2_Complete_Question_Bank.txt`);
}
