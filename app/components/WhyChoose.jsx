"use client";
import { FaUserMd, FaClock, FaUserFriends, FaMapMarkedAlt } from "react-icons/fa";

export default function WhyChoose() {
  return (
    <section className="w-full bg-gradient-to-r from-[#1e2a78] to-[#243b95] text-white py-3 px-4">
      
      {/* Title */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">mengapa memilih klinik kami?</h2>
        <p className="text-xs md:text-sm opacity-90">
          Klinik Pratama AL Mughni berkomitmen memberikan layanan kesehatan terbaik dengan
          tenaga medis profesional, fasilitas modern, dan pendekatan yang peduli untuk
          memenuhi kebutuhan kesehatan Anda.
        </p>
      </div>

      {/* 4 Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 max-w-5xl mx-auto">

        {/* Item */}
        <div className="text-center px-2">
          <div className="w-14 h-14 mx-auto mb-3 border-2 border-white rounded-full flex items-center justify-center text-2xl">
            <FaUserMd />
          </div>
          <h3 className="font-bold text-base mb-1">Layanan Komprehensif</h3>
          <p className="text-xs opacity-80">
            Layanan kesehatan lengkap dari pemeriksaan rutin hingga tindakan khusus.
          </p>
        </div>

        <div className="text-center px-2">
          <div className="w-14 h-14 mx-auto mb-3 border-2 border-white rounded-full flex items-center justify-center text-2xl">
            <FaClock />
          </div>
          <h3 className="font-bold text-base mb-1">Layanan Darurat 24/7</h3>
          <p className="text-xs opacity-80">
            Layanan darurat tersedia kapan saja untuk Anda.
          </p>
        </div>

        <div className="text-center px-2">
          <div className="w-14 h-14 mx-auto mb-3 border-2 border-white rounded-full flex items-center justify-center text-2xl">
            <FaUserFriends />
          </div>
          <h3 className="font-bold text-base mb-1">Tenaga Medis Profesional</h3>
          <p className="text-xs opacity-80">
            Tim medis berpengalaman, ramah, dan profesional.
          </p>
        </div>

        <div className="text-center px-2">
          <div className="w-14 h-14 mx-auto mb-3 border-2 border-white rounded-full flex items-center justify-center text-2xl">
            <FaMapMarkedAlt />
          </div>
          <h3 className="font-bold text-base mb-1">Lokasi Strategis</h3>
          <p className="text-xs opacity-80">
            Lokasi klinik mudah diakses kapan saja.
          </p>
        </div>

      </div>

      {/* Button */}
      <div className="mt-8 text-center">
        <button className="btn bg-white text-[#1e2a78] font-semibold px-6 py-2 text-sm">
          Pelajari Lebih Lanjut
        </button>
      </div>

    </section>
  );
}
