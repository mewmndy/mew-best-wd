import { Great_Vibes, Playfair_Display } from "next/font/google"

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
})

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-100 via-white to-rose-200 flex items-center justify-center px-6 py-20">

      <div className="max-w-6xl w-full text-center space-y-20">

        {/* TOP TITLE */}
        <div className="space-y-6">
          <p className="tracking-[0.4em] text-gray-500 text-sm">
            WE ARE GETTING MARRIED
          </p>

          {/* ชื่อบ่าวสาวใหญ่ ๆ ตรงกลาง */}
          <h1 className={`${greatVibes.className} text-8xl md:text-[120px] leading-none`}>
            Mew & Best
          </h1>
        </div>

        {/* SECTION ข้อมูลครอบครัว */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-14 space-y-14">

          {/* ชื่อจริงบ่าวสาว */}
          <div className="grid grid-cols-2 gap-12 text-center">

            <div>
              <h2 className={`${greatVibes.className} text-7xl`}>
                Mew
              </h2>
              <p className={`${playfair.className} text-3xl font-semibold mt-4`}>
                ดร. เมวดี สร้อยทอง
              </p>
              <p className="text-gray-500 text-lg">(มิว)</p>
            </div>

            <div>
              <h2 className={`${greatVibes.className} text-7xl`}>
                Best
              </h2>
              <p className={`${playfair.className} text-3xl font-semibold mt-4`}>
                อิติ อรุณขจรศักดิ์
              </p>
              <p className="text-gray-500 text-lg">(เบส)</p>
            </div>

          </div>

          {/* พ่อ */}
          <div className="grid grid-cols-2 gap-12 text-2xl text-gray-800">

            <div>
              <p className="text-sm tracking-widest text-gray-400 mb-3">
                FATHER
              </p>
              <p>ศ.ดร เกษม สร้อยทอง</p>
            </div>

            <div>
              <p className="text-sm tracking-widest text-gray-400 mb-3">
                FATHER
              </p>
              <p>อิทธิศักดิ์ นวทวีเศรษฐ์</p>
            </div>

          </div>

          {/* แม่ */}
          <div className="grid grid-cols-2 gap-12 text-2xl text-gray-800">

            <div>
              <p className="text-sm tracking-widest text-gray-400 mb-3">
                MOTHER
              </p>
              <p>กอบบุญ สร้อยทอง</p>
            </div>

            <div>
              <p className="text-sm tracking-widest text-gray-400 mb-3">
                MOTHER
              </p>
              <p>นิตย์รดี อรุณขจรศักดิ์</p>
            </div>

          </div>

        </div>

      </div>
    </main>
  )
}
