"use client";
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

            <div className="relative z-20 text-center max-w-5xl mx-auto px-6 mb-32">
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

            {/* Featured Projects Section */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-10 mb-40">
                <div className="flex items-end justify-between mb-16 px-4">
                    <div>
                        <span className="text-blue-500 font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Selected Works</span>
                        <h2 className="text-5xl font-black text-white tracking-tighter">Featured Projects</h2>
                    </div>
                    <div className="hidden md:block w-1/3 h-[1px] bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "FitLife Tracker",
                            desc: "A comprehensive fitness ecosystem with real-time tracking and personalized insights.",
                            tags: ["Next.js", "Tailwind", "Firebase"],
                            color: "blue"
                        },
                        {
                            title: "Nebula UI Kit",
                            desc: "A futuristic design system for data-heavy applications with galaxy-themed components.",
                            tags: ["React", "Framer Motion", "CSS"],
                            color: "purple"
                        },
                        {
                            title: "Zenith CRM",
                            desc: "High-performance customer relationship management tool built for speed and efficiency.",
                            tags: ["TypeScript", "Node.js", "Redis"],
                            color: "indigo"
                        }
                    ].map((project, i) => (
                        <div
                            key={i}
                            className="group relative bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 ring-1 ring-white/5"
                        >
                            <div className="absolute top-0 right-10 w-20 h-20 bg-blue-500/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8">{project.desc}</p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, j) => (
                                    <span key={j} className="text-[10px] uppercase tracking-widest font-black text-white/40 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 group-hover:border-blue-500/30 group-hover:text-blue-400/80 transition-all duration-500">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Technical Arsenal Section */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-10 mb-40">
                <div className="flex items-end justify-between mb-16 px-4">
                    <div className="hidden md:block w-1/3 h-[1px] bg-gradient-to-l from-white/20 to-transparent"></div>
                    <div className="text-right">
                        <span className="text-blue-500 font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Powering the Future</span>
                        <h2 className="text-5xl font-black text-white tracking-tighter">Technical Arsenal</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            cat: "Frontend",
                            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
                            icon: "✨"
                        },
                        {
                            cat: "Backend",
                            skills: ["Node.js", "Express", "Python", "Go"],
                            icon: "⚙️"
                        },
                        {
                            cat: "Cloud & Devops",
                            skills: ["AWS", "Docker", "CI/CD", "Kubernetes"],
                            icon: "☁️"
                        },
                        {
                            cat: "Design",
                            skills: ["Figma", "Adobe CC", "Spline", "Blender"],
                            icon: "🎨"
                        }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group relative bg-white/[0.03] border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-3xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-700 hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-[60px] group-hover:bg-blue-500/20 transition-all duration-700"></div>

                            <div className="text-3xl mb-6">{item.icon}</div>
                            <h3 className="text-xl font-black text-white mb-6 tracking-tight uppercase group-hover:text-blue-400 transition-colors">{item.cat}</h3>
                            <div className="space-y-3">
                                {item.skills.map((skill, j) => (
                                    <div key={j} className="flex items-center gap-3">
                                        <div className="w-1 h-1 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors"></div>
                                        <span className="text-slate-400 text-sm group-hover:text-white transition-colors">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
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
            <footer className="relative z-20 w-full px-12 py-12 flex justify-between items-center opacity-40 hover:opacity-100 transition-opacity duration-500 mt-20">
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
    );
}
