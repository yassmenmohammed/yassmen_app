import Link from "next/link";
import { scienceUnits } from "../../../data/science-unit";

export default function LessonPage() {
  const lesson = scienceUnits[1].lessons[1];
  return (
    <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
      <h1 className="text-3xl font-black text-emerald-900 mb-6">{lesson.title}</h1>
      <p className="text-gray-700 text-lg mb-8">{lesson.explanation}</p>
      <div className="p-6 border-2 border-dashed border-emerald-200 rounded-2xl">
        <h3 className="font-bold mb-4">التطبيقات الحياتية:</h3>
        <div className="grid grid-cols-2 gap-4">
          {lesson.examples.map((ex, i) => <div key={i} className="bg-white p-4 shadow-sm rounded-lg border">{ex}</div>)}
        </div>
      </div>
      <div className="mt-12 flex justify-between">
        <Link href="/units/unite2/lesson1" className="bg-gray-100 px-8 py-2 rounded-lg">السابق</Link>
        <Link href="/" className="bg-indigo-900 text-white px-8 py-2 rounded-lg">إكمال المنهج 🎉</Link>
      </div>
    </div>
  );
}