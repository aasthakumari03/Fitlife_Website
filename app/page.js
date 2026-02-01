"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Activity } from 'lucide-react';

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-[85vh] px-6 text-center relative overflow-hidden">

            {/* Hero Content */}
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

                {/* Badge */}


                {/* Title */}
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 chalk-text animate-fade-in-up delay-100">
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

            {/* Background Effect (Light Rays) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--electric-blue)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

        </main>
    );
}
