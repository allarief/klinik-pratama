import React from "react";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo / Klinik */}
        <div>
          <h2 className="text-3xl font-bold text-buttercup-300">Klinik Al-Mughni</h2>
          <p className="text-gray-200 mt-3 leading-relaxed">
            Memberikan pelayanan kesehatan terbaik, aman, dan profesional
            untuk keluarga Anda.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-buttercup-300">
            Navigasi
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="text-gray-200 hover:text-white hover:underline underline-offset-4 transition"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="/tentang-kami"
                className="text-gray-200 hover:text-white hover:underline underline-offset-4 transition"
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                href="/fasilitas"
                className="text-gray-200 hover:text-white hover:underline underline-offset-4 transition"
              >
                Fasilitas
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak & Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-buttercup-300">
            Kontak & Media Sosial
          </h3>

          <p className="text-gray-200">Email: info@klinikalmughni.com</p>
          <p className="text-gray-200 mt-1">Telp: 08156012251</p>

          <div className="flex space-x-4 mt-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/almughnitsm?igsh=MThrOGFidnB4Y2twMw=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition shadow 
                         ring-2 ring-white/10 hover:ring-white/30 text-pink-400 hover:text-pink-300"
            >
              <FaInstagram size={22} />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@klinik.almughni?_r=1&_t=ZS-91uFnhQjZOX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition shadow 
                        ring-2 ring-white/10 hover:ring-white/30 text-gray-200 hover:text-white"
            >
              <FaTiktok size={22} />
            </a>

          </div>
        </div>
      </div>

      {/* Hak Cipta */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Klinik Al-Mughni — Semua Hak Cipta Dilindungi.
      </div>
    </footer>
  );
};

export default Footer;
