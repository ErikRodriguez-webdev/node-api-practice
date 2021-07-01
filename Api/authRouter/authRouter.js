const express = require("express");
const authRouter = express.Router();

// database helper functions
const authHelper = require("./authHelper.js");

authRouter.post("/", async (req, res) => {
  // login information located in body of request
  const body = req.body;

  if (!body || !body.email || !body.password) {
    return res.status(400).send("Missing email or password");
  }

  if (body.email && body.password) {
    try {
      const user = await authHelper.insertUser(body);
      user
        ? res.status(200).JSON({ email: body.email })
        : res.status(404).send("Error: with email and password fields");
    } catch (err) {
      res.status(500).send("Error: with saving user to database");
    }
  } else {
    return res
      .status(500)
      .send("Error: Something went wrong when creating account.");
  }
});

authRouter.put("/:id", async (req, res) => {
  // password reset for email in body of request
  const body = req.body;

  if (!body || !body.email || !body.password) {
    return res.status(400).send("Missing email or password");
  }

  if (body.email && body.password) {
    try {
      const user = await authHelper.updateUser(req.params.id, body);
      user
        ? res.status(200).send({ email: body.email })
        : res
            .status(404)
            .send("Error: with updating user account or does not exist");
    } catch (err) {
      res.status(500).send("Error: with user account data not modified");
    }
  } else {
    return res
      .status(500)
      .send("Error: Something went wrong when updating account");
  }
});

module.exports = authRouter;
