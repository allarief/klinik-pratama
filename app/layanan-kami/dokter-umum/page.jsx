"use client";
import { useState } from "react";
import Image from "next/image";

export default function DokterUmumPage() {
  const dokterData = [
    {
      nama: "dr. Annisa Fadhilah Nurdina",
      fotoProfil: "/image/dokter1.jpeg",
      examPhoto: "/image/ruangperiksa.jpeg",
      deskripsi:
        "Dokter umum berpengalaman lebih dari 10 tahun dalam layanan kesehatan primer. Ramah dan teliti.",
    },
    {
      nama: "dr Beta Selinia",
      fotoProfil: "/image/dokter2.jpeg",
      examPhoto: "/image/ruangperiksa2.jpeg",
      deskripsi:
        "Memiliki kompetensi dalam pemeriksaan penyakit umum, tindakan ringan, serta konsultasi keluarga.",
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
        Pelayanan Dokter Umum
      </h1>

      {/* Intro */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <p className="text-gray-700 leading-relaxed">
          Layanan Dokter Umum kami menyediakan pemeriksaan kesehatan dasar,
          konsultasi, tindakan medis ringan, dan penanganan awal berbagai
          keluhan kesehatan. Ruang pemeriksaan bersih dan nyaman.
        </p>
      </div>

      {/* Dokter list */}
      <h2 className="text-2xl font-bold mb-6 text-[#1e2a78]">Dokter Kami</h2>

      {/* Grid — 2 kolom bila datanya 2 */}
      <div
        className={`grid gap-8 ${
          dokterData.length === 2
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 md:grid-cols-3"
        }`}
      >
        {dokterData.map((dok, idx) => (
          <article
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col h-full"
          >
            {/* FOTO PROFIL */}
            <div className="relative w-full aspect-[3/4] bg-gray-200">
              <Image
                src={dok.fotoProfil}
                alt={dok.nama}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* BAGIAN ISI */}
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-semibold text-lg text-[#0b2a66]">
                  {dok.nama}
                </h3>

                {/* Batasi deskripsi supaya tinggi card tidak berubah */}
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {dok.deskripsi}
                </p>
              </div>

              <div className="mt-4">
                <button
                  onClick={() =>
                    openModal(dok.examPhoto, `${dok.nama} — Foto Pemeriksaan`)
                  }
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1e2a78] text-white text-sm hover:bg-[#16305a] transition"
                >
                  Lihat Foto Pemeriksaan
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* MODAL */}
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

            <div className="relative w-full aspect-[4/3] bg-gray-100">
              <Image
                src={selectedPhoto}
                alt={selectedCaption}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-4 border-t">
              <p className="text-sm text-gray-700">{selectedCaption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
