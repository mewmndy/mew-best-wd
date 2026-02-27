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
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    locationUrl
  )}`;

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8 md:p-12"
      style={{
        backgroundImage: `
          radial-gradient(at 15% 20%, rgba(255,220,230,0.55) 0px, transparent 45%),
          radial-gradient(at 85% 15%, rgba(220,230,255,0.55) 0px, transparent 45%),
          radial-gradient(at 25% 75%, rgba(255,210,225,0.55) 0px, transparent 45%),
          radial-gradient(at 75% 80%, rgba(255,235,210,0.55) 0px, transparent 45%),
          linear-gradient(120deg,
            #fff6e8 0%,
            #ffe4ec 25%,
            #e6f2ff 50%,
            #ffe8f3 75%,
            #fff6e8 100%
          )
        `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl"
      >
        <Card className="rounded-3xl shadow-2xl border border-white/40 bg-white/90 backdrop-blur-xl">
          <CardContent className="p-8 md:p-12 text-center space-y-8">

            <p className={`${montserrat.className} text-sm tracking-[0.3em] text-gray-500`}>
              WEDDING INVITATION
            </p>

            {/* Bride & Groom */}
            <div className="grid grid-cols-2 gap-6 md:gap-10 text-center">

              <div className="space-y-3">
                <h2 className={`${greatVibes.className} text-7xl md:text-8xl text-gray-800`}>
                  Mew
                </h2>
                <p className={`${playfair.className} text-2xl md:text-3xl text-gray-700`}>
                  ดร. เมวดี สร้อยทอง
                </p>
                <div className={`${montserrat.className} text-sm md:text-base text-gray-600 leading-relaxed pt-2`}>
                  <p>ศ.ดร เกษม สร้อยทอง</p>
                  <p>กอบบุญ สร้อยทอง</p>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className={`${greatVibes.className} text-7xl md:text-8xl text-gray-800`}>
                  Best
                </h2>
                <p className={`${playfair.className} text-2xl md:text-3xl text-gray-700`}>
                  อิติ อรุณขจรศักดิ์
                </p>
                <div className={`${montserrat.className} text-sm md:text-base text-gray-600 leading-relaxed pt-2`}>
                  <p>อิทธิศักดิ์ นวทวีเศรษฐ์</p>
                  <p>นิตย์รดี อรุณขจรศักดิ์</p>
                </div>
              </div>

            </div>

            <div className="flex justify-center">
              <Heart className="w-6 h-6 text-rose-400" />
            </div>

            {/* Date */}
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3 text-gray-700">
                <CalendarDays className="w-6 h-6" />
                <p className={`${playfair.className} text-3xl md:text-4xl font-semibold`}>
                  Saturday, 16 May 2026
                </p>
              </div>
              <p className={`${montserrat.className} text-xl text-gray-700`}>
                09.09 AM
              </p>
            </div>

            {/* Location */}
            <div className="space-y-3">
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
                  className="w-44 h-44 rounded-2xl shadow-md"
                />
                <p className={`${montserrat.className} text-xs text-gray-500`}>
                  Scan for location
                </p>
              </div>
            </div>

            <div className={`${playfair.className} pt-6 border-t text-gray-600 text-sm md:text-base leading-relaxed`}>
              ด้วยความยินดีอย่างยิ่ง
              ขอเรียนเชิญท่านร่วมเป็นเกียรติในพิธีมงคลสมรส
              และร่วมแสดงความยินดีกับคู่บ่าวสาว
            </div>

            {/* Schedule */}
            <div className="pt-6 space-y-3">
              <p className={`${playfair.className} text-xl md:text-2xl text-gray-800`}>
                ลำดับพิธีการ
              </p>
              <div className={`${montserrat.className} text-gray-700 space-y-1 text-sm md:text-base`}>
                <p>09.00 น.  พิธีหมั้น</p>
                <p>10.00 น.  พิธียกน้ำชา</p>
                <p>11.00 น.  รับประทานอาหาร</p>
              </div>
            </div>

          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
