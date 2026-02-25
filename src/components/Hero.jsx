import React, { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const profileCardRef = useRef(null);
    const heroRef = useRef(null);

    // Track mouse position for parallax effects
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                setMousePosition({ x, y });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // 3D tilt effect on profile card
    useEffect(() => {
        const card = profileCardRef.current;
        if (!card) return;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        };

        const handleMouseLeave = () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // Generate particles
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 15,
    }));

    return (
        <section id="home" className="hero section" ref={heroRef}>
            {/* Animated Gradient Mesh Background */}
            <div className="hero-background">
                <div className="gradient-mesh mesh-1"></div>
                <div className="gradient-mesh mesh-2"></div>
                <div className="gradient-mesh mesh-3"></div>
                <div className="gradient-mesh mesh-4"></div>
            </div>

            {/* Floating Particles */}
            <div className="particles-container">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="particle"
                        style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            animationDelay: `${particle.delay}s`,
                            animationDuration: `${particle.duration}s`,
                            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                        }}
                    />
                ))}
            </div>

            <div className="container hero-wrapper">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="greeting">{personalInfo.greeting}</span>
                        <span className="name-wrapper">
                            <span className="highlight name-text">{personalInfo.name}</span>
                            <span className="name-underline"></span>
                        </span>
                        <span className="tagline">

                        </span>
                    </h1>
                    <p className="hero-subtitle">
                        <span className="typing-text">Student at {personalInfo.university}</span>
                        <span className="subtitle-divider">•</span>
                        <span className="typing-text">{personalInfo.interests}</span>
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn hero-btn magnetic-btn">
                            <span className="btn-text">View My Work</span>
                            <span className="btn-icon">→</span>
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Get In Touch
                        </a>
                    </div>
                </div>

                <div className="hero-image-container">
                    {/* Animated Rings */}
                    <div className="orbit-ring ring-1"></div>
                    <div className="orbit-ring ring-2"></div>
                    <div className="orbit-ring ring-3"></div>

                    {/* 3D Profile Card with Glassmorphism */}
                    <div className="profile-card" ref={profileCardRef}>
                        <div className="card-glow"></div>
                        <div className="profile-circle">
                            <img src={profileImage} alt={personalInfo.name} className="profile-image" />
                            <div className="image-overlay"></div>
                        </div>
                        <div className="card-border"></div>
                    </div>

                    {/* Floating Elements */}
                    <div className="floating-element element-1">
                        <div className="element-inner"></div>
                    </div>
                    <div className="floating-element element-2">
                        <div className="element-inner"></div>
                    </div>
                    <div className="floating-element element-3">
                        <div className="element-inner"></div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <div className="scroll-line"></div>
                <span className="scroll-text">Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
