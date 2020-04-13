import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref to attach to a DOM element and whether it is currently hovered
 *
 * @returns a `ref` as well as an `isHovered` value
 */

export const useHover = () => {
  const [hovered, setIsHovered] = useState(false);

  const ref = useRef<HTMLElement>(null);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
      }
      return () => {
        if (node) {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        }
      };
    },
    [ref] // Recall only if node changes
  );

  return [ref, hovered];
};

export default useHover;
