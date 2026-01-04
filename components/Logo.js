"use client";
import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Logo({ className = "w-6 h-6", variant = "FT" }) {
  return (
    <div className={`group relative flex items-center bg-black p-2 rounded-xl transition-all duration-500 hover:pr-6 shadow-lg shadow-black/20 overflow-hidden max-w-fit`}>
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

      <div className="flex items-center gap-3">
        {variant === "FT" ? (
          /* Slanted Geometric FT SVG Logo */
          <svg
            viewBox="0 0 400 200"
            className={`${className} relative z-10 transition-transform duration-300 group-hover:scale-110`}
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Letter F (Slanted) */}
            <path d="M40 160L100 40H280L275 65H115L110 90H250L245 115H105L95 160H40Z" />
            {/* Letter T (Slanted & Tucked) */}
            <path d="M160 90H330L325 115H260L245 160H195L210 115H160V90Z" />
          </svg>
        ) : (
          /* Slanted Geometric AK SVG Logo */
          <div className="flex items-center">
            <svg
              viewBox="0 0 400 200"
              className={`${className} relative z-10 transition-transform duration-300 group-hover:scale-110`}
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Letter A (Slanted) */}
              <path d="M40 160L140 40L240 160H190L165 125H115L90 160H40Z" />
              <path d="M140 90L152 75H128L140 90Z" fill="black" opacity="0.1" />
              {/* Letter K (Slanted) */}
              <path d="M245 40L205 160H255L295 40H245Z" />
              <path d="M285 40L385 40L315 105L285 40Z" />
              <path d="M305 115L385 160H335L270 115L305 115Z" />
            </svg>

            {/* Typing Text Effect */}
            <span className="typing-text whitespace-nowrap overflow-hidden border-r-2 border-transparent text-white font-medium tracking-normal text-lg font-kaushan">
              Aastha Kumari
            </span>
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <Github className="w-5 h-5 text-white transition-transform duration-300 hover:scale-110" />
              <Linkedin className="w-5 h-5 text-white transition-transform duration-300 hover:scale-110" />
              <Instagram className="w-5 h-5 text-white transition-transform duration-300 hover:scale-110" />
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .typing-text {
          width: 0;
          transition: width 0s;
        }
        .group:hover .typing-text {
          animation: typing 1.5s steps(13, end) forwards, blink 0.75s step-end infinite;
          width: 140px; /* Adjust based on text length */
          margin-left: 12px;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 140px }
        }
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: white }
        }
        .font-kaushan {
          font-family: var(--font-kaushan);
        }
      `}</style>
    </div>
  );
}

