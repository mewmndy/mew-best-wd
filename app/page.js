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
    <div className="min-h-screen flex items-center justify-center bg-[#faf7f4] px-6 py-16">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-sm px-8 md:px-16 py-14 space-y-16">

        {/* Header */}
        <div className="text-center space-y-3">
          <p className={`${montserrat.className} tracking-[0.3em] text-xs text-gray-400`}>
            WEDDING INVITATION
          </p>
        </div>

        {/* Bride & Groom Section */}
        <div className="relative">

          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200 -translate-x-1/2"></div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 text-center">

            {/* Bride */}
            <div className="space-y-4">
              <h2 className={`${greatVibes.className} text-6xl text-gray-800`}>
                Mew
              </h2>

              <p className={`${playfair.className} text-2xl text-gray-700`}>
                ดร. เมวดี สร้อยทอง
              </p>

              <p className={`${montserrat.className} text-sm text-gray-400`}>
                (มิว)
              </p>

              <div className={`${montserrat.className} text-sm text-gray-600 space-y-1 pt-4`}>
                <p>บุตรของ</p>
                <p>
                  ศ.ดร เกษม สร้อยทอง <br />
                  กอบบุญ สร้อยทอง
                </p>
              </div>
            </div>

            {/* Groom */}
            <div className="space-y-4">
              <h2 className={`${greatVibes.className} text-6xl text-gray-800`}>
                Best
              </h2>

              <p className={`${playfair.className} text-2xl text-gray-700`}>
                อิติ อรุณขจรศักดิ์
              </p>

              <p className={`${montserrat.className} text-sm text-gray-400`}>
                (เบส)
              </p>

              <div className={`${montserrat.className} text-sm text-gray-600 space-y-1 pt-4`}>
                <p>บุตรของ</p>
                <p>
                  พ่อ อรุณขจรศักดิ์ <br />
                  แม่ อรุณขจรศักดิ์
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Heart */}
        <div className="flex justify-center">
          <Heart className="w-6 h-6 text-gray-400" />
        </div>

        {/* Date */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <CalendarDays className="w-5 h-5" />
            <p className={`${playfair.className} text-3xl font-medium`}>
              Saturday, 16 May 2026
            </p>
          </div>

          <p className={`${montserrat.className} text-lg text-gray-600`}>
            09.09 AM
          </p>
        </div>

        {/* Location */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <MapPin className="w-5 h-5" />
            <p className={`${playfair.className} text-xl`}>
              Canale House
            </p>
          </div>

          <p className={`${montserrat.className} text-gray-500`}>
            Bangkok, Thailand
          </p>

          <div className="pt-6 flex flex-col items-center gap-2">
            <img
              src={qrCodeUrl}
              alt="QR Code Location"
              className="w-36 h-36 rounded-xl border border-gray-200"
            />
            <p className="text-xs text-gray-400">
              Scan for location
            </p>
          </div>
        </div>

        {/* Blessing */}
        <div className="text-center space-y-4 border-t pt-10">
          <p className={`${playfair.className} text-gray-600 leading-relaxed`}>
            ด้วยความยินดีอย่างยิ่ง <br />
            ขอเรียนเชิญท่านร่วมเป็นเกียรติในพิธีมงคลสมรส <br />
            และร่วมแสดงความยินดีกับคู่บ่าวสาว
          </p>
        </div>

        {/* Schedule */}
        <div className="text-center space-y-4">
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
