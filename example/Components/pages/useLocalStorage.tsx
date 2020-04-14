import * as React from 'react';
import { useLocalStorage as useLocalStorageHook } from '../../../dist';
import { Box, Column, Row } from './elements';

const Section = ({ color, setColor, isLocal }) => (
  <Column center height={50} width={50}>
    <h1>{isLocal ? 'useLocalStorage' : 'useState'}</h1>
    <h4>The value of this color is {color}</h4>
    <h4>
      {isLocal
        ? 'If you change it and reload, it should keep your old value'
        : 'If you change it and reload, it will always revert to blueviolet'}
    </h4>
    <Box color={color} />
    <input value={color} onChange={event => setColor(event.target.value)} />
  </Column>
);

export const useLocalStorage = () => {
  const [localStorageColor, setLocalStorageColor] = useLocalStorageHook(
    'color',
    'blueviolet'
  );
  const [color, setColor] = React.useState('blueviolet');
  return (
    <Row center>
      <Section
        color={localStorageColor}
        setColor={setLocalStorageColor}
        isLocal
      />
      <Section color={color} setColor={setColor} isLocal={false} />
    </Row>
  );
};

export default useLocalStorage;
