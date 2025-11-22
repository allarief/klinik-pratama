export default function HeroBanner() {
  return (
    <section className="w-full bg-white text-black py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Selamat Datang di Klinik Pratama AlMughni
          </h1>
          

          <p className="text-lg mt-4 text-gray-700">
            Klinik Pratama AL Mughni menyediakan layanan kesehatan berkualitas
            dengan tenaga medis profesional dan fasilitas modern untuk
            memenuhi kebutuhan kesehatan Anda.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
                Buat Janji
            </a>

            <a
              href="#"
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
            >
                Pelajari Lebih Lanjut
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="/banner1.jpeg"
            alt="Banner"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
