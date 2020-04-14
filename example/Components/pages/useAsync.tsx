import React from 'react';
import { useAsync as useAsyncHook } from '../../../dist';

// An async function for testing our hook.
// Will be successful 50% of the time.
const myFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      rnd <= 5
        ? resolve('Submitted successfully 🙌')
        : reject('Oh no there was an error 😞');
    }, 2000);
  });
};

export const useAsync = () => {
  const { execute, loading, response, error } = useAsyncHook(myFunction, false);
  return (
    <div>
      {response && <div>{response}</div>}
      {error && <div>{error}</div>}
      <button onClick={execute} disabled={loading}>
        {!loading ? 'Click me' : 'Loading...'}
      </button>
    </div>
  );
};

export default useAsync;
