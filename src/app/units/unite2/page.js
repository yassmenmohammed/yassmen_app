import Link from "next/link";
import { scienceUnits } from "../../data/science-unit";

export default function UnitTwoPage() {
  const unit = scienceUnits.find(u => u.id === "unite2");
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 border-r-4 border-emerald-600 pr-4">{unit.title}</h1>
      <div className="grid gap-6">
        {unit.lessons.map((lesson) => (
          <Link key={lesson.id} href={`/units/unite2/${lesson.id}`}>
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-400 flex justify-between items-center transition group">
              <h3 className="text-xl font-bold group-hover:text-emerald-600">{lesson.title}</h3>
              <span className="bg-emerald-50 text-emerald-600 px-4 py-1 rounded-full text-sm">ابدأ</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}