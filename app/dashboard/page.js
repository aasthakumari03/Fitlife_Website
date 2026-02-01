"use client";
import React from 'react';
import HabitRing from '@/components/HabitRing';
import { Calendar, Grip } from 'lucide-react';

export default function Dashboard() {
    return (
        <main className="max-w-7xl mx-auto px-6 py-8">
            <header className="mb-12">
                <h1 className="text-4xl font-bold mb-2 chalk-text">Training Floor</h1>
                <p className="text-[var(--silver-accent)]">Focus on form. Execute with precision.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Daily Workout Summary */}
                <div className="col-span-1 md:col-span-2 glass-panel rounded-3xl p-8 hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-[var(--silver-accent)]">Today's Focus</span>
                            <h2 className="text-3xl font-bold mt-1">Upper Body Logic</h2>
                        </div>
                        <div className="p-3 bg-white/5 rounded-full">
                            <Calendar size={20} className="text-[var(--electric-blue)]" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        {[
                            { name: "Muscle Ups", sets: "5 sets", reps: "3 reps" },
                            { name: "Front Lever Holds", sets: "4 sets", reps: "15s" },
                            { name: "Handstand Pushups", sets: "3 sets", reps: "8 reps" },
                        ].map((exercise, i) => (
                            <div key={i} className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5">
                                <span className="font-medium text-[var(--chalk-white)]">{exercise.name}</span>
                                <div className="text-sm text-[var(--silver-accent)]">
                                    <span className="mr-4">{exercise.sets}</span>
                                    <span>{exercise.reps}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Grip Strength / Streak */}
                <div className="glass-panel rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                    <div className="mb-4 p-4 rounded-full bg-[var(--electric-blue)]/10 text-[var(--electric-blue)]">
                        <Grip size={32} />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-[var(--silver-accent)] mb-2">Grip Strength (Streak)</span>
                    <h3 className="text-6xl font-bold text-[var(--chalk-white)] mb-2">14</h3>
                    <p className="text-sm text-[var(--silver-accent)]">Consistent Days</p>
                </div>
            </div>

            {/* Habit Rings */}
            <div className="mt-8 glass-panel rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-8">Daily Disciplines</h3>
                <div className="flex flex-wrap justify-around gap-8">
                    <HabitRing percentage={85} label="Mobility" color="#5ca1e1" />
                    <HabitRing percentage={60} label="Hydration" color="#a0a4ab" />
                    <HabitRing percentage={100} label="Sleep" color="#5ca1e1" />
                    <HabitRing percentage={45} label="Protein" color="#a0a4ab" />
                </div>
            </div>
        </main>
    );
}
