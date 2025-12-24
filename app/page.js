import Link from 'next/link';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden">
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
                    FitLife is the simplest, most intuitive workout tracking experience.
                    Trusted by fitness enthusiasts worldwide.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link href="/signup" className="group bg-blue-600 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-blue-700 transition-all hover:scale-105 shadow-2xl shadow-blue-900/50 flex items-center gap-2">
                        Get Started
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                    <Link href="/login" className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-white/10 transition-all hover:scale-105">
                        Log In
                    </Link>
                </div>
            </div>
        </main>
    );
}
