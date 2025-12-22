"use client";
import Card from '@/components/Card';
import { dietData } from '@/data/mockData';

export default function DietPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Diet Setup</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                        🍽️ Solid Foods
                    </h2>
                    <div className="space-y-4">
                        {dietData.solid.map((item, idx) => (
                            <Card key={idx} className="flex justify-between items-center transition hover:shadow-md">
                                <div>
                                    <h3 className="font-bold">{item.name}</h3>
                                    <p className="text-sm text-gray-500">P: {item.protein}g | C: {item.carbs}g | F: {item.fat}g</p>
                                </div>
                                <div className="text-right">
                                    <span className="block font-bold text-green-600">{item.calories}</span>
                                    <span className="text-xs text-gray-400">kcal</span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                        🥤 Drinks
                    </h2>
                    <div className="space-y-4">
                        {dietData.drinks.map((item, idx) => (
                            <Card key={idx} className="flex justify-between items-center transition hover:shadow-md">
                                <div>
                                    <h3 className="font-bold">{item.name}</h3>
                                    <p className="text-sm text-gray-500">P: {item.protein}g | C: {item.carbs}g | F: {item.fat}g</p>
                                </div>
                                <div className="text-right">
                                    <span className="block font-bold text-blue-600">{item.calories}</span>
                                    <span className="text-xs text-gray-400">kcal</span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
