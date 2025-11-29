'use client';

import React, { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

const TentangKami = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Tentang Kami</h1>

      {/* CARD OWNER */}
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">

          {/* FOTO OWNER */}
          <Image
            src="/image/owner.jpeg"
            alt="Foto Owner"
            width={260}
            height={260}
            className="rounded-full object-cover shadow-md"
          />

          {/* NAMA OWNER */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-semibold">H. Cece Nurdin, S.Kep, Ners, MM</p>
            <p className="text-2xl font-semibold">Bdn. Hj. Iis Sadariah, STr.Keb</p>

            <p className="mt-2 text-gray-600">
              H. Cece Nurdin dan Bdn. Hj. Iis Sadariah mendirikan Klinik Al-Mughni
              dengan tujuan memberikan pelayanan kesehatan terbaik bagi masyarakat.
            </p>
          </div>
        </div>

        {/* GARIS PEMBATAS */}
        <div className="my-6 border-t"></div>

        {/* === DETAIL DATA OWNER === */}
        <div className="space-y-3">

          {/* BIODATA */}
          <div className="border rounded-xl p-4 bg-gray-50">
            <button
              className="w-full text-left font-semibold text-lg"
              onClick={() => toggleSection("biodata")}
            >
              Biodata Singkat
            </button>

            {openSection === "biodata" && (
              <div className="mt-3 text-gray-700">
                <p>Nama: Bdn. Hj Iis Sadariah, STr.Keb</p>
                <p>Profesi: Bidan</p>
                <p>Posisi: Owner Klinik Al-Mughni</p>
              </div>
            )}
          </div>

          {/* PENDIDIKAN */}
          <div className="border rounded-xl p-4 bg-gray-50">
            <button
              className="w-full text-left font-semibold text-lg"
              onClick={() => toggleSection("pendidikan")}
            >
              Latar Belakang Pendidikan
            </button>

            {openSection === "pendidikan" && (
              <div className="mt-3 text-gray-700 space-y-1">
                <p>• D4 Kebidanan – Poltekkes Kemenkes Tasikmalaya – 2018</p>
                <p>• S1 Kebidanan & Profesi Bidan – Poltekkes Kemenkes Tasikmalaya – 2023</p>

                <p className="font-semibold mt-2">Pelatihan & Workshop:</p>
                <p>• Seminar Inisiasi Menyusui Dini – 2007</p>
                <p>• Pelatihan Asuhan Persalinan Normal (APN) – 2007</p>
                <p>• Manajemen KIA – 2011</p>
                <p>• Contraceptive Technology Update – 2011</p>
                <p>• Pelatihan KIP/K – 2012</p>
                <p>• Manajemen Asfiksia & BBLR – 2013</p>
                <p>• Simposia Happy Tummy – 2013</p>
                <p>• Asuhan Kebidanan 1000 HPK – 2016</p>
                <p>• Midwifery Update – 2016</p>
                <p>• Basic Obstetric & Neonatal Life Support – 2017</p>
                <p>• Baby, Kids, Mom Spa & Treatment – 2022 & 2023</p>
                <p>• Basic Clinical Hypnosis & Hypno-Birthing – 2023</p>
                <p>• Tersertifikasi Bidan Delima sejak 2022</p>
              </div>
            )}
          </div>

          {/* PENGALAMAN */}
          <div className="border rounded-xl p-4 bg-gray-50">
            <button
              className="w-full text-left font-semibold text-lg"
              onClick={() => toggleSection("pengalaman")}
            >
              Pengalaman Kerja
            </button>

            {openSection === "pengalaman" && (
              <div className="mt-3 text-gray-700 space-y-1">
                <p>• Bidan Praktik Mandiri sejak 1992</p>
                <p>• ASN Tenaga Kesehatan Puskesmas sejak 1992</p>
                <p>• Pendampingan ibu hamil (ANC, persalinan, nifas)</p>
                <p>• Pelayanan bayi & balita: imunisasi, tumbuh kembang, konseling</p>
              </div>
            )}
          </div>

          {/* MOTIVASI */}
          <div className="border rounded-xl p-4 bg-gray-50">
            <button
              className="w-full text-left font-semibold text-lg"
              onClick={() => toggleSection("motivasi")}
            >
              Motivasi & Filosofi Pelayanan
            </button>

            {openSection === "motivasi" && (
              <div className="mt-3 text-gray-700">
                “Memberikan pelayanan kesehatan yang ramah, aman, dan manusiawi
                merupakan prinsip utama saya. Saya percaya setiap ibu dan anak
                berhak mendapatkan asuhan profesional yang penuh empati.”
              </div>
            )}
          </div>

          {/* KEAHLIAN */}
          <div className="border rounded-xl p-4 bg-gray-50">
            <button
              className="w-full text-left font-semibold text-lg"
              onClick={() => toggleSection("keahlian")}
            >
              Keahlian & Kompetensi
            </button>

            {openSection === "keahlian" && (
              <div className="mt-3 text-gray-700 space-y-1">
                <p>• Asuhan Kehamilan (ANC)</p>
                <p>• Asuhan Persalinan Normal (APN)</p>
                <p>• Manajemen Nyeri Persalinan</p>
                <p>• Imunisasi lengkap bayi & anak</p>
                <p>• Konseling KB & reproduksi</p>
                <p>• Penanganan gawat darurat obstetri–neonatal</p>
                <p>• Pelayanan kesehatan remaja</p>
                <p>• Edukasi persiapan persalinan & perawatan bayi</p>
                <p>• Baby, Kids, Mom Spa & Treatment</p>
              </div>
            )}
          </div>

          {/* PROFIL KLINIK */}
          <div className="border rounded-xl p-4 bg-gray-50">
            <button
              className="w-full text-left font-semibold text-lg"
              onClick={() => toggleSection("klinik")}
            >
              Profil Klinik Al-Mughni
            </button>

            {openSection === "klinik" && (
              <div className="mt-3 text-gray-700 space-y-1">
                <p className="font-semibold">Jenis Pelayanan:</p>
                <p>• Praktek Dokter Umum</p>
                <p>• Pelayanan USG</p>
                <p>• Pelayanan EKG</p>
                <p>• Tindakan Gawat Darurat</p>
                <p>• Bedah Minor</p>
                <p>• Pemeriksaan Kehamilan</p>
                <p>• Persalinan Normal</p>
                <p>• Imunisasi</p>
                <p>• KB</p>
                <p>• Perawatan Ibu & Bayi</p>
                <p>• Tumbuh Kembang</p>
                <p>• Foto Shoot Bayi</p>

                <p className="font-semibold mt-2">Visi:</p>
                <p>“Mewujudkan SDM berkualitas untuk menunjang pembangunan nasional.”</p>

                <p className="font-semibold mt-2">Misi:</p>
                <p>• Pelayanan kesehatan prima sesuai standar medis</p>
                <p>• Memberikan solusi dalam masalah kesehatan</p>
                <p>• Meringankan pembiayaan pemeliharaan kesehatan</p>
              </div>
            )}
          </div>
        </div>

        {/* SOSIAL MEDIA */}
        <div className="mt-10 text-center">
          <p className="text-lg font-semibold mb-3">Follow Us:</p>
          <div className="flex justify-center gap-6 text-3xl">
            <a
              href="https://www.instagram.com/akunreel/"
              target="_blank"
              className="text-pink-500 hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@akunreel/"
              target="_blank"
              className="text-black hover:scale-110 transition"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.facebook.com/akunfb/"
              target="_blank"
              className="text-blue-600 hover:scale-110 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* GOOGLE MAP */}
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold mb-4">Kunjungi Kami:</p>

          <div className="w-full flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63318.22920429192!2d108.1736123948036!3d-7.310084795682169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f51915d7c1e3b%3A0x18c41c28154a5cc0!2sKlinik%20Al-Mughni!5e0!3m2!1sid!2sid!4v1763809907781!5m2!1sid!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-md max-w-4xl"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TentangKami;
