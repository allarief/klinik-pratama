"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => setOpenDropdown(!openDropdown);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
            className="w-12 h-12 rounded-md object-cover"
            alt="Logo Klinik"
          />
          <span className="text-xl font-semibold text-green-700">
            Klinik Pratama Al-Mughni
          </span>
        </Link>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="lg:hidden">
          <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium">
          <li><Link href="/" className="hover:text-green-700">Home</Link></li>

          {/* Dropdown Klik */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-green-700 flex items-center gap-1"
            >
              Layanan Kami
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${openDropdown ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openDropdown && (
              <ul className="absolute bg-white shadow-lg rounded-lg p-3 mt-2 w-56 border border-gray-100">
                <li>
                  <Link
                    href="/layanan-kami/dokter-umum"
                    className="block px-3 py-2 hover:bg-green-50"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Pelayanan Dokter Umum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/layanan-kami/kebidanan"
                    className="block px-3 py-2 hover:bg-green-50"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Pelayanan Kebidanan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/layanan-kami/ugd"
                    className="block px-3 py-2 hover:bg-green-50"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Pelayanan Tindakan Gawat Darurat
                  </Link>
                </li>
                <li>
                  <Link
                    href="/layanan-kami/farmasi"
                    className="block px-3 py-2 hover:bg-green-50"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Pelayanan Farmasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/layanan-kami/usg"
                    className="block px-3 py-2 hover:bg-green-50"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Pelayanan USG
                  </Link>
                </li>
                <li>
                  <Link
                    href="/layanan-kami/ekg"
                    className="block px-3 py-2 hover:bg-green-50"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Pelayanan EKG
                  </Link>
                </li>
                <li>
                  <Link
                    href="/layanan-kami/khitan"
                    className="block px-3 py-2 hover:bg-green-50"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Pelayanan Bedah Minor & Khitan
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li><Link href="/fasilitas" className="hover:text-green-700">Fasilitas</Link></li>
          <li><Link href="/sarana" className="hover:text-green-700">Sarana</Link></li>
          <li><Link href="/tentang-kami" className="hover:text-green-700">Tentang Kami</Link></li>
        </ul>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/kontak"
            className="px-5 py-2.5 bg-green-700 text-white rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition shadow-sm"
          >
            Hubungi Kami
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white shadow-md border-t">
          <ul className="px-6 pt-3 pb-6 space-y-4 font-medium">
            <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>

            <li>
              <details className="cursor-pointer">
                <summary className="text-gray-800">Layanan Kami</summary>
                <ul className="mt-2 pl-5 space-y-2">
                  <li><Link href="/layanan-kami/dokter-umum">Pelayanan Dokter Umum</Link></li>
                  <li><Link href="/layanan-kami/kebidanan">Pelayanan Kebidanan</Link></li>
                  <li><Link href="/layanan-kami/ugd">Pelayanan UGD 24 Jam</Link></li>
                  <li><Link href="/layanan-kami/farmasi">Pelayanan Farmasi</Link></li>
                </ul>
              </details>
            </li>

            <li><Link href="/fasilitas" onClick={() => setOpen(false)}>Fasilitas</Link></li>
            <li><Link href="/sarana" onClick={() => setOpen(false)}>Sarana</Link></li>
            <li><Link href="/tentang-kami" onClick={() => setOpen(false)}>Tentang Kami</Link></li>

            <li className="pt-2">
              <Link
                href="/kontak"
                className="font-semibold text-green-700"
                onClick={() => setOpen(false)}
              >
                Hubungi Kami →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
