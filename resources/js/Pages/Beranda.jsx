import { Link, Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Beranda({ auth, artikels = [], agendas = [] }) {
    const truncateText = (text, length) => {
        if (!text) return '';
        return text.length > length ? text.substring(0, length) + '...' : text;
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    return (
        <PublicLayout>
            <Head title="Selamat Datang di Rumah Digital UKM PTQ UNIMAL" />
            
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 bg-gray-50 flex items-center justify-center text-center">
                 <div className="relative z-10 max-w-4xl mx-auto px-6">
                     <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                         Bukan Sekadar Organisasi, <br /> Ini Adalah <span className="text-amber-600">Rumah Kita Bersama.</span>
                     </h1>
                     <p className="mt-6 text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                         Di sini, di UKM PTQ UNIMAL, kami tidak hanya belajar tentang Al-Qur'an. Kami membangun sebuah keluarga, merangkai cerita, dan menumbuhkan potensi diri dalam sebuah ekosistem digital yang hangat dan kolaboratif. Selamat datang di rumah digital kita.
                     </p>
                     <div className="mt-10">
                         <Link
                             href={route('login')}
                             className="px-8 py-3 text-lg font-semibold text-white bg-amber-600 rounded-full shadow-lg hover:bg-amber-700 transition-all transform hover:scale-105"
                         >
                             Masuk ke Ruang Anggota
                         </Link>
                     </div>
                 </div>
             </section>

             <section id="tentang-kami" className="py-20 lg:py-28">
                 <div className="max-w-7xl mx-auto px-6 lg:px-8">
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                         <div>
                             <h2 className="text-sm font-bold uppercase text-amber-600 tracking-widest">Kisah Kami</h2>
                             <h3 className="mt-4 text-3xl lg:text-4xl font-bold text-gray-900">
                                 Dari Sebuah Niat, Menjadi Sebuah Pergerakan.
                             </h3>
                             <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                 Berawal dari sekumpulan kecil mahasiswa yang memiliki kecintaan yang sama terhadap Al-Qur'an, UKM PTQ UNIMAL lahir dari sebuah niat sederhana: untuk menciptakan sebuah wadah di mana setiap individu bisa belajar, berbagi, dan bertumbuh bersama Kalam Ilahi.
                             </p>
                            <div className="mt-8">
                                 <Link href={route('tentang-kami')} className="font-semibold text-amber-600 hover:text-amber-800 transition-colors text-lg">
                                     Selami Kisah Kami Lebih Dalam &rarr;
                                 </Link>
                             </div>
                         </div>
                         <div className="grid grid-cols-2 gap-4">
                             <img src="https://picsum.photos/seed/kegiatan1/300/400" alt="Kegiatan UKM PTQ 1" className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"/>
                             <img src="https://picsum.photos/seed/kegiatan2/300/400" alt="Kegiatan UKM PTQ 2" className="rounded-xl shadow-lg mt-8 transform hover:scale-105 transition-transform duration-300"/>
                         </div>
                     </div>
                 </div>
             </section>

            <section id="kabar-terbaru" className="py-20 lg:py-28 bg-gray-50">
                 <div className="max-w-7xl mx-auto px-6 lg:px-8">
                     <div className="text-center">
                         <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Jendela Informasi Keluarga PTQ</h2>
                         <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Ikuti setiap jejak langkah, prestasi, dan cerita inspiratif dari keluarga besar kita.</p>
                     </div>
            
                     {artikels.length > 0 ? (
                         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                             {artikels.map((artikel) => (
                                 <div key={artikel.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
                                     <Link href={route('artikel.show', artikel.slug)} className="block">
                                         <div className="overflow-hidden">
                                             <img className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src={`https://picsum.photos/seed/${artikel.id}/400/300`} alt={artikel.judul} />
                                         </div>
                                         <div className="p-6">
                                             <h3 className="text-xl font-bold text-gray-900 mb-2 h-20">{artikel.judul}</h3>
                                             <p className="text-gray-600 mb-4 text-sm h-24">{truncateText(artikel.isi, 120)}</p>
                                             <span className="font-semibold text-amber-600 group-hover:text-amber-800 transition-colors">
                                                 Baca Selengkapnya &rarr;
                                             </span>
                                         </div>
                                     </Link>
                                 </div>
                             ))}
                         </div>
                     ) : (
                         <p className="mt-16 text-center text-gray-500">Saat ini belum ada kabar terbaru untuk dibagikan.</p>
                     )}
                      <div className="mt-16 text-center">
                         <Link href={route('artikel.index')} className="px-8 py-3 font-semibold text-amber-600 bg-amber-100 rounded-full hover:bg-amber-200 transition-all">
                             Lihat Semua Jurnal Perjalanan
                         </Link>
                     </div>
                 </div>
             </section>
        </PublicLayout>
    );
}