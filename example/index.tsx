import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useHover, useToggle } from '../.';

const UseToggleExample = ({ value, toggleValue }) => (
  <>
    <h1>{`The value is ${value}`}</h1>
    <button onClick={toggleValue} />
  </>
);

const UseHoverExample = ({ hoverRef, isHovered }) => (
  <h1 ref={hoverRef}>{`The Header is ${isHovered ? '' : 'not '}hovered`}</h1>
);

const App = () => {
  const [value, _, toggleValue] = useToggle();
  const [hoverRef, isHovered] = useHover();
  return (
    <div style={{ height: '100vh', width: '100wv' }}>
      <UseToggleExample value={value} toggleValue={toggleValue} />
      <UseHoverExample hoverRef={hoverRef} isHovered={isHovered} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
