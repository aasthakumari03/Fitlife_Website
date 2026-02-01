"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Dumbbell, TrendingUp, User } from 'lucide-react';

const Navbar = () => {
    const pathname = usePathname();
    const isHome = pathname === '/';

    const navItems = [
        { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { label: 'Routines', href: '/routines', icon: Dumbbell },
        { label: 'Progress', href: '/progress', icon: TrendingUp },
        { label: 'Profile', href: '/profile', icon: User },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-full border-2 border-[var(--chalk-white)] flex items-center justify-center bg-[var(--bg-charcoal)] group-hover:bg-[var(--chalk-white)] transition-all duration-500">
                    <span className="text-xs font-bold text-[var(--chalk-white)] group-hover:text-[var(--bg-charcoal)] transition-colors">FL</span>
                </div>
                <span className="text-lg font-bold tracking-tight text-[var(--chalk-white)]">FitLife Tracker</span>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-1 p-1 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md transition-all duration-300">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                                ? 'bg-[var(--chalk-white)] text-[var(--bg-charcoal)] shadow-lg'
                                : 'text-[var(--silver-accent)] hover:text-[var(--chalk-white)] hover:bg-white/5'
                                }`}
                        >
                            <item.icon size={16} />
                            {item.label}
                        </Link>
                    )
                })}
            </div>

            {/* Mobile Menu Placeholder (Hidden on tablet+, visible/functional if needed later) */}
            <div className="md:hidden">
                {/* Simple generic menu icon/button could go here */}
            </div>
        </nav>
    );
};

export default Navbar;
