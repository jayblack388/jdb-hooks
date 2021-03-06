import * as React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const links = [
  'useAsync',
  'useCookie',
  'useDarkMode',
  'useHover',
  'useLocalStorage',
  'useMedia',
  'useOnClickOutside',
  'usePrevious',
  'useToggle',
  'useWindowWidth',
];

export const Nav = () => (
  <S.Nav>
    <S.NavLinks>
      {links.map(x => (
        <S.NavLink key={x}>
          <Link to={x}>{x}</Link>
        </S.NavLink>
      ))}
    </S.NavLinks>
  </S.Nav>
);

export default Nav;
