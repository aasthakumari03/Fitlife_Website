"use client";
import React from 'react';

const HabitRing = ({ percentage, color = "var(--electric-blue)", size = 80, strokeWidth = 6, label }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="relative" style={{ width: size, height: size }}>
                {/* Background Ring */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                    />
                    {/* Progress Ring */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke={color}
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-[var(--chalk-white)]">{percentage}%</span>
                </div>
            </div>
            {label && <span className="text-xs text-[var(--silver-accent)] group-hover:text-[var(--chalk-white)] transition-colors">{label}</span>}
        </div>
    );
};

export default HabitRing;
