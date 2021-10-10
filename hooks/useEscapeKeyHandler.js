import { useEffect } from 'react';

export const useEscapeKeyHandler = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (event.key === 'Escape') {
        handler(event);
      }
      return;
    };

    document.addEventListener('keydown', listener);

    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [ref, handler]);
};
