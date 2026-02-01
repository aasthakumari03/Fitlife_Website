"use client";
import React from 'react';
import { User, Medal, Calendar, Award } from 'lucide-react';

export default function Profile() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-8">
            <div className="glass-panel rounded-[40px] p-12 text-center md:text-left md:flex items-center gap-12">
                {/* Avatar */}
                <div className="relative mb-6 md:mb-0 mx-auto md:mx-0">
                    <div className="w-32 h-32 rounded-full bg-[var(--chalk-white)] flex items-center justify-center text-4xl font-bold text-[var(--bg-charcoal)] shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        AK
                    </div>
                    <div className="absolute bottom-0 right-0 p-2 bg-[var(--electric-blue)] rounded-full border-4 border-[var(--bg-charcoal)]">
                        <Award size={20} className="text-white" />
                    </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-2">Aastha Kumari</h1>
                    <p className="text-[var(--silver-accent)] mb-8">Gymnastics Specialist • Level 8</p>

                    <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                            <h4 className="text-2xl font-bold text-[var(--electric-blue)]">24</h4>
                            <p className="text-[10px] uppercase tracking-wider text-[var(--silver-accent)] mt-1">Workouts</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                            <h4 className="text-2xl font-bold text-[var(--electric-blue)]">135</h4>
                            <p className="text-[10px] uppercase tracking-wider text-[var(--silver-accent)] mt-1">Hours</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                            <h4 className="text-2xl font-bold text-[var(--electric-blue)]">14</h4>
                            <p className="text-[10px] uppercase tracking-wider text-[var(--silver-accent)] mt-1">Streak</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Badges or History could go below */}
        </main>
    );
}
