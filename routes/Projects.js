const express = require('express')
const router = express.Router()
let bodyParser = require('body-parser')

// Import database connection
let con = require('../models/db')

// Import body parser
let jsonParser = bodyParser.json()

// Get all projects
router.get('/', (req, res) => {
  console.log('Get all!')
  con().query('SELECT * FROM projects', function (err, result, fields) {
    res.send(result)
  })
})

// Update existing project
router.patch('/', jsonParser, function (req, res) {
  let projectId = req.params.id

  let title = req.body.title
  let slug = req.body.slug
  let description = req.body.description
  let logo = req.body.logo

  console.log(result)

  // Update form data to database
  con().query(
    `UPDATE projects SET title = ${title}, slug = ${slug}, description = ${description}, logo = ${logo} WHERE id = ${projectId}`,
    function (err, result, fields) {
      res.send(result)
    }
  )
})

// Store a new project
router.post('/', jsonParser, function (req, res) {
  console.log(req.body)
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

// Get specific project according to clientId
router.get('/:id', (req, res) => {
  let projectId = req.params.id

  con().query('SELECT * FROM projects WHERE id =' + projectId, function (err, result, fields) {
    res.send(result)
  })
})

module.exports = router
