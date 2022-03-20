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
  .get(['/', '/:id'], async (req, res, next) => {
    try {
      res.json(await Project.get(req.query.page))
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

/*
//
//
//
//
// Get all projects
router.get('/', (req, res) => {
  con().query('SELECT * FROM projects', function (err, result, fields) {
    res.send(result)
  })
})

// Update existing project
router.patch('/', function (req, res) {
  con().query(
    `UPDATE projects SET title = "${req.body.title}", slug = "${req.body.slug}", description = "${req.body.description}", logo = "${req.body.logo}" WHERE id = "${req.body.id}";`
  )

  res.send(result)
})

// Store a new project
router.post('/', jsonParser, function (req, res) {
  let title = req.body.title
  let slug = req.body.slug
  let description = req.body.description
  let logo = req.body.logo

  // Insert form data into database
  con().query(
    `INSERT INTO projects (title, slug, description, logo) VALUES ("${title}", "${slug}", "${description}", "${logo}")`
  )

  res.send(req.body)
})

// Get specific project according to projectId
router.get('/:id', (req, res) => {
  let projectId = req.params.id

  con().query('SELECT * FROM projects WHERE id =' + projectId, function (err, result, fields) {
    res.send(result)
  })
})

module.exports = router
*/
