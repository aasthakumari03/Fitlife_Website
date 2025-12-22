import Link from 'next/link';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white relative overflow-hidden">
            {/* Background decoration or overlay could go here */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 opacity-80 z-0"></div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
                    Think less. <br />
                    <span className="text-blue-500">Lift more.</span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                    FitLife is the simplest, most intuitive workout tracking experience.
                    Trusted by fitness enthusiasts worldwide.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/signup" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg shadow-blue-900/50">
                        Download on App Store
                    </Link>
                    <Link href="/signup" className="bg-transparent border-2 border-slate-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition-transform hover:scale-105">
                        Get it on Google Play
                    </Link>
                </div>

                <p className="mt-12 text-slate-500 text-sm">
                    Available for iOS and Android. Web Dashboard included.
                </p>
            </div>
        </main>
    );
}
