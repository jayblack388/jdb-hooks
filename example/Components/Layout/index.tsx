import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, useHover, useToggle } from '../pages';
import { Nav } from '../';
import * as S from './styles';

export const Layout = () => (
  <>
    <S.Global />
    <S.PageContainer>
      <Router>
        <Nav />
        <S.ContentContainer>
          <Switch>
            <Route exact path="/useHover" component={useHover} />
            <Route exact path="/useToggle" component={useToggle} />
            <Route path="/" component={Home} />
          </Switch>
        </S.ContentContainer>
      </Router>
    </S.PageContainer>
  </>
);

export default Layout;
