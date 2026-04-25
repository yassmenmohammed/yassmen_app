import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "منصة علوم الكيمياء",
  description: "تعلم سرعة التفاعلات الكيميائية",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 bg-indigo-900 text-white hidden md:flex flex-col sticky top-0 h-screen">
          <div className="p-6 text-2xl font-bold border-b border-indigo-800">
            مختبر الكيمياء
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <Link href="/" className="block p-3 hover:bg-indigo-800 rounded-lg transition">الرئيسية</Link>
            <div className="pt-4 pb-2 text-xs text-indigo-300 uppercase font-semibold">الوحدات الدراسية</div>
            <Link href="/units/unite1" className="block p-3 hover:bg-indigo-800 rounded-lg text-sm">الوحدة الأولى</Link>
            <Link href="/units/unite2" className="block p-3 hover:bg-indigo-800 rounded-lg text-sm">الوحدة الثانية</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <header className="h-16 bg-white border-b flex items-center px-8 shadow-sm">
            <div className="text-sm text-gray-500">
              <Link href="/" className="hover:text-indigo-600">الرئيسية</Link> / 
              <span className="mx-2 font-medium text-gray-900">منصة التعلم</span>
            </div>
          </header>
          <main className="p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}