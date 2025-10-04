import PublicHeader from './Partials/PublicHeader';
import PublicFooter from './Partials/PublicFooter';
import { usePage } from '@inertiajs/react';

export default function PublicLayout({ children }) {
    const { auth } = usePage().props;

    return (
        <div className="bg-white text-gray-700 font-sans antialiased">
            <PublicHeader auth={auth} />
            <main>{children}</main>
            <PublicFooter />
        </div>
    );
}