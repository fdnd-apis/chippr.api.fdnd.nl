const express = require('express');
const router = express.Router();

var con = require('../models/db');

// Get all projects
router.get('/', (req, res) => {
    con().query('SELECT * FROM clients', function(err, result, fields) {
        res.send(result);
    });
});

// Get specific project according to clientId
router.get('/:id', (req, res) => {
    let clientId = req.params.id;

    connection.query('SELECT * FROM clients WHERE id =' + clientId, function(err, result, fields) {
        res.send(result);
    });
});

module.exports = router;