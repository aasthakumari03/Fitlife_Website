"use client";
import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid } from 'recharts';

const dataWeekly = [
    { name: 'Mon', score: 65 },
    { name: 'Tue', score: 59 },
    { name: 'Wed', score: 80 },
    { name: 'Thu', score: 81 },
    { name: 'Fri', score: 56 },
    { name: 'Sat', score: 95 },
    { name: 'Sun', score: 90 },
];

const dataMonthly = [
    { name: 'W1', hours: 4 },
    { name: 'W2', hours: 6 },
    { name: 'W3', hours: 5.5 },
    { name: 'W4', hours: 7 },
];

export default function Progress() {
    return (
        <main className="max-w-6xl mx-auto px-6 py-8">
            <header className="mb-12">
                <h1 className="text-4xl font-bold mb-2 chalk-text">Scoreboard</h1>
                <p className="text-[var(--silver-accent)]">Analyze your performance. Adjust for perfection.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Weekly Performance */}
                <div className="glass-panel p-8 rounded-3xl">
                    <h3 className="text-xl font-bold mb-6">Execution Score (Weekly)</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={dataWeekly}>
                                <XAxis dataKey="name" stroke="#a0a4ab" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#a0a4ab" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1a1d24', border: '1px solid #333', borderRadius: '8px', color: '#fff' }}
                                    itemStyle={{ color: '#5ca1e1' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="score"
                                    stroke="#5ca1e1"
                                    strokeWidth={3}
                                    dot={{ r: 4, fill: '#1a1d24', stroke: '#5ca1e1', strokeWidth: 2 }}
                                    activeDot={{ r: 6, fill: '#5ca1e1' }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Training Volume */}
                <div className="glass-panel p-8 rounded-3xl">
                    <h3 className="text-xl font-bold mb-6">Hours Trained (Monthly)</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={dataMonthly}>
                                <XAxis dataKey="name" stroke="#a0a4ab" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                    contentStyle={{ backgroundColor: '#1a1d24', border: '1px solid #333', borderRadius: '8px', color: '#fff' }}
                                />
                                <Bar dataKey="hours" fill="#a0a4ab" radius={[4, 4, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </main>
    );
}
