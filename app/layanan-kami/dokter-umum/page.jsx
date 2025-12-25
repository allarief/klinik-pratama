"use client";
import { useState } from "react";
import Image from "next/image";

export default function DokterUmumPage() {
  const dokterData = [
    {
      nama: "dr. Annisa Fadhilah Nurdina",
      fotoProfil: "/image/dokter4.jpeg",
      examPhoto: "/image/ruangperiksa.jpeg",
      deskripsi:
        "Dokter umum berpengalaman lebih dari 10 tahun dalam layanan kesehatan primer. Ramah dan teliti.",
    },
    {
      nama: "dr Beta Selinia",
      fotoProfil: "/image/dokter3.jpeg",
      examPhoto: "/image/peldktr1.jpeg",
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
    <section className="px-6 py-16 max-w-6xl mx-auto">
      {/* Judul */}
      <h1 className="text-4xl font-bold text-center mb-4 text-green-700">
        Pelayanan Dokter Umum
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Pemeriksaan menyeluruh, tindakan medis ringan, serta konsultasi kesehatan
        untuk seluruh anggota keluarga. Ditangani oleh dokter berpengalaman
        dengan fasilitas yang nyaman.
      </p>

      {/* List Dokter */}
      <h2 className="text-2xl font-bold mb-8 text-green-700">Dokter Kami</h2>

      <div className="space-y-10">
        {dokterData.map((dok, idx) => (
          <article
            key={idx}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col md:flex-row"
          >
            {/* FOTO PROFIL */}
<div className="relative w-full h-64 md:w-1/3 md:h-auto bg-white flex items-center justify-center">
  <Image
    src={dok.fotoProfil}
    alt={dok.nama}
    fill
    className="object-contain p-4"
  />

  <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow">
    Dokter Umum
  </span>
</div>


            {/* Content */}
            <div className="p-6 md:w-2/3 flex flex-col justify-center">
              <h3 className="font-semibold text-2xl text-green-800">
                {dok.nama}
              </h3>

              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {dok.deskripsi}
              </p>

              <button
                onClick={() =>
                  openModal(dok.examPhoto, `${dok.nama} — Suasana Pemeriksaan`)
                }
                className="mt-5 w-full md:w-fit px-6 py-2.5 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
              >
                Lihat Foto Pemeriksaan
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-white shadow-xl">
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 z-20 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
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
              <p className="text-sm text-gray-800">{selectedCaption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
