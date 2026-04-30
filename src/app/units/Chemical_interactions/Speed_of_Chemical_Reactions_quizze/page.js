"use client";
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "ما المقصود بسرعة التفاعل الكيميائي؟",
    options: [
      "كمية المادة الناتجة فقط",
      "التغير في تركيز المواد المتفاعلة أو الناتجة في وحدة الزمن",
      "عدد المواد المتفاعلة",
      "درجة حرارة التفاعل",
    ],
    correct: 1,
    explanation:
      "سرعة التفاعل هي التغير في تركيز المواد المتفاعلة أو الناتجة خلال وحدة الزمن.",
    category: "المفاهيم الأساسية",
  },
  {
    id: 2,
    question: "كيف يكون تركيز المتفاعلات والنواتج في بداية التفاعل؟",
    options: [
      "المتفاعلات 0% والنواتج 100%",
      "المتفاعلات 100% والنواتج 0%",
      "كلاهما 50%",
      "النواتج أكبر من المتفاعلات",
    ],
    correct: 1,
    explanation:
      "في بداية التفاعل تكون المتفاعلات 100% والنواتج 0%، ثم تقل المتفاعلات وتزداد النواتج مع الزمن.",
    category: "المفاهيم الأساسية",
  },
  {
    id: 3,
    question: "أي من التالي مثال على تفاعل سريع جداً؟",
    options: [
      "صدأ الحديد",
      "تكوين النفط",
      "الألعاب النارية",
      "تفاعل الزيوت",
    ],
    correct: 2,
    explanation:
      "الألعاب النارية من التفاعلات السريعة جداً، بينما صدأ الحديد وتكوين النفط تفاعلات بطيئة.",
    category: "سرعة التفاعل",
  },
  {
    id: 4,
    question: "كيف تؤثر زيادة تركيز المتفاعلات على سرعة التفاعل؟",
    options: [
      "تقل سرعة التفاعل",
      "لا تتأثر",
      "تزداد سرعة التفاعل",
      "يتوقف التفاعل",
    ],
    correct: 2,
    explanation:
      "زيادة التركيز تزيد عدد التصادمات بين الجزيئات، مما يزيد سرعة التفاعل.",
    category: "العوامل المؤثرة",
  },
  {
    id: 5,
    question: "أي نوع من المركبات تكون تفاعلاته أسرع عادة؟",
    options: [
      "المركبات التساهمية",
      "المركبات الأيونية",
      "الغازات فقط",
      "السوائل فقط",
    ],
    correct: 1,
    explanation:
      "المركبات الأيونية تتفاعل بسرعة أكبر مقارنة بالمركبات التساهمية.",
    category: "العوامل المؤثرة",
  },
  {
    id: 6,
    question: "ما تأثير زيادة درجة الحرارة على سرعة التفاعل؟",
    options: [
      "تقل السرعة",
      "لا تتغير",
      "تزداد السرعة",
      "يتوقف التفاعل",
    ],
    correct: 2,
    explanation:
      "ارتفاع درجة الحرارة يزيد من طاقة الجزيئات وعدد التصادمات، مما يزيد سرعة التفاعل.",
    category: "العوامل المؤثرة",
  },
  {
    id: 7,
    question: "ما هو العامل الحفاز؟",
    options: [
      "مادة تبطئ التفاعل",
      "مادة تستهلك أثناء التفاعل",
      "مادة تسرّع التفاعل دون أن تستهلك",
      "مادة توقف التفاعل",
    ],
    correct: 2,
    explanation:
      "العامل الحفاز يسرّع التفاعل الكيميائي دون أن يستهلك أثناءه.",
    category: "العوامل المؤثرة",
  },
  {
    id: 8,
    question: "ما دور الإنزيمات في جسم الإنسان؟",
    options: [
      "تبطئ التفاعلات",
      "توقف التفاعلات",
      "تعمل كعوامل حفازة حيوية",
      "تزيد درجة الحرارة",
    ],
    correct: 2,
    explanation:
      "الإنزيمات هي عوامل حفازة حيوية تساعد على تسريع التفاعلات داخل الجسم.",
    category: "العوامل الحفازة",
  },
  {
    id: 9,
    question: "كيف تؤثر مساحة السطح على سرعة التفاعل؟",
    options: [
      "لا تؤثر",
      "تقلل السرعة",
      "زيادة مساحة السطح تزيد سرعة التفاعل",
      "توقف التفاعل",
    ],
    correct: 2,
    explanation:
      "زيادة مساحة السطح (مثل برادة الحديد) تزيد من عدد التصادمات وبالتالي تزيد سرعة التفاعل.",
    category: "العوامل المؤثرة",
  },
  {
    id: 10,
    question: "ما فائدة المحول الحفزي في السيارات؟",
    options: [
      "زيادة سرعة السيارة",
      "تقليل استهلاك الوقود",
      "تقليل الغازات الضارة الناتجة عن التفاعل",
      "تبريد المحرك",
    ],
    correct: 2,
    explanation:
      "المحول الحفزي يقلل من الغازات الضارة الناتجة من عادم السيارات عن طريق تسريع التفاعلات.",
    category: "تطبيقات حياتية",
  },
];

