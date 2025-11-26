"use client";
import { useState } from "react";
import Image from "next/image";

export default function FarmasiPage() {
  // Data tenaga farmasi
  const farmasiTeam = [
    {
      nama: "Apt. Adrena Natalia, S.Farm",
      fotoProfil: "/image/apoteker1.jpeg",
      examPhoto: "/image/farmasi1.jpeg",
      deskripsi:
        "Apoteker penanggung jawab yang berpengalaman dalam pelayanan obat, konseling penggunaan obat yang benar, serta pengawasan mutu obat.",
    },
    {
      nama: "Idham Kholid Nahri, SKM",
      fotoProfil: "/image/apoteker2.jpeg",
      examPhoto: "/image/exam-dimas.jpg",
      deskripsi:
        "Asisten apoteker terlatih dalam penyiapan obat, pelayanan resep, dan membantu pasien memahami dosis obat.",
    },
    {
      nama: "Salsa Sabrina Rahwan",
      fotoProfil: "/image/apoteker3.jpeg",
      examPhoto: "/image/farmasi2.jpeg",
      deskripsi:
        "Asisten apoteker terlatih dalam penyiapan obat, pelayanan resep, dan membantu pasien memahami dosis obat.",
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
        Pelayanan Farmasi
      </h1>

      {/* Intro */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <p className="text-gray-700 leading-relaxed">
          Pelayanan Farmasi bertujuan memastikan pasien menerima obat yang aman,
          tepat dosis, dan sesuai kebutuhan medis. Layanan meliputi pelayanan
          resep, konseling obat, manajemen obat, serta edukasi penggunaan obat
          yang benar. Tim farmasi kami terdiri dari apoteker dan asisten
          apoteker berpengalaman untuk mendukung terapi obat secara optimal.
        </p>
      </div>

      {/* Tenaga Farmasi */}
      <h2 className="text-2xl font-bold mb-6 text-[#1e2a78]">
        Tenaga Farmasi
      </h2>

      {/* Grid 3 kolom + card tinggi sama */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
        {farmasiTeam.map((medis, idx) => (
          <article
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition h-full flex flex-col"
          >
            {/* Foto profil */}
            <div className="relative w-full h-56">
              <Image
                src={medis.fotoProfil}
                alt={medis.nama}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Isi card */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg text-[#0b2a66]">
                {medis.nama}
              </h3>

              <p className="text-sm text-gray-600 mt-1 flex-grow">
                {medis.deskripsi}
              </p>

              <button
                onClick={() =>
                  openModal(
                    medis.examPhoto,
                    `${medis.nama} — Foto Pelayanan Farmasi`
                  )
                }
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1e2a78] text-white text-sm hover:bg-[#16305a] transition"
              >
                Lihat Foto Pelayanan
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
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
