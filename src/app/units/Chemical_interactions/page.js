import Link from "next/link";
import { scienceUnits } from "../../../data/science-unit";

export default function page() {
  const unit = scienceUnits.find(u => u.id === "Chemical_interactions");

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 border-r-4 border-indigo-600 pr-4">
        {unit.title}
      </h1>

      {/* الدروس */}
      <div className="grid gap-6 mb-10">
        {unit.lessons.map((lesson) => (
          <Link
            key={lesson.id}
            href={`/units/Chemical_interactions/${lesson.id}`}
          >
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-400 flex justify-between items-center transition group">
              <div>
                <h3 className="text-xl font-bold group-hover:text-indigo-600">
                  {lesson.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  اضغط لبدء الدرس والاطلاع على الأمثلة
                </p>
              </div>
              <span className="bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-sm">
                درس
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* الاختبارات */}
      <h2 className="text-2xl font-bold mb-6 border-r-4 border-green-600 pr-4">
        الاختبارات
      </h2>

      <div className="grid gap-6">
          <Link
            href="/units/Chemical_interactions/Chemical_interactions_quizze"
          >
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-400 flex justify-between items-center transition group">
              <div>
                <h3 className="text-xl font-bold group-hover:text-green-600">
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  ابدأ الاختبار وقيس مستواك
                </p>
              </div>
              <span className="bg-green-50 text-green-600 px-4 py-1 rounded-full text-sm">
                 أختبار الدرس الأول
              </span>
            </div>
          </Link>
          <Link
            href="/units/Chemical_interactions/Speed_of_Chemical_Reactions_quizze"
          >
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-400 flex justify-between items-center transition group">
              <div>
                <h3 className="text-xl font-bold group-hover:text-green-600">
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  ابدأ الاختبار وقيس مستواك
                </p>
              </div>
              <span className="bg-green-50 text-green-600 px-4 py-1 rounded-full text-sm">
                 أختبار الدرس الثاني
              </span>
            </div>
          </Link>
      </div>
    </div>
  );
}