"use client";
import React from 'react';

const AnimatedSilhouette = () => {
    return (
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-40">
            <svg
                viewBox="0 0 400 600"
                className="w-full h-full max-w-[600px] opacity-60 blur-xl md:blur-2xl"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <linearGradient id="figureGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--chalk-white)" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="var(--electric-blue)" stopOpacity="0.4" />
                    </linearGradient>
                    <filter id="softGlow">
                        <feGaussianBlur stdDeviation="15" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Abstract Figure - Arms Up Position (Lifting/Stretching) */}
                <path
                    d="M200,150 
                       C230,150 250,180 260,220 
                       C270,260 280,300 270,350 
                       C260,400 230,500 200,500 
                       C170,500 140,400 130,350 
                       C120,300 130,260 140,220 
                       C150,180 170,150 200,150 Z"
                    fill="url(#figureGradient)"
                    className="animate-breathe"
                />

                {/* Head */}
                <circle
                    cx="200"
                    cy="100"
                    r="35"
                    fill="url(#figureGradient)"
                    className="animate-head-bob"
                />

                {/* Arms (Abstract strokes) */}
                <path
                    d="M140,220 C120,180 100,150 80,100"
                    stroke="url(#figureGradient)"
                    strokeWidth="20"
                    strokeLinecap="round"
                    fill="none"
                    className="animate-arm-left"
                />
                <path
                    d="M260,220 C280,180 300,150 320,100"
                    stroke="url(#figureGradient)"
                    strokeWidth="20"
                    strokeLinecap="round"
                    fill="none"
                    className="animate-arm-right"
                />
            </svg>

            <style jsx>{`
                .animate-breathe {
                    animation: breathe 6s ease-in-out infinite;
                    transform-origin: center center;
                }
                .animate-head-bob {
                    animation: headBob 6s ease-in-out infinite;
                    transform-origin: center center;
                }
                .animate-arm-left {
                    animation: armMoveLeft 6s ease-in-out infinite;
                     transform-origin: 140px 220px;
                }
                .animate-arm-right {
                    animation: armMoveRight 6s ease-in-out infinite;
                    transform-origin: 260px 220px;
                }

                @keyframes breathe {
                    0%, 100% { transform: scale(1) translateY(0); opacity: 0.8; }
                    50% { transform: scale(1.05) translateY(-5px); opacity: 1; }
                }

                @keyframes headBob {
                     0%, 100% { transform: translateY(0); }
                     50% { transform: translateY(-10px); }
                }

                @keyframes armMoveLeft {
                    0%, 100% { transform: rotate(0deg); }
                    50% { transform: rotate(-5deg) translateY(-5px); }
                }

                @keyframes armMoveRight {
                    0%, 100% { transform: rotate(0deg); }
                    50% { transform: rotate(5deg) translateY(-5px); }
                }
            `}</style>
        </div>
    );
};

export default AnimatedSilhouette;
