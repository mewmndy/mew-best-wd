"use client";

import React from "react";
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

export default function WeddingInvitationPage() {
  const locationUrl = "https://maps.app.goo.gl/iN4wMiWQiDUijL6K9";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    locationUrl
  )}`;

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 md:p-12"
      style={{
        backgroundImage: `
          radial-gradient(at 10% 20%, rgba(255,220,230,0.5) 0px, transparent 40%),
          radial-gradient(at 90% 10%, rgba(220,230,255,0.5) 0px, transparent 40%),
          radial-gradient(at 50% 90%, rgba(255,240,220,0.4) 0px, transparent 50%),
          linear-gradient(120deg,#fff6e8,#ffe4ec,#e6f2ff,#fff6e8)
        `,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="w-full max-w-2xl
        backdrop-blur-xl bg-white/60
        border border-white/40
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        rounded-[40px]
        p-10 md:p-14
        text-center space-y-10"
      >
        {/* Title */}
        <div className="space-y-2">
          <p
            className={`${montserrat.className} text-sm tracking-[0.3em] text-gray-500`}
          >
            WEDDING INVITATION
          </p>
        </div>

        {/* Bride & Groom */}
        <div className="grid grid-cols-2 gap-6">
          {/* Bride */}
          <div className="space-y-3">
            <h2
              className={`${greatVibes.className}
              text-6xl md:text-7xl
              bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400
              bg-clip-text text-transparent
              drop-shadow-[0_5px_15px_rgba(255,182,193,0.4)]`}
            >
              Mew
            </h2>

            <p
              className={`${playfair.className} text-xl md:text-2xl text-gray-700`}
            >
              ดร. เมวดี สร้อยทอง
            </p>

            <p className={`${montserrat.className} text-xs text-gray-400`}>
              (มิว)
            </p>

            <div className="pt-2 text-sm text-gray-600 space-y-1">
              <p>บุตรของ</p>
              <p>
                ศ.ดร เกษม สร้อยทอง
                <br />
                กอบบุญ สร้อยทอง
              </p>
            </div>
          </div>

          {/* Groom */}
          <div className="space-y-3">
            <h2
              className={`${greatVibes.className}
              text-6xl md:text-7xl
              bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400
              bg-clip-text text-transparent
              drop-shadow-[0_5px_15px_rgba(255,182,193,0.4)]`}
            >
              Best
            </h2>

            <p
              className={`${playfair.className} text-xl md:text-2xl text-gray-700`}
            >
              อิติ อรุณขจรศักดิ์
            </p>

            <p className={`${montserrat.className} text-xs text-gray-400`}>
              (เบส)
            </p>

            <div className="pt-2 text-sm text-gray-600 space-y-1">
              <p>บุตรของ</p>
              <p>
                พ่อ อรุณขจรศักดิ์
                <br />
                แม่ อรุณขจรศักดิ์
              </p>
            </div>
          </div>
        </div>

        {/* Animated Heart */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center"
        >
          <Heart className="w-8 h-8 text-rose-400 drop-shadow-md" />
        </motion.div>

        {/* Date */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <CalendarDays className="w-5 h-5" />
            <p
              className={`${playfair.className}
              text-3xl md:text-4xl
              font-semibold tracking-wide`}
            >
              Saturday, 16 May 2026
            </p>
          </div>

          <p
            className={`${montserrat.className}
            text-xl md:text-2xl text-gray-700`}
          >
            09.09 AM
          </p>
        </div>

        {/* Location */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <MapPin className="w-5 h-5" />
            <p
              className={`${playfair.className} text-lg md:text-xl font-medium`}
            >
              Canale House
            </p>
          </div>

          <p
            className={`${montserrat.className} text-gray-600 text-sm md:text-base`}
          >
            Bangkok, Thailand
          </p>

          <div className="pt-4 flex flex-col items-center gap-2">
            <img
              src={qrCodeUrl}
              alt="QR Code Location"
              className="w-40 h-40
              rounded-2xl p-2 bg-white
              shadow-[0_10px_30px_rgba(0,0,0,0.12)]
              hover:scale-105 transition duration-300"
            />
            <p className="text-xs text-gray-500">Scan for location</p>
          </div>
        </div>

        {/* Divider + Blessing */}
        <div className="relative pt-8">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>

          <p
            className={`${playfair.className}
            pt-6 text-gray-600 text-sm md:text-base leading-relaxed`}
          >
            ด้วยความยินดีอย่างยิ่ง
            <br />
            ขอเรียนเชิญท่านร่วมเป็นเกียรติในพิธีมงคลสมรส
            <br />
            และร่วมแสดงความยินดีกับคู่บ่าวสาว
          </p>
        </div>

        {/* Schedule */}
        <div className="space-y-3 pt-6">
          <p
            className={`${playfair.className}
            text-lg md:text-xl text-gray-800`}
          >
            ลำดับพิธีการ
          </p>

          <div
            className={`${montserrat.className}
            text-gray-700 space-y-1 text-sm md:text-base`}
          >
            <p>09.00 น. พิธีหมั้น</p>
            <p>10.00 น. พิธียกน้ำชา</p>
            <p>11.00 น. รับประทานอาหาร</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
