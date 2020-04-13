import * as React from 'react';
import { useToggle as useToggleHook } from '../../../dist';

export const useToggle = () => {
  const [value, _, toggleValue] = useToggleHook();
  return (
    <>
      <h1>{`The value is ${value}`}</h1>
      <button onClick={toggleValue} />
    </>
  );
};

export default useToggle;
