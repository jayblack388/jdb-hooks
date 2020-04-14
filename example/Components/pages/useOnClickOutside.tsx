import * as React from 'react';
import {
  useOnClickOutside as useOnClickOutsideHook,
  useToggle,
} from '../../../dist';
import { Box } from './elements';

export const useOnClickOutside = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [enabled, __, toggleEnabled] = useToggle(true);
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
