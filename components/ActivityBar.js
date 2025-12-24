"use client";

export default function ActivityBar() {
    const activities = [
        "Running", "Cycling", "Cardio", "Gym", "Yoga", "Hiking", "Walking", "Swimming"
    ];

    // Duplicate activities for seamless looping
    const doubledActivities = [...activities, ...activities];

    return (
        <div className="w-full bg-slate-950 border-y border-slate-800 overflow-hidden py-6 select-none">
            <div className="flex whitespace-nowrap animate-marquee">
                {doubledActivities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 mx-8">
                        <span className="text-white text-2xl md:text-3xl font-black uppercase tracking-tighter italic">
                            {activity}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
