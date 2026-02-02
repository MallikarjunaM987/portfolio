
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            url: PERSONAL_INFO.linkedin,
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
            color: '#0A66C2'
        },
        {
            name: 'Gmail',
            url: `mailto:${PERSONAL_INFO.email}`,
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548l8.073-6.055C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
            ),
            color: '#EA4335'
        },
        {
            name: 'GitHub',
            url: PERSONAL_INFO.github,
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            color: '#FFFFFF'
        },
        {
            name: 'Codolio',
            url: 'https://codolio.com/profile/mallikarjuna07',
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18.5c-3.87-.96-7-5.05-7-9.5V8.3l7-3.5 7 3.5v2.7c0 4.45-3.13 8.54-7 9.5z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            ),
            color: '#6366F1'
        }
    ];

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black"></div>
            <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>

            <div className="relative z-10 max-w-6xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-syne font-bold text-white mb-8 uppercase tracking-tight">
                    Get In Touch
                </h2>

                <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light">
                    Let's connect and create something amazing together.
                </p>

                {/* Social Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-[#0a0a0a] border border-white/10 rounded-full p-8 md:p-10 hover:border-white/30 transition-all duration-300 hover:scale-105 aspect-square flex flex-col items-center justify-center"
                            style={{
                                ['--social-color' as string]: social.color
                            }}
                        >
                            {/* Icon */}
                            <div
                                className="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300"
                                style={{
                                    backgroundColor: social.color
                                }}
                            >
                                <div
                                    className="transition-colors duration-300"
                                    style={{
                                        color: social.name === 'GitHub' ? '#000000' : '#FFFFFF'
                                    }}
                                >
                                    {social.icon}
                                </div>
                            </div>

                            {/* Name */}
                            <p className="text-white/90 font-medium text-sm md:text-base uppercase tracking-wide">
                                {social.name}
                            </p>

                            {/* Hover Glow Effect */}
                            <div
                                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                    boxShadow: `0 0 30px ${social.color}40, inset 0 0 20px ${social.color}20`
                                }}
                            ></div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
