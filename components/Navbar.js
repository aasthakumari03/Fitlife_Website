"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogIn, UserPlus } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === '/';

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHome ? 'bg-slate-900/50 backdrop-blur-md text-white' : 'bg-white/80 backdrop-blur-md shadow-sm border-b text-gray-800'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group transition-all duration-300">
                    <Logo />
                    <span className="text-2xl font-black tracking-tighter uppercase italic">fit-tracker</span>
                </Link>

                <div className="flex items-center gap-4 md:gap-8">
                    <Link
                        href="/login"
                        className={`group flex items-center gap-2 font-semibold transition-all hover:translate-y-[-1px] ${isHome ? 'text-slate-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}
                    >
                        <LogIn className="w-5 h-5 transition-transform group-hover:scale-110" />
                        <span className="hidden sm:inline">Login</span>
                    </Link>
                    <Link
                        href="/signup"
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold transition-all hover:shadow-lg hover:translate-y-[-2px] active:scale-95 ${isHome ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20'}`}
                    >
                        <UserPlus className="w-5 h-5" />
                        <span className="hidden sm:inline">Sign Up</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
