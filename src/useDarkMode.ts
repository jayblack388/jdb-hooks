import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useMedia } from './useMedia';

type DarkModeHandler = (enabled: boolean) => void;

/**
 * Compose `useMedia` to detect dark mode preference
 *
 * @returns `true`/`false` based on OS dark mode setting
 */
const usePrefersDarkMode = () => {
  return useMedia('(prefers-color-scheme: dark)', false);
};

/**
 * Adds or removes `dark-mode` class to DOM `body`
 *
 * @param  {Boolean} enabled
 */

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
 * Creates a local storage backed dark mode state and setState. Uses `useMedia`
 * to determine if client's OS prefers dark mode.
 * @param  {DarkModeHandler} handler
 * @returns [`darkModeEnabled`, `setDarkModeEnabled`]
 */

export const useDarkMode = (handler: DarkModeHandler = defaultHandler) => {
  // See if user has set a browser or OS preference for dark mode.
  const prefersDarkMode = usePrefersDarkMode();
  // Use our useLocalStorage hook to persist state through a page refresh.
  const [enabledState, setDarkModeEnabled] = useLocalStorage(
    'dark-mode-enabled',
    false
  );
  const darkModeEnabled =
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;

  useEffect(() => {
    handler(darkModeEnabled);
  }, [darkModeEnabled, handler]);
  return [darkModeEnabled, handler, setDarkModeEnabled];
};

export default useDarkMode;
