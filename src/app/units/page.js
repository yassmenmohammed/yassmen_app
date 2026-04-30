"use client";
import { useState } from 'react';
import { scienceUnits } from "../../data/science-unit";

export default function page() {
  const [activeUnitIdx, setActiveUnitIdx] = useState(0);
  const [activeLessonIdx, setActiveLessonIdx] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [userAnswers, setUserAnswers] = useState({});

  const currentUnit = scienceUnits[activeUnitIdx];
  const currentLesson = currentUnit.lessons[activeLessonIdx];

  // Logic for Quiz
  const handleAnswer = (qId, isCorrect) => {
    setUserAnswers(prev => ({ ...prev, [qId]: isCorrect }));
    alert(isCorrect ? "إجابة صحيحة! 🎉" : "حاول مرة أخرى ❌");
  };

  const progress = ((activeLessonIdx + 1) / currentUnit.lessons.length) * 100;

  return (
    <div className="flex h-screen bg-gray-50 text-right" dir="rtl">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-72' : 'w-0'} bg-slate-800 text-white transition-all overflow-hidden`}>
        <div className="p-6">
          <h2 className="text-xl font-bold border-b border-slate-600 pb-4">الوحدات الدراسية</h2>
          {scienceUnits.map((unit, uIdx) => (
            <div key={unit.id} className="mt-4">
              <button 
                onClick={() => {setActiveUnitIdx(uIdx); setActiveLessonIdx(0);}}
                className={`w-full text-right p-3 rounded-lg transition ${activeUnitIdx === uIdx ? 'bg-blue-600' : 'hover:bg-slate-700'}`}
              >
                {unit.title}
              </button>
              {activeUnitIdx === uIdx && (
                <div className="mr-4 mt-2 space-y-1">
                  {unit.lessons.map((lesson, lIdx) => (
                    <button 
                      key={lesson.id}
                      onClick={() => setActiveLessonIdx(lIdx)}
                      className={`w-full text-right p-2 text-sm rounded ${activeLessonIdx === lIdx ? 'text-blue-300 font-bold' : 'text-slate-400'}`}
                    >
                      • {lesson.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="bg-white shadow-sm p-4 flex items-center justify-between sticky top-0 z-10">
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 bg-gray-100 rounded">☰</button>
          <div className="flex-1 mx-8">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 transition-all duration-500" style={{width: `${progress}%`}}></div>
            </div>
          </div>
          <h1 className="font-bold text-lg text-blue-900">{currentLesson.title}</h1>
        </header>

        <article className="p-8 max-w-4xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Objectives */}
          <section className="bg-blue-50 p-6 rounded-xl border-r-8 border-blue-500 mb-8">
            <h3 className="font-bold text-blue-900 mb-2">أهداف الدرس:</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              {currentLesson.objectives.cognitive.map((obj, i) => <li key={i}>{obj}</li>)}
            </ul>
          </section>

          {/* Explanation */}
          <section className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{__html: currentLesson.explanation}} />

          {/* Media */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {currentLesson.images.map((img, i) => (
              <img key={i} src={img} className="rounded-xl shadow-md cursor-pointer hover:scale-105 transition" alt="Lesson Visual" />
            ))}
            {currentLesson.videos.map((vid, i) => (
              <div key={i} className="aspect-video">
                <iframe src={vid} className="w-full h-full rounded-xl shadow-md" allowFullScreen></iframe>
              </div>
            ))}
          </div>

          {/* Quiz Section */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">اختبر معلوماتك</h3>
            {currentLesson.questions.map((q) => (
              <div key={q.id} className="mb-8 p-4 rounded-lg bg-slate-50">
                <p className="font-bold mb-4 text-lg">{q.q}</p>
                <div className="flex flex-wrap gap-3">
                  {q.type === 'mcq' && q.options.map((opt, i) => (
                    <button key={i} onClick={() => handleAnswer(q.id, i === q.correct)} className="bg-white border p-3 rounded-lg hover:border-blue-500 transition">
                      {opt}
                    </button>
                  ))}
                  {q.type === 'tf' && (
                    <>
                      <button onClick={() => handleAnswer(q.id, q.correct === true)} className="bg-white border px-6 py-2 rounded-lg hover:bg-green-50">صح</button>
                      <button onClick={() => handleAnswer(q.id, q.correct === false)} className="bg-white border px-6 py-2 rounded-lg hover:bg-red-50">خطأ</button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </section>

          {/* Navigation */}
          <div className="flex justify-between mt-12 pt-6 border-t">
             <button 
              disabled={activeLessonIdx === 0}
              onClick={() => setActiveLessonIdx(v => v - 1)}
              className="bg-slate-200 px-6 py-2 rounded-lg disabled:opacity-30"
            >
              الدرس السابق
            </button>
            <button 
              disabled={activeLessonIdx === currentUnit.lessons.length - 1}
              onClick={() => setActiveLessonIdx(v => v + 1)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg disabled:opacity-30"
            >
              الدرس التالي
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}