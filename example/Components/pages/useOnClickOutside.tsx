import * as React from 'react';
import styled from 'styled-components';
import {
  useOnClickOutside as useOnClickOutsideHook,
  useToggle,
} from '../../../dist';

const Box = styled.div`
  background: red;
  height: 100px;
  width: 100px;
`;

export const useOnClickOutside = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [enabled, _, toggleEnabled] = useToggle(true);
  const handler = React.useCallback(() => {
    alert('You clicked outside of the box');
  }, []);
  useOnClickOutsideHook(ref, handler, enabled);
  return (
    <Box ref={ref}>
      <h4>Click outside the box for an alert!</h4>
      <button onClick={toggleEnabled}>
        Example {`${enabled ? 'Enabled' : 'Disabled'}`}
      </button>
    </Box>
  );
};

export default useOnClickOutside;
