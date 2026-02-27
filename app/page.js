"use client";
import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Heart } from "lucide-react";
import { Great_Vibes, Playfair_Display, Montserrat } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function WeddingInvitationPage() {
  const locationUrl = "https://maps.app.goo.gl";
  const qrCodeUrl = `https://api.qrserver.com{encodeURIComponent(
    locationUrl
  )}`;

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 md:p-12 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(at 15% 25%, rgba(255,220,230,0.4) 0px, transparent 45%),
          radial-gradient(at 85% 15%, rgba(255,235,210,0.4) 0px, transparent 45%),
          linear-gradient(120deg, #fffaf4 0%, #ffeef4 100%)
        `,
        backgroundSize: "cover",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl bg-white/40 backdrop-blur-sm p-8 md:p-16 rounded-[40px] shadow-2xl border border-white/50 text-center relative"
      >
        {/* Header Tag */}
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${montserrat.className} text-[10px] md:text-xs tracking-[0.3em] text-rose-400 font-semibold mb-12 uppercase`}
        >
          The Wedding Celebration
        </motion.p>

        {/* Main Section: Bride & Groom Split */}
        <div className="relative mb-12">
          {/* Vertical Divider Line */}
          <div className="absolute left-1/2 top-10 bottom-0 w-[1px] bg-gradient-to-b from-rose-200 to-transparent hidden md:block" />

          <div className="grid grid-cols-2 gap-4 md:gap-12 items-start">
            {/* Bride - Left Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className={`${greatVibes.className} text-6xl md:text-9xl text-gray-800 leading-tight`}>
                Mew
              </h2>
              <div className="space-y-1 px-2">
                <p className={`${playfair.className} text-xl md:text-3xl font-bold text-gray-800`}>
                  ดร. เมวดี สร้อยทอง
                </p>
                <p className={`${montserrat.className} text-sm text-gray-400`}>(มิว)</p>
              </div>
              <div className="pt-4 border-t border-rose-100/50 mx-4">
                <p className={`${montserrat.className} text-[10px] text-gray-400 uppercase mb-2 tracking-widest`}>บุตรของ</p>
                <p className={`${playfair.className} text-xs md:text-base text-gray-700 leading-relaxed`}>
                  ศ.ดร เกษม สร้อยทอง<br />
                  กอบบุญ สร้อยทอง
                </p>
              </div>
            </motion.div>

            {/* Groom - Right Side */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className={`${greatVibes.className} text-6xl md:text-9xl text-gray-800 leading-tight`}>
                Best
              </h2>
              <div className="space-y-1 px-2">
                <p className={`${playfair.className} text-xl md:text-3xl font-bold text-gray-800`}>
                  อิติ อรุณขจรศักดิ์
                </p>
                <p className={`${montserrat.className} text-sm text-gray-400`}>(เบส)</p>
              </div>
              <div className="pt-4 border-t border-rose-100/50 mx-4">
                <p className={`${montserrat.className} text-[10px] text-gray-400 uppercase mb-2 tracking-widest`}>บุตรของ</p>
                <p className={`${playfair.className} text-xs md:text-base text-gray-700 leading-relaxed`}>
                  คุณพ่อ อรุณขจรศักดิ์<br />
                  คุณแม่ อรุณขจรศักดิ์
                </p>
              </div>
            </motion.div>
          </div>

          {/* Center Heart Icon */}
          <div className="absolute left-1/2 top-14 -translate-x-1/2 bg-white/80 p-2 rounded-full hidden md:block">
            <Heart className="w-6 h-6 text-rose-300 fill-rose-300" />
          </div>
        </div>

        {/* Date & Time Section (Full Width) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/30 rounded-3xl p-8 mb-12 border border-white/60 shadow-sm"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 w-full justify-center">
               <div className="h-[1px] flex-1 bg-rose-200/50 hidden md:block" />
               <div className="flex items-center gap-3">
                 <CalendarDays className="w-6 h-6 text-rose-400" />
                 <p className={`${playfair.className} text-3xl md:text-5xl font-bold text-gray-800`}>
                   16 May 2026
                 </p>
               </div>
               <div className="h-[1px] flex-1 bg-rose-200/50 hidden md:block" />
            </div>
            <p className={`${montserrat.className} text-xl md:text-2xl text-rose-500 font-medium tracking-[0.2em]`}>
              09:09 AM
            </p>
          </div>
        </motion.div>

        {/* Location & QR Code Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="text-center md:text-right space-y-3">
            <div className="flex items-center justify-center md:justify-end gap-2 text-gray-800">
              <MapPin className="w-5 h-5 text-rose-400" />
              <p className={`${playfair.className} text-2xl md:text-3xl font-semibold`}>Canale House</p>
            </div>
            <p className={`${montserrat.className} text-gray-500 text-sm md:text-base`}>
              Bangkok, Thailand
            </p>
            <p className={`${playfair.className} pt-4 text-gray-600 italic leading-relaxed text-sm md:text-base`}>
              "ด้วยความยินดีอย่างยิ่ง ขอเรียนเชิญท่านร่วมเป็นเกียรติ<br/>ในพิธีมงคลสมรสของเรา"
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
             <div className="p-2 bg-white rounded-2xl shadow-lg border border-rose-50">
               <img src={qrCodeUrl} alt="Location QR" className="w-32 h-32 md:w-36 md:h-36" />
             </div>
             <p className={`${montserrat.className} text-[10px] text-gray-400 tracking-widest uppercase`}>
               Scan for Location
             </p>
          </div>
        </div>

        {/* Schedule Summary */}
        <div className="pt-10 border-t border-rose-100">
          <p className={`${playfair.className} text-xl mb-6 font-semibold text-gray-800`}>ลำดับพิธีการ</p>
          <div className="inline-flex flex-col md:flex-row gap-4 md:gap-12 text-sm md:text-base">
            <div className="flex items-center gap-3">
              <span className="text-rose-400 font-bold">09.00</span>
              <span className="text-gray-600">พิธีหมั้น</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-rose-400 font-bold">10.00</span>
              <span className="text-gray-600">พิธียกน้ำชา</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-rose-400 font-bold">11.00</span>
              <span className="text-gray-600">รับประทานอาหาร</span>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
