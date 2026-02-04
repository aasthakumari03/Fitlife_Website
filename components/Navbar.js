"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Dumbbell, TrendingUp, User, LogIn, Zap } from 'lucide-react';

const TypewriterLogo = ({ initials, fullName, shape = 'circle', href = '/' }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [displayText, setDisplayText] = useState(initials);

    useEffect(() => {
        let interval;
        if (isHovered) {
            let currentIndex = 0;
            setDisplayText('');
            interval = setInterval(() => {
                if (currentIndex < fullName.length) {
                    setDisplayText((prev) => prev + fullName[currentIndex]);
                    currentIndex++;
                } else {
                    clearInterval(interval);
                }
            }, 50); // Typing speed
        } else {
            setDisplayText(initials);
        }
        return () => clearInterval(interval);
    }, [isHovered, initials, fullName]);

    return (
        <Link
            href={href}
            className="flex items-center gap-2 group decoration-none" // decoration-none to prevent underline
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`
                ${shape === 'circle' ? 'rounded-full' : 'rounded-lg'} 
                border-2 border-[var(--chalk-white)] 
                bg-[var(--bg-charcoal)] 
                group-hover:bg-[var(--chalk-white)] 
                transition-all duration-500
                flex items-center justify-center
                h-12 min-w-[3rem] px-3 theme-transition
            `}>
                <span className={`
                    font-gothic font-bold text-xl
                    text-[var(--chalk-white)] 
                    group-hover:text-[var(--bg-charcoal)] 
                    transition-colors whitespace-nowrap
                `}>
                    {displayText}
                </span>
            </div>
        </Link>
    );
};

const Navbar = () => {
    const pathname = usePathname();

    const navItems = [
        { label: 'Dashboard', href: '/', icon: LayoutDashboard },
        { label: 'Profile', href: '/profile', icon: User },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between">
            {/* Top Left: AK Logo */}


            {/* Top Right: Nav Links + FL Logo */}
            <div className="flex items-center gap-4 ml-auto">
                {/* FL Logo (Before Dashboard) */}


                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-2 p-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md transition-all duration-300">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${isActive
                                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                                    : 'text-slate-400 hover:text-white hover:bg-white/10 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]'
                                    }`}
                            >
                                <item.icon size={18} />
                                {item.label}
                            </Link>
                        )
                    })}
                </div>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-3 ml-4">
                    <Link
                        href="/login"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                    >
                        <LogIn size={18} />
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-white text-black hover:bg-slate-200 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    >
                        <Zap size={18} className="fill-current" />
                        Get Started
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Placeholder */}
            <div className="md:hidden">
            </div>
        </nav>
    );
};

export default Navbar;
