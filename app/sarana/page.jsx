"use client";

import React, { useEffect } from "react";
import Image from "next/image";

export default function SaranaPage() {
  // Fix fade-in observer
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "animate-fadeIn");
          }
        });
      },
      { rootMargin: "0px 0px -20% 0px" } // memastikan semua card terdeteksi
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  const sarana = [
    {
      name: "Sarana Keselamatan pengunjung dan Petugas (Handrail tangga)",
      image: "/image/sar1.jpeg",
      desc: "Handrail tangga untuk keselamatan pengunjung dan petugas klinik.",
    },
    {
      name: "Sarana Keselamatan pengunjung dan Petugas",
      image: "/image/sar2.jpeg",
      desc: "Kalung resiko jatuh dan kursi roda disediakan untuk lansia dan penyandang disabilitas demi keselamatan mereka.",
    },
    {
      name: "Sarana Keselamatan pengunjung dan Petugas (Handrail di toilet)",
      image: "/image/sar3.jpeg",
      desc: "Handrail di toilet untuk mendukung keselamatan pengunjung dan petugas klinik.",
    },
    {
      name: "Sarana Keselamatan pengunjung dan Petugas (APAR = Alat Pemadam Api Ringan)",
      image: "/image/sar4.jpeg",
      desc: "APAR disediakan untuk mengantisipasi kebakaran dan menjaga keselamatan pengunjung serta petugas klinik.",
    },
    {
      name: "Sarana Keselamatan pengunjung dan Petugas (Penanda Ketinggian Lantai)",
      image: "/image/sar5.jpeg",
      desc: "Penanda ketinggian lantai untuk mendukung keselamatan pengunjung dan petugas klinik.",
    },
    {
      name: "Sarana cuci tangan bagi pengunjung dan petugas klinik",
      image: "/image/sar6.jpeg",
      desc: "Fasilitas cuci tangan disediakan untuk menjaga kebersihan dan kesehatan pengunjung serta petugas klinik.",
    },
  ];

  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Judul */}
        <h1 className="text-3xl font-bold text-center text-green-700 fade-in opacity-0">
          Sarana Klinik
        </h1>

        {/* Kalimat pendukung */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mt-3 mb-12 fade-in opacity-0">
          Berbagai sarana keselamatan dan kenyamanan kami sediakan untuk
          mendukung pelayanan kesehatan yang aman, nyaman, dan berkualitas.
        </p>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {sarana.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-green-300 p-5 fade-in opacity-0 transition-all"
            >
              <Image
  src={item.image}
  alt={item.name}
  width={600}
  height={400}
  className="rounded-xl w-full aspect-[4/3] object-contain bg-gray-100"
/>


              <h2 className="text-xl font-semibold text-green-700 mt-4">
                {item.name}
              </h2>

              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
