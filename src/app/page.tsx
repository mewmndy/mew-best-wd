"use client";

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
      className={`min-h-screen bg-gradient-to-br from-rose-100 via-white to-rose-50 text-gray-800 ${montserrat.className}`}
    >
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6 relative overflow-hidden">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-96 h-96 bg-rose-200 rounded-full blur-3xl opacity-30"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-6xl md:text-8xl mb-6 text-rose-600 ${greatVibes.className}`}
        >
          Mew & Best
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl max-w-xl text-gray-600"
        >
          ขอเชิญร่วมเป็นเกียรติในงานมงคลสมรสของเรา
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex items-center gap-3 text-rose-500"
        >
          <Heart className="w-6 h-6" />
          <Heart className="w-8 h-8" />
          <Heart className="w-6 h-6" />
        </motion.div>
      </section>

      {/* DETAILS CARD */}
      <section className="max-w-3xl mx-auto px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-xl border border-rose-100 shadow-2xl rounded-[2rem] p-12 text-center space-y-10"
        >
          <div className="space-y-4">
            <div className="flex justify-center items-center gap-3 text-rose-500">
              <CalendarDays size={28} />
              <h2 className={`text-3xl ${playfair.className}`}>วันงาน</h2>
            </div>
            <p className="text-lg text-gray-700">
              วันเสาร์ที่ 20 ธันวาคม 2026
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-center items-center gap-3 text-rose-500">
              <MapPin size={28} />
              <h2 className={`text-3xl ${playfair.className}`}>สถานที่</h2>
            </div>
            <p className="text-lg text-gray-700">
              Grand Ballroom, Bangkok
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
