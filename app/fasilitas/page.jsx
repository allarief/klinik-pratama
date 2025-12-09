import Image from "next/image";

export default function FasilitasPage() {
  return (
    <section className="px-6 py-10 max-w-5xl mx-auto">
      {/* JUDUL */}
      <h1 className="text-3xl font-bold text-center mb-10 text-[#1e7c3a]">
        Fasilitas Kami
      </h1>

      {/* DESKRIPSI */}
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
        Kami menyediakan berbagai fasilitas yang nyaman dan lengkap untuk
        mendukung pelayanan kesehatan yang optimal.
      </p>

      <div className="space-y-8">
        {/* CARD COMPONENT */}
        {[
          {
            title: "Ruang Menyusui",
            desc: "Ruang menyusui yang nyaman dan privat untuk mendukung ibu dalam memberikan ASI eksklusif kepada bayi.",
            img: "/image/ruangmenyusui.jpeg",
          },
          {
            title: "Ruang Tunggu",
            desc: "Area tunggu nyaman, bersih, dan luas agar pasien serta keluarga dapat menunggu dengan lebih tenang.",
            img: "/image/ruangtunggu.jpeg",
          },
          {
            title: "Musholla",
            desc: "Musholla bersih dan nyaman untuk menunjang kenyamanan pengunjung selama berada di klinik.",
            img: "/image/musholla.jpeg",
          },
          {
            title: "Parkir Luas",
            desc: "Area parkir yang luas dan aman untuk kenyamanan pengunjung klinik.",
            img: "/image/parkir.jpeg",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row bg-white rounded-xl border border-[#1e7c3a]/20 shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* FOTO */}
            <div className="relative md:w-1/3 aspect-[4/3] bg-gray-200">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="md:w-2/3 p-6">
              <h2 className="text-2xl font-semibold text-[#1e7c3a]">
                {item.title}
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
