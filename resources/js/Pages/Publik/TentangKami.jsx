import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function TentangKami({ periodeAktif }) {
    return (
        <PublicLayout>
            <Head title="Tentang Kami - Kisah & Visi UKM PTQ UNIMAL" />
            <main>
                <section className="bg-gray-900 text-white pt-32 pb-20 text-center">
                    <div className="max-w-4xl mx-auto px-6 animate-fadeInUp">
                        <h1 className="text-4xl lg:text-5xl font-extrabold">Ini Adalah Kisah Kami</h1>
                        <p className="mt-4 text-lg text-gray-300">
                            Sebuah perjalanan yang ditenun dari benang-benang kecintaan pada Al-Qur'an, kebersamaan, dan cita-cita untuk memberi dampak.
                        </p>
                    </div>
                </section>
                <section className="py-20 lg:py-24 bg-white">
                    <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Kompas Pergerakan Kami</h2>
                        <p className="mt-4 text-lg text-gray-600">Visi dan misi yang menjadi pemandu setiap langkah dan keputusan yang kami ambil.</p>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                            <div className="animate-fadeInUp" style={{ animationDelay: '200ms', opacity: 0 }}>
                                <h3 className="text-2xl font-bold text-amber-600">Visi Kami</h3>
                                <p className="mt-4 text-gray-700 leading-relaxed">
                                    "Menjadi Unit Kegiatan Mahasiswa yang unggul dan profesional dalam pengembangan tilawatil Qur'an, serta menjadi pusat syiar Islam yang mencerahkan di lingkungan Universitas Malikussaleh dan masyarakat luas."
                                </p>
                            </div>
                            <div className="animate-fadeInUp" style={{ animationDelay: '400ms', opacity: 0 }}>
                                <h3 className="text-2xl font-bold text-amber-600">Misi Kami</h3>
                                <ul className="mt-4 space-y-3 list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>Menyelenggarakan pembinaan intensif di berbagai cabang musabaqah.</li>
                                    <li>Menciptakan lingkungan yang Qur'ani, suportif, dan penuh kekeluargaan.</li>
                                    <li>Berperan aktif dalam kegiatan syiar Islam melalui berbagai program kreatif.</li>
                                    <li>Menjalin kemitraan strategis untuk memperluas jangkauan dakwah.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {periodeAktif && (
                    <section className="py-20 lg:py-24 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8">
                            <div className="text-center">
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Struktur Kepengurusan</h2>
                                <p className="mt-4 text-lg text-gray-600">Tim yang mengemban amanah pada Periode {periodeAktif.nama}</p>
                            </div>
                            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {periodeAktif.departemens.map((dept, index) => (
                                    <div key={dept.id} className="bg-white p-8 rounded-xl shadow-lg text-center animate-fadeInUp" style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}>
                                        <h4 className="text-xl font-bold text-gray-900">{dept.nama}</h4>
                                        <p className="mt-2 text-gray-500">{dept.deskripsi}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </PublicLayout>
    );
}