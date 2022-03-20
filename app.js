require('dotenv').config()
const express = require('express')
const indexRoute = require('./routes/index')
const projectRoute = require('./routes/project')
const errorRoute = require('./routes/error')

module.exports = express()
  .use(express.json())
  .use(express.urlencoded({ extended: true }))

  .use('/', indexRoute)
  .use('/v1/project', projectRoute)
  .use(errorRoute)

/*

  .get('/', (req, res) => {
    res.json({
      message: 'Welcome to the Chippr API! Please use the resources below to expore this API.',
      github: 'https://github.com/fdnd-apis/chippr',
      spec: 'https://tribe.api.fdnd.nl/v1',
      docs: 'https://redocly.github.io/redoc/?url=https:%2F%2Ftribe.api.fdnd.nl%2Fv1',
    })
  })

  .use('/projects', projectsRoute)

  // Send openapi doc as json
  .get('/v1', (req, res) => {
    res.json(openapi)
  })
*/
