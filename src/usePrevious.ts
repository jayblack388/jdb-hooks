import { useEffect, useRef } from 'react';

/**
 * Returns the previous value of the provided `value`
 *
 * @param  {any} value
 * @returns the previous value of the provided `value`
 */

export const usePrevious = (value: any) => {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
