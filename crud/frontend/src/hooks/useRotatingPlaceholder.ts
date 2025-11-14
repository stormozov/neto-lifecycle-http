import { useState, useEffect } from 'react';

/**
 * Кастомный хук для отображения в инпуте разных placeholder'ов
 */
export const useRotatingPlaceholder = (
  placeholders: string[], 
  intervalMs = 3000
) => {
  const [index, setIndex] = useState(0);

  const PLACEHOLDER_LENGTH = placeholders.length;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % PLACEHOLDER_LENGTH);
    }, intervalMs);

    return () => clearInterval(id);
  }, [PLACEHOLDER_LENGTH, intervalMs]);

  return {
    currentPlaceholder: placeholders[index],
    showPlaceholder: (value: string) => !value,
  };
};
