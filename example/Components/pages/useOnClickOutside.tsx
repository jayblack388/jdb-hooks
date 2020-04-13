import * as React from 'react';
import styled from 'styled-components';
import { useOnClickOutside as useOnClickOutsideHook } from '../../../dist';

const Box = styled.div`
  background: red;
  height: 100px;
  width: 100px;
`;

export const useOnClickOutside = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const handler = React.useCallback(() => {
    alert('You clicked outside of the box');
  }, []);
  useOnClickOutsideHook(ref, handler);
  return <Box ref={ref}>Click outside the box for an alert!</Box>;
};

export default useOnClickOutside;
