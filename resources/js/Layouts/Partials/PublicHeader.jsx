import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function PublicHeader({ auth }) {
    const { url } = usePage();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const isActive = (routeNameOrPattern) => {
        // Support exact route names and wildcard patterns (e.g., 'artikel.*')
        if (routeNameOrPattern.includes('*')) {
            const base = routeNameOrPattern.replace('.*', '');
            return route().current(`${base}.*`);
        }
        return route().current(routeNameOrPattern);
    };

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 4);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navItems = [
        { name: 'Beranda', href: route('beranda'), activeKey: 'beranda' },
        { name: 'Tentang Kami', href: route('tentang-kami'), activeKey: 'tentang-kami' },
        { name: 'Jurnal', href: route('artikel.index'), activeKey: 'artikel.*' },
        { name: 'Agenda', href: route('agenda.index'), activeKey: 'agenda.index' },
        { name: 'Galeri', href: route('galeri.index'), activeKey: 'galeri.index' },
        { name: 'Toko', href: route('toko.index'), activeKey: 'toko.index' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all ${
                isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/70 backdrop-blur-sm'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Brand */}
                    <Link
                        href="/"
                        className="flex items-center space-x-2 text-xl font-semibold text-gray-900 hover:text-amber-700 transition-colors"
                        aria-label="UKM PTQ UNIMAL - Beranda"
                    >
                        <span>UKM PTQ UNIMAL</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => {
                            const active = isActive(item.activeKey);
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="group px-3 py-2 rounded-md font-medium text-sm transition-colors"
                                >
                                    <span
                                        className={`${
                                            active ? 'text-amber-700' : 'text-gray-700 group-hover:text-amber-700'
                                        }`}
                                    >
                                        {item.name}
                                    </span>
                                    <span
                                        className={`block h-0.5 mt-1 rounded-full transition-all ${
                                            active
                                                ? 'w-full bg-amber-700'
                                                : 'w-0 bg-transparent group-hover:w-full group-hover:bg-amber-200'
                                        }`}
                                        aria-hidden
                                    />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center space-x-2">
                        {auth?.user ? (
                            <Link
                                href={route('dashboard')}
                                className="hidden sm:inline-flex px-3 py-2 text-sm font-semibold text-white bg-amber-700 rounded-md shadow-sm hover:bg-amber-800 transition-colors"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <Link
                                href={route('login')}
                                className="hidden sm:inline-flex px-3 py-2 text-sm font-semibold text-white bg-gray-900 rounded-md shadow-sm hover:bg-black transition-colors"
                            >
                                Login Anggota
                            </Link>
                        )}

                        {/* Mobile toggle */}
                        <button
                            type="button"
                            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                            aria-label="Buka menu"
                            aria-expanded={mobileOpen}
                            onClick={() => setMobileOpen((o) => !o)}
                        >
                            <svg
                                className={`w-5 h-5 transition-transform ${mobileOpen ? 'rotate-90' : ''}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                {mobileOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <>
                                        <line x1="3" y1="6" x2="21" y2="6" />
                                        <line x1="3" y1="12" x2="21" y2="12" />
                                        <line x1="3" y1="18" x2="21" y2="18" />
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden border-t border-gray-200 overflow-hidden transition-[max-height,opacity] duration-300 ${
                    mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="px-4 pt-2 pb-4 space-y-1 bg-white/90 backdrop-blur-md">
                    {navItems.map((item) => {
                        const active = isActive(item.activeKey);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex justify-between items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                    active ? 'bg-amber-50 text-amber-800' : 'text-gray-800 hover:bg-gray-100'
                                }`}
                                onClick={() => setMobileOpen(false)}
                            >
                                <span>{item.name}</span>
                                {active && (
                                    <span className="inline-block w-2 h-2 rounded-full bg-amber-600" aria-hidden />
                                )}
                            </Link>
                        );
                    })}

                    <div className="mt-2 pt-2 border-t border-gray-200">
                        {auth?.user ? (
                            <Link
                                href={route('dashboard')}
                                className="block px-3 py-2 rounded-md bg-amber-700 text-white text-sm font-semibold hover:bg-amber-800 transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <Link
                                href={route('login')}
                                className="block px-3 py-2 rounded-md bg-gray-900 text-white text-sm font-semibold hover:bg-black transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                Login Anggota
                            </Link>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
}
