import * as React from 'react';
import { useHover as useHoverHook } from '../../../dist';

export const useHover = () => {
  const [hoverRef, isHovered] = useHoverHook();
  return (
    <h1 ref={hoverRef}>{`The Header is ${isHovered ? '' : 'not '}hovered`}</h1>
  );
};

export default useHover;
