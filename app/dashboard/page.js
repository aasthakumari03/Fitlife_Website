"use client";
import { useEffect, useState } from 'react';
import Card from '@/components/Card';
import { calculateBMI, calculateBMR, calculateDailyCalories } from '@/utils/calculations';
import Link from 'next/link';

export default function DashboardPage() {
    const [profile, setProfile] = useState(null);
    const [metrics, setMetrics] = useState({ bmi: 0, calories: 0 });

    useEffect(() => {
        const saved = localStorage.getItem('userProfile');
        if (saved) {
            const p = JSON.parse(saved);
            setProfile(p);
            const bmi = calculateBMI(p.weight, p.height);
            const bmr = calculateBMR(p.gender, p.weight, p.height, p.age);
            const calories = calculateDailyCalories(bmr, p.lifestyle);
            setMetrics({ bmi, calories });
        }
    }, []);

    if (!profile) return (
        <div className="flex flex-col items-center justify-center h-96">
            <p className="text-gray-500 mb-4">No profile data found.</p>
            <Link href="/profile-setup" className="text-blue-600 font-bold hover:underline">Complete your profile setup</Link>
        </div>
    );

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Hello, {profile.name} 👋</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="bg-blue-50 border-blue-100">
                    <h3 className="text-gray-500 text-sm font-medium">Current Weight</h3>
                    <p className="text-3xl font-bold text-blue-600 mt-2">{profile.weight} kg</p>
                </Card>
                <Card className="bg-green-50 border-green-100">
                    <h3 className="text-gray-500 text-sm font-medium">BMI Score</h3>
                    <p className="text-3xl font-bold text-green-600 mt-2">{metrics.bmi}</p>
                    <p className="text-xs text-gray-500 mt-1">
                        {metrics.bmi < 18.5 ? 'Underweight' : metrics.bmi < 25 ? 'Normal' : 'Overweight'}
                    </p>
                </Card>
                <Card className="bg-orange-50 border-orange-100">
                    <h3 className="text-gray-500 text-sm font-medium">Daily Requirement</h3>
                    <p className="text-3xl font-bold text-orange-600 mt-2">{metrics.calories} kcal</p>
                </Card>
                <Card className="bg-purple-50 border-purple-100">
                    <h3 className="text-gray-500 text-sm font-medium">Fitness Goal</h3>
                    <p className="text-xl font-bold text-purple-600 mt-2 capitalize">{profile.goal}</p>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <h2 className="text-xl font-bold mb-4 text-gray-800">Body Type Analysis</h2>
                    <div className="flex items-center space-x-4">
                        <div className="bg-gray-100 p-4 rounded-full">
                            {/* Icon placeholder */}
                            <span className="text-2xl">🧬</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg capitalize">{profile.bodyType}</h3>
                            <p className="text-gray-600 text-sm mt-1">
                                Based on your body type, ensure you stick to the recommended exercises.
                            </p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <h2 className="text-xl font-bold mb-4 text-gray-800">Today's Snapshot</h2>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-sm mb-1 font-medium"><span>Steps</span> <span>0 / 6,000</span></div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5"><div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '0%' }}></div></div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1 font-medium"><span>Water</span> <span>0 / 8 Glasses</span></div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5"><div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: '0%' }}></div></div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
