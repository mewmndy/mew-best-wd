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
      className={`min-h-screen flex items-center justify-center px-6 py-12 ${montserrat.className}`}
      style={{
        backgroundImage: `
          radial-gradient(circle at 15% 20%, rgba(255,210,230,0.6), transparent 40%),
          radial-gradient(circle at 85% 15%, rgba(220,230,255,0.6), transparent 40%),
          radial-gradient(circle at 50% 80%, rgba(255,240,210,0.6), transparent 45%),
          linear-gradient(120deg,#fff6e8,#ffe4ec,#e6f2ff,#fff6e8)
        `,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl"
      >
        {/* Glass Card */}
        <div className="bg-white/60 backdrop-blur-2xl border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-[40px] p-10 md:p-16 space-y-12">

          {/* Header */}
          <div className="text-center space-y-4">
            <p className="text-sm tracking-[0.4em] text-gray-500">
              WEDDING INVITATION
            </p>

            <div className="flex justify-center">
              <Heart className="w-7 h-7 text-rose-400" />
            </div>
          </div>

          {/* Bride & Groom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-center relative">

            {/* Center Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

            {/* Bride Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-5"
            >
              <h2 className={`${greatVibes.className} text-8xl text-gray-800`}>
                Mew
              </h2>

              <p className={`${playfair.className} text-3xl font-semibold`}>
                ดร. เมวดี สร้อยทอง
              </p>

              <p className="text-gray-400 text-sm">(มิว)</p>

              <div className="pt-4 space-y-2">
                <p className="text-gray-500 text-sm tracking-wide">
                  บุตรของ
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  ศ.ดร เกษม สร้อยทอง
                  <br />
                  กอบบุญ สร้อยทอง
                </p>
              </div>
            </motion.div>

            {/* Groom Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-5"
            >
              <h2 className={`${greatVibes.className} text-8xl text-gray-800`}>
                Best
              </h2>

              <p className={`${playfair.className} text-3xl font-semibold`}>
                อิติ อรุณขจรศักดิ์
              </p>

              <p className="text-gray-400 text-sm">(เบส)</p>

              <div className="pt-4 space-y-2">
                <p className="text-gray-500 text-sm tracking-wide">
                  บุตรของ
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  อิทธิศักดิ์ นวทวีเศรษฐ์
                  <br />
                  นิตย์รดี อรุณขจรศักดิ์
                </p>
              </div>
            </motion.div>
          </div>

          {/* Date */}
          <div className="text-center space-y-4 pt-6">
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

          {/* Closing */}
          <div className={`${playfair.className} text-center pt-6 border-t text-gray-600 text-lg leading-relaxed`}>
            ด้วยความยินดีอย่างยิ่ง
            ขอเรียนเชิญท่านร่วมเป็นเกียรติในพิธีมงคลสมรส
            และร่วมแสดงความยินดีกับคู่บ่าวสาว
          </div>

        </div>
      </motion.div>
    </div>
  );
}
