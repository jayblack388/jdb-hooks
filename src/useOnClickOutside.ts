import { useEffect } from 'react';

const MOUSEDOWN = 'mousedown';
const TOUCHSTART = 'touchstart';
type HandledEvents = [typeof MOUSEDOWN, typeof TOUCHSTART];
type HandledEventsType = HandledEvents[number];
type PossibleEvent = {
  [Type in HandledEventsType]: HTMLElementEventMap[Type];
}[HandledEventsType];
type Handler = (event: PossibleEvent) => void;

/**
 * Adds an onClickOutside listener to the provided ref. Will call `handler` when a click
 * outside of the `ref` is detected. For best performance, `handler` should be memoized
 * @param  {React.RefObject<HTMLElement>} ref
 * @param  {Handler | null} handler
 * @param  {Boolean} enabled
 * @returns `void`
 */

export const useOnClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: Handler | null,
  enabled = true
) => {
  useEffect(() => {
    if (!enabled) return;
    const listener = (event: PossibleEvent) => {
      // Clicking inside
      if (!(ref && ref.current) || ref.current.contains(event.target as Node)) {
        return;
      }
      // Clicking outside
      if (handler) handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      if (!enabled) return;
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, enabled]);
};

export default useOnClickOutside;
