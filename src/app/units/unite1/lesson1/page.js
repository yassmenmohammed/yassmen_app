import Link from "next/link";
import { scienceUnits } from "../../../data/science-unit";

export default function page() {
  const lesson = scienceUnits[0].lessons[0];

  return (
    <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
      {/* عنوان الدرس */}
      <h1 className="text-3xl font-black text-indigo-900 mb-6">{lesson.title}</h1>
      
      {/* قسم الفيديو التعليمي */}
      <div className="mb-8 overflow-hidden rounded-2xl shadow-lg bg-black aspect-video flex items-center justify-center">
        {/* يمكنك استبدال الرابط برابط فيديو تعليمي حقيقي */}
      <video
        className="w-full h-full"
        src="/videos/videoplayback.mp4"
        controls
        title="شرح سرعة التفاعل الكيميائي"
      ></video>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">الشرح المفصل</h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-6">{lesson.explanation}</p>
        
        {/* عنصر صورة توضيحية للشرح */}
        <div className="bg-gray-100 rounded-xl p-4 mb-6">
          <img 
            src="/Images/شرح-سرعة-التفاعل-الكيميائي.jpeg" 
            alt="رسم بياني لسرعة التفاعل" 
            className="w-full h-auto rounded-lg shadow-sm"
          />
          <p className="text-sm text-center text-gray-500 mt-2">شكل (1): يوضح العلاقة بين الزمن وتركيز المواد المتفاعلة</p>
        </div>
      </section>

      <section className="mb-8 bg-indigo-50 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-indigo-800 mb-4">أمثلة تطبيقية</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* صور للأمثلة التطبيقية */}
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <img 
              src="/Images/images.jpeg" 
              alt="تفاعل سريع" 
              className="rounded mb-2 w-full object-cover h-32"
            />
            <span className="text-sm font-medium">تفاعلات سريعة (مثل الانفجارات)</span>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <img 
              src="/Images/pla.png" 
              alt="تفاعل بطيء" 
              className="rounded mb-2 w-full object-cover h-32"
            />
            <span className="text-sm font-medium">تفاعلات بطيئة (مثل صدأ الحديد)</span>
          </div>
        </div>

        <ul className="list-disc list-inside space-y-2 text-indigo-900 mt-4">
          {lesson.examples.map((ex, index) => (
            <li key={index}>{ex}</li>
          ))}
        </ul>
      </section>

      <div className="border-t pt-8">
        <h2 className="text-lg font-bold mb-2">الملخص</h2>
        <p className="text-gray-600 italic">{lesson.summary}</p>
      </div>

      {/* أزرار التنقل */}
      <div className="mt-12 flex justify-between items-center">
        <Link href="/units/unite1" className="text-gray-500 hover:text-indigo-600 font-medium">
          ← العودة للوحدة
        </Link>
        <Link 
          href="/units/unite1/lesson2" 
          className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
        >
          الدرس التالي
        </Link>
      </div>
    </div>
  );
}