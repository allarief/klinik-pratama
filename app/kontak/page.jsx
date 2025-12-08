"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function KontakPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const whatsappNumber = "+628156012251"; 
   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Halo, saya ${name} ingin menanyakan: ${message}`
  )}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-green-700 text-white py-16 text-center relative overflow-hidden">
        <div className="relative z-10">
          <FaWhatsapp className="mx-auto text-6xl mb-4 animate-bounce" />
          <h1 className="text-4xl font-bold">Hubungi Kami</h1>
          <p className="mt-2 text-green-200">Kami siap membantu Anda 24/7</p>
        </div>
        {/* Background circles */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500 rounded-full opacity-30"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-green-400 rounded-full opacity-20"></div>
      </div>

      {/* Konten */}
      <div className="max-w-3xl w-full mt-12 px-6 py-10 bg-white rounded-2xl shadow-xl border border-green-200">
        <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center">
          Kirim Pesan ke WhatsApp
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-green-700 font-medium mb-1">Nama</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama Anda"
              className="w-full border border-green-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <div>
            <label className="block text-green-700 font-medium mb-1">Pesan</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis pesan Anda"
              className="w-full border border-green-200 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            ></textarea>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 bg-green-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-800 transition transform hover:scale-105 shadow-lg"
          >
            <FaWhatsapp className="text-xl" />
            Chat via WhatsApp
          </a>
        </form>

        {/* Info Tambahan */}
        <div className="mt-10 text-center text-green-600 space-y-1">
          <p>Atau hubungi langsung:</p>
          <p className="font-semibold mt-2">WA: +62 815-6012-251</p>
          <p className="font-semibold">Email: info@klinikalmughni.com</p>
        </div>
      </div>
    </div>
  );
}
