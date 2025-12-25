"use client";
import React from 'react';

export default function Logo({ className = "w-6 h-6" }) {
  return (
    <div className={`relative flex items-center justify-center bg-black p-2 rounded-xl transition-all duration-300 group-hover:scale-110 shadow-lg shadow-black/20`}>
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

      {/* Slanted Geometric FT SVG Logo */}
      <svg
        viewBox="0 0 400 200"
        className={`${className} relative z-10`}
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Letter F (Slanted) */}
        <path d="M40 160L100 40H280L275 65H115L110 90H250L245 115H105L95 160H40Z" />

        {/* Letter T (Slanted & Tucked) */}
        <path d="M160 90H330L325 115H260L245 160H195L210 115H160V90Z" />
      </svg>

      <style jsx global>{`
        .logo-glow {
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.2));
        }
      `}</style>
    </div>
  );
}

