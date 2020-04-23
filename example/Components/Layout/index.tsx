import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as P from '../pages';
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
            <Route exact path="/useAsync" component={P.useAsync} />
            <Route exact path="/useCookie" component={P.useCookie} />
            <Route exact path="/useDarkMode" component={P.useDarkMode} />
            <Route exact path="/useHover" component={P.useHover} />
            <Route
              exact
              path="/useLocalStorage"
              component={P.useLocalStorage}
            />
            <Route exact path="/useMedia" component={P.useMedia} />
            <Route
              exact
              path="/useOnClickOutside"
              component={P.useOnClickOutside}
            />
            <Route exact path="/usePrevious" component={P.usePrevious} />
            <Route exact path="/useToggle" component={P.useToggle} />
            <Route path="/" component={P.Home} />
          </Switch>
        </S.ContentContainer>
      </Router>
    </S.PageContainer>
  </>
);

export default Layout;
