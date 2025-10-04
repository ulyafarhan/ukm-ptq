import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Tampil({ artikel }) {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString('id-ID', options).replace(/\./g, ':');
    };

    return (
        <PublicLayout>
            <Head title={artikel.judul} />

            <main className="pt-24 pb-16">
                <article className="max-w-4xl mx-auto px-6 lg:px-8">
                    <header className="mb-12 text-center">
                        <Link href={route('artikel.index')} className="text-amber-600 font-semibold hover:underline">
                            &larr; Kembali ke Jurnal
                        </Link>
                        <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                            {artikel.judul}
                        </h1>
                        <p className="mt-6 text-md text-gray-500">
                            Dipublikasikan pada {formatDate(artikel.created_at)}
                        </p>
                    </header>

                    <div className="prose prose-lg lg:prose-xl max-w-none prose-amber">
                        <img 
                            src={`https://picsum.photos/seed/${artikel.id}/800/400`} 
                            alt={artikel.judul}
                            className="rounded-xl shadow-lg mb-8"
                        />
                        <p>{artikel.isi}</p>
                    </div>
                </article>
            </main>
        </PublicLayout>
    );
}