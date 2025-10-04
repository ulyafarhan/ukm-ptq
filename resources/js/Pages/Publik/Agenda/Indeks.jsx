import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Indeks({ agendaAkanDatang, arsipAgenda }) {
    const formatDate = (dateString) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    return (
        <PublicLayout>
            <Head title="Kalender Kegiatan - UKM PTQ UNIMAL" />

            <main>
                {/* Hero Section */}
                <section className="bg-white pt-28 pb-16 border-b border-gray-200">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                            Kalender Kegiatan
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Setiap pertemuan adalah penguat, setiap kegiatan adalah ladang pahala. 
                            Inilah agenda perjuangan keluarga besar UKM PTQ UNIMAL.
                        </p>
                    </div>
                </section>

                {/* Agenda Akan Datang */}
                <section className="py-16">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-10 text-center">
                            Agenda Akan Datang
                        </h2>
                        {agendaAkanDatang.length > 0 ? (
                            <div className="space-y-8">
                                {agendaAkanDatang.map((agenda) => (
                                    <div
                                        key={agenda.id}
                                        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <p className="text-sm font-medium text-amber-600">
                                            {formatDate(agenda.waktu_mulai)}
                                        </p>
                                        <h3 className="mt-2 text-xl font-semibold text-gray-900">
                                            {agenda.nama_kegiatan}
                                        </h3>
                                        <p className="mt-3 text-gray-600 leading-relaxed">
                                            {agenda.deskripsi}
                                        </p>
                                        <p className="mt-4 text-sm text-gray-500">
                                            <span className="font-semibold">Lokasi:</span> {agenda.lokasi}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500">
                                Tidak ada agenda yang dijadwalkan dalam waktu dekat.
                            </p>
                        )}
                    </div>
                </section>

                {/* Arsip Agenda */}
                <section className="py-16 bg-gray-50 border-t border-gray-200">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-10 text-center">
                            Arsip Agenda
                        </h2>
                        <div className="space-y-4">
                            {arsipAgenda.data.map((agenda) => (
                                <div
                                    key={agenda.id}
                                    className="bg-white border border-gray-200 rounded-lg p-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div>
                                        <h3 className="font-medium text-gray-900">
                                            {agenda.nama_kegiatan}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {formatDate(agenda.waktu_mulai)}
                                        </p>
                                    </div>
                                    <div className="text-right text-sm text-gray-400">
                                        {new Date(agenda.waktu_mulai).toLocaleDateString('id-ID', {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric',
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-10 flex justify-center space-x-2">
                            {arsipAgenda.links.map((link, index) => {
                                if (!link.url) {
                                    return (
                                        <div
                                            key={index}
                                            className="px-3 py-1.5 rounded-md text-sm text-gray-400 bg-gray-100"
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    );
                                }
                                return (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                                            link.active
                                                ? 'bg-amber-600 text-white'
                                                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
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
