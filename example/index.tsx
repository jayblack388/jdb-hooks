import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Layout } from './Components';

const App = () => {
  return <Layout />;
};

ReactDOM.render(<App />, document.getElementById('root'));
