import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function PublicFooter() {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 300);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="bg-gray-50 text-gray-800 border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-flex items-center gap-3 text-amber-700 text-lg font-semibold hover:opacity-90">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden>
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            UKM PTQ UNIMAL
                        </Link>
                        <p className="text-sm text-gray-600">
                            Unit Kegiatan Mahasiswa Pengembangan Tilawatil Qur'an — tempat kita belajar, berkarya, dan berkhidmat untuk kampus dan komunitas.
                        </p>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-md bg-white border border-gray-100 text-gray-700 hover:bg-amber-50 transition"
                                aria-label="Facebook"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9.1c0-2.2 1.3-3.5 3.3-3.5.96 0 1.96.17 1.96.17v2.1h-1.07c-1.06 0-1.39.66-1.39 1.34v1.6h2.36l-.38 2.9h-1.98v7A10 10 0 0022 12z" /></svg>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-md bg-white border border-gray-100 text-gray-700 hover:bg-amber-50 transition"
                                aria-label="Instagram"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zM17.8 6.2a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z"/></svg>
                            </a>
                            <a
                                href="https://wa.me/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-md bg-white border border-gray-100 text-gray-700 hover:bg-amber-50 transition"
                                aria-label="WhatsApp"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20 5.5A9.5 9.5 0 105.5 20L3 21l1.1-2.5A9.5 9.5 0 0020 5.5zM12 17a5 5 0 01-2.9-.96l-.21-.15-1.77.47.47-1.73-.14-.24A5 5 0 1112 17z"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900">Tautan</h4>
                            <ul className="mt-4 space-y-3 text-sm">
                                <li><Link href={route('beranda')} className="text-gray-600 hover:text-gray-900 transition">Beranda</Link></li>
                                <li><Link href={route('tentang-kami')} className="text-gray-600 hover:text-gray-900 transition">Tentang Kami</Link></li>
                                <li><Link href={route('artikel.index')} className="text-gray-600 hover:text-gray-900 transition">Jurnal</Link></li>
                                <li><Link href={route('agenda.index')} className="text-gray-600 hover:text-gray-900 transition">Agenda</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-gray-900">Kontak</h4>
                            <address className="not-italic mt-4 text-sm space-y-2 text-gray-600">
                                <div>Sekretariat UKM PTQ</div>
                                <div>Universitas Malikussaleh, Aceh Utara</div>
                                <div>Telp: <a href="tel:+628000000000" className="hover:underline text-gray-700">+62 800-0000-000</a></div>
                                <div>Email: <a href="mailto:info@ukmptq.unimal.id" className="hover:underline text-gray-700">info@ukmptq.unimal.id</a></div>
                            </address>
                        </div>
                    </div>

                    {/* Newsletter / CTA */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-gray-900">Tetap Terhubung</h4>
                        <p className="text-sm text-gray-600">Dapatkan ringkasan kegiatan dan pengumuman penting melalui surel singkat.</p>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = new FormData(e.target);
                                // Simple progressive UX: mengirim ke route backend jika tersedia
                                // server-side handling expected; ini placeholder untuk UI
                                const email = data.get('email');
                                if (!email) return;
                                alert(`Terima kasih. Jika ini produksi, kita akan kirim ke server: ${email}`);
                                e.currentTarget.reset();
                            }}
                            className="flex gap-2"
                            aria-label="Berlangganan newsletter"
                        >
                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="Email anda"
                                className="flex-1 px-3 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                                aria-label="Email untuk berlangganan"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 rounded-md bg-amber-700 text-white text-sm font-semibold hover:bg-amber-800 transition"
                                aria-label="Berlangganan"
                            >
                                Daftar
                            </button>
                        </form>

                        <p className="text-xs text-gray-500">Kami menghormati privasi Anda. Hanya pengumuman berkala dan hal penting.</p>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} UKM PTQ UNIMAL. Dirancang dengan dedikasi.
                    </p>

                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900 transition">Privasi</Link>
                        <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900 transition">Syarat</Link>
                    </div>
                </div>
            </div>

            {/* Back to top */}
            <button
                onClick={scrollToTop}
                aria-label="Kembali ke atas"
                className={`fixed right-6 bottom-6 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-opacity duration-300 ${
                    showTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                } bg-amber-600 text-white hover:bg-amber-700`}
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
        </footer>
    );
}
