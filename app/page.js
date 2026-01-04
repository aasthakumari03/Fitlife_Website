import Link from 'next/link';
import Logo from '@/components/Logo';
import { LogIn, UserPlus, Github, Linkedin, Instagram } from 'lucide-react';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden selection:bg-blue-500/30">
            {/* Logo and Social Icons in top left corner */}
            <div className="absolute top-10 left-10 z-30 flex items-center gap-8">
                <Link href="/" className="flex items-center gap-4 group cursor-pointer">
                    <Logo className="w-10 h-10" />
                    <span className="text-3xl font-black tracking-tighter uppercase italic text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] group-hover:text-blue-400 transition-colors duration-300">fit-tracker</span>
                </Link>

                {/* Social Media Link Icons - Enhanced Glassmorphism */}
                <div className="flex items-center gap-4 border-l border-white/10 pl-8">
                    {[
                        { icon: <Github size={20} />, href: "https://github.com/aasthakumari03" },
                        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/aastha-kumari-2116a837a" },
                        { icon: <Instagram size={20} />, href: "https://www.instagram.com/the_nytheris/#" }
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 shadow-xl ring-1 ring-white/5 overflow-hidden group"
                        >
                            <div className="relative z-10">{social.icon}</div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Navigation Bar in top right corner - Enhanced Glassmorphism */}
            <div className="absolute top-10 right-10 z-30 flex items-center gap-6">
                <Link
                    href="/login"
                    className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-xl text-white/90 px-6 py-3 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group ring-1 ring-white/5"
                >
                    <LogIn size={18} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <span className="font-bold text-xs tracking-[0.2em]">LOGIN</span>
                </Link>
                <Link
                    href="/signup"
                    className="flex items-center gap-2 bg-blue-600 border border-blue-500/50 backdrop-blur-xl text-white px-6 py-3 rounded-2xl hover:bg-blue-500 hover:border-blue-400 transition-all duration-300 hover:scale-105 group shadow-[0_0_20px_rgba(37,99,235,0.3)] ring-1 ring-blue-400/20"
                >
                    <UserPlus size={18} className="text-white transition-transform duration-300 group-hover:rotate-12" />
                    <span className="font-bold text-xs tracking-[0.2em]">GET STARTED</span>
                </Link>
            </div>

            <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
                <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter text-white leading-[0.9] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    Think less. <br />
                    <span className="bg-gradient-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        Lift more.
                    </span>
                </h1>
                <p className="text-xl md:text-3xl mb-12 text-slate-400/80 max-w-3xl mx-auto font-light leading-relaxed tracking-tight">
                    Fit-tracker is the <span className="text-white font-medium">simplest, most intuitive</span> workout tracking experience for serious fitness enthusiasts.
                </p>

                <div className="flex justify-center gap-4 opacity-50">
                    <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/40 self-center"></div>
                    <span className="text-[10px] uppercase tracking-[0.5em] text-white/60 font-bold">The Galaxy Edition</span>
                    <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-white/40 self-center"></div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 via-white/5 to-transparent relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-bounce-slow"></div>
                </div>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-8 left-0 right-0 z-20 px-8 flex justify-between items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
                <div className="flex gap-4 text-[10px] tracking-[0.2em] uppercase font-bold text-white/40">
                    <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
                </div>
                <div className="text-center">
                    <p className="text-white/60 text-xs font-light tracking-wide">
                        with ❤️ by <span className="font-kaushan text-base text-blue-400/80">Aastha Kumari</span>.
                    </p>
                </div>
                <div className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-bold">
                    © 2025 FT_CORP
                </div>
            </footer>

            <style jsx>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(-100%) }
                    50% { transform: translateY(200%) }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }
            `}</style>
        </main>
        </main >
    );
}
