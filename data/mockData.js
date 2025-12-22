export const mockUsers = [
    {
        email: "user@example.com",
        password: "password123",
        name: "John Doe",
    }
];

export const exercisesData = {
    ectomorph: {
        "weight loss": [
            { id: 1, name: "Jump Rope", duration: "10 mins", calories: 100 },
            { id: 2, name: "Bodyweight Squats", sets: "3x15", calories: 50 },
        ],
        "muscle gain": [
            { id: 3, name: "Dumbbell Press", sets: "3x10", calories: 80 },
            { id: 4, name: "Pushups", sets: "3x12", calories: 40 },
        ],
        "fitness maintenance": [
            { id: 5, name: "Yoga Flow", duration: "20 mins", calories: 60 },
            { id: 6, name: "Jogging", duration: "15 mins", calories: 120 },
        ]
    },
    mesomorph: {
        // Similar structure, can be expanded
        "weight loss": [
            { id: 7, name: "HIIT", duration: "20 mins", calories: 200 },
        ],
        "muscle gain": [
            { id: 8, name: "Deadlifts", sets: "3x8", calories: 100 },
        ],
        "fitness maintenance": [
            { id: 9, name: "Swimming", duration: "30 mins", calories: 250 },
        ]
    },
    endomorph: {
        "weight loss": [
            { id: 10, name: "Circuit Training", duration: "30 mins", calories: 300 },
        ],
        "muscle gain": [
            { id: 11, name: "Heavy Squats", sets: "5x5", calories: 120 },
        ],
        "fitness maintenance": [
            { id: 12, name: "Cycling", duration: "45 mins", calories: 300 },
        ]
    }
};

export const dietData = {
    solid: [
        { name: "Oatmeal", calories: 150, protein: 5, carbs: 27, fat: 3 },
        { name: "Chicken Breast", calories: 165, protein: 31, carbs: 0, fat: 3.6 },
        { name: "Rice (1 cup)", calories: 200, protein: 4, carbs: 45, fat: 0.4 },
        { name: "Broccoli", calories: 55, protein: 3.7, carbs: 11, fat: 0.6 },
    ],
    drinks: [
        { name: "Water", calories: 0, protein: 0, carbs: 0, fat: 0 },
        { name: "Black Coffee", calories: 2, protein: 0.3, carbs: 0, fat: 0 },
        { name: "Protein Shake", calories: 120, protein: 25, carbs: 3, fat: 1 },
    ]
};
