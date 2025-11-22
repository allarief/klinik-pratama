import Image from "next/image";

export default function AdvancedDiagnosticSection() {
  return (
    <section className="w-full py-16 px-6 md:px-14 lg:px-24 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div className="w-full h-full">
          <Image
            src="/pik1.jpg" // ganti sesuai gambar kamu
            width={700}
            height={500}
            alt="Advanced Diagnostics"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#012970] leading-tight">
            Diagnostik medis canggih untuk hasil akurat
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            Di Klinik Pratama AL Mughni, kami memahami pentingnya diagnosis yang tepat
            dalam perawatan kesehatan Anda. Oleh karena itu, kami menawarkan berbagai
            layanan diagnostik medis canggih yang dirancang untuk memberikan hasil
            yang akurat dan dapat diandalkan.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            Dengan peralatan modern dan teknologi terkini, kami mampu melakukan
            berbagai jenis pemeriksaan, mulai dari tes laboratorium hingga
            pencitraan medis seperti X-ray, ultrasound, dan lainnya. Tim ahli
            kami bekerja dengan teliti untuk memastikan setiap diagnosis
            mendukung rencana perawatan yang efektif bagi Anda.
          </p>

          <button className="mt-4 bg-[#4154F1] hover:bg-[#2c3ccf] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition flex items-center w-fit">
            Jelajahi Layanan Kami →
          </button>
        </div>
      </div>
    </section>
  );
}
