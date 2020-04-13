import * as React from 'react';
import { usePrevious as usePreviousHook } from '../../../dist';

export const usePrevious = () => {
  const [value, setValue] = React.useState(0);
  const previousValue = usePreviousHook(value);
  return (
    <>
      <button onClick={() => setValue(value + 1)}>+</button>
      <h1>{`The current value is ${value}, and the previous value is ${previousValue}`}</h1>
      <button onClick={() => setValue(value - 1)}>-</button>
    </>
  );
};

export default usePrevious;
