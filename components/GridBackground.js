"use client";

import React from "react";

const GridBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Grid Pattern */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Radial Gradient Overlay to fade grid at edges if desired, or just keep it consistent */}
            <div
                className="absolute inset-0 bg-transparent"
                style={{
                    background: "radial-gradient(circle at center, transparent 0%, rgba(5, 5, 5, 0.8) 100%)"
                }}
            />
        </div>
    );
};

export default GridBackground;
