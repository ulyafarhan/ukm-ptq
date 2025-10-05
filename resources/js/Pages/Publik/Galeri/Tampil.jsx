import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { useState, useEffect, useCallback } from 'react';

export default function Tampil({ album }) {
  // Simulasi data gambar
  const images = Array.from(
    { length: 12 },
    (_, i) => `https://picsum.photos/seed/${album.slug}-${i}/800/600`
  );

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = () => setLightboxIndex(null);
  const prev = useCallback(() => {
    setLightboxIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  }, [images.length]);
  const next = useCallback(() => {
    setLightboxIndex((i) => (i < images.length - 1 ? i + 1 : 0));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [lightboxIndex, prev, next]);

  return (
    <PublicLayout>
      <Head title={album.judul} />

      <main className="text-gray-900">
        {/* Hero */}
        <section className="bg-white pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center animate-fadeInUp">
            <Link
              href={route('galeri.index')}
              className="text-amber-400 font-semibold hover:underline text-sm"
            >
              &larr; Kembali ke Galeri Kenangan
            </Link>
            <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight">
              {album.judul}
            </h1>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              {album.deskripsi}
            </p>
          </div>
        </section>

        {/* Grid Foto */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxIndex(index)}
                  className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 aspect-[1/1] group focus:outline-none focus:ring-4 focus:ring-amber-500"
                >
                  <img
                    src={image}
                    alt={`Gambar ${index + 1} dari ${album.judul}`}
                    loading="lazy"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium tracking-wide transition-opacity">
                      Klik untuk perbesar
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Tutup"
            >
              ✕
            </button>

            <button
              onClick={prev}
              className="absolute left-4 text-white text-3xl font-bold px-3 py-2 hover:text-amber-400 focus:outline-none"
              aria-label="Sebelumnya"
            >
              ‹
            </button>

            <img
              src={images[lightboxIndex]}
              alt={`Preview ${lightboxIndex + 1}`}
              className="max-h-[85vh] max-w-full rounded-lg shadow-2xl transition-transform duration-300"
            />

            <button
              onClick={next}
              className="absolute right-4 text-white text-3xl font-bold px-3 py-2 hover:text-amber-400 focus:outline-none"
              aria-label="Berikutnya"
            >
              ›
            </button>
          </div>
        )}
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
