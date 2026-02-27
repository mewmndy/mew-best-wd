export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50 flex items-center justify-center p-6">
      
      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl border border-amber-200 p-8 md:p-14 relative overflow-hidden">

        {/* Gold Corner Decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-amber-300 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-amber-300 rounded-bl-3xl"></div>

        {/* Title */}
        <div className="text-center space-y-4">
          <p className="text-amber-600 tracking-widest text-sm uppercase">
            พิธีมงคลสมรส
          </p>

          <h1 className="text-4xl md:text-6xl font-serif text-rose-700">
            Phupha & Waranya
          </h1>

          <p className="text-gray-600 text-lg">
            ขอเรียนเชิญร่วมเป็นเกียรติในงานฉลองมงคลสมรส
          </p>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-amber-200"></div>

        {/* Date Section */}
        <div className="text-center space-y-2">
          <p className="text-2xl md:text-3xl font-medium text-rose-800">
            29 สิงหาคม 2569
          </p>
          <p className="text-gray-600">
            เวลา 09:00 น. – 18:30 น.
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          
          <div className="bg-white rounded-2xl shadow-md p-6 border border-rose-100">
            <h3 className="text-lg font-semibold text-rose-700">
              พิธีเช้า
            </h3>
            <p className="text-gray-600 mt-2">
              09:00 น.
            </p>
            <p className="text-gray-500 text-sm">
              ณ เรือนไทยริมน้ำ
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 border border-rose-100">
            <h3 className="text-lg font-semibold text-rose-700">
              งานเลี้ยงฉลอง
            </h3>
            <p className="text-gray-600 mt-2">
              18:30 น.
            </p>
            <p className="text-gray-500 text-sm">
              Grand Siam Hotel
            </p>
          </div>

        </div>

        {/* RSVP Button */}
        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-rose-500 to-amber-400 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition">
            ยืนยันการเข้าร่วมงาน
          </button>
        </div>

      </div>
    </main>
  );
}
