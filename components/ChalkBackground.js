"use client";
import React, { useEffect, useRef } from 'react';

const ChalkBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            const particleCount = Math.min(window.innerWidth * 0.1, 150); // density
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 1.5 + 0.5,
                    vx: (Math.random() - 0.5) * 0.2, // very slow movement
                    vy: (Math.random() - 0.5) * 0.2,
                    alpha: Math.random() * 0.3 + 0.1,
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw gradient background
            const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
            gradient.addColorStop(0, '#15171d'); // Slightly lighter charcoal center
            gradient.addColorStop(1, '#0f1115'); // Dark bg
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Draw chalk dust
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(245, 245, 247, ${p.alpha})`; // chalk white
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        createParticles();
        animate();

        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none"
        />
    );
};

export default ChalkBackground;
