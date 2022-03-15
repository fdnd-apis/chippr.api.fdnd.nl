const express = require("express");
const app = express();
const port = 3000;
const openapi = require("./docs/openapi.json");
const cors = require("cors");

const projectsRoute = require("./routes/Projects");

app.use("/projects", projectsRoute);
app.use(cors);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to the Chippr API! Please use the resources below to expore this API.",
    github: "https://github.com/fdnd-apis/chippr",
    spec: "https://tribe.api.fdnd.nl/v1",
    docs: "https://redocly.github.io/redoc/?url=https:%2F%2Ftribe.api.fdnd.nl%2Fv1",
  });
});

// Send openapi doc as json
app.get("/v1", (req, res) => {
  res.json(openapi);
});

app.listen(port, () => {
  console.log(`API Listening on port: ${port}`);
});
