import Image from "next/image";
import Link from "next/link";

export default function AdvancedDiagnosticSection() {
  return (
    <section className="w-full py-16 px-6 md:px-14 lg:px-24 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div className="w-full h-full">
          <Image
            src="/image/cardimage.jpeg"
            width={700}
            height={500}
            alt="Advanced Diagnostics"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#012970] leading-tight">
            Mengapa Memilih Layanan Dokter Umum dan Kebidanan Kami?
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            Di Klinik Pratama AL Mughni, kami berkomitmen memberikan layanan kesehatan yang menyeluruh melalui pelayanan dokter umum dan kebidanan yang profesional. Kami memahami bahwa setiap pasien memiliki kebutuhan yang berbeda, baik dalam pemeriksaan kesehatan sehari-hari maupun dalam pelayanan ibu dan anak.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            Dengan tenaga medis yang berpengalaman dan fasilitas yang nyaman, kami siap memberikan pemeriksaan, konsultasi, serta tindakan medis dasar yang aman dan tepat. Pelayanan kebidanan kami juga didukung oleh bidan terampil yang memberikan pendampingan menyeluruh mulai dari pemeriksaan kehamilan, edukasi kesehatan ibu dan bayi, hingga penanganan keluhan khusus wanita. Kami memastikan setiap pasien memperoleh perhatian yang ramah, penjelasan yang jelas, serta perawatan yang sesuai dengan kebutuhan kondisi kesehatan Anda.
          </p>

          {/* BUTTON LINK KE HALAMAN LAYANAN */}
          <Link
            href="/layanan-kami/dokter-umum"
            className="mt-4 bg-[#4154F1] hover:bg-[#2c3ccf] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition flex items-center w-fit"
          >
            Jelajahi Layanan Kami →
          </Link>

        </div>
      </div>
    </section>
  );
}
