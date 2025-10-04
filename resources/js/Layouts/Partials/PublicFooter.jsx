export default function PublicFooter() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-lg font-bold">UKM PTQ UNIMAL</h3>
                        <p className="mt-2 text-sm text-gray-400">
                            Unit Kegiatan Mahasiswa Pengembangan Tilawatil Qur'an Universitas Malikussaleh.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Tautan Cepat</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Beranda</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Artikel</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Galeri</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Hubungi Kami</h3>
                        <p className="mt-4 text-sm text-gray-400">
                            Sekretariat UKM PTQ, Kampus Utama Unimal,
                            <br />
                            Aceh Utara, Indonesia.
                        </p>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 text-center">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} UKM PTQ UNIMAL. Dirancang dan dikembangkan dengan sepenuh hati.
                    </p>
                </div>
            </div>
        </footer>
    );
}