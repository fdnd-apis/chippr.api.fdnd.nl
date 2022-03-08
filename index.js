const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
require('dotenv').config()

// Create database connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
})

// Establish database connection
connection.connect();

// Get all projects
app.get('/projects', (req, res) => {
    connection.query('SELECT * FROM clients', function(err, result, fields) {
        res.send(result);
    });
});

// Get specific project according to clientId
app.get('/projects/:id', (req, res) => {
    let clientId = req.params.id;

    connection.query('SELECT * FROM clients WHERE id =' + clientId, function(err, result, fields) {
        res.send(result);
    });
})
