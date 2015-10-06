import React from 'react'
import { Router } from 'react-router'

import app from './app'
import pageNotFound from './pageNotFound'

export default (
  <Router>
    {app}
    {pageNotFound}
  </Router>
)
