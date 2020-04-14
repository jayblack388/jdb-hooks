import { useCallback, useEffect, useState } from 'react';
type AsyncFunc = () => Promise<unknown>;
/**
 * Wraps an asynchronous function to provide stateful `loading`, `error` and
 * `response`. Also provides an `execute` function that wraps the passed
 * `asyncFunction`. Can set `immediate` to `true` to invoke immediately,
 * otherwise `response` will be `null`.
 *
 * @param  {AsyncFunc} asyncFunction
 * @param  {Boolean} immediate
 * @returns `execute`, `loading`, `response`, `error`
 */
export const useAsync = (asyncFunction: AsyncFunc, immediate = true) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // The execute function wraps asyncFunction and
  // handles setting state for loading, response, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(() => {
    setLoading(true);
    setResponse(null);
    setError(null);
    return asyncFunction()
      .then((res: any) => setResponse(res))
      .catch((error: any) => setError(error))
      .finally(() => setLoading(false));
  }, [asyncFunction]);

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, loading, response, error };
};

export default useAsync;
