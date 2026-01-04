import Link from 'next/link';
import Logo from './Logo';

export default function Sidebar() {
    const links = [
        { name: 'Overview', href: '/dashboard' },
        { name: 'Goals', href: '/dashboard/goals' },
        { name: 'Exercises', href: '/dashboard/exercises' },
        { name: 'Diet Plan', href: '/dashboard/diet' },
        // { name: 'Profile', href: '/profile-setup' }, // Maybe link back to edit mode?
    ];

    return (
        <aside className="w-64 bg-black/40 backdrop-blur-xl border-r border-white/5 h-screen fixed left-0 top-0 overflow-y-auto hidden md:flex flex-col z-40 text-white">
            <div className="p-6">
                <div className="flex items-center gap-2 mb-8 group">
                    <Logo className="w-5 h-5" />
                    <h2 className="text-2xl font-bold text-white tracking-tighter italic">fit-tracker</h2>
                </div>
                <nav className="space-y-2">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="block px-4 py-3 text-white/70 hover:bg-white/10 hover:text-white rounded-lg font-medium transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="p-6 mt-auto border-t border-white/5">
                <Link href="/" className="flex items-center text-red-400 hover:text-red-300 font-medium font-bold">
                    <span>Logout</span>
                </Link>
            </div>
        </aside>
    );
}
