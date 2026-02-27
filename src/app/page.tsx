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
      className={`min-h-screen flex items-center justify-center px-6 py-16 bg-[#faf7fb] ${montserrat.className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl"
      >
        {/* OUTER COLOR FRAME */}
        <div className="rounded-[60px] p-[3px] bg-gradient-to-br from-rose-200 via-purple-200 to-blue-200 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

          {/* INNER GLASS CARD */}
          <div className="rounded-[55px] bg-white/70 backdrop-blur-2xl p-12 md:p-16 space-y-16">

            {/* Header */}
            <div className="text-center space-y-4">
              <p className="text-xs tracking-[0.5em] text-gray-500">
                WEDDING INVITATION
              </p>
              <Heart className="w-6 h-6 text-rose-400 mx-auto" />
            </div>

            {/* Bride & Groom */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20 text-center">

              {/* elegant vertical line */}
              <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 h-[85%] w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

              {/* Bride */}
              <div className="space-y-6">
                <h2 className={`${greatVibes.className} text-7xl`}>
                  Mew
                </h2>

                <p className={`${playfair.className} text-2xl font-semibold`}>
                  ดร. เมวดี สร้อยทอง
                </p>

                <p className="text-gray-500 text-sm">(มิว)</p>

                <div className="pt-4 space-y-2 text-gray-700 text-lg leading-relaxed">
                  <p>ศ.ดร เกษม สร้อยทอง</p>
                  <p>กอบบุญ สร้อยทอง</p>
                </div>
              </div>

              {/* Groom */}
              <div className="space-y-6">
                <h2 className={`${greatVibes.className} text-7xl`}>
                  Best
                </h2>

                <p className={`${playfair.className} text-2xl font-semibold`}>
                  อิติ อรุณขจรศักดิ์
                </p>

                <p className="text-gray-500 text-sm">(เบส)</p>

                <div className="pt-4 space-y-2 text-gray-700 text-lg leading-relaxed">
                  <p>อิทธิศักดิ์ นวทวีเศรษฐ์</p>
                  <p>นิตย์รดี อรุณขจรศักดิ์</p>
                </div>
              </div>
            </div>

            {/* Date */}
            <div className="text-center space-y-3 border-t pt-10">
              <div className="flex items-center justify-center gap-3">
                <CalendarDays className="w-5 h-5 text-gray-600" />
                <p className={`${playfair.className} text-3xl md:text-4xl font-semibold`}>
                  Saturday, 16 May 2026
                </p>
              </div>
              <p className="text-xl text-gray-700">09.09 AM</p>
            </div>

            {/* Location */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-gray-600" />
                <p className={`${playfair.className} text-xl font-medium`}>
                  Canale House
                </p>
              </div>
              <p className="text-gray-600 text-sm">
                Bangkok, Thailand
              </p>

              <div className="pt-4 flex flex-col items-center gap-2">
                <img
                  src={qrCodeUrl}
                  alt="QR Code Location"
                  className="w-40 h-40 rounded-2xl shadow-md"
                />
                <p className="text-xs text-gray-500">
                  Scan for location
                </p>
              </div>
            </div>

            {/* Schedule */}
            <div className="text-center pt-8 border-t space-y-3">
              <p className={`${playfair.className} text-xl`}>
                ลำดับพิธีการ
              </p>
              <div className="text-gray-700 text-base space-y-1">
                <p>09.00 น. พิธีหมั้น</p>
                <p>10.00 น. พิธียกน้ำชา</p>
                <p>11.00 น. รับประทานอาหาร</p>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
