export const isSSR =
  typeof window === 'undefined' || typeof document === 'undefined';
