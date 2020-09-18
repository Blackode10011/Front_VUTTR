import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import './index.css';
import PageDefault from './pages/Default';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={PageDefault} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
