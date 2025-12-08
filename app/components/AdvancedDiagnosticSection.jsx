import Image from "next/image";
import Link from "next/link";

export default function AdvancedDiagnosticSection() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-green-50 via-white to-yellow-50 overflow-hidden">

      {/* Dekorasi Background */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-green-200/40 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-yellow-200/40 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <div className="w-full h-full flex justify-center md:justify-start">
          <div className="rounded-3xl shadow-xl overflow-hidden border border-gray-200 bg-white">
            <Image
              src="/image/cardimage.jpeg"
              width={700}
              height={500}
              alt="Advanced Diagnostics"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            Layanan Dokter Umum & Kebidanan
            <span className="block text-green-700">Profesional dan Terpercaya</span>
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            Di Klinik Pratama Al-Mughni, kami berkomitmen memberikan layanan
            kesehatan menyeluruh melalui tenaga medis yang berpengalaman
            dan fasilitas yang modern.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            Pelayanan dokter umum dan kebidanan kami dirancang untuk memenuhi
            kebutuhan Anda mulai dari pemeriksaan rutin, konsultasi kesehatan,
            hingga pendampingan kehamilan dan perawatan ibu & anak secara komprehensif.
          </p>

          {/* BUTTON */}
          <Link
            href="/layanan-kami/dokter-umum"
            className="mt-4 px-8 py-3 bg-green-700 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-green-800 transition-all w-fit flex items-center gap-2"
          >
            Jelajahi Layanan Kami →
          </Link>
        </div>

      </div>
    </section>
  );
}
