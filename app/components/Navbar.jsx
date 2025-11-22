"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">

      {/* LEFT SIDE */}
      <div className="navbar-start">

        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li><Link href="/">Home</Link></li>

            <li>
              <details>
                <summary>Layanan Kami</summary>
                <ul className="p-2">
                  <li><Link href="/layanan-kami/dokter-umum">Pelayanan Dokter Umum</Link></li>
                  <li><Link href="/layanan-kami/usg">Pelayanan USG</Link></li>
                  <li><Link href="/layanan-kami/kebidanan">Pelayanan Kebidanan</Link></li>
                  <li><Link href="/layanan-kami/ekg">Pelayanan EKG</Link></li>
                </ul>
              </details>
            </li>

            <li><Link href="/fasilitas">Fasilitas</Link></li>
            <li><Link href="/tentang-kami">Tentang Kami</Link></li>
          </ul>
        </div>

        {/* LOGO + TEXT */}
        <Link href="/" className="btn btn-ghost normal-case text-xl flex items-center gap-3">
          <img
            src="/logo.jpeg"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          Klinik Pratama Al-Mughni
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>

          <li>
            <details>
              <summary>Layanan Kami</summary>
              <ul className="p-2">
                <li><Link href="/layanan-kami/dokter-umum">Pelayanan Dokter Umum</Link></li>
                <li><Link href="/layanan-kami/usg">Pelayanan USG</Link></li>
                <li><Link href="/layanan-kami/kebidanan">Pelayanan Kebidanan</Link></li>
                <li><Link href="/layanan-kami/ekg">Pelayanan EKG</Link></li>
              </ul>
            </details>
          </li>

          <li><Link href="/fasilitas">Fasilitas</Link></li>
          <li><Link href="/tentang-kami">Tentang Kami</Link></li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
