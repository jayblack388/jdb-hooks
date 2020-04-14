import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useMedia } from './useMedia';

/**
 * Compose `useMedia` to detect dark mode preference
 *
 * @returns a `ref` as well as an `isHovered` value
 */
const usePrefersDarkMode = () => {
  return useMedia('(prefers-color-scheme: dark)', false);
};

const defaultHandler = (enabled: boolean) => {
  const className = 'dark-mode';
  const element = window.document.body;
  if (enabled) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
};

/**
 * Returns a ref to attach to a DOM element and whether it is currently hovered
 *
 * @returns a `ref` as well as an `isHovered` value
 */

export const useDarkMode = (handler = defaultHandler) => {
  // See if user has set a browser or OS preference for dark mode.
  const prefersDarkMode = usePrefersDarkMode();
  console.log('prefersDarkMode:', prefersDarkMode);
  // Use our useLocalStorage hook to persist state through a page refresh.
  const [enabledState, setEnabledState] = useLocalStorage(
    'dark-mode-enabled',
    false
  );
  const enabled =
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;

  useEffect(() => {
    handler(enabled);
  }, [enabled]);
  return [enabled, setEnabledState];
};

export default useDarkMode;
