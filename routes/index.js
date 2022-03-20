const express = require('express')

module.exports = express
  .Router()

  .get('/', (req, res) => {
    res.json({
      message:
        'Welcome to chipr.api.fdnd.nl, where you find info on our projects. This is a work in progress so please be patient...',
      github: 'https://github.com/fdnd-apis/chipr',
      spec: 'https://chipr.api.fdnd.nl/v1',
      docs: 'https://redocly.github.io/redoc/?url=https:%2F%2Fchipr.api.fdnd.nl%2Fv1',
    })
  })
