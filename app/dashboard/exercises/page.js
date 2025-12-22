"use client";
import { useState, useEffect } from 'react';
import Card from '@/components/Card';
import { exercisesData } from '@/data/mockData';
import Link from 'next/link';

export default function ExercisesPage() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem('userProfile');
        if (saved) setProfile(JSON.parse(saved));
    }, []);

    if (!profile) return (
        <div className="p-10 text-center">
            <p className="text-gray-500 mb-4">Loading recommendations...</p>
            <Link href="/profile-setup" className="text-blue-600 hover:underline">Or update profile</Link>
        </div>
    );

    const userExercises = exercisesData[profile.bodyType]?.[profile.goal] || [];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-2 text-gray-800">Recommended Exercises</h1>
            <p className="text-gray-600 mb-8">
                Tailored for <strong className="capitalize">{profile.bodyType}</strong> body type focused on <strong className="capitalize">{profile.goal}</strong>.
            </p>

            {userExercises.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userExercises.map((ex) => (
                        <Card key={ex.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-bold text-lg">{ex.name}</h3>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                    {ex.calories} kcal
                                </span>
                            </div>
                            <div className="text-sm text-gray-600 space-y-2">
                                {ex.duration && <div className="flex items-center"><span className="mr-2">⏱️</span> Duration: {ex.duration}</div>}
                                {ex.sets && <div className="flex items-center"><span className="mr-2">🔄</span> Sets: {ex.sets}</div>}
                            </div>
                        </Card>
                    ))}
                </div>
            ) : (
                <Card>
                    <p>No specific exercises found for this combination. Try updating your goal!</p>
                </Card>
            )}

            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">General Advice</h2>
                <Card className="bg-yellow-50 border-yellow-100">
                    <h3 className="font-bold text-yellow-800 mb-2">Safety First</h3>
                    <p className="text-yellow-700">
                        Always warm up for 5-10 minutes before starting any high-intensity workout.
                        Hydration is key - drink water before, during, and after your session.
                    </p>
                </Card>
            </div>
        </div>
    );
}
