import React from 'react';
import {Route, Router} from 'react-router';

import App from './components/app';

React.render((
  <Router>
    <Route path="/" component={App} />
  </Router>
), document.getElementById('root'));
