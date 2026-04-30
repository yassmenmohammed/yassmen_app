import Link from "next/link";
import { scienceUnits } from "../../../../data/science-unit";

export default function page() {
  const lesson = scienceUnits[0].lessons[1];

  return (
<div className="max-w-4xl mx-auto">
  <div className="bg-white p-8 rounded-xl border border-gray-200">

    {/* عنوان الدرس */}
    <h1 className="text-3xl font-bold mb-6 border-r-4 border-indigo-600 pr-4">
      {lesson.title}
    </h1>

    {/* الفيديو */}
    <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-black aspect-video flex items-center justify-center">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/ip0_t8Oqnw8"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    </div>

    {/* الشرح */}
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-3">الشرح المفصل</h2>
      <p className="text-gray-600 leading-relaxed">
        {lesson.explanation}
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mt-6">
        <img
          src="/Images/sddefault.jpg"
          className="w-full rounded-lg"
        />
        <p className="text-sm text-gray-500 mt-2 text-center">
          شكل (1): يوضح العلاقة بين الزمن وتركيز المواد المتفاعلة
        </p>
      </div>
    </div>

    {/* الأمثلة */}
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        أمثلة تطبيقية
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="bg-white border border-gray-200 rounded-xl p-3 hover:border-indigo-400 transition">
          <img
            src="/Images/2017-05-22_223555.png"
            className="rounded mb-2 w-full object-cover h-32"
          />
          <span className="text-sm font-medium">
            تفاعلات سريعة (مثل الانفجارات)
          </span>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-3 hover:border-indigo-400 transition">
          <img
            src="/Images/images (1).jpeg"
            className="rounded mb-2 w-full object-cover h-32"
          />
          <span className="text-sm font-medium">
            تفاعلات بطيئة (مثل صدأ الحديد)
          </span>
        </div>
      </div>

      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {lesson.examples.map((ex, index) => (
          <li key={index}>{ex}</li>
        ))}
      </ul>
    </div>

    {/* الملخص */}
    <div className="border-t pt-6">
      <h2 className="text-lg font-bold mb-2">الملخص</h2>
      <p className="text-gray-600">{lesson.summary}</p>
    </div>

    {/* التنقل */}
    <div className="mt-10 flex justify-between items-center">
      <Link
        href="/units/Chemical_interactions"
        className="text-gray-500 hover:text-indigo-600 font-medium"
      >
        ← العودة للوحدة
      </Link>

      <Link
        href="/units/Chemical_interactions/Speed_of_Chemical_Reactions_lesson"
        className="bg-indigo-50 text-indigo-600 px-6 py-2 rounded-full text-sm hover:bg-indigo-100 transition"
      >
        الدرس التالي
      </Link>
    </div>

  </div>
</div>
  );
}