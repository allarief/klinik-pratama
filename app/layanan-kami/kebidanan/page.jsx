"use client";
import { useState } from "react";
import Image from "next/image";

export default function KebidananPage() {
  // Data Bidan / Dokter Kebidanan
  const bidanList = [
    {
      nama: "Bidan Rina Putri, A.Md.Keb",
      fotoProfil: "/kebidanan/bidan-rina.jpg",
      examPhoto: "/kebidanan/exam-rina.jpg",
      deskripsi:
        "Bidan berpengalaman dalam pemeriksaan antenatal, edukasi ibu hamil, serta pemantauan tumbuh kembang janin.",
    },
    {
      nama: "Bidan Ayu Lestari, S.Tr.Keb",
      fotoProfil: "/kebidanan/bidan-ayu.jpg",
      examPhoto: "/kebidanan/exam-ayu.jpg",
      deskripsi:
        "Fokus pada perawatan ibu hamil, evaluasi kehamilan, dan penanganan awal komplikasi kehamilan.",
    },
    {
      nama: "Bidan Sari Melati, A.Md.Keb",
      fotoProfil: "/kebidanan/bidan-sari.jpg",
      examPhoto: "/kebidanan/exam-sari.jpg",
      deskripsi:
        "Berpengalaman dalam pemeriksaan masa kehamilan, perawatan pasca melahirkan, dan kesehatan bayi baru lahir.",
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
        Pelayanan Kebidanan
      </h1>

      {/* Intro */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <p className="text-gray-700 leading-relaxed">
          Pelayanan kebidanan kami mendukung kesehatan ibu sebelum, selama, dan
          setelah kehamilan. Pemeriksaan dilakukan oleh tenaga bidan yang
          berpengalaman dalam layanan antenatal, deteksi dini komplikasi
          kehamilan, serta edukasi kesehatan ibu dan bayi.
        </p>
      </div>

      {/* List Bidan */}
      <h2 className="text-2xl font-bold mb-6 text-[#1e2a78]">
        Tenaga Bidan Kami
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {bidanList.map((bidan, idx) => (
          <article
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-56">
              <Image
                src={bidan.fotoProfil}
                alt={bidan.nama}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg text-[#0b2a66]">
                {bidan.nama}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{bidan.deskripsi}</p>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() =>
                    openModal(
                      bidan.examPhoto,
                      `${bidan.nama} — Foto Pemeriksaan Kebidanan`
                    )
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
