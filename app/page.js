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
    <div
      className="min-h-screen flex items-center justify-center p-8 md:p-12"
      style={{
        backgroundImage: `
          radial-gradient(at 10% 20%, rgba(30,58,138,0.08) 0px, transparent 40%),
          radial-gradient(at 90% 10%, rgba(30,58,138,0.06) 0px, transparent 35%),
          radial-gradient(at 15% 25%, rgba(255,220,230,0.55) 0px, transparent 45%),
          radial-gradient(at 85% 15%, rgba(255,235,210,0.55) 0px, transparent 45%),
          radial-gradient(at 25% 75%, rgba(220,230,255,0.55) 0px, transparent 45%),
          radial-gradient(at 75% 80%, rgba(255,210,225,0.55) 0px, transparent 45%),
          radial-gradient(at 50% 50%, rgba(255,240,220,0.45) 0px, transparent 60%),
          linear-gradient(120deg,
            #fff6e8 0%,
            #ffe4ec 15%,
            #e6f2ff 30%,
            #ffe8f3 45%,
            #f3ecff 60%,
            #fff1dc 75%,
            #ffdce8 90%,
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
        <Card className="rounded-2xl shadow-2xl border-0 bg-white/90 backdrop-blur-md">
          <CardContent className="p-6 md:p-10 text-center space-y-10">

            <p className={`${montserrat.className} text-sm tracking-widest text-gray-500`}>
              WEDDING INVITATION
            </p>

            {/* Bride & Groom Section */
            <div className="flex justify-center">
              <div className="w-full max-w-2xl grid grid-cols-2 gap-4 text-center">
                {/* Bride */}
                <div className="space-y-2">
                  <h2 className={`${greatVibes.className} text-6xl md:text-7xl text-gray-800`}>
                    Mew
                  </h2>
                  <p className={`${playfair.className} text-lg text-gray-600`}>
                    ดร. เมวดี สร้อยทอง
                  </p>
                  <p className={`${montserrat.className} text-xs text-gray-400`}>
                    (มิว)
                  </p>
                  <p className={`${montserrat.className} text-xs text-gray-400 pt-2`}>
                    บุตรของ
                  </p>
                  <p className={`${montserrat.className} text-xs md:text-sm text-gray-600 leading-relaxed`}>
                    ศ.ดร เกษม สร้อยทอง<br />
                    กอบบุญ สร้อยทอง
                  </p>
                </div>

                {/* Groom */}
                <div className="space-y-2">
                  <h2 className={`${greatVibes.className} text-6xl md:text-7xl text-gray-800`}>
                    Best
                  </h2>
                  <p className={`${playfair.className} text-lg text-gray-600`}>
                    อิติ อรุณขจรศักดิ์
                  </p>
                  <p className={`${montserrat.className} text-xs text-gray-400`}>
                    (เบส)
                  </p>
                  <p className={`${montserrat.className} text-xs text-gray-400 pt-2`}>
                    บุตรของ
                  </p>
                  <p className={`${montserrat.className} text-xs md:text-sm text-gray-600 leading-relaxed`}>
                    พ่อ อรุณขจรศักดิ์<br />
                    แม่ อรุณขจรศักดิ์
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Heart className="w-7 h-7 text-rose-400" />
            </div>

            {/* Date Section */}
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
                <p className={`${playfair.className} text-lg md:text-xl font-medium`}>
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
