import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Indeks({ albums }) {
  return (
    <PublicLayout>
      <Head title="Galeri Kenangan - UKM PTQ UNIMAL" />

      <main className="text-gray-900">
        {/* Hero Section */}
        <section className="bg-white     pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center animate-fadeInUp">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
              Galeri Kenangan
            </h1>
            <p className="mt-4 text-lg text-gray-900 leading-relaxed">
              Setiap gambar adalah fragmen cerita dan jejak perjuangan kami —
              terabadikan dalam momen hangat kebersamaan.
            </p>
          </div>
        </section>

        {/* Album Grid */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {albums.data.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {albums.data.map((album, index) => (
                  <div
                    key={album.id}
                    className="animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
                  >
                    <Link
                      href={route('galeri.show', album.slug)}
                      className="block group focus:outline-none focus:ring-4 focus:ring-amber-500 rounded-xl"
                    >
                      <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 aspect-[1/1]">
                        <img
                          src={`https://picsum.photos/seed/${album.id}/600/600`}
                          alt={album.judul}
                          loading="lazy"
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/50" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-xl font-bold text-white leading-tight drop-shadow-sm">
                            {album.judul}
                          </h3>
                          <p className="mt-1 text-sm text-gray-300 group-hover:text-amber-400 transition-colors">
                            Lihat Momen →
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-20">
                Belum ada kenangan yang diabadikan.
              </p>
            )}

            {/* CTA */}
            {albums.data.length > 0 && (
              <div className="mt-12 flex justify-center">
                <Link
                  href={route('galeri.index')}
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-amber-600 text-white font-semibold shadow-md hover:bg-amber-700 transition-colors focus:outline-none focus:ring-4 focus:ring-amber-400"
                >
                  Lihat Semua Galeri
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Animasi Global */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </PublicLayout>
  );
}
