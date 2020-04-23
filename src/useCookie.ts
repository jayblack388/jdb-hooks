import { useState } from 'react';
import Cookies from 'js-cookie';

/**
 * Acts as a `useState` hook would, but will also create or
 * update a cookie if available.
 *
 * @param  {String} key
 * @param  {any} initialValue
 * @returns [`storedValue`, `setValue`]
 */

export const useCookie = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = Cookies.get(key);
      if (item) {
        return item;
      } else return initialValue;
    } catch (error) {
      console.error('ERROR: ', error);
      return initialValue;
    }
  });
  const setValue = (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      Cookies.set(key, valueToStore);
    } catch (error) {
      console.error('ERROR: ', error);
    }
  };

  return [storedValue, setValue];
};

export default useCookie;
