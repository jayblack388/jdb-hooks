import * as React from 'react';
import { useMedia as useMediaHook } from '../../../dist';
import { Column, ImageContainer, Row } from './elements';

const data = [
  {
    image: 'https://source.unsplash.com/lxuB4abGzXc/800x1000',
    width: 800,
    height: 1000,
  },

  {
    image: 'https://source.unsplash.com/d30sszrW7Vw/800x800',
    width: 800,
    height: 800,
  },

  {
    image: 'https://source.unsplash.com/mDuluxr50Ew/800x500',
    width: 800,
    height: 500,
  },
  {
    image: 'https://source.unsplash.com/KX2mdxPYOtA/800x1100',
    width: 800,
    height: 1100,
  },

  {
    image: 'https://source.unsplash.com/oNoctqY9Oso/800x1200',
    width: 800,
    height: 1200,
  },

  {
    image: 'https://source.unsplash.com/-SFhuMwFClk/800x900',
    width: 800,
    height: 900,
  },
  {
    image: 'https://source.unsplash.com/hDqLoCCGOdU/800x1000',
    width: 800,
    height: 1000,
  },

  {
    image: 'https://source.unsplash.com/UZ3V6AV5y4o/800x500',
    width: 800,
    height: 500,
  },
  {
    image: 'https://source.unsplash.com/vlLH_kn-_h8/800x1200',
    width: 800,
    height: 1200,
  },
  {
    image: 'https://source.unsplash.com/TGvIuQG0AXw/800x1100',
    width: 800,
    height: 1100,
  },
  {
    image: 'https://source.unsplash.com/pBLJBHbtv0c/800x1000',
    width: 800,
    height: 1000,
  },
];

export const useMedia = () => {
  const columnCount = useMediaHook(
    // Media queries
    ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],
    // Column counts (relates to above media queries by array index)
    [5, 4, 3],
    // Default column count
    2
  );

  // Create array of column heights (start at 0)
  let columnHeights = new Array(columnCount).fill(0);

  // Create array of arrays that will hold each column's items
  let columns = new Array(columnCount).fill().map(() => []);

  data.forEach(item => {
    // Get index of shortest column
    const shortColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
    // Add item
    columns[shortColumnIndex].push(item);
    // Update height
    columnHeights[shortColumnIndex] += item.height;
  });
  return (
    <Row center>
      {columns.map((column, i) => (
        <Column key={i}>
          {column.map((item, a) => (
            <ImageContainer key={a} height={item.height} width={item.width}>
              <img src={item.image} alt="" />
            </ImageContainer>
          ))}
        </Column>
      ))}
    </Row>
  );
};

export default useMedia;
