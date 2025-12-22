"use client";
import { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Input from '@/components/Input';

export default function GoalsPage() {
    const [goals, setGoals] = useState([
        { id: 1, text: "Walk 6000 steps", completed: false },
        { id: 2, text: "Drink 3 liters of water", completed: false },
        { id: 3, text: "Sleep 8 hours", completed: false }
    ]);
    const [newGoal, setNewGoal] = useState("");

    const toggleGoal = (id) => {
        setGoals(goals.map(g => g.id === id ? { ...g, completed: !g.completed } : g));
    };

    const addGoal = (e) => {
        e.preventDefault();
        if (newGoal.trim()) {
            setGoals([...goals, { id: Date.now(), text: newGoal, completed: false }]);
            setNewGoal("");
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Daily Goals</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <h2 className="text-xl font-bold mb-4 text-gray-800">Your Checklist</h2>
                    <ul className="space-y-3">
                        {goals.map(goal => (
                            <li key={goal.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition curser-pointer" onClick={() => toggleGoal(goal.id)}>
                                <input
                                    type="checkbox"
                                    checked={goal.completed}
                                    readOnly
                                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 pointer-events-none"
                                />
                                <span className={goal.completed ? "line-through text-gray-400" : "text-gray-700"}>{goal.text}</span>
                            </li>
                        ))}
                    </ul>
                </Card>

                <Card>
                    <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Goal</h2>
                    <form onSubmit={addGoal}>
                        <Input
                            placeholder="e.g., Do 20 pushups"
                            value={newGoal}
                            onChange={(e) => setNewGoal(e.target.value)}
                        />
                        <Button type="submit" className="w-full">Add Goal</Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}
