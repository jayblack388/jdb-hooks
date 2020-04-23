import styled from 'styled-components';

export const Nav = styled.nav`
  border-right: 2px solid #666;
  height: 100%;
  padding: 0.75rem 2rem;
  width: 15vw;
  @media only screen and (max-width: 1200px) {
    width: 25vw;
  }
  @media only screen and (max-width: 720px) {
    width: 35vw;
  }
`;
export const NavLinks = styled.ul`
  margin: 0;
  padding: 0%;
`;
export const NavLink = styled.li`
  list-style: none;
  margin: 0;
  margin-bottom: 1rem;
  padding: 0%;
  a {
    color: #ef00aa;
    text-decoration: none;
  }
`;
