const db = require('./db')
const helper = require('./helper')

/**
 * Constructor for new projects that checks if the passed object adheres the
 * format we need and throws errors if it doesn't
 * @param {*} project an object containing the necessary fields to make a new project
 */
const project = function (project) {
  // TODO: Check for sanity...
  this.id = project.id
  this.name = project.name
  this.short_description = project.short_description
  this.description = project.description
  this.logo = project.logo
  this.link = project.link
  this.main_img = project.main_img
}

/**
 * Get all projects from the database, will be paginated if the number of
 * projects in the database exceeds process.env.LIST_PER_PAGE
 * @param {*} page the page of authors you want to get
 * @returns an object containing the requested data and some meta information
 */
project.get = async function (page = 1) {
  const rows = await db.query(`SELECT * FROM projects LIMIT ?,?`, [
    helper.getOffset(page, process.env.LIST_PER_PAGE),
    Number(process.env.LIST_PER_PAGE),
  ])

  return {
    data: helper.emptyOrRows(rows),
    meta: { page },
  }
}

/**
 * Get a specific project from the database
 * @param {*} id the id of the project to return
 * @returns an object containing the requested data and some meta information
 */
project.getById = async function (id) {
  const rows = await db.query(`SELECT * FROM projects WHERE id = ?`, [id])
  return {
    data: helper.emptyOrRows(rows),
    meta: {},
  }
}

/**
 * Add a new project to the database
 * @param {*} project a new project object created with the project constructor
 * @returns an object containing the inserted project with the newly inserted id
 */
project.post = async function (project) {
  const rows = await db.query(
    `INSERT INTO projects SET ${prepareQuery(project)}`,
    prepareArray(project)
  )
  project.id = rows.insertId
  return {
    data: [project],
    meta: {
      insertId: rows.insertId,
    },
  }
}

/**
 * Update a project in the database using put (pass the whole object)
 * @param {*} project a complete project object with the applied changes
 * @returns
 */
project.put = async function (project) {
  const rows = await db.query(
    `UPDATE projects SET ${prepareQuery(project)} WHERE id = ?`,
    prepareArray(project)
  )
  return {
    data: {},
    meta: helper.emptyOrRows(rows),
  }
}

/**
 * Patch a project in the database
 * @param {*} project a project object containing at least the id and one other field.
 * @returns
 */
project.patch = async function (project) {
  const rows = await db.query(
    `UPDATE projects SET ${prepareQuery(project)} WHERE id = ?`,
    prepareArray(project)
  )
  return {
    data: {},
    meta: helper.emptyOrRows(rows),
  }
}

/**
 * Remove a project from the database
 * @param {*} id the id of the project to delete
 * @returns
 */
project.delete = async function (id) {
  const rows = await db.query(`DELETE FROM projects WHERE id = ?`, [id])
  return {
    data: {},
    meta: helper.emptyOrRows(rows),
  }
}

module.exports = project

/**
 * Prepares part of an SQL query based on a passed partial project object
 * @param {*} project partial project object containing at least the id
 * @returns a string to be used in the query, eg 'field = ?, field2 = ? ...'
 */
function prepareQuery(project) {
  return Object.keys(project)
    .filter((field) => field != 'id')
    .map((field) => `${field} = ?`)
    .reduce((prev, curr) => `${prev}, ${curr}`)
}

/**
 * Prepares a passed partial project object for update using the REST
 * method. Whatever fields are passed, the id needs to be at the end.
 * @param {*} project partial project object containing at least the id
 * @returns [] an array to be used in the query
 */
function prepareArray(project) {
  const { id, ...preparedSmartzone } = project
  return [...Object.values(preparedSmartzone), id]
}