const categoryColors = {
  "المفاهيم الأساسية": { bg: "#E8F4FD", text: "#1565C0", border: "#90CAF9" },
  "الانحلال الحراري": { bg: "#FFF3E0", text: "#E65100", border: "#FFCC02" },
  "تفاعلات الإحلال": { bg: "#E8F5E9", text: "#1B5E20", border: "#A5D6A7" },
  "الأكسدة والاختزال": { bg: "#F3E5F5", text: "#4A148C", border: "#CE93D8" },
};

export default function page() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const q = questions[current];
  const progress = ((current) / questions.length) * 100;
  const cat = categoryColors[q?.category] || categoryColors["المفاهيم الأساسية"];

  function handleSelect(idx) {
    if (confirmed) return;
    setSelected(idx);
  }

  function handleConfirm() {
    if (selected === null) return;
    const isCorrect = selected === q.correct;
    if (isCorrect) setScore((s) => s + 1);
    setAnswers((prev) => [
      ...prev,
      { question: q.question, selected, correct: q.correct, isCorrect, explanation: q.explanation, category: q.category },
    ]);
    setConfirmed(true);
  }

  function handleNext() {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setConfirmed(false);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setConfirmed(false);
    setScore(0);
    setAnswers([]);
    setFinished(false);
    setShowReview(false);
  }

  const pct = Math.round((score / questions.length) * 100);
  const grade =
    pct >= 90 ? { label: "ممتاز", color: "#1B5E20", bg: "#E8F5E9" } :
    pct >= 75 ? { label: "جيد جداً", color: "#1565C0", bg: "#E8F4FD" } :
    pct >= 60 ? { label: "جيد", color: "#E65100", bg: "#FFF3E0" } :
    { label: "يحتاج مراجعة", color: "#B71C1C", bg: "#FFEBEE" };

  if (finished) {
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ fontSize: 64, marginBottom: 12 }}>
              {pct >= 75 ? "🏆" : pct >= 60 ? "📚" : "💪"}
            </div>
            <h1 style={{ ...styles.title, marginBottom: 6 }}>نتيجة الاختبار</h1>
            <p style={styles.subtitle}>التفاعلات الكيميائية — الوحدة الأولى</p>
          </div>

          <div style={{ ...styles.resultBox, background: grade.bg, borderColor: grade.color + "40" }}>
            <div style={{ fontSize: 48, fontWeight: 700, color: grade.color }}>{pct}%</div>
            <div style={{ fontSize: 20, color: grade.color, marginTop: 4 }}>{grade.label}</div>
            <div style={{ color: "#666", marginTop: 8, fontSize: 15 }}>
              {score} من {questions.length} إجابة صحيحة
            </div>
          </div>

          <div style={styles.categoryBreakdown}>
            {Object.keys(categoryColors).map((cat) => {
              const catAnswers = answers.filter((a) => a.category === cat);
              if (!catAnswers.length) return null;
              const correct = catAnswers.filter((a) => a.isCorrect).length;
              const c = categoryColors[cat];
              return (
                <div key={cat} style={{ ...styles.catRow, background: c.bg, borderColor: c.border }}>
                  <span style={{ color: c.text, fontWeight: 500, fontSize: 14 }}>{cat}</span>
                  <span style={{ color: c.text, fontSize: 14 }}>{correct}/{catAnswers.length}</span>
                </div>
              );
            })}
          </div>

          <div style={styles.btnRow}>
            <button style={styles.btnPrimary} onClick={() => setShowReview(!showReview)}>
              {showReview ? "إخفاء المراجعة" : "مراجعة الإجابات"}
            </button>
            <button style={styles.btnSecondary} onClick={handleRestart}>
              إعادة الاختبار
            </button>
          </div>

          {showReview && (
            <div style={{ marginTop: 24 }}>
              {answers.map((a, i) => (
                <div
                  key={i}
                  style={{
                    ...styles.reviewItem,
                    borderColor: a.isCorrect ? "#A5D6A7" : "#EF9A9A",
                    background: a.isCorrect ? "#F1F8E9" : "#FFF5F5",
                  }}
                >
                  <div style={styles.reviewQ}>
                    <span style={{ color: a.isCorrect ? "#2E7D32" : "#C62828", marginLeft: 8, fontSize: 18 }}>
                      {a.isCorrect ? "✓" : "✗"}
                    </span>
                    <span style={{ fontWeight: 500, fontSize: 15 }}>
                      {i + 1}. {a.question}
                    </span>
                  </div>
                  {!a.isCorrect && (
                    <div style={{ marginTop: 8, fontSize: 13 }}>
                      <span style={{ color: "#C62828" }}>إجابتك: {questions[i].options[a.selected]}</span>
                      <br />
                      <span style={{ color: "#2E7D32" }}>الإجابة الصحيحة: {questions[i].options[a.correct]}</span>
                    </div>
                  )}
                  <div style={styles.explanation}>{a.explanation}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>اختبار التفاعلات الكيميائية</h1>
            <p style={styles.subtitle}>الوحدة الأولى — الدرس الأول</p>
          </div>
          <div style={styles.scoreChip}>
            <span style={{ fontSize: 12, color: "#666" }}>النقاط</span>
            <span style={{ fontSize: 22, fontWeight: 700, color: "#1565C0" }}>{score}</span>
          </div>
        </div>

        {/* Progress */}
        <div style={styles.progressWrap}>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progressFill, width: `${progress}%` }} />
          </div>
          <span style={styles.progressLabel}>
            {current + 1} / {questions.length}
          </span>
        </div>

        {/* Category badge */}
        <div style={{ marginBottom: 20 }}>
          <span style={{ ...styles.badge, background: cat.bg, color: cat.text, border: `1px solid ${cat.border}` }}>
            {q.category}
          </span>
        </div>

        {/* Question */}
        <div style={styles.questionBox}>
          <span style={styles.questionNum}>السؤال {current + 1}</span>
          <p style={styles.questionText}>{q.question}</p>
        </div>

        {/* Options */}
        <div style={styles.options}>
          {q.options.map((opt, idx) => {
            let optStyle = { ...styles.option };
            if (confirmed) {
              if (idx === q.correct) optStyle = { ...optStyle, ...styles.optCorrect };
              else if (idx === selected && selected !== q.correct) optStyle = { ...optStyle, ...styles.optWrong };
            } else if (selected === idx) {
              optStyle = { ...optStyle, ...styles.optSelected };
            }
            return (
              <button key={idx} style={optStyle} onClick={() => handleSelect(idx)}>
                <span style={styles.optLetter}>{["أ", "ب", "ج", "د"][idx]}</span>
                <span style={{ flex: 1, textAlign: "right" }}>{opt}</span>
                {confirmed && idx === q.correct && <span style={{ color: "#2E7D32", fontSize: 18 }}>✓</span>}
                {confirmed && idx === selected && selected !== q.correct && (
                  <span style={{ color: "#C62828", fontSize: 18 }}>✗</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {confirmed && (
          <div style={styles.explanationBox}>
            <span style={{ fontWeight: 600, marginLeft: 6 }}>💡 التوضيح:</span>
            {q.explanation}
          </div>
        )}

        {/* Actions */}
        <div style={styles.actions}>
          {!confirmed ? (
            <button
              style={{ ...styles.btnPrimary, opacity: selected === null ? 0.5 : 1 }}
              onClick={handleConfirm}
              disabled={selected === null}
            >
              تأكيد الإجابة
            </button>
          ) : (
            <button style={styles.btnPrimary} onClick={handleNext}>
              {current + 1 >= questions.length ? "عرض النتيجة" : "السؤال التالي ←"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #E3F2FD 0%, #F3E5F5 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px 16px",
    fontFamily: "'Segoe UI', 'Cairo', sans-serif",
    direction: "rtl",
  },
  card: {
    background: "#fff",
    borderRadius: 20,
    boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
    padding: "32px 28px",
    maxWidth: 640,
    width: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 700,
    color: "#1A237E",
    margin: 0,
  },
  subtitle: {
    fontSize: 13,
    color: "#888",
    margin: "4px 0 0",
  },
  scoreChip: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#E8F4FD",
    borderRadius: 12,
    padding: "8px 16px",
    minWidth: 64,
  },
  progressWrap: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 20,
  },
  progressBar: {
    flex: 1,
    height: 8,
    background: "#E3F2FD",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #1565C0, #7B1FA2)",
    borderRadius: 4,
    transition: "width 0.4s ease",
  },
  progressLabel: {
    fontSize: 13,
    color: "#888",
    minWidth: 44,
    textAlign: "center",
  },
  badge: {
    display: "inline-block",
    padding: "4px 14px",
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 500,
  },
  questionBox: {
    background: "#F8F9FF",
    border: "1.5px solid #C5CAE9",
    borderRadius: 14,
    padding: "18px 20px",
    marginBottom: 20,
  },
  questionNum: {
    fontSize: 12,
    color: "#7986CB",
    fontWeight: 600,
    display: "block",
    marginBottom: 8,
  },
  questionText: {
    fontSize: 17,
    fontWeight: 600,
    color: "#1A237E",
    margin: 0,
    lineHeight: 1.7,
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginBottom: 20,
  },
  option: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 16px",
    border: "1.5px solid #E0E0E0",
    borderRadius: 12,
    background: "#FAFAFA",
    cursor: "pointer",
    fontSize: 15,
    color: "#333",
    textAlign: "right",
    transition: "all 0.15s ease",
    width: "100%",
  },
  optSelected: {
    border: "1.5px solid #1565C0",
    background: "#E8F4FD",
  },
  optCorrect: {
    border: "1.5px solid #2E7D32",
    background: "#E8F5E9",
    color: "#1B5E20",
  },
  optWrong: {
    border: "1.5px solid #C62828",
    background: "#FFEBEE",
    color: "#B71C1C",
  },
  optLetter: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "#E3F2FD",
    color: "#1565C0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: 14,
    flexShrink: 0,
  },
  explanationBox: {
    background: "#FFFDE7",
    border: "1.5px solid #FFF176",
    borderRadius: 12,
    padding: "14px 16px",
    fontSize: 14,
    color: "#555",
    lineHeight: 1.7,
    marginBottom: 20,
  },
  actions: {
    display: "flex",
    justifyContent: "center",
  },
  btnPrimary: {
    background: "linear-gradient(135deg, #1565C0, #7B1FA2)",
    color: "#fff",
    border: "none",
    borderRadius: 12,
    padding: "14px 36px",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    transition: "opacity 0.2s",
  },
  btnSecondary: {
    background: "#fff",
    color: "#1565C0",
    border: "1.5px solid #1565C0",
    borderRadius: 12,
    padding: "14px 36px",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
  },
  btnRow: {
    display: "flex",
    gap: 12,
    justifyContent: "center",
    marginTop: 24,
    flexWrap: "wrap",
  },
  resultBox: {
    textAlign: "center",
    border: "2px solid",
    borderRadius: 16,
    padding: "24px",
    marginBottom: 24,
  },
  categoryBreakdown: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginBottom: 8,
  },
  catRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 16px",
    borderRadius: 10,
    border: "1px solid",
  },
  reviewItem: {
    border: "1.5px solid",
    borderRadius: 12,
    padding: "14px 16px",
    marginBottom: 12,
  },
  reviewQ: {
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
  },
  explanation: {
    marginTop: 8,
    fontSize: 13,
    color: "#555",
    background: "#FFFDE7",
    borderRadius: 8,
    padding: "8px 12px",
    lineHeight: 1.6,
  },
};
