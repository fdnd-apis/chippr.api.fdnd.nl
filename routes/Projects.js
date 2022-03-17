const express = require('express')
const router = express.Router()
let bodyParser = require('body-parser')

// Import database connection
let con = require('../models/db')

// Import body parser
let jsonParser = bodyParser.json()

// Get all projects
router.get('/', (req, res) => {
  con().query('SELECT * FROM projects', function (err, result, fields) {
    res.send(result)
  })
})

// Update existing project
router.patch('/', function (req, res) {
  console.log(req.body)
  let query = `UPDATE projects SET title = "${req.body.title}", slug = "${req.body.slug}", description = "${req.body.description}", logo = "${req.body.logo}" WHERE id = "${req.body.projectId}";`
  con().query(query, function (err, result, fields) {
    console.log(err)
    console.log(result)
    res.send(result)
  })
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
