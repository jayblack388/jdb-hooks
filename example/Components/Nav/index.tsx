import * as React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

export const Nav = () => (
  <S.Nav>
    <S.NavLinks>
      <S.NavLink>
        <Link to="useHover">useHover</Link>
      </S.NavLink>
      <S.NavLink>
        <Link to="useToggle">useToggle</Link>
      </S.NavLink>
      <S.NavLink>
        <Link to="useOnClickOutside">useOnClickOutside</Link>
      </S.NavLink>
    </S.NavLinks>
  </S.Nav>
);

export default Nav;
