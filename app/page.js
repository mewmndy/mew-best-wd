"use client";

import React from "react";
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
      className="min-h-screen flex items-center justify-center px-6 py-16"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(255,220,230,0.4), transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(220,230,255,0.4), transparent 40%),
          linear-gradient(135deg,#fff8f2,#fff,#f8fbff)
        `,
      }}
    >
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-md rounded-3xl shadow-md px-10 md:px-20 py-16 space-y-20">

        {/* Header */}
        <div className="text-center space-y-4">
          <p className={`${montserrat.className} tracking-[0.35em] text-xs text-gray-400`}>
            WEDDING INVITATION
          </p>
        </div>

        {/* Couple Section */}
        <div className="relative">

          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent -translate-x-1/2"></div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">

            {/* Bride */}
            <div className="text-center md:text-right space-y-5 md:pr-10">
              <h2 className={`${greatVibes.className} text-6xl text-rose-500`}>
                Mew
              </h2>

              <div className="space-y-2">
                <p className={`${playfair.className} text-2xl text-gray-800`}>
                  ดร. เมวดี สร้อยทอง
                </p>
                <p className={`${montserrat.className} text-sm text-gray-400`}>
                  (มิว)
                </p>
              </div>

              <div className={`${montserrat.className} text-sm text-gray-600 space-y-1 pt-6`}>
                <p className="uppercase tracking-widest text-xs text-gray-400">
                  บุตรของ
                </p>
                <p>
                  ศ.ดร เกษม สร้อยทอง <br />
                  กอบบุญ สร้อยทอง
                </p>
              </div>
            </div>

            {/* Groom */}
            <div className="text-center md:text-left space-y-5 md:pl-10">
              <h2 className={`${greatVibes.className} text-6xl text-indigo-500`}>
                Best
              </h2>

              <div className="space-y-2">
                <p className={`${playfair.className} text-2xl text-gray-800`}>
                  อิติ อรุณขจรศักดิ์
                </p>
                <p className={`${montserrat.className} text-sm text-gray-400`}>
                  (เบส)
                </p>
              </div>

              <div className={`${montserrat.className} text-sm text-gray-600 space-y-1 pt-6`}>
                <p className="uppercase tracking-widest text-xs text-gray-400">
                  บุตรของ
                </p>
                <p>
                  พ่อ อรุณขจรศักดิ์ <br />
                  แม่ อรุณขจรศักดิ์
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Heart Center */}
        <div className="flex justify-center">
          <Heart className="w-6 h-6 text-rose-400" />
        </div>

        {/* Date Section */}
        <div className="text-center space-y-5">
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <CalendarDays className="w-5 h-5" />
            <p className={`${playfair.className} text-3xl md:text-4xl font-medium`}>
              Saturday, 16 May 2026
            </p>
          </div>

          <p className={`${montserrat.className} text-lg text-gray-600 tracking-wide`}>
            09.09 AM
          </p>
        </div>

        {/* Location */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <MapPin className="w-5 h-5" />
            <p className={`${playfair.className} text-xl md:text-2xl`}>
              Canale House
            </p>
          </div>

          <p className={`${montserrat.className} text-gray-500`}>
            Bangkok, Thailand
          </p>

          <div className="flex flex-col items-center gap-3 pt-4">
            <img
              src={qrCodeUrl}
              alt="QR Code Location"
              className="w-36 h-36 rounded-xl border border-gray-200 bg-white"
            />
            <p className="text-xs text-gray-400">
              Scan for location
            </p>
          </div>
        </div>

        {/* Blessing */}
        <div className="border-t pt-12 text-center">
          <p className={`${playfair.className} text-gray-600 leading-relaxed`}>
            ด้วยความยินดีอย่างยิ่ง <br />
            ขอเรียนเชิญท่านร่วมเป็นเกียรติในพิธีมงคลสมรส <br />
            และร่วมแสดงความยินดีกับคู่บ่าวสาว
          </p>
        </div>

        {/* Schedule */}
        <div className="text-center space-y-5">
          <p className={`${playfair.className} text-xl text-gray-800`}>
            ลำดับพิธีการ
          </p>

          <div className={`${montserrat.className} text-gray-600 space-y-1`}>
            <p>09.00 น. พิธีหมั้น</p>
            <p>10.00 น. พิธียกน้ำชา</p>
            <p>11.00 น. รับประทานอาหาร</p>
          </div>
        </div>

      </div>
    </div>
  );
}
