import React from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Ulfah Azizah",
    photo: "/image/testi1.jpeg", // letakkan foto di public folder
    message: "Saya melahirkan di Klinik Al mughni sangat puas dengan pelayanannya. Bidan ramah, proses persalinan dibantu dengan sabar dan fasilitasnya bersih. Terima kasih telah membantu kelahiran buah hati kami."
  },
  {
    id: 2,
    name: "Ulwan",
    photo: "/image/testi2.jpeg",
    message: "Khitan anak kami berjalan lancar. Penanganan cepat, steril, dan hasilnya rapi. Dokter juga memberikan edukasi perawatan yang jelas. Sangat direkomendasikan!"
  },
  {
    id: 3,
    name: "Sri Maryati,",
    photo: "/image/testi3.jpeg",
    message: "Mulai dari pendaftaran sampai pemeriksaan, semuanya tertata rapi. Dokter profesional, komunikatif, dan memberikan solusi terbaik. Senang sekali menemukan klinik dengan pelayanan sebaik ini."
  },
  {
    id: 4,
    name: "Weni Maryani",
    photo: "/image/testi4.jpeg",
    message: "Kliniknya bersih, rapi, dan nyaman. Pelayanan dari bidan sangat memuaskan."
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
