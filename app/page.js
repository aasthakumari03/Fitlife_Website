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
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-r from-blue-400 via-blue-100 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-fade-in-up delay-100">
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
                        className="group relative px-8 py-4 rounded-full bg-[var(--chalk-white)] text-[var(--bg-charcoal)] font-bold tracking-wide overflow-hidden transition-transform hover:scale-105"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Start Training <ArrowRight size={18} />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>

                    <Link
                        href="/progress"
                        className="group px-8 py-4 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md text-[var(--chalk-white)] font-medium tracking-wide hover:bg-white/5 transition-colors flex items-center gap-2"
                    >
                        <Activity size={18} className="text-[var(--electric-blue)]" />
                        View Progress
                    </Link>
                </div>
            </div>



        </main>
    );
}
