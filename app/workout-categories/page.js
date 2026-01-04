"use client";

import React from 'react';
import Link from 'next/link';
import {
    Heart,
    Zap,
    PersonStanding,
    Flame,
    Bike,
    Sword,
    Footprints,
    Music,
    StretchHorizontal,
    Waves,
    Heart as HeartOutline,
    Bookmark
} from 'lucide-react';
import Logo from '@/components/Logo';

const categories = [
    { name: 'Boxing', icon: Heart, iconBg: 'bg-green-500/20', iconColor: 'text-green-500' },
    { name: 'Yoga', icon: PersonStanding, iconBg: 'bg-yellow-500/20', iconColor: 'text-yellow-500' },
    { name: 'Cardio', icon: Zap, iconBg: 'bg-blue-500/20', iconColor: 'text-blue-500' },
    { name: 'Strength Training', icon: PersonStanding, iconBg: 'bg-orange-500/20', iconColor: 'text-orange-500' },
    { name: 'Pilates', icon: Heart, iconBg: 'bg-red-500/20', iconColor: 'text-red-500' },
    { name: 'CrossFit', icon: Flame, iconBg: 'bg-teal-500/20', iconColor: 'text-teal-500' },
    { name: 'Cycling', icon: Bike, iconBg: 'bg-indigo-500/20', iconColor: 'text-indigo-500' },
    { name: 'Martial Arts', icon: Sword, iconBg: 'bg-purple-500/20', iconColor: 'text-purple-500' },
    { name: 'Running', icon: Footprints, iconBg: 'bg-slate-500/20', iconColor: 'text-slate-500' },
    { name: 'Zumba', icon: Music, iconBg: 'bg-rose-500/20', iconColor: 'text-rose-500' },
    { name: 'Stretching', icon: StretchHorizontal, iconBg: 'bg-cyan-500/20', iconColor: 'text-cyan-500' },
    { name: 'Swimming', icon: Waves, iconBg: 'bg-amber-500/20', iconColor: 'text-amber-500' },
];

export default function WorkoutCategories() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-lime-400 selection:text-black">
            {/* Header Section */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/5 text-white px-4 sm:px-8 py-3">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <Logo />
                            <span className="text-xl font-bold tracking-tighter uppercase italic">fit-tracker</span>
                        </Link>


                    </div>

                    <div className="flex items-center gap-3">
                        <button className="p-2.5 rounded-full border border-gray-200 hover:bg-gray-50 transition-all">
                            <HeartOutline className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2.5 rounded-full border border-gray-200 hover:bg-gray-50 transition-all">
                            <Bookmark className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="bg-[#0f172a] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95">
                            Work with us
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center">
                {/* View More Button (Hero Section) */}
                <div className="mb-20">
                    <button className="bg-[#ccff00] text-black px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest shadow-[0_0_40px_-10px_rgba(204,255,0,0.6)] hover:scale-105 hover:shadow-[0_0_50px_-5px_rgba(204,255,0,0.8)] transition-all active:scale-95">
                        View More
                    </button>
                </div>

                {/* Title Section */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Workout Categories</h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
                        Find workouts tailored to your fitness goals. Choose a category and get started today!
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="group bg-[#111111]/80 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:bg-[#1a1a1a] transition-all duration-300 hover:border-white/10 flex items-center gap-5 cursor-pointer">
                            <div className={`w-14 h-14 rounded-2xl ${cat.iconBg} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                                <cat.icon className={`w-7 h-7 ${cat.iconColor}`} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg group-hover:text-white transition-colors">{cat.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Styles for glassmorphism and animations */}
            <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
        </div>
    );
}
