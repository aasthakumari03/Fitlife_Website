import React from 'react';

const BreathingBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950">
            {/* Base Gradient - deeply dark bluish black */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#020617] to-black opacity-100" />

            {/* Organic Shapes */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[100px] animate-blob-float mix-blend-screen" />
            <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-950/30 rounded-full blur-[120px] animate-blob-float-reverse mix-blend-screen" />
            <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-slate-900/40 rounded-full blur-[100px] animate-blob-pulse mix-blend-overlay" />

            {/* Breathing Overlay - Subtle pulse of light */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[80vw] h-[80vw] bg-blue-500/5 rounded-full blur-[150px] animate-breathe-deep" />
            </div>

            {/* Noise Texture for organic feel (optional, keeps it soft) */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};

export default BreathingBackground;
