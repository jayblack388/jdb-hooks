import * as React from 'react';
import { useDarkMode as useDarkModeHook } from '../../../dist';

export const useDarkMode = () => {
  const [enabled, setEnabled] = useDarkModeHook();
  return (
    <div>
      <button onClick={() => setEnabled(!enabled)}>
        Dark Mode {enabled ? 'enabled' : 'disabled'}
      </button>
    </div>
  );
};

export default useDarkMode;
