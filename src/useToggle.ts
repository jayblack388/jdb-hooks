import { useCallback, useState } from 'react';

/**
 * Returns a useState hook and a memoized toggle function as a third item in the array
 *
 * @param  {Boolean} initialState
 * @returns a `useState` hook as well as a memoized toggle
 */

export const useToggle = (initialState = false) => {
  const [value, setValue] = useState(initialState);
  const toggleValue = useCallback(() => setValue(prevValue => !prevValue), [
    setValue,
  ]);
  return [value, setValue, toggleValue];
};

export default useToggle;
