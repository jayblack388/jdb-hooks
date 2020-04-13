import * as React from 'react';
import { useComponentLogic } from './hooks';
import ReactMarkdown from 'react-markdown';
const Home = () => {
  const { text } = useComponentLogic();
  return <ReactMarkdown source={text} />;
};

export default Home;
