import React, { useState, useRef, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';

export const LampThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';
  const [isPulling, setIsPulling] = useState(false);
  const [isSway, setIsSway] = useState(false);
  const [isFlicker, setIsFlicker] = useState(false);
  const cooldownRef = useRef(false);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const triggerPull = useCallback(() => {
    if (cooldownRef.current) return;
    cooldownRef.current = true;

    toggleTheme();

    if (!prefersReducedMotion) {
      setIsFlicker(true);
      setIsPulling(true);
      setIsSway(true);

      setTimeout(() => setIsFlicker(false), 350);
      setTimeout(() => setIsPulling(false), 550);
      setTimeout(() => {
        setIsSway(false);
        cooldownRef.current = false;
      }, 850);
    } else {
      cooldownRef.current = false;
    }
  }, [toggleTheme, prefersReducedMotion]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerPull();
      }
    },
    [triggerPull]
  );

  // Colors based on theme
  const bulbFill = isLight ? 'url(#bulbGradient)' : '#374151';
  const bulbStroke = isLight ? '#f59e0b' : '#4b5563';
  const socketColor = isLight ? '#9ca3af' : '#6b7280';
  const wireColor = isLight ? '#d1d5db' : '#4b5563';
  const stringColor = isLight ? '#d1d5db' : '#4b5563';
  const mountColor = isLight ? '#94a3b8' : '#475569';
  const handleColor = isLight ? '#fbbf24' : '#6b7280';
  const handleStroke = isLight ? '#f59e0b' : '#374151';

  const glowFilter = isLight
    ? 'drop-shadow(0 0 6px rgba(251,191,36,0.9)) drop-shadow(0 0 12px rgba(251,191,36,0.5))'
    : 'none';

  return (
    <div
      className="relative flex flex-col items-center"
      style={{ width: 32, height: 56 }}
    >
      {/* Ambient glow behind bulb when light is on */}
      {isLight && (
        <div
          className="absolute pointer-events-none"
          style={{
            top: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 40,
            height: 40,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(251,191,36,0.35) 0%, rgba(251,191,36,0.1) 50%, transparent 70%)',
            filter: 'blur(4px)',
          }}
        />
      )}

      {/* SVG lamp body — sways as a unit */}
      <svg
        width="32"
        height="56"
        viewBox="0 0 32 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isSway ? 'lamp-sway-anim' : ''}
        style={{ display: 'block', overflow: 'visible' }}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="bulbGradient" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="40%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </radialGradient>
          <filter id="bulbGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ceiling mount */}
        <rect x="11" y="0" width="10" height="4" rx="1.5" fill={mountColor} />

        {/* Wire from mount to socket */}
        <line x1="16" y1="4" x2="16" y2="14" stroke={wireColor} strokeWidth="1.5" strokeLinecap="round" />

        {/* Socket body */}
        <rect x="11" y="14" width="10" height="7" rx="2" fill={socketColor} />
        {/* Socket ridge lines */}
        <line x1="13" y1="16" x2="13" y2="19" stroke={isLight ? '#d1d5db' : '#374151'} strokeWidth="0.75" />
        <line x1="16" y1="16" x2="16" y2="19" stroke={isLight ? '#d1d5db' : '#374151'} strokeWidth="0.75" />
        <line x1="19" y1="16" x2="19" y2="19" stroke={isLight ? '#d1d5db' : '#374151'} strokeWidth="0.75" />

        {/* Bulb (teardrop shape) */}
        <g filter={isLight ? 'url(#bulbGlow)' : 'none'} style={{ filter: glowFilter }}>
          <ellipse
            cx="16"
            cy="27"
            rx="7"
            ry="8"
            fill={bulbFill}
            stroke={bulbStroke}
            strokeWidth="1"
            className={isFlicker ? 'bulb-flicker-anim' : ''}
          />
          {/* Bulb neck */}
          <rect x="13" y="21" width="6" height="2" rx="1" fill={isLight ? '#fcd34d' : '#374151'} />
          {/* Bulb filament highlight */}
          {isLight && (
            <ellipse cx="16" cy="25" rx="2.5" ry="3" fill="rgba(255,255,255,0.4)" />
          )}
        </g>

        {/* Pull string — from bulb bottom down */}
        <line x1="16" y1="35" x2="16" y2="47" stroke={stringColor} strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* Pull handle (bead) — interactive, animated separately */}
      <div
        role="button"
        tabIndex={0}
        aria-label={
          isLight
            ? 'Turn lamp off – switch to dark mode'
            : 'Turn lamp on – switch to light mode'
        }
        aria-pressed={isLight}
        onPointerDown={(e) => {
          e.preventDefault();
          triggerPull();
        }}
        onKeyDown={handleKeyDown}
        className={`absolute cursor-pointer select-none ${isPulling ? 'lamp-pull-anim' : ''}`}
        style={{
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: `radial-gradient(circle at 35% 35%, ${isLight ? '#fef3c7' : '#9ca3af'}, ${handleColor})`,
          border: `1.5px solid ${handleStroke}`,
          boxShadow: isLight
            ? '0 0 4px rgba(251,191,36,0.6), 0 1px 3px rgba(0,0,0,0.2)'
            : '0 1px 3px rgba(0,0,0,0.3)',
          outline: 'none',
        }}
        onFocus={(e) => {
          (e.currentTarget as HTMLDivElement).style.outline = '2px solid #3b82f6';
          (e.currentTarget as HTMLDivElement).style.outlineOffset = '4px';
        }}
        onBlur={(e) => {
          (e.currentTarget as HTMLDivElement).style.outline = 'none';
        }}
      />
    </div>
  );
};
