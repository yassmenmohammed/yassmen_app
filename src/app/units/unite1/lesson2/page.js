import Link from "next/link";
import { scienceUnits } from "../../../data/science-unit";

export default function LessonPage() {
  const lesson = scienceUnits[0].lessons[1];

  return (
    <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
      <h1 className="text-3xl font-black text-indigo-900 mb-6">{lesson.title}</h1>
      <section className="mb-8"><h2 className="text-xl font-bold text-gray-800 mb-3">الشرح</h2><p className="text-gray-700 leading-relaxed">{lesson.explanation}</p></section>
      <section className="mb-8 bg-orange-50 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-orange-800 mb-4">أمثلة</h2>
        <ul className="list-disc list-inside space-y-2">{lesson.examples.map((ex, i) => <li key={i}>{ex}</li>)}</ul>
      </section>
      <div className="mt-12 flex justify-between">
        <Link href="/units/unite1/lesson1" className="bg-gray-100 text-gray-700 px-8 py-2 rounded-lg">الدرس السابق</Link>
        <Link href="/units/unite2" className="bg-indigo-600 text-white px-8 py-2 rounded-lg">الوحدة التالية</Link>
      </div>
    </div>
  );
}