import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'

import app from './routes/app'
import pageNotFound from './routes/pageNotFound'

ReactDOM.render((
  <Router>
    {app}
    {pageNotFound}
  </Router>
), document.getElementById('root'))
