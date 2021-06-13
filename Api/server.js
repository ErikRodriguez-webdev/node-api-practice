const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// routes
const authRouter = require("./authRouter/authRouter.js");
const { json } = require("express");

// api instance
const server = express();

// utilize json
server.use(json());

// security
server.use(helmet());

// resource access
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).send(" Node Practice Server");
});

// routers
server.use("/auth", authRouter);

module.exports = server;
