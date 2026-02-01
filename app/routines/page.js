"use client";
import React, { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const RoutineCard = ({ routine }) => {
    const [completed, setCompleted] = useState(false);

    return (
        <div className={`glass-panel p-6 rounded-2xl flex items-center justify-between transition-all duration-500 group ${completed ? 'border-[var(--electric-blue)] shadow-[0_0_20px_rgba(92,161,225,0.15)]' : 'hover:bg-white/5'}`}>
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <h3 className={`text-xl font-bold transition-colors ${completed ? 'text-[var(--electric-blue)]' : 'text-[var(--chalk-white)]'}`}>
                        {routine.title}
                    </h3>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-white/10 text-[var(--silver-accent)]">
                        {routine.difficulty}
                    </span>
                </div>
                <p className="text-sm text-[var(--silver-accent)]">{routine.description}</p>
            </div>

            <button
                onClick={() => setCompleted(!completed)}
                className="text-[var(--electric-blue)] hover:scale-110 transition-transform p-2"
            >
                {completed ? <CheckCircle2 size={32} className="fill-[var(--electric-blue)]/10" /> : <Circle size={32} className="text-[var(--silver-accent)] group-hover:text-[var(--electric-blue)]" />}
            </button>
        </div>
    );
};

export default function Routines() {
    const routines = [
        { title: "Morning Mobility", difficulty: "Beginner", description: "Joint rotations and gentle stretches." },
        { title: "Handstand Progression", difficulty: "Advanced", description: "Wall holds, kick-ups, and balance drills." },
        { title: "Iron Cross Prep", difficulty: "Elite", description: "Ring supports and straight arm strength." },
        { title: "Core Compression", difficulty: "Intermediate", description: "L-sits and hollow body holds." },
    ];

    return (
        <main className="max-w-4xl mx-auto px-6 py-8">
            <header className="mb-12">
                <h1 className="text-4xl font-bold mb-2 chalk-text">Routines</h1>
                <p className="text-[var(--silver-accent)]">Select your apparatus. Begin the sequence.</p>
            </header>

            <div className="grid gap-4">
                {routines.map((routine, i) => (
                    <RoutineCard key={i} routine={routine} />
                ))}
            </div>
        </main>
    );
}
