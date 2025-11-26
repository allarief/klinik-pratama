import Link from "next/link";
import Image from "next/image";
import { articlesData } from "../data/articlesData";

export default function HealthArticles() {
  return (
    <section className="w-full py-14 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Artikel & Informasi Kesehatan</h2>
        <p className="text-gray-600 mt-2">
          Dapatkan informasi terbaru seputar kesehatan, tips medis, dan layanan klinik kami.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {articlesData.map((art, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
            <img 
              src={art.image}
              alt={art.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="font-semibold text-lg mt-4">{art.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{art.excerpt}</p>

            <Link 
              href={`/articles/${art.slug}`}
              className="mt-4 inline-block text-blue-600 font-medium hover:underline"
            >
              Baca Selengkapnya
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
