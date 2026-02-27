"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="min-h-screen flex items-center justify-center p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl"
      >
        <Card className="rounded-2xl shadow-2xl border border-white/40 bg-white/90 backdrop-blur-md">
          <CardContent className="p-6 md:p-8 text-center space-y-6">

            <p className={`${montserrat.className} text-base tracking-widest text-gray-500 mb-2`}>
              WEDDING INVITATION
            </p>

            {/* Bride & Groom Section */}
            <div className="flex justify-center">
              <div className="w-full max-w-2xl grid grid-cols-2 gap-4 text-center">

                {/* Bride */}
                <div className="space-y-2">
                  <h2 className={`${greatVibes.className} text-7xl md:text-8xl text-gray-800`}>
                    Mew
                  </h2>
                  <p className={`${playfair.className} text-2xl md:text-3xl text-gray-700`}>
                    ดร. เมวดี สร้อยทอง
                  </p>
                  <p className={`${montserrat.className} text-xs text-gray-400`}>
                    (มิว)
                  </p>
                </div>

                {/* Groom */}
                <div className="space-y-2">
                  <h2 className={`${greatVibes.className} text-7xl md:text-8xl text-gray-800`}>
                    Best
                  </h2>
                  <p className={`${playfair.className} text-2xl md:text-3xl text-gray-700`}>
                    อิติ อรุณขจรศักดิ์
                  </p>
                  <p className={`${montserrat.className} text-xs text-gray-400`}>
                    (เบส)
                  </p>
                </div>

              </div>
            </div>

            <div className="flex justify-center -mt-2">
              <Heart className="w-7 h-7 text-rose-400" />
            </div>

            {/* Date Section */}
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <CalendarDays className="w-6 h-6" />
                <p className={`${playfair.className} text-4xl md:text-5xl font-semibold`}>
                  Saturday, 16 May 2026
                </p>
              </div>
              <p className={`${montserrat.className} text-2xl md:text-3xl text-gray-700`}>
                09.09 AM
              </p>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <MapPin className="w-5 h-5" />
                <p className={`${playfair.className} text-xl md:text-2xl font-medium`}>
                  Canale House
                </p>
              </div>
              <p className={`${montserrat.className} text-gray-600 text-sm md:text-base`}>
                Bangkok, Thailand
              </p>

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

          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
