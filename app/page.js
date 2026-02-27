export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-200 via-pink-100 to-amber-100 flex items-center justify-center p-6">

      <div className="relative max-w-4xl w-full bg-gradient-to-b from-white/90 to-rose-50/80 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.15)] rounded-[40px] border border-amber-200 p-8 md:p-16 overflow-hidden">

        {/* Gold Inner Frame */}
        <div className="absolute inset-5 border border-amber-300 rounded-[30px] pointer-events-none"></div>

        {/* Soft Glow Background */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-rose-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="text-center relative z-10">
          <p className="text-amber-600 tracking-[0.4em] text-sm mb-4">
            พิธีมงคลสมรส
          </p>

          <h1 className="text-4xl md:text-6xl font-serif text-rose-700 leading-tight">
            Phupha & Waranya
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            ขอเรียนเชิญร่วมเป็นเกียรติในงานฉลองมงคลสมรส
          </p>
        </div>

        {/* Couple Photo */}
        <div className="flex justify-center mt-12 relative z-10">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-amber-300 via-rose-400 to-pink-400 p-2 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866"
                alt="couple"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="text-center mt-10 relative z-10">
          <p className="text-3xl md:text-4xl text-rose-800 font-medium">
            29 สิงหาคม 2569
          </p>
          <p className="text-gray-600 mt-2">
            เวลา 09:00 น. – 18:30 น.
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 relative z-10">

          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-rose-200 p-8 text-center transition hover:scale-105 duration-300">
            <h3 className="text-xl font-semibold text-rose-700 mb-4">
              พิธีเช้า
            </h3>
            <p className="text-gray-700 text-lg">
              09:00 น.
            </p>
            <p className="text-gray-500 mt-2">
              ณ เรือนไทยริมน้ำ
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-rose-200 p-8 text-center transition hover:scale-105 duration-300">
            <h3 className="text-xl font-semibold text-rose-700 mb-4">
              งานเลี้ยงฉลอง
            </h3>
            <p className="text-gray-700 text-lg">
              18:30 น.
            </p>
            <p className="text-gray-500 mt-2">
              Grand Siam Hotel
            </p>
          </div>

        </div>

        {/* Map Section */}
        <div className="mt-16 relative z-10">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-amber-200 p-8 text-center">
            <h3 className="text-xl font-semibold text-rose-700 mb-4">
              สถานที่จัดงาน
            </h3>

            <div className="w-full h-48 rounded-2xl bg-gradient-to-r from-rose-200 to-amber-200 flex items-center justify-center text-gray-600">
              แผนที่แสดงตำแหน่งสถานที่
            </div>

            <button className="mt-6 bg-gradient-to-r from-rose-500 to-amber-400 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition">
              เปิดแผนที่ใน Google Maps
            </button>
          </div>
        </div>

        {/* RSVP */}
        <div className="mt-16 text-center relative z-10">
          <button className="bg-gradient-to-r from-rose-600 to-amber-500 text-white px-10 py-4 rounded-full text-lg shadow-2xl hover:scale-110 transition duration-300">
            ยืนยันการเข้าร่วมงาน
          </button>
        </div>

      </div>
    </main>
  );
}
