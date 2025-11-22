"use client";
import { useState } from "react";
import Image from "next/image";

export default function UsgPage() {
  // Data dokter SpOG — silakan ganti nama & foto nanti
  const dokterSpog = [
    {
      nama: "dr. Siti Harmilah, Sp.OG",
      fotoProfil: "/usg/dr-siti.jpg",          
      examPhoto: "/usg/exam-siti.jpg",
      deskripsi:
        "Dokter spesialis kandungan yang berpengalaman dalam pemeriksaan USG kehamilan dan diagnosis prenatal.",
    },
    {
      nama: "dr. Andi Saputra, Sp.OG",
      fotoProfil: "/usg/dr-andi.jpg",
      examPhoto: "/usg/exam-andi.jpg",
      deskripsi:
        "Menguasai pemeriksaan USG 2D/4D serta penanganan awal masalah kesehatan reproduksi.",
    },
    {
      nama: "dr. Wulan Kartika, Sp.OG",
      fotoProfil: "/usg/dr-wulan.jpg",
      examPhoto: "/usg/exam-wulan.jpg",
      deskripsi:
        "Spesialis kandungan dengan pelayanan ramah dan teliti, berfokus pada kenyamanan ibu dan janin.",
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState("");

  function openModal(photoSrc, caption = "") {
    setSelectedPhoto(photoSrc);
    setSelectedCaption(caption);
    setOpen(true);
    if (typeof window !== "undefined") document.body.style.overflow = "hidden";
  }
  function closeModal() {
    setOpen(false);
    setSelectedPhoto(null);
    setSelectedCaption("");
    if (typeof window !== "undefined") document.body.style.overflow = "";
  }

  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#1e2a78]">
        Pelayanan USG
      </h1>

      {/* Intro */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <p className="text-gray-700 leading-relaxed">
          Layanan USG (Ultrasonografi) kami menyediakan pemeriksaan kehamilan,
          kesehatan reproduksi, dan evaluasi kondisi organ dalam wanita.
          Pemeriksaan dilakukan oleh Dokter Spesialis Obstetri & Ginekologi
          (SpOG) menggunakan alat modern yang nyaman dan akurat.
        </p>
      </div>

      {/* Dokter list */}
      <h2 className="text-2xl font-bold mb-6 text-[#1e2a78]">
        Dokter Spesialis (SpOG)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {dokterSpog.map((dok, idx) => (
          <article
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-56">
              <Image
                src={dok.fotoProfil}
                alt={dok.nama}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg text-[#0b2a66]">{dok.nama}</h3>
              <p className="text-sm text-gray-600 mt-1">{dok.deskripsi}</p>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() =>
                    openModal(dok.examPhoto, `${dok.nama} — Foto Pemeriksaan USG`)
                  }
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1e2a78] text-white text-sm hover:bg-[#16305a] transition"
                >
                  Lihat Foto Pemeriksaan
                </button>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Buat Janji
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl w-full rounded-xl overflow-hidden bg-white">
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-3 right-3 z-20 bg-white rounded-full p-1 shadow hover:bg-gray-100"
            >
              ✕
            </button>

            <div className="relative w-full h-[60vh] bg-gray-100">
              <Image
                src={selectedPhoto}
                alt={selectedCaption}
                fill
                className="object-contain"
              />
            </div>

            {selectedCaption && (
              <div className="p-4 border-t">
                <p className="text-sm text-gray-700">{selectedCaption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
