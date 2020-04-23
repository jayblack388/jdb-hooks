import * as React from 'react';
import { useWindowWidth as useWindowWidthHook } from '../../../dist';

export const useWindowWidth = () => {
  const width = useWindowWidthHook();
  return (
    <>
      <h1>{`This window's width is ${width}px`}</h1>
    </>
  );
};

export default useWindowWidth;
