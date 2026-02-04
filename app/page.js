"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Activity } from 'lucide-react';
import AnimatedSilhouette from '@/components/AnimatedSilhouette';
import BreathingBackground from '@/components/BreathingBackground';

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-[85vh] px-6 text-center relative overflow-hidden">
            <BreathingBackground />


            {/* Hero Content */}
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

                {/* Badge */}


                {/* Title */}
                <h1 className="text-7xl md:text-9xl font-gothic tracking-wider mb-6 bg-gradient-to-r from-blue-400 via-blue-100 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-fade-in-up delay-100">
                    FitLife Tracker
                </h1>

                {/* Subheading */}
                <p className="text-xl md:text-2xl text-[var(--silver-accent)] font-light tracking-wide mb-12 max-w-2xl animate-fade-in-up delay-200">
                    Build balance. Train consistency. Track progress.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in-up delay-300">
                    <Link
                        href="/dashboard"
                        className="group relative h-14 bg-[var(--chalk-white)] text-[var(--bg-charcoal)] font-bold tracking-wide rounded-full overflow-hidden transition-all duration-500 hover:px-8 px-0 min-w-[3.5rem] flex items-center justify-center"
                    >
                        <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:scale-0 group-hover:rotate-90">
                            <ArrowRight size={24} />
                        </span>
                        <span className="opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs transition-all duration-500 whitespace-nowrap overflow-hidden">
                            Start Training
                        </span>
                    </Link>

                    <Link
                        href="/progress"
                        className="group px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[var(--chalk-white)] font-medium tracking-wide hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 flex items-center gap-2"
                    >
                        <Activity size={18} className="text-[var(--electric-blue)] group-hover:scale-110 transition-transform" />
                        View Progress
                    </Link>
                </div>
            </div>



        </main>
    );
}
