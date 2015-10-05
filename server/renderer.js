import fs from 'graceful-fs'
import path from 'path'

import _ from 'lodash'
import express from 'express'
import { Route, match } from 'react-router'
import createLocation from 'history/lib/createLocation'
import { stringifyQuery } from 'history/lib/useQueries'

import createStore from '../public/client/store'
import clientRoutes from '../public/client/routes'

const stringifyLocation = (location) => {
  const query = stringifyQuery(location.query)
  return `${location.pathname}${query && `?${query}`}`
}

export default () => {
  const templatePath = path.resolve(__dirname, '../public', 'template.html')
  const templateSource = fs.readFileSync(templatePath, { encoding: 'utf-8' })
  const template = _.template(templateSource)

  const app = express()
  app.use((req, res, next) => {
    const location = createLocation(req.path, req.query)
    const store = createStore()
    console.log(clientRoutes);
    const routes = Route.createRouteFromReactElement(clientRoutes)

    match({ routes, location }, (error, redirectLocation, renderProps) => {
      if (error) return next(error)
      if (redirectLocation) return res.send(stringifyLocation(redirectLocation))
      if (renderProps === null) return res.send(404, 'Not found')

      const html = 'OK'
      const initialState = JSON.stringify(store.getState())
      res.send(template({ html, initialState }))
    })
  })
  return app
}
