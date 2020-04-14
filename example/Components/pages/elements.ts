import styled from 'styled-components';

export const Row = styled.div<{
  center?: boolean;
  height?: number;
  width?: number;
}>`
  display: flex;
  flex-wrap: wrap;
  height: ${({ height }) => (height ? `${height}%` : '100%')};
  width: ${({ width }) => (width ? `${width}%` : '100%')};
  ${({ center }) => (center ? 'align-items: center; justify-content: center;' : '')};
`;
export const Column = styled(Row)`
  flex-direction: column;
  min-width: 360px;
`;

export const Box = styled.div`
  background: ${({ color }) => color || 'blueviolet'};
  height: 100px;
  margin-bottom: 16px;
  width: 100px;
`;

export const Code = styled.code`
  background: black;
  color: white;
  padding: 0 0.25rem;
`;
