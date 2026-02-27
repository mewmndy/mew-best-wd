"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Heart } from "lucide-react";
import { Great_Vibes, Playfair_Display, Montserrat } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function WeddingInvitationPage() {
  const locationUrl = "https://maps.app.goo.gl/iN4wMiWQiDUijL6K9";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    locationUrl
  )}`;

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8 md:p-12"
      style={{
        backgroundImage: `
          radial-gradient(at 10% 20%, rgba(30,58,138,0.08), transparent 40%),
          radial-gradient(at 90% 10%, rgba(30,58,138,0.06), transparent 35%),
          linear-gradient(120deg,#fff6e8,#ffe4ec,#e6f2ff,#ffe8f3,#f3ecff,#fff1dc,#ffdce8,#fff6e8)
        `,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-10 text-center space-y-10"
      >
        <p className={`${montserrat.className} text-sm tracking-widest text-gray-500`}>
          WEDDING INVITATION
        </p>

        {/* Bride & Groom Section */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <h2 className={`${greatVibes.className} text-6xl md:text-7xl text-gray-800`}>
              Mew
            </h2>
            <p className={`${playfair.className} text-lg text-gray-600`}>
              ดร. เมวดี สร้อยทอง
            </p>
          </div>

          <div className="space-y-2">
            <h2 className={`${greatVibes.className} text-6xl md:text-7xl text-gray-800`}>
              Best
            </h2>
            <p className={`${playfair.className} text-lg text-gray-600`}>
              อิติ อรุณขจรศักดิ์
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Heart className="w-7 h-7 text-rose-400" />
        </div>

        {/* Date */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <CalendarDays className="w-6 h-6" />
            <p className={`${playfair.className} text-3xl md:text-4xl font-semibold`}>
              Saturday, 16 May 2026
            </p>
          </div>
          <p className={`${montserrat.className} text-lg text-gray-600`}>
            09.09 AM
          </p>
        </div>

        {/* Location */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <MapPin className="w-5 h-5" />
            <p className={`${playfair.className} text-lg font-medium`}>
              Canale House
            </p>
          </div>

          <div className="pt-4 flex flex-col items-center gap-2">
            <img
              src={qrCodeUrl}
              alt="QR Code Location"
              className="w-40 h-40 rounded-xl shadow-md"
            />
            <p className={`${montserrat.className} text-xs text-gray-500`}>
              Scan for location
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
