"use client";
import { useEffect } from "react";
import { FaUserMd, FaClock, FaUserFriends, FaMapMarkedAlt } from "react-icons/fa";

export default function WhyChoose() {
  const items = [
    {
      icon: <FaUserMd />,
      title: "Layanan Komprehensif",
      desc: "Layanan kesehatan lengkap dari pemeriksaan rutin hingga tindakan khusus.",
    },
    {
      icon: <FaClock />,
      title: "Layanan Darurat 24/7",
      desc: "Layanan darurat tersedia kapan saja untuk Anda.",
    },
    {
      icon: <FaUserFriends />,
      title: "Tenaga Medis Profesional",
      desc: "Tim medis berpengalaman, ramah, dan profesional.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Lokasi Strategis",
      desc: "Lokasi klinik mudah diakses kapan saja.",
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up-show");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-green-600 to-green-700 text-white py-14 px-6">

      <div className="max-w-3xl mx-auto text-center fade-up">
        <h2 className="text-3xl font-bold mb-3 capitalize">Mengapa Memilih Klinik Kami?</h2>
        <p className="text-sm md:text-base opacity-90 leading-relaxed">
          Klinik Pratama AL Mughni berkomitmen memberikan layanan kesehatan terbaik.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="text-center px-4 group fade-up"
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-3xl
              rounded-full border border-white/60 shadow-lg 
              transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10">
              {item.icon}
            </div>

            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-xs md:text-sm opacity-80 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
