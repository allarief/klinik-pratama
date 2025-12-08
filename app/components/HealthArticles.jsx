import Link from "next/link";
import Image from "next/image";
import { articlesData } from "../data/articlesData";

export default function HealthArticles() {
  return (
    <section className="w-full py-20 px-6 bg-[#f6fff8]">
      
      {/* TITLE */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-700">
          Artikel & Informasi Kesehatan
        </h2>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Temukan informasi terpercaya yang membantu Anda menjaga kesehatan keluarga.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {articlesData.map((art, idx) => (
          <div
            key={idx}
            className="
              bg-white rounded-2xl shadow-md border border-green-100 
              overflow-hidden group hover:shadow-xl hover:-translate-y-1 
              transition-all duration-300
            "
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <Image
                src={art.image}
                width={500}
                height={300}
                alt={art.title}
                className="
                  w-full h-48 object-cover 
                  group-hover:scale-110 transition-all duration-500
                "
              />
            </div>

            {/* TEXT */}
            <div className="p-5">
              <h3 className="font-semibold text-lg text-gray-800 group-hover:text-green-700 transition">
                {art.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                {art.excerpt}
              </p>

              <Link
                href={`/articles/${art.slug}`}
                className="
                  mt-4 inline-block font-semibold text-green-700
                  hover:text-green-800 transition
                "
              >
                Baca Selengkapnya →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
