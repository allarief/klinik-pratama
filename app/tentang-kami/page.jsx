import React from "react";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

const owners = [
  {
    id: 1,
    name: "Dr. Arief Santoso",
    photo: "/owner1.jpg",
    history: "Dr. Arief mendirikan Klinik Sehat pada tahun 2010 dengan tujuan memberikan pelayanan kesehatan terbaik bagi masyarakat.",
    education: [
      "S1 Kedokteran Universitas Indonesia",
      "Spesialis Penyakit Dalam",
      "Pelatihan Manajemen Klinik di Singapura"
    ]
  },
  {
    id: 2,
    name: "Dr. Siti Rahma",
    photo: "/owner2.jpg",
    history: "Dr. Siti bergabung untuk memperkuat tim medis dan mengembangkan layanan klinik.",
    education: [
      "S1 Kedokteran Universitas Gadjah Mada",
      "Spesialis Anak",
      "Workshop Kesehatan Masyarakat"
    ]
  }
];

const socialLinks = {
  instagram: "https://www.instagram.com/akunreel/",
  tiktok: "https://www.tiktok.com/@akunreel/",
  facebook: "https://www.facebook.com/akunfb/"
};

const TentangKami = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Tentang Kami</h1>

      {owners.map((owner) => (
        <div key={owner.id} className="flex flex-col md:flex-row items-center mb-12 bg-white shadow-md rounded-xl p-6">
          <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
            <Image
              src={owner.photo}
              alt={owner.name}
              width={250}
              height={250}
              className="rounded-full object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-semibold mb-2">{owner.name}</h2>
            <p className="mb-4 text-gray-700">{owner.history}</p>
            <h3 className="text-xl font-semibold mb-2">Riwayat Pendidikan:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {owner.education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Sosial Media Section */}
      <div className="mt-8 text-center">
        <p className="text-lg font-semibold mb-4">Follow us:</p>
        <div className="flex justify-center space-x-6">
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 text-3xl hover:text-pink-400">
            <FaInstagram />
          </a>
          <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="text-black text-3xl hover:text-gray-700">
            <FaTiktok />
          </a>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-3xl hover:text-blue-500">
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-12 text-center">
        <p className="text-lg font-semibold mb-4">Kunjungi kami:</p>
        <div className="w-full flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63318.22920429192!2d108.1736123948036!3d-7.310084795682169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f51915d7c1e3b%3A0x18c41c28154a5cc0!2sKlinik%20Al-Mughni!5e0!3m2!1sen!2sid!4v1763809907781!5m2!1sen!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
