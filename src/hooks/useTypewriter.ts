import { useState, useEffect } from 'react';

export interface UseTypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseDuration = 1800,
}: UseTypewriterOptions) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsReducedMotion(true);
    }
  }, []);

  useEffect(() => {
    if (isReducedMotion || words.length === 0) return;

    // Word completed, pause before deleting
    if (subIndex === words[wordIndex].length + 1 && !isDeleting) {
      const pauseTimer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    // Word deleted, move to next word
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // Typing or deleting letter by letter
    const stepTimer = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(stepTimer);
  }, [subIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration, isReducedMotion]);

  if (isReducedMotion) {
    return {
      text: words[0] || '',
      isReducedMotion: true,
    };
  }

  const currentWord = words[wordIndex] || '';
  return {
    text: currentWord.substring(0, subIndex),
    isReducedMotion: false,
  };
}
