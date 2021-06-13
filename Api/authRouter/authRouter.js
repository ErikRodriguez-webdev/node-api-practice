const express = require("express");
const authRouter = express.Router();

authRouter.post("/", (req, res) => {
  const body = req.body;

  if (!body || !body.email || !body.password) {
    return res.status(400).send("Missing email or password");
  }

  if (body.email && body.password) {
    return res
      .status(201)
      .send(`Account successfully created for ${body.email}!`);
  } else {
    return res.status(500).send("Error: Something went wrong...");
  }
});

module.exports = authRouter;
