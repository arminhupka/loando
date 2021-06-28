import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';

// Views
import HomeView from './views/HomeView';

const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route exact component={HomeView} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
