export default function Home() {
  return (
    <main
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background:
          "linear-gradient(135deg, #7b2ff7, #f107a3, #ff758c)",
      }}
    >
      <div
        className="max-w-4xl w-full rounded-3xl p-10"
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        {/* หัวข้อ */}
        <div className="text-center mb-12">
          <p className="text-white text-xl tracking-widest mb-4">
            Wedding Ceremony
          </p>

          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
            Maywadee & Groom
          </h1>

          <p className="text-white text-lg">
            Saturday, 16 May 2026
          </p>
        </div>

        {/* ===== ส่วน 2 คอลัมน์ ===== */}
        <div className="grid md:grid-cols-2 gap-12 text-center text-white">

          {/* ฝั่งเจ้าสาว */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Maywadee Soytong
            </h2>

            <p className="text-xl">
              อิทธิศักดิ์ นวทวีเศรษฐ์
            </p>
            <p className="text-xl">
              นิตย์รดี อรุณขจรศักดิ
            </p>
          </div>

          {/* ฝั่งเจ้าบ่าว */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Groom Name
            </h2>

            <p className="text-xl">
              Father of Groom
            </p>
            <p className="text-xl">
              Mother of Groom
            </p>
          </div>
        </div>

        {/* ลำดับงาน */}
        <div className="mt-14 text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">
            Order of Ceremony
          </h3>
          <p className="text-lg opacity-90">
            09:00 AM – Engagement Ceremony
          </p>
          <p className="text-lg opacity-90">
            11:00 AM – Wedding Blessing
          </p>
          <p className="text-lg opacity-90">
            06:00 PM – Reception Dinner
          </p>
        </div>
      </div>
    </main>
  );
}
