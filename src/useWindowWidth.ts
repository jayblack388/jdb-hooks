import { useEffect, useState } from 'react';
import { isSSR } from './constants';

export const useWindowWidth = () => {
  const [width, setWidth] = useState(isSSR ? 0 : window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;
};
