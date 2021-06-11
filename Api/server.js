const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// api instance
const server = express();

// security
server.use(helmet());

// resource access
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).send(" Node Practice Server");
});

module.exports = server;
