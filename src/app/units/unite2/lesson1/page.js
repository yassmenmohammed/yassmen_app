import Link from "next/link";
import { scienceUnits } from "../../../data/science-unit";

export default function LessonPage() {
  const lesson = scienceUnits[1].lessons[0];
  return (
    <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
      <h1 className="text-3xl font-black text-emerald-900 mb-6">{lesson.title}</h1>
      <p className="text-gray-700 text-lg mb-8">{lesson.explanation}</p>
      <div className="bg-emerald-50 p-6 rounded-2xl mb-8">
        <h3 className="font-bold mb-2">أمثلة المحفزات والضوء:</h3>
        <ul className="list-disc pr-5">{lesson.examples.map((ex, i) => <li key={i}>{ex}</li>)}</ul>
      </div>
      <div className="mt-12 flex justify-between">
        <Link href="/units/unite2" className="text-gray-500">← العودة للوحدة</Link>
        <Link href="/units/unite2/lesson2" className="bg-emerald-600 text-white px-8 py-2 rounded-lg">الدرس التالي</Link>
      </div>
    </div>
  );
}