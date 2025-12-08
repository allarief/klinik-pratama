import React from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Ulfah Azizah",
    photo: "/image/testi1.jpeg",
    message:
      "Saya melahirkan di Klinik Al Mughni sangat puas dengan pelayanannya. Bidan ramah, proses persalinan dibantu dengan sabar dan fasilitasnya bersih."
  },
  {
    id: 2,
    name: "Ulwan",
    photo: "/image/testi2.jpeg",
    message:
      "Khitan anak kami berjalan lancar. Penanganan cepat, steril, dan hasilnya rapi. Sangat direkomendasikan!"
  },
  {
    id: 3,
    name: "Sri Maryati",
    photo: "/image/testi3.jpeg",
    message:
      "Mulai dari pendaftaran sampai pemeriksaan, semuanya tertata rapi. Dokter profesional, komunikatif, dan memberikan solusi terbaik."
  },
  {
    id: 4,
    name: "Weni Maryani",
    photo: "/image/testi4.jpeg",
    message:
      "Kliniknya bersih, rapi, dan nyaman. Pelayanan dari bidan sangat memuaskan."
  }
];

const Testimoni = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-green-50 to-green-100/40">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Apa Kata Pasien Kami
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500 
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start space-x-5">
                
                {/* Foto */}
                <div className="relative w-20 h-20">
                  <Image
                    src={testi.photo}
                    alt={testi.name}
                    fill
                    className="rounded-full object-cover shadow-md ring-2 ring-green-200"
                  />
                </div>

                {/* Teks */}
                <div>
                  <h3 className="text-xl font-semibold text-green-900">
                    {testi.name}
                  </h3>
                  <p className="text-gray-700 mt-2 leading-relaxed">
                    {testi.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Testimoni;
