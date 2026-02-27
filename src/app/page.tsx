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
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl"
      >
        <div className="bg-white/50 backdrop-blur-3xl border border-white/60 shadow-[0_30px_80px_rgba(0,0,0,0.12)] rounded-[50px] p-10 md:p-16 space-y-16">

          {/* Header */}
          <div className="text-center space-y-4">
            <p className="text-sm tracking-[0.4em] text-gray-600">
              WEDDING INVITATION
            </p>
            <Heart className="w-7 h-7 text-rose-400 mx-auto" />
          </div>

          {/* Bride & Groom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-center relative">

            <div className="hidden md:block absolute left-1/2 top-10 -translate-x-1/2 h-[80%] w-px bg-gradient-to-b from-transparent via-gray-300/60 to-transparent" />

            {/* Bride */}
            <div className="space-y-6">
              <h2 className={`${greatVibes.className} text-8xl`}>
                Mew
              </h2>

              <p className={`${playfair.className} text-3xl font-semibold`}>
                ดร. เมวดี สร้อยทอง
              </p>

              <p className="text-gray-500 text-sm">(มิว)</p>

              <div className="pt-6 space-y-3">
                <p className="text-gray-700 text-xl leading-relaxed">
                  ศ.ดร เกษม สร้อยทอง
                </p>
                <p className="text-gray-700 text-xl leading-relaxed">
                  กอบบุญ สร้อยทอง
                </p>
              </div>
            </div>

            {/* Groom */}
            <div className="space-y-6">
              <h2 className={`${greatVibes.className} text-8xl`}>
                Best
              </h2>

              <p className={`${playfair.className} text-3xl font-semibold`}>
                อิติ อรุณขจรศักดิ์
              </p>

              <p className="text-gray-500 text-sm">(เบส)</p>

              <div className="pt-6 space-y-3">
                <p className="text-gray-700 text-xl leading-relaxed">
                  อิทธิศักดิ์ นวทวีเศรษฐ์
                </p>
                <p className="text-gray-700 text-xl leading-relaxed">
                  นิตย์รดี อรุณขจรศักดิ์
                </p>
              </div>
            </div>
          </div>

          {/* Date */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <CalendarDays className="w-6 h-6 text-gray-700" />
              <p className={`${playfair.className} text-4xl md:text-5xl font-semibold`}>
                Saturday, 16 May 2026
              </p>
            </div>
            <p className="text-2xl text-gray-700">
              09.09 AM
            </p>
          </div>

          {/* Location */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-gray-700" />
              <p className={`${playfair.className} text-2xl font-medium`}>
                Canale House
              </p>
            </div>
            <p className="text-gray-600">
              Bangkok, Thailand
            </p>

            <div className="pt-4 flex flex-col items-center gap-2">
              <img
                src={qrCodeUrl}
                alt="QR Code Location"
                className="w-44 h-44 rounded-2xl shadow-md"
              />
              <p className="text-xs text-gray-500">
                Scan for location
              </p>
            </div>
          </div>

          {/* Schedule */}
          <div className="text-center pt-6 border-t border-gray-200 space-y-3">
            <p className={`${playfair.className} text-2xl`}>
              ลำดับพิธีการ
            </p>
            <div className="text-gray-700 text-lg space-y-1">
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
