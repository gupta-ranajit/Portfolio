import React, { ElementType, ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export type RevealAnimation = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-in';

export interface ScrollRevealProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  animation?: RevealAnimation;
  delay?: number; // milliseconds
  duration?: number; // milliseconds
  className?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  as?: ElementType;
  id?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  className = '',
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  once = true,
  as: Component = 'div',
  id,
  style,
  ...rest
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold,
    rootMargin,
    once,
  });

  const animationClass = `reveal-${animation}`;

  return (
    <Component
      id={id}
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        ...style,
      }}
      className={`reveal-base ${animationClass} ${isVisible ? 'reveal-visible' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
};
