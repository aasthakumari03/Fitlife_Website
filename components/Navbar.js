"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogIn, UserPlus, Dumbbell } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === '/';

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isHome ? 'bg-transparent text-white' : 'bg-white shadow-sm border-b text-gray-800'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <Link href="/" className={`text-2xl font-bold flex items-center gap-2 ${isHome ? 'text-white' : 'text-blue-600'}`}>
                    <Dumbbell className="w-8 h-8" />
                    <span className="tracking-tighter uppercase">FitLife</span>
                </Link>
                <div className="flex items-center space-x-6">
                    <Link href="/login" className={`flex items-center gap-2 font-medium hover:opacity-80 transition-opacity ${isHome ? 'text-white' : 'text-gray-600 hover:text-blue-600'}`}>
                        <LogIn className="w-5 h-5" />
                        <span>Login</span>
                    </Link>
                    <Link href="/signup" className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-all ${isHome ? 'bg-white text-slate-900 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                        <UserPlus className="w-5 h-5" />
                        <span>Sign Up</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
