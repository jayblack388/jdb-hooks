import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background: #fff;
    color: #000;
    margin: 0;
    &.dark-mode {
      background: #000;
      color: #fff;
    }
  }
`;

export const PageContainer = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
export const ContentContainer = styled.section`
  height: 100%;
  overflow-y: auto;
  padding: 0.75rem 1.25rem;
  width: 85vw;
  @media only screen and (max-width: 960px) {
    width: 75vw;
  }
`;
