import Link from "next/link";
import { scienceUnits } from "./data/science-unit";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">سرعة التفاعلات الكيميائية</h1>
        <p className="text-lg text-gray-600">استكشف العوامل التي تؤثر على سرعة حدوث التفاعلات في عالمنا.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {scienceUnits.map((unit) => (
          <div key={unit.id} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">{unit.title}</h2>
            <p className="text-gray-600 mb-6">{unit.description}</p>
            <Link 
              href={`/units/${unit.id}`}
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition"
            >
              ابدأ الوحدة
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}