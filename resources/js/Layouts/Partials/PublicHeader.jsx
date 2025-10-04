import { Link, usePage } from '@inertiajs/react';

export default function PublicHeader({ auth }) {
    const { url } = usePage();

    const isActive = (path) => url === path;

    return (
        <header className="absolute top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-amber-600 transition-colors">
                            UKM PTQ UNIMAL
                        </Link>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <Link href={route('tentang-kami')} className={`font-medium transition-colors ${isActive('/tentang-kami') ? 'text-amber-600' : 'text-gray-600 hover:text-amber-600'}`}>Tentang Kami</Link>
                        <Link href={route('artikel.index')} className={`font-medium transition-colors ${isActive('/artikel') ? 'text-amber-600' : 'text-gray-600 hover:text-amber-600'}`}>Jurnal</Link>
                        <Link href={route('agenda.index')} className={`font-medium transition-colors ${isActive('/agenda') ? 'text-amber-600' : 'text-gray-600 hover:text-amber-600'}`}>Agenda</Link>
                    </div>
                    <div className="flex items-center">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="ml-6 px-4 py-2 text-sm font-semibold text-white bg-amber-600 rounded-lg shadow-md hover:bg-amber-700 transition-all"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <Link
                                href={route('login')}
                                className="ml-6 px-4 py-2 text-sm font-semibold text-white bg-gray-800 rounded-lg shadow-md hover:bg-gray-900 transition-all"
                            >
                                Login Anggota
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}