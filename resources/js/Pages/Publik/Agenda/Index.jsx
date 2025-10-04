import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Index({ agendaAkanDatang, arsipAgenda }) {
    const formatDate = (dateString) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    return (
        <PublicLayout>
            <Head title="Kalender Kegiatan - UKM PTQ UNIMAL" />

            <main>
                <section className="bg-gray-900 text-white pt-32 pb-20 text-center">
                    <div className="max-w-4xl mx-auto px-6 animate-fadeInUp">
                        <h1 className="text-4xl lg:text-5xl font-extrabold">Kalender Perjuangan</h1>
                        <p className="mt-4 text-lg text-gray-300">
                            Setiap pertemuan adalah penguat, setiap kegiatan adalah ladang pahala. Mari melingkar dan bergerak bersama dalam agenda-agenda kebaikan.
                        </p>
                    </div>
                </section>

                {/* Agenda Akan Datang */}
                <section className="py-20 lg:py-24">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Akan Datang</h2>
                        {agendaAkanDatang.length > 0 ? (
                            <div className="space-y-8">
                                {agendaAkanDatang.map((agenda, index) => (
                                    <div key={agenda.id} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-500 animate-fadeInUp" style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}>
                                        <p className="text-sm font-semibold text-amber-600">{formatDate(agenda.waktu_mulai)}</p>
                                        <h3 className="mt-2 text-2xl font-bold text-gray-900">{agenda.nama_kegiatan}</h3>
                                        <p className="mt-3 text-gray-600">{agenda.deskripsi}</p>
                                        <p className="mt-4 text-sm font-medium text-gray-500">
                                            <span className="font-bold">Lokasi:</span> {agenda.lokasi}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500">Tidak ada agenda yang dijadwalkan dalam waktu dekat.</p>
                        )}
                    </div>
                </section>

                {/* Arsip Agenda */}
                <section className="py-20 lg:py-24 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Arsip Jejak Langkah</h2>
                        <div className="space-y-6">
                            {arsipAgenda.data.map((agenda) => (
                                <div key={agenda.id} className="bg-white p-5 rounded-lg shadow-sm flex items-center space-x-4">
                                    <div className="text-center flex-shrink-0">
                                        <p className="text-lg font-bold text-gray-500">{new Date(agenda.waktu_mulai).getDate()}</p>
                                        <p className="text-xs text-gray-400 uppercase">{new Date(agenda.waktu_mulai).toLocaleString('id-ID', { month: 'short' })}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800">{agenda.nama_kegiatan}</h3>
                                        <p className="text-sm text-gray-500">{formatDate(agenda.waktu_mulai)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination untuk Arsip */}
                        <div className="mt-12 flex justify-center items-center space-x-1">
                            {arsipAgenda.links.map((link, index) => {
                                if (!link.url) {
                                    return <div key={index} className="px-4 py-2 rounded-lg text-sm text-gray-400 bg-gray-200" dangerouslySetInnerHTML={{ __html: link.label }} />;
                                }
                                return <Link key={index} href={link.url} className={`px-4 py-2 rounded-lg text-sm transition-colors ${link.active ? 'bg-amber-600 text-white' : 'bg-white hover:bg-gray-200'}`} dangerouslySetInnerHTML={{ __html: link.label }} />;
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </PublicLayout>
    );
}