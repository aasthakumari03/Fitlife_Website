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
                        linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Radial Gradient Overlay - kept subtle to let grid show through */}
            <div
                className="absolute inset-0 bg-transparent"
                style={{
                    background: "radial-gradient(circle at center, transparent 0%, rgba(5, 5, 5, 0.6) 100%)"
                }}
            />
        </div>
    );
};

export default GridBackground;
