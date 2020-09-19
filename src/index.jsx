import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import './index.css';
import PageDefault from './pages/Default';
import PageLogin from './pages/Login';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={PageDefault} exact />
			<Route path='/login' component={PageLogin} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
