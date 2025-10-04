import { Head, Link, usePage } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { useEffect, useState } from 'react';

export default function Tampil({ artikel, related = [], terbaru = [], prev = null, next = null }) {
    const { url } = usePage();
    const [progress, setProgress] = useState(0);

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString('id-ID', options).replace(/\./g, ':');
    };

    useEffect(() => {
        const onScroll = () => {
            const el = document.getElementById('article-content');
            if (!el) return setProgress(0);
            const rect = el.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            const total = Math.max(1, el.scrollHeight - viewHeight);
            const scrolled = Math.min(Math.max(0, -rect.top), total);
            setProgress(Math.round((scrolled / total) * 100));
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [artikel.id]);

    const share = (provider) => {
        const shareUrl = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(artikel.judul);
        let urlShare = '';
        if (provider === 'twitter') urlShare = `https://twitter.com/intent/tweet?text=${title}&url=${shareUrl}`;
        if (provider === 'whatsapp') urlShare = `https://wa.me/?text=${title}%20${shareUrl}`;
        if (provider === 'facebook') urlShare = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        window.open(urlShare, '_blank', 'noopener,noreferrer');
    };

    return (
        <PublicLayout>
            <Head title={artikel.judul} />

            {/* scroll progress */}
            <div className="fixed left-0 right-0 top-0 h-1 z-50 bg-transparent">
                <div
                    aria-hidden
                    className="h-1 bg-amber-600 transition-all"
                    style={{ width: `${progress}%`, boxShadow: '0 0 10px rgba(250, 204, 21, 0.35)' }}
                />
            </div>

            <main className="pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Main article */}
                    <article className="lg:col-span-2">
                        <header className="mb-8">
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <Link href={route('artikel.index')} className="text-sm text-gray-500 hover:underline">
                                        &larr; Kembali ke Jurnal
                                    </Link>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-gray-500">{formatDate(artikel.created_at)}</span>
                                    <button
                                        type="button"
                                        onClick={() => navigator.clipboard?.writeText(window.location.href)}
                                        className="text-sm text-gray-500 hover:text-amber-600 transition-colors"
                                        title="Salin tautan"
                                    >
                                        Salin tautan
                                    </button>
                                </div>
                            </div>

                            <h1 className="mt-4 text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                                {artikel.judul}
                            </h1>

                            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                                <Link
                                    href={route('artikel.index', { kategori: artikel.kategori_artikel?.slug })}
                                    className="inline-block px-2 py-1 text-xs font-semibold bg-amber-50 text-amber-700 rounded"
                                >
                                    {artikel.kategori_artikel?.nama || 'Tanpa kategori'}
                                </Link>
                                <span>•</span>
                                <span>Oleh <span className="font-medium text-gray-800">{artikel.user?.name || 'Penulis'}</span></span>
                            </div>

                            {/* share */}
                            <div className="mt-6 flex items-center gap-3">
                                <span className="text-sm text-gray-600">Bagikan:</span>
                                <button onClick={() => share('twitter')} className="px-3 py-1 rounded bg-blue-50 text-blue-600 text-sm hover:bg-blue-100 transition">Twitter</button>
                                <button onClick={() => share('facebook')} className="px-3 py-1 rounded bg-blue-50 text-blue-700 text-sm hover:bg-blue-100 transition">Facebook</button>
                                <button onClick={() => share('whatsapp')} className="px-3 py-1 rounded bg-green-50 text-green-600 text-sm hover:bg-green-100 transition">WhatsApp</button>
                            </div>
                        </header>

                        <div id="article-content" className="prose prose-lg lg:prose-xl max-w-none prose-amber">
                            <img
                                src={`https://picsum.photos/seed/${artikel.id}/1200/600`}
                                alt={artikel.judul}
                                className="w-full rounded-xl shadow-lg mb-8 object-cover"
                            />
                            {/* If artikel.isi contains HTML, render with dangerouslySetInnerHTML */}
                            <div dangerouslySetInnerHTML={{ __html: artikel.isi }} />
                        </div>

                        {/* navigation prev / next */}
                        <nav className="mt-12 flex flex-col sm:flex-row items-stretch gap-4">
                            {prev ? (
                                <Link
                                    href={route('artikel.show', prev.slug)}
                                    className="flex-1 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-colors"
                                >
                                    <div className="text-xs text-gray-500">Artikel sebelumnya</div>
                                    <div className="font-semibold text-gray-900 truncate">{prev.judul}</div>
                                </Link>
                            ) : (
                                <div className="flex-1 border border-gray-100 rounded-lg p-4 bg-gray-50 text-sm text-gray-400">Tidak ada artikel sebelumnya</div>
                            )}

                            {next ? (
                                <Link
                                    href={route('artikel.show', next.slug)}
                                    className="flex-1 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-colors text-right"
                                >
                                    <div className="text-xs text-gray-500">Artikel berikutnya</div>
                                    <div className="font-semibold text-gray-900 truncate">{next.judul}</div>
                                </Link>
                            ) : (
                                <div className="flex-1 border border-gray-100 rounded-lg p-4 bg-gray-50 text-sm text-gray-400 text-right">Tidak ada artikel berikutnya</div>
                            )}
                        </nav>

                        {/* related articles */}
                        {related?.length > 0 && (
                            <section className="mt-12">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Bacaan terkait</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {related.map((r) => (
                                        <Link
                                            key={r.id}
                                            href={route('artikel.show', r.slug)}
                                            className="group flex items-start gap-4 border border-gray-100 rounded-lg p-4 hover:shadow-md transition"
                                        >
                                            <img src={`https://picsum.photos/seed/${r.id}/160/100`} alt={r.judul} className="w-28 h-20 object-cover rounded-md" />
                                            <div>
                                                <h4 className="font-semibold text-gray-900 line-clamp-2">{r.judul}</h4>
                                                <p className="text-xs text-gray-500 mt-1">{new Date(r.created_at).toLocaleDateString('id-ID')}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}
                    </article>

                    {/* Sidebar */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-[92px] space-y-6">
                            {/* About / Author */}
                            <div className="bg-white border border-gray-100 rounded-lg p-4">
                                <h4 className="text-sm font-semibold text-gray-900">Tentang penulis</h4>
                                <p className="mt-2 text-sm text-gray-600">
                                    <span className="font-medium text-gray-800">{artikel.user?.name || 'Penulis'}</span>
                                    <br />
                                    {artikel.user?.bio || 'Belum ada bio singkat.'}
                                </p>
                                <div className="mt-3 flex gap-2">
                                    <Link href="#" className="text-xs text-amber-700 hover:underline">Lihat profil</Link>
                                    <span className="text-xs text-gray-300">•</span>
                                    <Link href={route('artikel.index', { kategori: artikel.kategori_artikel?.slug })} className="text-xs text-amber-700 hover:underline">Lihat kategori</Link>
                                </div>
                            </div>

                            {/* Terbaru */}
                            <div className="bg-white border border-gray-100 rounded-lg p-4">
                                <h4 className="text-sm font-semibold text-gray-900">Artikel terbaru</h4>
                                <ul className="mt-3 space-y-3">
                                    {terbaru.slice(0, 6).map((t) => (
                                        <li key={t.id}>
                                            <Link href={route('artikel.show', t.slug)} className="flex items-center justify-between text-sm text-gray-700 hover:text-amber-700 transition">
                                                <span className="truncate">{t.judul}</span>
                                                <span className="ml-2 text-xs text-gray-400">{new Date(t.created_at).toLocaleDateString('id-ID', { month: 'short', day: '2-digit' })}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <div className="bg-white border border-gray-100 rounded-lg p-4 text-center">
                                <h4 className="text-sm font-semibold text-gray-900">Ingin berkontribusi?</h4>
                                <p className="text-sm text-gray-600 mt-2">Kirim artikel, cerita, atau laporan kegiatanmu.</p>
                                <Link href={route('login')} className="mt-3 inline-block px-3 py-2 text-sm bg-amber-600 text-white rounded-md hover:bg-amber-700 transition">
                                    Masuk / Kirim Cerita
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </PublicLayout>
    );
}
