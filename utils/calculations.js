export const calculateBMI = (weightKg, heightCm) => {
    if (!weightKg || !heightCm) return 0;
    const heightM = heightCm / 100;
    return (weightKg / (heightM * heightM)).toFixed(1);
};

export const calculateBMR = (gender, weight, height, age) => {
    // Mifflin-St Jeor Equation
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    if (gender === 'male') {
        bmr += 5;
    } else {
        bmr -= 161;
    }
    return bmr;
};

export const calculateDailyCalories = (bmr, activityLevel) => {
    // Activity constants
    const activities = {
        sedentary: 1.2, // little or no exercise
        light: 1.375, // light exercise
        moderate: 1.55, // moderate exercise
        active: 1.725, // heavy exercise
        very_active: 1.9 // very heavy exercise
    };

    // Mapping user "lifestyle" to activity constants logic
    let factor = 1.2;
    if (activityLevel === 'school student' || activityLevel === 'office going') factor = 1.3; // Lightly active
    if (activityLevel === 'college student') factor = 1.5; // Moderate
    if (activityLevel === 'job professional') factor = 1.2; // Sedentary mostly? Or vary. I'll stick to conservative.

    // Or better mapping to standard text if needed, but for now using the requested specific terms:
    // (school student, college student, office going, job professional)

    return Math.round(bmr * factor);
};
