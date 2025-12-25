import Link from 'next/link';
import Logo from '@/components/Logo';
import { LogIn, UserPlus, Github, Linkedin, Instagram } from 'lucide-react';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden">
            {/* Logo and Social Icons in top left corner */}
            <div className="absolute top-8 left-8 z-30 flex items-center gap-6">
                <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                    <Logo className="w-8 h-8" />
                    <span className="text-2xl font-black tracking-tighter uppercase italic text-white drop-shadow-md">fit-tracker</span>
                </Link>

                {/* Social Media Link Icons */}
                <div className="flex items-center gap-3 border-l border-white/20 pl-6">
                    <a href="https://github.com/aasthakumari03" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/40 border border-white/30 rounded-xl backdrop-blur-md text-white hover:bg-white/20 transition-all hover:scale-110 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/aastha-kumari-2116a837a" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/40 border border-white/30 rounded-xl backdrop-blur-md text-white hover:bg-white/20 transition-all hover:scale-110 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com/the_nytheris/#" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/40 border border-white/30 rounded-xl backdrop-blur-md text-white hover:bg-white/20 transition-all hover:scale-110 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <Instagram size={20} />
                    </a>
                </div>
            </div>

            {/* Navigation Bar in top right corner */}
            <div className="absolute top-8 right-8 z-30 flex items-center gap-4">
                <Link
                    href="/login"
                    className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-2xl hover:bg-white/10 transition-all hover:scale-105 group"
                >
                    <LogIn size={18} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <span className="font-bold text-sm tracking-wide">LOGIN</span>
                </Link>
                <Link
                    href="/signup"
                    className="flex items-center gap-2 bg-blue-600 border border-blue-500 backdrop-blur-md text-white px-5 py-2.5 rounded-2xl hover:bg-blue-700 transition-all hover:scale-105 group shadow-lg shadow-blue-500/20"
                >
                    <UserPlus size={18} className="text-white transition-transform group-hover:scale-110" />
                    <span className="font-bold text-sm tracking-wide">GET STARTED</span>
                </Link>
            </div>

            {/* Background Image Container */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
                style={{
                    backgroundImage: "url('/images/gym-bg.png')",
                    filter: "brightness(0.6) contrast(1.1)"
                }}
            ></div>

            {/* Dark Overlay Gradient - Deepened */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950 z-10"></div>

            <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-white">
                    Think less. <br />
                    <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">Lift more.</span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                    fit-tracker is the simplest, most intuitive workout tracking experience.
                    Trusted by fitness enthusiasts worldwide.
                </p>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-8 left-0 right-0 z-20 px-8 flex justify-between items-end">
                {/* AK Logo only in the footer bottom-left */}
                <div className="group cursor-pointer">
                    <Logo variant="AK" className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity" />
                </div>

                <div className="text-center absolute left-1/2 -translate-x-1/2">
                    <p className="text-slate-500 text-sm font-light tracking-wide">
                        with ❤️ by Aastha.
                    </p>
                    <p className="text-slate-600 text-xs mt-1 font-light tracking-widest uppercase">
                        2025
                    </p>
                </div>

                {/* Empty div for right side balance if needed, or just leave it */}
                <div className="w-8 h-8"></div>
            </footer>
        </main>
    );
}
