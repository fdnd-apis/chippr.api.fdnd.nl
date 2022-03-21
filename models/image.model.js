const db = require('./db')
const helper = require('./helper')

/**
 * Constructor for new images that checks if the passed object adheres the
 * format we need and throws errors if it doesn't
 * @param {*} image an object containing the necessary fields to make a new image
 */
const image = function (image) {
  // TODO: Check for sanity...
  this.id = image.id
  this.projects_id = image.projects_id
  this.image_url = image.image_url
}

/**
 * Get all images from the database, will be paginated if the number of
 * images in the database exceeds process.env.LIST_PER_PAGE
 * @param {*} page the page of authors you want to get
 * @returns an object containing the requested data and some meta information
 */
image.get = async function (page = 1) {
  const rows = await db.query(`SELECT * FROM images LIMIT ?,?`, [
    helper.getOffset(page, process.env.LIST_PER_PAGE),
    Number(process.env.LIST_PER_PAGE),
  ])

  return {
    data: helper.emptyOrRows(rows),
    meta: { page },
  }
}

/**
 * Get all images for a specific project from the database
 * @param {*} id the id of the image to return
 * @returns an object containing the requested data and some meta information
 */
image.getById = async function (id) {
  const rows = await db.query(`SELECT * FROM images WHERE projects_id = ?`, [id])
  return {
    data: helper.emptyOrRows(rows),
    meta: { page },
  }
}

/**
 * Add a new image to the database
 * @param {*} image a new image object created with the image constructor
 * @returns an object containing the inserted image with the newly inserted id
 */
image.post = async function (image) {
  const rows = await db.query(`INSERT INTO images SET ${prepareQuery(image)}`, prepareArray(image))
  image.id = rows.insertId
  return {
    data: [image],
    meta: {
      insertId: rows.insertId,
    },
  }
}

/**
 * Remove a image from the database
 * @param {*} id the id of the image to delete
 * @returns
 */
image.delete = async function (id) {
  const rows = await db.query(`DELETE FROM images WHERE id = ?`, [id])
  return {
    data: {},
    meta: helper.emptyOrRows(rows),
  }
}

module.exports = image

/**
 * Prepares part of an SQL query based on a passed partial image object
 * @param {*} image partial image object containing at least the id
 * @returns a string to be used in the query, eg 'field = ?, field2 = ? ...'
 */
function prepareQuery(image) {
  return Object.keys(image)
    .filter((field) => field != 'id')
    .map((field) => `${field} = ?`)
    .reduce((prev, curr) => `${prev}, ${curr}`)
}

/**
 * Prepares a passed partial image object for update using the REST
 * method. Whatever fields are passed, the id needs to be at the end.
 * @param {*} image partial image object containing at least the id
 * @returns [] an array to be used in the query
 */
function prepareArray(image) {
  const { id, ...preparedSmartzone } = image
  return [...Object.values(preparedSmartzone), id]
}
