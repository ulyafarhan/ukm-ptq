import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { useState } from 'react';

export default function Indeks({ artikels, kategoris, filterAktif }) {
    const [mobileFilter, setMobileFilter] = useState(filterAktif || 'semua');

    const formatDate = (dateString) =>
        new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        });

    return (
        <PublicLayout>
            <Head title="Jurnal Perjalanan - UKM PTQ UNIMAL" />
            <main>
                {/* Header */}
                <section className="bg-gray-50 pt-32 pb-20 text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
                            Jurnal Perjalanan Kami
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Setiap langkah adalah cerita, setiap prestasi adalah inspirasi. Inilah catatan
                            perjalanan keluarga besar UKM PTQ UNIMAL dalam menapaki jalan dakwah dan keilmuan.
                        </p>
                    </div>
                </section>

                {/* Filters */}
                <div className="bg-gray-50 pb-16">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex items-center justify-center gap-3 flex-wrap">
                            <Link
                                href={route('artikel.index')}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-amber-300 ${
                                    filterAktif === 'semua'
                                        ? 'bg-amber-600 text-white shadow'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                                aria-label="Tampilkan semua artikel"
                            >
                                Semua
                            </Link>

                            {kategoris.map((kategori) => (
                                <Link
                                    key={kategori.id}
                                    href={route('artikel.index', { kategori: kategori.slug })}
                                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-amber-300 ${
                                        filterAktif === kategori.slug
                                            ? 'bg-amber-600 text-white shadow'
                                            : 'bg-white text-gray-700 hover:bg-gray-100'
                                    }`}
                                    aria-label={`Filter kategori ${kategori.nama}`}
                                >
                                    {kategori.nama}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile select fallback */}
                        <div className="mt-4 lg:hidden flex justify-center">
                            <select
                                value={mobileFilter}
                                onChange={(e) => {
                                    const v = e.target.value;
                                    setMobileFilter(v);
                                    if (v === 'semua') {
                                        window.location.href = route('artikel.index');
                                        return;
                                    }
                                    window.location.href = route('artikel.index', { kategori: v });
                                }}
                                className="rounded-md border-gray-200 text-sm px-3 py-2 focus:ring-amber-300"
                                aria-label="Pilih kategori artikel"
                            >
                                <option value="semua">Semua</option>
                                {kategoris.map((k) => (
                                    <option key={k.id} value={k.slug}>
                                        {k.nama}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <section className="py-20 lg:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        {artikels?.data?.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {artikels.data.map((artikel, index) => (
                                    <article
                                        key={artikel.id}
                                        className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm transform transition-all duration-400 hover:shadow-lg hover:-translate-y-2"
                                        style={{ animation: `fadeUp .5s ease ${index * 80}ms both` }}
                                    >
                                        <Link href={route('artikel.show', artikel.slug)} className="block" aria-label={`Buka ${artikel.judul}`}>
                                            <div className="overflow-hidden">
                                                <img
                                                    src={`https://picsum.photos/seed/${artikel.id}/800/520`}
                                                    alt={artikel.judul}
                                                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                                                />
                                            </div>

                                            <div className="p-6 flex flex-col h-full">
                                                <div className="mb-3">
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700">
                                                        {artikel.kategori_artikel?.nama || 'Tanpa Kategori'}
                                                    </span>
                                                </div>

                                                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2 flex-grow">
                                                    {artikel.judul}
                                                </h3>

                                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                                    <span>Oleh {artikel.user?.name || 'Penulis'}</span>
                                                    <span>{formatDate(artikel.created_at || artikel.published_at || new Date())}</span>
                                                </div>

                                                <div className="mt-auto">
                                                    <span className="inline-flex items-center text-sm font-semibold text-amber-600 hover:text-amber-800 transition-colors">
                                                        Baca Kisahnya
                                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <h3 className="text-2xl font-bold text-gray-800">Tidak Ada Cerita</h3>
                                <p className="mt-2 text-gray-500">Belum ada jurnal perjalanan yang cocok dengan filter ini.</p>
                            </div>
                        )}

                        {/* Pagination */}
                        <div className="mt-12 flex justify-center items-center space-x-2">
                            {artikels.links.map((link, idx) => {
                                if (!link.url) {
                                    return (
                                        <div
                                            key={idx}
                                            className="px-3 py-1.5 rounded-md text-sm text-gray-400 bg-gray-100 cursor-not-allowed"
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    );
                                }
                                return (
                                    <Link
                                        key={idx}
                                        href={link.url}
                                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 ${
                                            link.active
                                                ? 'bg-amber-600 text-white shadow-md transform scale-105'
                                                : 'bg-white text-gray-700 border border-gray-200 hover:bg-amber-50 hover:text-amber-700'
                                        }`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                        aria-label={`Halaman ${link.label.replace(/<[^>]*>/g, '')}`}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </section>

                <style>{`
                    @keyframes fadeUp {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    /* line-clamp without plugin fallback */
                    .line-clamp-2 {
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                `}</style>
            </main>
        </PublicLayout>
    );
}
