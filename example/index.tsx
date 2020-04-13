import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useToggle } from '../.';

const UseToggleExample = ({ value, toggleValue }) => (
  <>
    <h1>{`The value is ${value}`}</h1>
    <button onClick={toggleValue} />
  </>
);

const App = () => {
  const [value, _, toggleValue] = useToggle();
  return (
    <div style={{ height: '100vh', width: '100wv' }}>
      <UseToggleExample value={value} toggleValue={toggleValue} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
