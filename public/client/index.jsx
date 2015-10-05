import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'

import app from './routes/app'
import pageNotFound from './routes/pageNotFound'
import * as routes from './routes'
console.log('client routes', routes)

ReactDOM.render((
  <Router>
    {app}
    {pageNotFound}
  </Router>
), document.getElementById('root'))
