const express = require('express')
const Project = require('../models/project.model')

module.exports = express
  .Router()

  // Post a new project
  .post('/', async (req, res, next) => {
    try {
      res.json(await Project.post(new Project(req.body)))
    } catch (err) {
      res.json({
        message: `Error while posting project: ${err.message}`,
        request: req.body,
      })
    }
  })

  // Get all projects
  .get('/', async (req, res, next) => {
    try {
      res.json(await Project.get(req.query.page))
    } catch (err) {
      res.json({
        message: `Error while getting project: ${err.message}`,
        request: req.body,
      })
    }
  })

  // Get a specific project
  .get('/:id', async (req, res, next) => {
    try {
      res.json(await Project.getById(req.params.id))
    } catch (err) {
      res.json({
        message: `Error while getting project: ${err.message}`,
        request: req.body,
      })
    }
  })

  // Put a project
  .put('/', async (req, res, next) => {
    try {
      res.json(await Project.put(new Project(req.body)))
    } catch (err) {
      res.json({
        message: `Error while putting project: ${err.message}`,
        request: req.body,
      })
    }
  })

  // Patch a project
  .patch('/', async (req, res, next) => {
    try {
      res.json(await Project.patch(req.body))
    } catch (err) {
      res.json({
        message: `Error while patching project: ${err.message}`,
        request: req.body,
      })
    }
  })

  // Delete a project
  .delete(['/', '/:id'], async (req, res, next) => {
    try {
      res.json(await Project.delete(req.params.id || req.body.id))
    } catch (err) {
      res.json({
        message: `Error while deleting project: ${err.message}`,
        request: `You tried to delete id: ${req.params.id || req.body.id}`,
      })
    }
  })
