"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';

export default function ProfileSetupPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: 'male',
        height: '', // cm
        weight: '', // kg
        bodyType: 'ectomorph',
        lifestyle: 'school student',
        goal: 'fitness maintenance'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save to localStorage
        if (typeof window !== 'undefined') {
            localStorage.setItem('userProfile', JSON.stringify(formData));
        }
        router.push('/dashboard');
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen py-10 bg-gray-50 px-4">
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
                    <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Setup Your Profile</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} required />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="Age" name="age" type="number" value={formData.age} onChange={handleChange} required />
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                                <select name="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="Height (cm)" name="height" type="number" value={formData.height} onChange={handleChange} required />
                            <Input label="Weight (kg)" name="weight" type="number" value={formData.weight} onChange={handleChange} required />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Body Type</label>
                            <select name="bodyType" value={formData.bodyType} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                                <option value="ectomorph">Ectomorph (Lean, hard to gain muscle)</option>
                                <option value="mesomorph">Mesomorph (Athletic, gains muscle easily)</option>
                                <option value="endomorph">Endomorph (Broad, gains fat easily)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Lifestyle</label>
                            <select name="lifestyle" value={formData.lifestyle} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                                <option value="school student">School Student</option>
                                <option value="college student">College Student</option>
                                <option value="office going">Office Going</option>
                                <option value="job professional">Job Professional</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Fitness Goal</label>
                            <select name="goal" value={formData.goal} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                                <option value="weight loss">Weight Loss</option>
                                <option value="muscle gain">Muscle Gain</option>
                                <option value="fitness maintenance">Fitness Maintenance</option>
                            </select>
                        </div>

                        <Button type="submit" className="w-full text-lg py-3">Complete Setup</Button>
                    </form>
                </div>
            </div>
        </>
    );
}
