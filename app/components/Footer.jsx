import React from "react";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Klinik */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-bold">Klinik Al-Mughni</h2>
          <p className="text-gray-400">Memberikan pelayanan kesehatan terbaik untuk keluarga Anda.</p>
        </div>

        {/* Navigasi */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg">Navigasi</h3>
          <a href="/" className="hover:text-blue-400 transition">Beranda</a>
          <a href="/tentang-kami" className="hover:text-blue-400 transition">Tentang Kami</a>
          <a href="/fasilitas" className="hover:text-blue-400 transition">Fasilitas</a>
        </div>

        {/* Kontak & Sosial Media */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg">Kontak & Media Sosial</h3>
          <p>Email: info@klinikalmughni.com</p>
          <p>Telp: +62 812 3456 7890</p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.instagram.com/almughnitsm?igsh=MThrOGFidnB4Y2twMw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@akunreel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-400 text-2xl"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.facebook.com/akunfb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-400 text-2xl"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Hak cipta */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Klinik Al-Mughni. Semua hak cipta dilindungi.
      </div>
    </footer>
  );
};

export default Footer;
