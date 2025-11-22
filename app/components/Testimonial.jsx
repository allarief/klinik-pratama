import React from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Pasien A",
    photo: "/pasienA.jpg", // letakkan foto di public folder
    message: "Pelayanan klinik sangat ramah dan profesional. Saya merasa nyaman setiap kali berkunjung."
  },
  {
    id: 2,
    name: "Pasien B",
    photo: "/pasienB.jpg",
    message: "Dokter sangat sabar menjelaskan kondisi saya, hasil pengobatan memuaskan."
  },
  {
    id: 3,
    name: "Pasien C",
    photo: "/pasienC.jpg",
    message: "Fasilitas klinik lengkap dan bersih. Sangat direkomendasikan!"
  },
  {
    id: 4,
    name: "Pasien D",
    photo: "/pasienD.jpg",
    message: "Proses registrasi cepat, dan staf sangat membantu. Pengalaman yang menyenangkan."
  }
];

const Testimoni = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimoni Pasien</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testi) => (
            <div key={testi.id} className="flex bg-white rounded-xl shadow-md p-6 items-center space-x-6">
              <div className="w-24 h-24 relative flex-shrink-0">
                <Image
                  src={testi.photo}
                  alt={testi.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{testi.name}</h3>
                <p className="text-gray-700 mt-2">{testi.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
