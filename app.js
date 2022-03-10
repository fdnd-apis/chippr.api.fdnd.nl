const express = require('express');
const app = express();
const port = 3000;

const projectsRoute = require('./routes/Projects');

app.use('/projects', projectsRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })