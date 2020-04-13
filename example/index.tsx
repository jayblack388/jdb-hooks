import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useToggle } from '../.';

const App = () => {
  const [value, setValue, toggleValue] = useToggle();
  console.log('toggleValue:', toggleValue);
  console.log('setValue:', setValue);
  console.log('value:', value);
  return (
    <div style={{ height: '100vh', width: '100wv' }}>
      <h1>{`The value is ${value}`}</h1>
      <button onClick={toggleValue} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
