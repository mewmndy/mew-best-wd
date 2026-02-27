"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, Heart } from "lucide-react";
import { Great_Vibes, Playfair_Display, Montserrat } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  const locationUrl = "https://maps.app.goo.gl/iN4wMiWQiDUijL6K9";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    locationUrl
  )}`;

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 py-16 ${montserrat.className}`}
      style={{
        background: `
          radial-gradient(circle at 15% 20%, #ffd6e8 0%, transparent 40%),
          radial-gradient(circle at 85% 10%, #dbeafe 0%, transparent 40%),
          radial-gradient(circle at 70% 80%, #ffe7c7 0%, transparent 40%),
          radial-gradient(circle at 30% 75%, #f3e8ff 0%, transparent 40%),
          linear-gradient(120deg, #fff6e8, #ffe4ec, #e6f2ff, #fff6e8)
        `,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="w-full max-w-6xl"
      >
        <div className="bg-white/50 backdrop-blur-3xl border border-white/60 shadow-[0_35px_90px_rgba(0,0,0,0.15)] rounded-[70px] p-16 space-y-20">

          {/* Header */}
          <div className="text-center space-y-6">
            <p className="text-sm tracking-[0.5em] text-gray-600">
              WEDDING INVITATION
            </p>

            <Heart className="w-8 h-8 text-rose-400 mx-auto" />
          </div>

          {/* ===== ALIGN SECTION ===== */}
          <div className="space-y-12">

            {/* Row 1: Names */}
            <div className="grid grid-cols-2 items-center text-center">
              <h2
                className={`${greatVibes.className} text-8xl bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 bg-clip-text text-transparent`}
              >
                Mew
              </h2>

              <h2
                className={`${greatVibes.className} text-8xl bg-gradient-to-r from-purple-500 via-pink-500 to-rose-400 bg-clip-text text-transparent`}
              >
                Best
              </h2>
            </div>

            {/* Row 2: Father */}
            <div className="grid grid-cols-2 text-center text-3xl font-semibold text-gray-800">
              <p>ศ.ดร เกษม สร้อยทอง</p>
              <p>อิทธิศักดิ์ นวทวีเศรษฐ์</p>
            </div>

            {/* Row 3: Mother */}
            <div className="grid grid-cols-2 text-center text-3xl font-semibold text-gray-800">
              <p>กอบบุญ สร้อยทอง</p>
              <p>นิตย์รดี อรุณขจรศักดิ์</p>
            </div>
          </div>

          {/* Date */}
          <div className="text-center space-y-5 pt-10">
            <div className="flex items-center justify-center gap-3">
              <CalendarDays className="w-6 h-6 text-gray-700" />
              <p className={`${playfair.className} text-4xl font-semibold`}>
                Saturday, 16 May 2026
              </p>
            </div>
            <p className="text-2xl text-gray-700">09.09 AM</p>
          </div>

          {/* Location */}
          <div className="text-center space-y-5">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-gray-700" />
              <p className={`${playfair.className} text-2xl font-medium`}>
                Canale House
              </p>
            </div>
            <p className="text-gray-600 text-lg">
              Bangkok, Thailand
            </p>

            <div className="pt-4 flex flex-col items-center gap-3">
              <img
                src={qrCodeUrl}
                alt="QR Code Location"
                className="w-48 h-48 rounded-3xl shadow-lg"
              />
              <p className="text-sm text-gray-500">
                Scan for location
              </p>
            </div>
          </div>

          {/* Schedule */}
          <div className="text-center pt-10 space-y-4">
            <p className={`${playfair.className} text-3xl`}>
              ลำดับพิธีการ
            </p>
            <div className="text-gray-700 text-xl space-y-2">
              <p>09.00 น.  พิธีหมั้น</p>
              <p>10.00 น.  พิธียกน้ำชา</p>
              <p>11.00 น.  รับประทานอาหาร</p>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
