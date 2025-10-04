import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Indeks({ artikels, kategoris, filterAktif }) {
    const truncateText = (text, length) => {
        if (!text) return '';
        return text.length > length ? text.substring(0, length) + '...' : text;
    };

    return (
        <PublicLayout>
            <Head title="Jurnal Perjalanan - UKM PTQ UNIMAL" />
            <main>
                <section className="bg-gray-50 pt-32 pb-20 text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">Jurnal Perjalanan Kami</h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Setiap langkah adalah cerita, setiap prestasi adalah inspirasi. Inilah catatan perjalanan keluarga besar UKM PTQ UNIMAL dalam menapaki jalan dakwah dan keilmuan.
                        </p>
                    </div>
                </section>
                <div className="bg-gray-50 pb-16">
                    <div className="flex justify-center items-center flex-wrap gap-3 px-6">
                        <Link 
                            href={route('artikel.index')}
                            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                                filterAktif === 'semua' ? 'bg-amber-600 text-white shadow' : 'bg-white text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            Semua
                        </Link>
                        {kategoris.map(kategori => (
                            <Link 
                                key={kategori.id}
                                href={route('artikel.index', { kategori: kategori.slug })}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                                    filterAktif === kategori.slug ? 'bg-amber-600 text-white shadow' : 'bg-white text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {kategori.nama}
                            </Link>
                        ))}
                    </div>
                </div>
                <section className="py-20 lg:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        {artikels.data.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {artikels.data.map((artikel, index) => (
                                    <div 
                                        key={artikel.id} 
                                        className="bg-white rounded-lg shadow-lg overflow-hidden group transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp"
                                        style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
                                    >
                                        <Link href={route('artikel.show', artikel.slug)} className="block">
                                            <div className="overflow-hidden">
                                                <img className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src={`https://picsum.photos/seed/${artikel.id}/400/300`} alt={artikel.judul} />
                                            </div>
                                            <div className="p-6 flex flex-col">
                                                <div className="mb-4">
                                                    <span className="text-xs font-semibold uppercase text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                                                        {artikel.kategori_artikel.nama}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2 flex-grow min-h-[5.5rem] group-hover:text-amber-700 transition-colors">
                                                    {artikel.judul}
                                                </h3>
                                                <p className="text-gray-600 text-sm mb-6">
                                                    Oleh {artikel.user.name}
                                                </p>
                                                <span className="font-semibold text-amber-600 self-start group-hover:text-amber-800 transition-colors">
                                                    Baca Kisahnya <span className="inline-block transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <h3 className="text-2xl font-bold text-gray-800">Tidak Ada Cerita</h3>
                                <p className="mt-2 text-gray-500">Belum ada jurnal perjalanan yang cocok dengan filter ini.</p>
                            </div>
                        )}
                        <div className="mt-20 flex justify-center items-center space-x-1">
                            {artikels.links.map((link, index) => {
                                if (!link.url) {
                                    return (
                                        <div
                                            key={index}
                                            className="px-4 py-2 rounded-lg text-sm font-medium text-gray-400 bg-gray-100 cursor-not-allowed"
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    );
                                }
                                return (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                            link.active 
                                                ? 'bg-amber-600 text-white shadow-lg scale-110' 
                                                : 'bg-white text-gray-700 hover:bg-amber-100 hover:text-amber-700'
                                        }`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </PublicLayout>
    );
}