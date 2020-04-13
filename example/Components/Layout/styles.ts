import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
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
`;
