import fs from 'graceful-fs'
import path from 'path'

import express from 'express'
import _ from 'lodash'


export default () => {

  const templatePath = path.resolve(__dirname, '../public', 'template.html')
  const templateSource = fs.readFileSync(templatePath, { encoding: 'utf-8' })
  const template = _.template(templateSource)

  const app = express()
  app.use((req, res, next) => {
    // console.log(req.path, req.query)
    // console.error('ok')
    // next()
    const content = 'YEAH!'
    res.send(template({ content }))
  })
  return app
}
