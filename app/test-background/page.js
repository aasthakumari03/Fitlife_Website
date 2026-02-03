import React from 'react';
import BreathingBackground from '../../components/BreathingBackground';

export default function TestBackgroundPage() {
    return (
        <div className="relative min-h-screen text-white flex flex-col items-center justify-center p-8">
            <BreathingBackground />

            <main className="z-10 text-center max-w-2xl">
                <h1 className="text-5xl font-light tracking-wider mb-6 opacity-90">Mindfulness</h1>
                <p className="text-xl font-light text-blue-100/70 mb-12 loading-relaxed">
                    Breathe in. Breathe out. <br />
                    Focus on the rhythm of the light.
                </p>

                <div className="glass-panel p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                    <h2 className="text-2xl mb-4">Component Verification</h2>
                    <p className="text-sm text-gray-300">
                        The background should be slowly moving, dark, and calming.
                    </p>
                </div>
            </main>
        </div>
    );
}
