import React from 'react';

export const Icons: Record<string, React.FC<{ className?: string }>> = {
    React: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" fillOpacity="0" />
            <ellipse cx="12" cy="12" rx="3.5" ry="8.8" transform="rotate(45 12 12)" stroke="currentColor" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="3.5" ry="8.8" transform="rotate(135 12 12)" stroke="currentColor" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="3.5" ry="8.8" transform="rotate(270 12 12)" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
    ),
    Next: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M9 16V8L14.5 16H15.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    TypeScript: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 16V8M17 16V12C17 12 17.5 10 19 10M13 16V10M10.5 16C10.5 16 12 17 13.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 8H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    Tailwind: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M7 15.5C5.5 15.5 4 14.5 4 12.5C4 10.5 6 10 6.5 7.5C7 5 9.5 5.5 10 7.5C10.5 9.5 8.5 10.5 8.5 12.5C8.5 14.5 10 14.5 9.5 16.5C9 18.5 7.5 18.5 7 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 15.5C14.5 15.5 13 14.5 13 12.5C13 10.5 15 10 15.5 7.5C16 5 18.5 5.5 19 7.5C19.5 9.5 17.5 10.5 17.5 12.5C17.5 14.5 19 14.5 18.5 16.5C18 18.5 16.5 18.5 16 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    GSAP: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 16C14.5 16 16 14 16 12C16 10 14 8 13 8H9V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    Framer: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M6 12L12 6L18 12M6 12V18H12V12M6 12H18M12 12L18 18V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    Firebase: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M5.5 16L7.5 5L10 10L12 6L18.5 18H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 10L14.5 3L18.5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    Accessibility: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 21V12M12 12V8M12 12H17M12 12H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    Design: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12M8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    Python: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 6C12 6 12 4 9 4C6 4 5 5 5 8C5 11 6 12 9 12M12 18C12 18 12 20 15 20C18 20 19 19 19 16C19 13 18 12 15 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="8" cy="7" r="1" fill="currentColor" />
            <circle cx="16" cy="17" r="1" fill="currentColor" />
        </svg>
    )
};
