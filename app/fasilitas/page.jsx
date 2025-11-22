import Link from "next/link";

export default function FasilitasPage() {
  return (
    <section className="px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10 text-[#1e2a78]">
        Fasilitas Kami
      </h1>

      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
        Kami menyediakan berbagai fasilitas yang nyaman dan lengkap untuk
        mendukung pelayanan kesehatan yang optimal.
      </p>

      <div className="space-y-8">
        {/* CARD: RUANG OPERASI */}
        <Link
          href="/fasilitas/ruang-operasi"
          className="flex flex-col md:flex-row bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
        >
          <div className="md:w-1/3 h-56 bg-gray-200 flex items-center justify-center text-gray-500">
            Foto Ruang Operasi
          </div>

          <div className="md:w-2/3 p-6">
            <h2 className="text-2xl font-semibold text-[#1e2a78]">
              Ruang Operasi
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Ruang operasi steril dilengkapi alat modern untuk menjamin
              keamanan dan kenyamanan selama tindakan pembedahan.
            </p>
          </div>
        </Link>

        {/* CARD: RUANG TUNGGU */}
        <Link
          href="/fasilitas/ruang-tunggu"
          className="flex flex-col md:flex-row bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
        >
          <div className="md:w-1/3 h-56 bg-gray-200 flex items-center justify-center text-gray-500">
            Foto Ruang Tunggu
          </div>

          <div className="md:w-2/3 p-6">
            <h2 className="text-2xl font-semibold text-[#1e2a78]">
              Ruang Tunggu
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Area tunggu nyaman, bersih, dan luas agar pasien serta keluarga
              dapat menunggu dengan lebih tenang.
            </p>
          </div>
        </Link>

        {/* CARD: PARKIR + MUSHOLLA */}
        <Link
          href="/fasilitas/parkir-musholla"
          className="flex flex-col md:flex-row bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
        >
          <div className="md:w-1/3 h-56 bg-gray-200 flex items-center justify-center text-gray-500">
            Foto Parkir & Musholla
          </div>

          <div className="md:w-2/3 p-6">
            <h2 className="text-2xl font-semibold text-[#1e2a78]">
              Area Parkir & Musholla
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Tersedia area parkir luas dan musholla bersih untuk menunjang
              kenyamanan pengunjung selama berada di klinik.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
