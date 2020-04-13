import { useEffect, useState } from 'react';
import { readFileSync } from 'fs';

export const useComponentLogic = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    const fetchText = async () => {
      try {
        const markdownContent = readFileSync(
          __dirname + '/../../../../README.md',
          'utf-8'
        );
        setText(markdownContent);
      } catch (error) {
        console.log('error:', error);
      }
    };
    fetchText();
  }, []);
  return { text };
};
