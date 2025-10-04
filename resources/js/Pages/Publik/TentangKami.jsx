import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function TentangKami({ periodeAktif }) {
    return (
        <PublicLayout>
            <Head title="Tentang Kami - UKM PTQ UNIMAL" />

            <main>
                {/* Breadcrumb & Page Header */}
                <section className="bg-white pt-24 pb-10 border-b border-gray-200">
                    <div className="max-w-6xl mx-auto px-6">
                        <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
                            <ol className="flex items-center space-x-2">
                                <li>
                                    <Link href="/" className="hover:text-gray-700 transition-colors">Beranda</Link>
                                </li>
                                <li className="text-gray-300">/</li>
                                <li className="text-gray-900 font-medium">Tentang Kami</li>
                            </ol>
                        </nav>

                        <div className="mt-6 text-center">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Tentang Kami</h1>
                            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                                Perjalanan yang ditenun dari kecintaan pada Al-Qur’an, kebersamaan, dan cita-cita memberi dampak bagi kampus dan masyarakat.
                            </p>

                            {/* Section Anchors */}
                            <div className="mt-8 flex flex-wrap justify-center gap-3">
                                <a href="#visi-misi" className="px-4 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
                                    Visi & Misi
                                </a>
                                <a href="#struktur" className="px-4 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
                                    Struktur Kepengurusan
                                </a>
                                <Link href="/jurnal" className="px-4 py-2 rounded-md bg-amber-600 text-white hover:bg-amber-700 transition-colors">
                                    Jurnal Perjalanan
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visi & Misi */}
                <section id="visi-misi" className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Kompas Pergerakan Kami</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Visi dan misi yang memandu setiap langkah dan keputusan kami.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="rounded-xl border border-gray-200 p-6 hover:shadow-sm transition-shadow">
                                <h3 className="text-2xl font-semibold text-gray-900">Visi</h3>
                                <p className="mt-4 text-gray-700 leading-relaxed">
                                    Menjadi Unit Kegiatan Mahasiswa yang unggul dan profesional dalam pengembangan tilawatil Qur’an, serta menjadi pusat syiar Islam yang mencerahkan di lingkungan Universitas Malikussaleh dan masyarakat luas.
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-200 p-6 hover:shadow-sm transition-shadow">
                                <h3 className="text-2xl font-semibold text-gray-900">Misi</h3>
                                <ul className="mt-4 space-y-3 text-gray-700 leading-relaxed">
                                    <li className="flex">
                                        <span className="mr-2 text-amber-600">•</span>
                                        Menyelenggarakan pembinaan intensif di berbagai cabang musabaqah.
                                    </li>
                                    <li className="flex">
                                        <span className="mr-2 text-amber-600">•</span>
                                        Menciptakan lingkungan yang Qur’ani, suportif, dan penuh kekeluargaan.
                                    </li>
                                    <li className="flex">
                                        <span className="mr-2 text-amber-600">•</span>
                                        Berperan aktif dalam kegiatan syiar Islam melalui program kreatif.
                                    </li>
                                    <li className="flex">
                                        <span className="mr-2 text-amber-600">•</span>
                                        Menjalin kemitraan strategis untuk memperluas jangkauan dakwah.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Struktur Kepengurusan */}
                {periodeAktif && (
                    <section id="struktur" className="py-16 bg-gray-50 border-t border-gray-200">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="text-center">
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Struktur Kepengurusan</h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    Periode {periodeAktif.nama}
                                </p>
                            </div>

                            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {periodeAktif.departemens?.map((dept) => (
                                    <article
                                        key={dept.id}
                                        className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
                                    >
                                        <header className="flex items-start justify-between">
                                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                                                {dept.nama}
                                            </h3>
                                        </header>
                                        <p className="mt-2 text-gray-600 leading-relaxed">
                                            {dept.deskripsi || 'Deskripsi belum tersedia.'}
                                        </p>
                                        {/* Optional: Link to jurnal or agenda for related activity */}
                                        <div className="mt-6">
                                            <Link href="/agenda" className="inline-flex items-center text-sm font-medium text-amber-700 hover:text-amber-800 transition-colors">
                                                Lihat kegiatan terkait
                                                <span className="ml-1">→</span>
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* CTA Section */}
                            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-3">
                                <Link href="/jurnal" className="px-4 py-2 rounded-md bg-amber-600 text-white hover:bg-amber-700 transition-colors">
                                    Baca jurnal perjalanan
                                </Link>
                                <Link href="/agenda" className="px-4 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
                                    Lihat kalender kegiatan
                                </Link>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </PublicLayout>
    );
}
