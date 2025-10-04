import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, artikels = [], agendas = [] }) {
    const truncateText = (text, length) => {
        if (!text) return '';
        if (text.length <= length) {
            return text;
        }
        return text.substring(0, length) + '...';
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    return (
        <>
            <Head title="Selamat Datang di UKM PTQ UNIMAL" />
            <div className="bg-gray-50 text-black/50">
                <div className="relative min-h-screen flex flex-col items-center selection:bg-amber-500 selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:justify-center lg:col-start-2">
                                {/* Ganti dengan logo Anda */}
                                <h1 className="text-xl font-bold text-gray-700">UKM PTQ UNIMAL</h1>
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-amber-500"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <Link
                                        href={route('login')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-amber-500"
                                    >
                                        Login Anggota
                                    </Link>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            {/* Hero Section */}
                            <div className="text-center py-16">
                                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                                    Selamat Datang di Rumah Digital
                                    <br />
                                    Keluarga Besar UKM PTQ UNIMAL
                                </h1>
                                <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                                    Ini adalah pusat digital bagi seluruh anggota untuk bertumbuh, berkolaborasi, dan berbagi inspirasi. Sebuah platform yang hidup, dinamis, dan menjadi pusat aktivitas kita bersama dalam semangat Qur'ani.
                                </p>
                            </div>

                            {/* Bagian Kabar Terbaru (Artikel) */}
                            <div className="py-16">
                                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Kabar Terbaru</h2>
                                {artikels.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {artikels.map((artikel) => (
                                            <div key={artikel.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                                                <img className="w-full h-48 object-cover" src={`https://picsum.photos/seed/${artikel.id}/400/250`} alt={artikel.judul} />
                                                <div className="p-6">
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2 h-20">{artikel.judul}</h3>
                                                    <p className="text-gray-600 mb-4 h-24">{truncateText(artikel.isi, 100)}</p>
                                                    <Link href="#" className="font-semibold text-amber-600 hover:text-amber-800">
                                                        Baca Selengkapnya &rarr;
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-center text-gray-500">Belum ada kabar terbaru untuk ditampilkan.</p>
                                )}
                            </div>

                            {/* Bagian Agenda Terdekat */}
                            <div className="py-16 bg-gray-100 -mx-6 px-6 lg:-mx-12 lg:px-12">
                                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Agenda Terdekat</h2>
                                {agendas.length > 0 ? (
                                    <div className="space-y-4 max-w-4xl mx-auto">
                                        {agendas.map((agenda) => (
                                            <div key={agenda.id} className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-6">
                                                <div className="text-center flex-shrink-0">
                                                    {/* Perbaikan: Gunakan agenda.waktu_mulai */}
                                                    <p className="text-3xl font-bold text-amber-600">{new Date(agenda.waktu_mulai).getDate()}</p>
                                                    <p className="text-sm text-gray-500 uppercase">{new Date(agenda.waktu_mulai).toLocaleString('id-ID', { month: 'short' })}</p>
                                                </div>
                                                <div>
                                                    {/* Perbaikan: Gunakan agenda.nama_kegiatan */}
                                                    <h3 className="text-xl font-bold text-gray-900">{agenda.nama_kegiatan}</h3>
                                                    <p className="text-gray-600">
                                                        {/* Perbaikan: Gunakan agenda.waktu_mulai */}
                                                        {formatDate(agenda.waktu_mulai)} | Lokasi: {agenda.lokasi}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-center text-gray-500">Tidak ada agenda yang akan datang.</p>
                                )}
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black/50">
                            © {new Date().getFullYear()} UKM Pengembangan Tilawatil Qur'an Universitas Malikussaleh.
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}