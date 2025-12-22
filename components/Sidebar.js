import Link from 'next/link';

export default function Sidebar() {
    const links = [
        { name: 'Overview', href: '/dashboard' },
        { name: 'Goals', href: '/dashboard/goals' },
        { name: 'Exercises', href: '/dashboard/exercises' },
        { name: 'Diet Plan', href: '/dashboard/diet' },
        // { name: 'Profile', href: '/profile-setup' }, // Maybe link back to edit mode?
    ];

    return (
        <aside className="w-64 bg-white border-r h-screen fixed left-0 top-0 overflow-y-auto hidden md:flex flex-col z-40">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-600 mb-8">FitLife Tracker</h2>
                <nav className="space-y-2">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="p-6 mt-auto border-t">
                <Link href="/" className="flex items-center text-red-500 hover:text-red-700 font-medium">
                    <span>Logout</span>
                </Link>
            </div>
        </aside>
    );
}
