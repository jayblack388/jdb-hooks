import { useState } from 'react';

/**
 * Acts as a `useState` hook would, but will also create or
 * update local storage if available.
 *
 * @param  {String} key
 * @param  {any} initialValue
 * @returns [`storedValue`, `setValue`]
 */

export const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      } else return initialValue;
    } catch (error) {
      console.error('error:', error);
      return initialValue;
    }
  });
  const setValue = (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('error:', error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
