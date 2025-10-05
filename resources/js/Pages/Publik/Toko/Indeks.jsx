import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { useState, useEffect } from 'react';

export default function Indeks({ produks }) {
  const [loadingImages, setLoadingImages] = useState({});
  useEffect(() => {
    // reset loading state when produk list changes
    const map = {};
    produks.forEach(p => (map[p.id] = false));
    setLoadingImages(map);
  }, [produks]);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  const handleImageLoad = (id) => {
    setLoadingImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <PublicLayout>
      <Head title="Karya & Cindera Mata - UKM PTQ UNIMAL" />

      <main className="text-gray-900">
        <section className="bg-gray-50 pt-28 pb-14">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">Karya & Cindera Mata</h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Setiap produk adalah buah kreativitas dan kemandirian — dibuat dengan teliti, layak jadi cindera mata untuk kenangan berharga.
            </p>
          </div>
        </section>

        <section className="py-10 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {produks.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-gray-500">Belum ada karya yang bisa ditampilkan saat ini.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {produks.map((produk, idx) => (
                    <article
                      key={produk.id}
                      className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-300 transform-gpu hover:-translate-y-2 focus-within:translate-y-0 will-change-transform"
                      style={{ transitionProperty: 'transform, box-shadow' }}
                    >
                      <div className="group block rounded-t-xl overflow-hidden bg-gray-100">
                        <div className="relative aspect-[4/3] bg-gray-100">
                          {/* Skeleton */}
                          {!loadingImages[produk.id] && (
                            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-white/5 to-white/10" aria-hidden="true" />
                          )}

                          <img
                            src={`https://picsum.photos/seed/${produk.id}/800/600`}
                            srcSet={`
                              https://picsum.photos/seed/${produk.id}/400/300 400w,
                              https://picsum.photos/seed/${produk.id}/800/600 800w,
                              https://picsum.photos/seed/${produk.id}/1200/900 1200w
                            `}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 48vw, 24vw"
                            alt={produk.nama}
                            loading="lazy"
                            onLoad={() => handleImageLoad(produk.id)}
                            className={`w-full h-full object-cover transition-transform duration-500 ${loadingImages[produk.id] ? 'opacity-100' : 'opacity-0' } group-hover:scale-105`}
                          />

                          <div className="absolute top-3 right-3 flex items-center gap-2">
                            <span className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full ${produk.stok > 0 ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                              {produk.stok > 0 ? `Stok: ${produk.stok}` : 'Habis'}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="px-4 py-4 sm:px-5 sm:py-5">
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 leading-tight min-h-[2.8rem]">
                          {produk.nama}
                        </h3>

                        <div className="mt-3 flex items-center justify-between">
                          <div className="text-lg sm:text-xl font-extrabold text-amber-600">
                            {formatRupiah(produk.harga)}
                          </div>

                          <div className="text-sm text-gray-500">
                            <span className="hidden sm:inline">{produk.berat ? `${produk.berat}g` : ''}</span>
                          </div>
                        </div>

                        <p className="mt-3 text-xs text-gray-500 line-clamp-2">
                          {produk.deskripsi ?? 'Tidak ada deskripsi singkat'}
                        </p>

                        <div className="mt-4 flex items-center gap-3">
                          <Link
                            href="#"
                            className={`inline-flex flex-1 items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 ${produk.stok > 0 ? 'bg-amber-600 text-white hover:bg-amber-700' : 'bg-gray-200 text-gray-600 cursor-not-allowed'}`}
                            aria-label={produk.stok > 0 ? `Pesan ${produk.nama}` : `${produk.nama} tidak tersedia`}
                          >
                            Pesan Sekarang
                          </Link>

                          <Link
                            href="#"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
                            aria-label={`Lihat detail ${produk.nama}`}
                          >
                            Lihat
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-10 flex items-center justify-center">
                  <nav className="inline-flex rounded-lg bg-white/90 shadow-sm p-1 gap-2" aria-label="Pagination placeholder">
                    <button className="px-4 py-2 rounded-md text-sm text-gray-600 bg-transparent hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400">«</button>
                    <button className="px-4 py-2 rounded-md text-sm bg-amber-600 text-white shadow">1</button>
                    <button className="px-4 py-2 rounded-md text-sm text-gray-600 hover:bg-amber-50 focus:outline-none">2</button>
                    <button className="px-4 py-2 rounded-md text-sm text-gray-600 hover:bg-amber-50 focus:outline-none">3</button>
                    <button className="px-4 py-2 rounded-md text-sm text-gray-600 bg-transparent hover:bg-amber-50 focus:outline-none">»</button>
                  </nav>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
