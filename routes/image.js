const express = require('express')
const Image = require('../models/image.model')

module.exports = express
  .Router()

  // Post a new image
  .post('/', async (req, res, next) => {
    try {
      res.json(await Image.post(new Image(req.body)))
    } catch (err) {
      res.json({
        message: `Error while posting Image: ${err.message}`,
        request: req.body,
      })
    }
  })

  // Get all images
  .get('/', async (req, res, next) => {
    try {
      res.json(await Image.get(req.query.page))
    } catch (err) {
      res.json({
        message: `Error while getting Image: ${err.message}`,
        request: req.body,
      })
    }
  })

  // Get images for a specific project
  .get('/:id', async (req, res, next) => {
    try {
      res.json(await Image.getgetById(req.params.id))
    } catch (err) {
      res.json({
        message: `Error while getting Image: ${err.message}`,
        request: req.body,
      })
    }
  })

  // Delete an image
  .delete(['/', '/:id'], async (req, res, next) => {
    try {
      res.json(await Image.delete(req.params.id || req.body.id))
    } catch (err) {
      res.json({
        message: `Error while deleting image: ${err.message}`,
        request: `You tried to delete the image with id: ${req.params.id || req.body.id}`,
      })
    }
  })
