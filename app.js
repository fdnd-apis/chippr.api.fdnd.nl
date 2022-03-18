require("dotenv").config();
const { apply } = require("body-parser");
const express = require("express");
const openapi = require("./docs/openapi.json");

// Routes
const projectsRoute = require("./routes/Projects");

module.exports = express()
  .use(express.json())

  .get("/", (req, res) => {
    res.json({
      message:
        "Welcome to the Chippr API! Please use the resources below to expore this API.",
      github: "https://github.com/fdnd-apis/chippr",
      spec: "https://tribe.api.fdnd.nl/v1",
      docs: "https://redocly.github.io/redoc/?url=https:%2F%2Ftribe.api.fdnd.nl%2Fv1",
    });
  })

  .use("/projects", projectsRoute)

  // Send openapi doc as json
  .get("/v1", (req, res) => {
    res.json(openapi);
  });
