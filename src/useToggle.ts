import { useCallback, useState } from 'react';

/**
 * Acts as a `useState` hook would, but will also return a
 * `useCallback` wrapped toggle function.
 *
 * @param  {Boolean} initialState
 * @returns [`value`, `setValue`, `toggleValue`]
 */

export const useToggle = (initialState = false) => {
  const [value, setValue] = useState(initialState);
  const toggleValue = useCallback(() => setValue(prevValue => !prevValue), [
    setValue,
  ]);
  return [value, setValue, toggleValue];
};

export default useToggle;
