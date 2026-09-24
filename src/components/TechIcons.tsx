import React from 'react';

export interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-7 h-7", size = 28 }) => {
  switch (name.toLowerCase()) {
    case 'java':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M7 16.5c1.8.4 3.7.4 5.5.2 2-.2 3.8-.7 5.5-1.5-1.2 1.3-3.6 2-5.5 2.1-2.1.1-4-.3-5.5-.8z" fill="#E76F00"/>
          <path d="M6 19c2.3.5 4.8.5 7.1.2 2.6-.3 5-1 7.2-2-1.6 1.7-4.7 2.6-7.2 2.7-2.7.1-5.2-.4-7.1-.9z" fill="#E76F00"/>
          <path d="M11.5 11.2c.5 1.1-.3 2.1-1.3 2.8-1 .7-2.3 1.1-3.6 1.2 1.2-.5 2.3-1.1 2.8-1.9.5-.8.3-1.6-.3-2.3 0 0 1.9.1 2.4.2z" fill="#5382A1"/>
          <path d="M14 8c.7 1.4-.4 2.8-1.8 3.7-1.3.9-3 1.4-4.8 1.6 1.6-.6 3-1.5 3.7-2.5.7-1 .3-2.1-.5-3 0 0 2.5.1 3.4.2z" fill="#E76F00"/>
          <path d="M12.8 3c-1.3 2.5-3.3 4.4-5.8 5.6 2.3-.6 4.3-1.9 5.5-3.8.4-.7.6-1.5.3-1.8z" fill="#5382A1"/>
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
          <path d="M6.5 17.5v-4.8h1.8v4.8c0 .9-.3 1.6-1 1.9-.5.2-1.3.2-1.8 0l.2-1.3c.3.1.6.1.8 0 .2-.1.3-.3.3-.6h-.3zm4.5-.4c.5.8 1.3 1.2 2.2 1.2 1.1 0 1.8-.6 1.8-1.4 0-.8-.5-1.2-1.6-1.6l-.6-.2c-1.4-.5-2.1-1.2-2.1-2.4 0-1.4 1.1-2.5 2.8-2.5 1 0 1.8.3 2.4.9l-.7 1.2c-.5-.4-1.1-.7-1.7-.7-.8 0-1.3.4-1.3 1.1 0 .7.4 1.1 1.4 1.5l.6.2c1.6.6 2.3 1.3 2.3 2.6 0 1.6-1.2 2.7-3.1 2.7-1.3 0-2.3-.4-3-1.2l.9-1.1z" fill="#000000"/>
        </svg>
      );

    case 'typescript':
    case 'ts':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <rect width="24" height="24" rx="4" fill="#3178C6"/>
          <path d="M4 10.5h6v1.7H7.7v6.6H5.9v-6.6H4v-1.7zm8.3 6.6c.5.8 1.4 1.2 2.3 1.2 1.2 0 1.9-.6 1.9-1.5 0-.8-.5-1.3-1.6-1.7l-.6-.2c-1.5-.6-2.2-1.3-2.2-2.5 0-1.5 1.1-2.6 2.9-2.6 1.1 0 1.9.4 2.5 1l-.8 1.3c-.5-.5-1.1-.8-1.8-.8-.8 0-1.4.4-1.4 1.1 0 .7.4 1.1 1.5 1.5l.6.2c1.7.6 2.4 1.4 2.4 2.7 0 1.7-1.3 2.8-3.2 2.8-1.4 0-2.4-.5-3.1-1.4l.9-1.1z" fill="#FFFFFF"/>
        </svg>
      );

    case 'python':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
          <path d="M11.9 2c-3.1 0-5 .6-5 2.5v1.9h5v.6H4.4C2.5 7 2 8.9 2 12c0 2.8.6 4.9 2.5 4.9h1.5v-2.2c0-1.7 1.4-3.1 3.1-3.1h4.9c1.4 0 2.5-1.1 2.5-2.5V4.5C16.5 2.6 14.7 2 11.9 2zm-1.5 1.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776AB"/>
          <path d="M12.1 22c3.1 0 5-.6 5-2.5v-1.9h-5v-.6h7.5c1.9 0 2.4-1.9 2.4-5 0-2.8-.6-4.9-2.5-4.9H18v2.2c0 1.7-1.4 3.1-3.1 3.1h-4.9c-1.4 0-2.5 1.1-2.5 2.5v4.6c0 1.9 1.8 2.5 4.6 2.5zm1.5-1.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FFD43B"/>
        </svg>
      );

    case 'php':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
          <ellipse cx="12" cy="12" rx="11" ry="8" fill="#777BB4"/>
          <path d="M5.5 14.5l1.2-5h2.2c1.2 0 1.8.5 1.6 1.6-.2 1.3-1.1 1.9-2.3 1.9h-1l-.4 1.5H5.5zm2.1-2.3h.8c.6 0 .9-.3 1-.7.1-.5-.1-.7-.6-.7h-.7l-.5 1.4zm4.1 2.3l1.2-5h1.2l-.5 2h1.6l.5-2h1.2l-1.2 5h-1.2l.5-2.1h-1.6l-.5 2.1h-1.2zm6.2 0l1.2-5h2.2c1.2 0 1.8.5 1.6 1.6-.2 1.3-1.1 1.9-2.3 1.9h-1l-.4 1.5h-1.3zm2.1-2.3h.8c.6 0 .9-.3 1-.7.1-.5-.1-.7-.6-.7h-.7l-.5 1.4z" fill="#FFFFFF"/>
        </svg>
      );

    case 'kotlin':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
          <path d="M22 2H2v20h20L12 12 22 2z" fill="url(#kotlin-grad)" />
          <defs>
            <linearGradient id="kotlin-grad" x1="22" y1="2" x2="2" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E4485D" />
              <stop offset=".47" stopColor="#C711E1" />
              <stop offset="1" stopColor="#7F52FF" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'dart':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
          <path d="M4.1 3.5L2 12l2.1 8.5h8.5L22 10.6 13.5 2H4.1l-.0.0z" fill="#01579B"/>
          <path d="M12.6 20.5l9.4-9.9L13.5 2 4.1 3.5 12.6 20.5z" fill="#29B6F6"/>
          <path d="M12.6 20.5l-8.5-8.5 9.4-1.4 8.5 1.4-9.4 8.5z" fill="#0288D1"/>
        </svg>
      );

    case 'html':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
          <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3z" fill="#E44D26"/>
          <path d="M12 3.7v16.5l5.8-1.5 1.3-15H12z" fill="#F16529"/>
          <path d="M7 6.4h10l-.2 2.3H9.4l.2 2.4h7l-.5 6-4.1 1.2-4.1-1.2-.3-3.4h2.2l.2 1.7 2 .5 2-.5.2-2.3H7.3L7 6.4z" fill="#FFFFFF"/>
        </svg>
      );

    case 'css':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
          <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3z" fill="#1572B6"/>
          <path d="M12 3.7v16.5l5.8-1.5 1.3-15H12z" fill="#33A9DC"/>
          <path d="M12 6.4h4.9l-.2 2.3h-4.7v2.4h4.5l-.5 6-4 1.2v-2.3l2-.5.2-2.3h-2.2V6.4zM7.1 6.4H12v2.3H9.4l.2 2.4H12v2.4H9.8l.2 1.7 2 .5V18l-4.1-1.2-.8-10.4z" fill="#FFFFFF"/>
        </svg>
      );

    case 'react':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
            <ellipse cx="12" cy="12" rx="10" ry="3.8"/>
            <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)"/>
          </g>
        </svg>
      );

    case 'tailwind':
    case 'tailwind css':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
          <path d="M6 8c1.3-2 3.3-3 6-3 4 0 5.3 2 6.7 3.5 1.3 1.5 2.7 2.5 5.3 2.5-1.3 2-3.3 3-6 3-4 0-5.3-2-6.7-3.5C10 9 8.7 8 6 8zm-6 6c1.3-2 3.3-3 6-3 4 0 5.3 2 6.7 3.5 1.3 1.5 2.7 2.5 5.3 2.5-1.3 2-3.3 3-6 3-4 0-5.3-2-6.7-3.5C4 15 2.7 14 0 14z" fill="#06B6D4"/>
        </svg>
      );

    case 'flask':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
          <path d="M10 2v3.2c-2.3 2.6-4.5 5.6-5.8 8.8C2.5 18.2 4.4 22 8 22h8c3.6 0 5.5-3.8 3.8-8-1.3-3.2-3.5-6.2-5.8-8.8V2h-4zm2 2h0m-2 7a4 4 0 0 1 4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <circle cx="10" cy="17" r="1.2" fill="currentColor"/>
          <circle cx="14" cy="16" r="1" fill="currentColor"/>
          <circle cx="12" cy="19" r="1.5" fill="currentColor"/>
        </svg>
      );

    case 'api':
    case 'rest apis':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
          <rect x="2" y="4" width="20" height="16" rx="4" stroke="#8B5CF6" strokeWidth="1.8" fill="none"/>
          <text x="12" y="15" fill="#8B5CF6" fontSize="7.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">API</text>
        </svg>
      );

    case 'flutter':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
          <path d="M13.5 2L4 11.5l2.8 2.8L19.1 2h-5.6zm-1.8 11.2l-3.3 3.3 3.3 3.3h5.6l-6.1-6.1 6.1-6.1h-5.6l-3.3 3.3.3.3 3 2z" fill="#02569B"/>
          <path d="M14.5 13.8l-2.8 2.8 5.6 5.6h5.6l-8.4-8.4z" fill="#0175C2"/>
        </svg>
      );

    case 'mysql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
          <path d="M18.8 9.5c-.8-.5-2.2-.4-3.1 0-1.2.5-1.9 1.7-2.3 2.9-.6 1.7-1.3 3.3-2.5 4.5-1.3 1.3-3.2 2-5 1.6 1.9-1.2 3.1-3 3.7-5.1.7-2.4 2.2-4.5 4.4-5.7 1.8-1 4.1-1 5.9.1.5.3 1.1.9 1.3 1.5-.7-.4-1.6-.6-2.4-.4z" fill="#00758F"/>
          <path d="M17.5 11c.2 0 .4.2.4.4s-.2.4-.4.4-.4-.2-.4-.4.2-.4.4-.4z" fill="#F29111"/>
        </svg>
      );

    case 'postgresql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
          <path d="M12 2C6.5 2 2 6.5 2 12c0 3.2 1.5 6 3.8 7.8 1-.8 1.9-1.8 2.6-3 .9.2 1.9.3 2.9.3 1.3 0 2.5-.2 3.7-.6 1.1 1.7 2.6 3.1 4.4 4 1.6-1.5 2.6-3.7 2.6-6.1 0-5.5-4.5-10-10-10z" fill="#336791"/>
          <path d="M16.5 10c0 1.9-1.3 3.5-3 3.9v3.1h-1.5v-3.1c-1.7-.4-3-2-3-3.9 0-2.2 1.7-4 3.8-4 2 0 3.7 1.8 3.7 4z" fill="#FFFFFF"/>
        </svg>
      );

    case 'git':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
          <path d="M21.6 10.6l-8.2-8.2c-.8-.8-2-.8-2.8 0L8.8 4.2l3.5 3.5c.8-.3 1.8-.1 2.4.6.6.6.8 1.6.5 2.4l3.4 3.4c.8-.3 1.8-.1 2.4.6.8.8.8 2.1 0 2.9s-2.1.8-2.9 0c-.7-.7-.9-1.7-.5-2.6l-3.2-3.2v4.8c.4.3.7.8.7 1.4 0 1.1-.9 2-2 2s-2-.9-2-2c0-.6.3-1.1.7-1.4v-4.9c-.4-.3-.7-.8-.7-1.4 0-.6.3-1.1.7-1.4L7.4 5.8 2.4 10.8c-.8.8-.8 2 0 2.8l8.2 8.2c.8.8 2 .8 2.8 0l8.2-8.2c.8-.8.8-2.1 0-3z" fill="#F05032"/>
        </svg>
      );

    case 'vscode':
    case 'vs code':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
          <path d="M17.6 2.3l-9.8 8.9L4.4 8.5 2 9.8l4 3.8-4 3.8 2.4 1.3 3.4-2.7 9.8 8.9c.7.6 1.8.3 2.1-.6l2.2-1.1c.7-.4 1.1-1.1 1.1-1.9V3.7c0-.8-.4-1.5-1.1-1.9l-2.2-1.1c-.6-.4-1.5-.1-2.1.6zm.4 4.7v10.1l-6-5 6-5.1z" fill="#007ACC"/>
        </svg>
      );

    default:
      return (
        <div className={`flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 font-bold ${className}`}>
          {name.charAt(0)}
        </div>
      );
  }
};
