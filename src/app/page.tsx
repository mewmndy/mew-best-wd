"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Heart } from "lucide-react";
import { Great_Vibes, Playfair_Display, Montserrat } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "600",
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-gradient-to-b from-rose-50 to-white text-gray-800 ${montserrat.className}`}
    >
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-5xl md:text-7xl mb-6 ${greatVibes.className}`}
        >
          Mew & Best
        </motion.h1>

        <p className="text-lg md:text-xl max-w-xl text-gray-600">
          ขอเชิญร่วมเป็นเกียรติในงานมงคลสมรสของเรา
        </p>

        <div className="mt-8 flex items-center gap-3 text-rose-500">
          <Heart className="w-6 h-6" />
          <Heart className="w-8 h-8" />
          <Heart className="w-6 h-6" />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-white shadow-xl rounded-3xl p-10 text-center space-y-6">
          <div className="flex justify-center items-center gap-3 text-rose-500">
            <CalendarDays />
            <h2 className={`text-2xl ${playfair.className}`}>วันงาน</h2>
          </div>
          <p className="text-lg">วันเสาร์ที่ 20 ธันวาคม 2026</p>

          <div className="flex justify-center items-center gap-3 text-rose-500 mt-6">
            <MapPin />
            <h2 className={`text-2xl ${playfair.className}`}>สถานที่</h2>
          </div>
          <p className="text-lg">Grand Ballroom, Bangkok</p>
        </div>
      </section>
    </main>
  );
}
