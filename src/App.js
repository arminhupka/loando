import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import GlobalStyle from './styles/GlobalStyle';

// Views
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import ContactView from './views/ContactView';
import NotFoundView from './views/NotFoundView';

const App = () => (
  <>
    <Helmet>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap' rel='stylesheet' />
    </Helmet>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/zaloguj' component={LoginView} />
        <Route exact path='/rejestracja' component={RegisterView} />
        <Route exact path='/kontakt' component={ContactView} />
        <Route exact path='*' component={NotFoundView} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
