export default function HealthArticles() {
  return (
    <section className="w-full py-14 px-6 bg-gray-50">
      
      {/* Title */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Artikel & Informasi Kesehatan</h2>
        <p className="text-gray-600 mt-2">
          Dapatkan informasi terbaru seputar kesehatan, tips medis, dan layanan klinik kami.
        </p>
      </div>

      {/* Article List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Artikel 1 */}
        <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
          <img 
            src="/articles1.jpg" 
            alt="Artikel 1" 
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="font-semibold text-lg mt-4">Tips Menjaga Kesehatan Jantung</h3>
          <p className="text-sm text-gray-600 mt-2">
            Kenali langkah-langkah sederhana untuk menjaga kesehatan jantung Anda setiap hari.
          </p>
          <button className="mt-4 text-blue-600 font-medium hover:underline">Baca Selengkapnya</button>
        </div>

        {/* Artikel 2 */}
        <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
          <img 
            src="/articles2.jpg" 
            alt="Artikel 2" 
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="font-semibold text-lg mt-4">Tanda-Tanda Tubuh Kekurangan Cairan</h3>
          <p className="text-sm text-gray-600 mt-2">
            Dehidrasi dapat muncul tanpa disadari. Ketahui gejalanya dan cara pencegahannya.
          </p>
          <button className="mt-4 text-blue-600 font-medium hover:underline">Baca Selengkapnya</button>
        </div>

        {/* Artikel 3 */}
        <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
          <img 
            src="/articles3.jpg" 
            alt="Artikel 3" 
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="font-semibold text-lg mt-4">Manfaat Medical Check-Up Rutin</h3>
          <p className="text-sm text-gray-600 mt-2">
            Pentingnya pemeriksaan kesehatan berkala untuk mendeteksi gangguan sejak dini.
          </p>
          <button className="mt-4 text-blue-600 font-medium hover:underline">Baca Selengkapnya</button>
        </div>

      </div>

    </section>
  );
}
