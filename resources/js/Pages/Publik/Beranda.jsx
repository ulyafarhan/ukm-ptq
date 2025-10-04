import { Link, Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Beranda({ artikels = [], agendas = [] }) {
    const truncateText = (text, length) =>
        !text ? '' : (text.length > length ? text.substring(0, length) + '…' : text);

    const formatDateLong = (dateString) =>
        new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

    const formatDateShort = (dateString) =>
        new Date(dateString).toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'short',
        });

    return (
        <PublicLayout>
            <Head title="UKM PTQ UNIMAL — Rumah Digital" />

            {/* Hero */}
            <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        Bukan Sekadar Organisasi,
                        <br />
                        Ini Adalah <span className="text-amber-700">Rumah Kita Bersama</span>
                    </h1>
                    <p className="mt-6 text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Di UKM PTQ UNIMAL, kami belajar Al-Qur'an, membangun keluarga, dan menumbuhkan potensi dalam
                        ekosistem digital yang hangat dan kolaboratif.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link
                            href={route('login')}
                            className="px-6 py-3 text-base font-semibold text-white bg-amber-700 rounded-md shadow-sm hover:bg-amber-800 transition-colors"
                            aria-label="Masuk ke ruang anggota"
                        >
                            Masuk Ruang Anggota
                        </Link>
                        <Link
                            href={route('tentang-kami')}
                            className="px-6 py-3 text-base font-semibold text-gray-800 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                            aria-label="Pelajari tentang kami"
                        >
                            Tentang Kami
                        </Link>
                    </div>

                    {/* Agenda rail to connect actions */}
                    {agendas.length > 0 && (
                        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold text-gray-900">Agenda terdekat</h2>
                                <Link
                                    href={route('agenda.index')}
                                    className="text-base font-medium text-amber-700 hover:text-amber-800"
                                >
                                    Lihat semua →
                                </Link>
                            </div>
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {agendas.slice(0, 3).map((agenda) => (
                                    <div
                                        key={agenda.id}
                                        className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
                                    >
                                        <div className="flex-shrink-0 text-center bg-amber-50 text-amber-800 rounded-md px-3 py-2">
                                            <div className="text-sm font-semibold">
                                                {formatDateShort(agenda.waktu_mulai)}
                                            </div>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-base font-medium text-gray-900 truncate">
                                                {agenda.nama_kegiatan}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate mt-1">
                                                {formatDateLong(agenda.waktu_mulai)} • {agenda.lokasi}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Tentang kami preview */}
            <section id="tentang-kami" className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-sm font-bold uppercase text-amber-700 tracking-widest">
                                Kisah Kami
                            </h2>
                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                Dari Sebuah Niat, Menjadi Sebuah Pergerakan
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Berawal dari kecintaan pada Al-Qur'an, kami membangun wadah tempat belajar, berbagi,
                                dan bertumbuh bersama Kalam Ilahi, di kampus dan masyarakat.
                            </p>
                            <div className="pt-4">
                                <Link
                                    href={route('tentang-kami')}
                                    className="text-base font-semibold text-amber-700 hover:text-amber-800"
                                >
                                    Selami kisah kami lebih dalam →
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <img
                                src="https://picsum.photos/seed/kegiatan1/300/400"
                                alt="Kegiatan UKM PTQ UNIMAL - kebersamaan dan pembinaan"
                                className="rounded-lg shadow-sm object-cover w-full h-72 lg:h-96"
                            />
                            <img
                                src="https://picsum.photos/seed/kegiatan2/300/400"
                                alt="Kegiatan UKM PTQ UNIMAL - tilawah dan syiar"
                                className="rounded-lg shadow-sm object-cover w-full h-72 lg:h-96 mt-8 lg:mt-12"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Jurnal */}
            <section id="kabar-terbaru" className="py-20 lg:py-28 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Jendela Informasi</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Ikuti jejak langkah, prestasi, dan cerita inspiratif keluarga PTQ.
                        </p>
                    </div>

                    {artikels.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {artikels.slice(0, 6).map((artikel) => (
                                <article
                                    key={artikel.id}
                                    className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                                >
                                    <Link href={route('artikel.show', artikel.slug)} className="block">
                                        <div className="overflow-hidden">
                                            <img
                                                className="w-full h-56 object-cover group-hover:scale-[1.02] transition-transform"
                                                src={`https://picsum.photos/seed/${artikel.id}/600/400`}
                                                alt={`Jurnal: ${artikel.judul}`}
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-3">
                                                {artikel.judul}
                                            </h3>
                                            <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                                                {truncateText(artikel.isi, 150)}
                                            </p>
                                            <div className="inline-flex items-center text-sm font-semibold text-amber-700 group-hover:text-amber-800">
                                                Baca selengkapnya <span className="ml-1">→</span>
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 text-lg py-12">
                            Saat ini belum ada kabar terbaru untuk dibagikan.
                        </p>
                    )}

                    <div className="mt-16 flex justify-center">
                        <Link
                            href={route('artikel.index')}
                            className="px-6 py-3 text-base font-semibold text-amber-700 bg-amber-50 rounded-md hover:bg-amber-100 transition-colors"
                        >
                            Lihat semua jurnal perjalanan
                        </Link>
                    </div>
                </div>
            </section>

            {/* Secondary CTA connecting sections */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href={route('agenda.index')}
                            className="px-6 py-3 text-base font-semibold text-white bg-amber-700 rounded-md shadow-sm hover:bg-amber-800 transition-colors"
                        >
                            Lihat kalender kegiatan
                        </Link>
                        <Link
                            href={route('tentang-kami')}
                            className="px-6 py-3 text-base font-semibold text-gray-800 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                        >
                            Profil & Struktur Kepengurusan
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}