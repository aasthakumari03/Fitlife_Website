"use client";
import Link from 'next/link';
import { LogIn, UserPlus, Github, Linkedin, Instagram } from 'lucide-react';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden selection:bg-blue-500/30">
            {/* Top Left: AK Logo and Socials */}
            <div className="absolute top-10 left-10 z-30 flex items-center gap-8">
                {/* AK Logo */}
                <div className="flex items-center gap-3 cursor-pointer group transition-all duration-75 ease-linear pointer-events-auto">
                    <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-white font-[family-name:var(--font-gothic)] font-bold text-xl transition-all group-hover:rotate-12 duration-500 shrink-0 shadow-lg shadow-slate-500/20 border border-white/10">
                        AK
                    </div>
                    <div className="logo-typing-text overflow-hidden whitespace-nowrap">
                        <span className="text-slate-300 font-[family-name:var(--font-gothic)] font-bold text-xl tracking-normal uppercase drop-shadow-md ml-3">
                            Aastha Kumari
                        </span>
                    </div>
                </div>

                {/* Social Media Link Icons */}
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
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Top Right: Navigation Bar */}
            <div className="absolute top-10 right-10 z-30 flex items-center gap-6">
                <Link
                    href="/login"
                    className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-xl text-white/90 px-6 py-3 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group ring-1 ring-white/5"
                >
                    <LogIn size={18} className="text-slate-400 group-hover:text-slate-300 transition-colors" />
                    <span className="font-bold text-xs tracking-[0.2em]">LOGIN</span>
                </Link>
                <Link
                    href="/signup"
                    className="flex items-center gap-2 bg-slate-700/50 border border-slate-600/50 backdrop-blur-xl text-white px-6 py-3 rounded-2xl hover:bg-slate-600 hover:border-slate-500 transition-all duration-300 hover:scale-105 group shadow-[0_0_20px_rgba(100,116,139,0.3)] ring-1 ring-slate-400/20"
                >
                    <UserPlus size={18} className="text-white transition-transform duration-300 group-hover:rotate-12" />
                    <span className="font-bold text-xs tracking-[0.2em]">GET STARTED</span>
                </Link>
            </div>

            {/* Center Content */}
            <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <span className="bg-gradient-to-b from-slate-200 to-slate-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(148,163,184,0.3)]">
                        Fitlife-Tracker
                    </span>
                </h1>
            </div>

            <style jsx>{`
                /* Logo Typewriter Effect */
                .logo-typing-text {
                    width: 0;
                    transition: width 0s;
                }

                .group:hover .logo-typing-text {
                    animation: typing 1.5s steps(13, end) forwards, blink 0.75s step-end infinite;
                    width: 200px;
                    margin-left: 12px;
                }

                @keyframes typing {
                    from { width: 0; }
                    to { width: 200px; }
                }

                @keyframes blink {
                    from, to { border-color: transparent; }
                    50% { border-color: white; }
                }
            `}</style>
        </main>
    );
}
