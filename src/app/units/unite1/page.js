import Link from "next/link";
import { scienceUnits } from "../../data/science-unit";

export default function UnitOnePage() {
  const unit = scienceUnits.find(u => u.id === "unite1");

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 border-r-4 border-indigo-600 pr-4">{unit.title}</h1>
      <div className="grid gap-6">
        {unit.lessons.map((lesson) => (
          <Link key={lesson.id} href={`/units/unite1/${lesson.id}`}>
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-400 flex justify-between items-center transition group">
              <div>
                <h3 className="text-xl font-bold group-hover:text-indigo-600">{lesson.title}</h3>
                <p className="text-gray-500 text-sm mt-1">اضغط لبدء الدرس والاطلاع على الأمثلة</p>
              </div>
              <span className="bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-sm">ابدأ</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}