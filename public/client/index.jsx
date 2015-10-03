import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'

import app from './routes/app'

ReactDOM.render((
  <Router>
    {app}
  </Router>
), document.getElementById('root'))
