export default function HeroBanner() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-green-50 via-white to-yellow-50 overflow-hidden">

      {/* Dekorasi Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/40 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-200/40 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* TEXT */}
        <div className="flex-1">
          <p className="text-green-700 font-semibold tracking-wide text-sm md:text-base">
            🌿 Klinik Pratama Al-Mughni
          </p>

          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Pelayanan Kesehatan Terpercaya
            <span className="text-green-700"> untuk Keluarga Anda</span>
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-xl">
            Kami menyediakan layanan kesehatan yang profesional dan ramah
            dengan fasilitas modern untuk mendukung kesehatan Anda
            dan keluarga sepanjang waktu.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <a
              href="/fasilitas"
              className="px-8 py-3 bg-green-700 text-white rounded-full font-semibold shadow hover:bg-green-800 transition"
            >
              Lihat Fasilitas
            </a>

            <a
              href="/layanan-kami/dokter-umum"
              className="px-8 py-3 border border-green-700 text-green-700 rounded-full font-semibold hover:bg-green-50 transition"
            >
              Pelajari Layanan
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-2xl shadow-xl overflow-hidden border border-gray-100 bg-white">
            <img
              src="/image/banner2.jpeg"
              alt="Klinik Image"
              className="w-full max-w-md object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
  