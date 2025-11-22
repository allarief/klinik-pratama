"use client";
import { useState } from "react";
import Image from "next/image";

export default function DokterUmumPage() {
  // data dokter - ganti path foto dengan path di public/ pada project kamu
  const dokterData = [
    {
      nama: "dr. Aisyah Rahmawati",
      fotoProfil: "/dokter/dr-aisyah.jpg",         // contoh: simpan di public/dokter/dr-aisyah.jpg
      examPhoto: "/dokter/exam-aisyah.jpg",       // contoh foto pemeriksaan untuk dr. Aisyah
      deskripsi:
        "Dokter umum berpengalaman lebih dari 10 tahun dalam layanan kesehatan primer. Ramah dan teliti.",
    },
    {
      nama: "dr. Muhammad Fadli",
      fotoProfil: "/dokter/dr-fadli.jpg",
      examPhoto:
        "/dokter/exam-fadli.jpg", // ganti dengan file pemeriksaan dr. Fadli (public/dokter/...)
      deskripsi:
        "Memiliki kompetensi dalam pemeriksaan penyakit umum, tindakan ringan, serta konsultasi keluarga.",
    },
    {
      nama: "dr. Lina Marlina",
      fotoProfil: "/dokter/dr-lina.jpg",
      // NOTE: berikut menggunakan file upload sementara yang ada di environment:
      // /mnt/data/A_webpage_in_Indonesian_language_showcases_general.png
      // Untuk produksi, pindahkan file ini ke public/, mis. /dokter/exam-lina.jpg
      examPhoto: "/A_webpage_in_Indonesian_language_showcases_general.png",
      deskripsi:
        "Berpengalaman menangani berbagai keluhan kesehatan masyarakat dengan pelayanan cepat dan profesional.",
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState("");

  function openModal(photoSrc, caption = "") {
    setSelectedPhoto(photoSrc);
    setSelectedCaption(caption);
    setOpen(true);
    // prevent background scroll
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {dokterData.map((dok, idx) => (
          <article
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-56">
              {/* gunakan next/image jika file ada di /public */}
              <Image
                src={dok.fotoProfil}
                alt={dok.nama}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg text-[#0b2a66]">{dok.nama}</h3>
              <p className="text-sm text-gray-600 mt-1">{dok.deskripsi}</p>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() =>
                    openModal(dok.examPhoto, `${dok.nama} — Foto Pemeriksaan`)
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
              {/* if image path is inside public use Next/Image; if using absolute /mnt/data path,
                  next/image may not accept it — in that case use <img src=...> or move file to public/ */}
              {selectedPhoto && selectedPhoto.startsWith("/mnt/") ? (
                // fallback to regular <img> for local path
                // NOTE: Browsers cannot access Node /mnt paths; this is only temporary for testing in your dev environment.
                <img
                  src={selectedPhoto}
                  alt={selectedCaption}
                  className="w-full h-full object-contain bg-black"
                />
              ) : (
                <Image
                  src={selectedPhoto}
                  alt={selectedCaption}
                  fill
                  className="object-contain"
                />
              )}
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
