"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function SignupPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (formData.email && formData.password) {
            router.push('/profile-setup');
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-transparent px-4">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-white/10 w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-white">Create Account</h2>
                    <form onSubmit={handleSubmit}>
                        <Input
                            label="Email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                        <Input
                            label="Password"
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                        <Input
                            label="Confirm Password"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            required
                        />
                        <Button type="submit" className="w-full mt-4">Sign Up</Button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </>
    );
}
