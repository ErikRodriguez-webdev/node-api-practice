const express = require("express");
const authRouter = express.Router();

authRouter.post("/", (req, res) => {
  // login information located in body of request
  const body = req.body;

  if (!body || !body.email || !body.password) {
    return res.status(400).send("Missing email or password");
  }

  if (body.email && body.password) {
    // cases to check when creating account
    const err1 = "Account already exists.";

    return res
      .status(201)
      .send(`Account successfully created for ${body.email}!`);
  } else {
    return res
      .status(500)
      .send("Error: Something went wrong when creating account.");
  }
});

authRouter.put("/", (req, res) => {
  // password reset for email in body of request
  const body = req.body;

  if (!body || !body.email || !body.password) {
    return res.status(400).send("Missing email or password");
  }

  if (body.email && body.password) {
    // cases to check when reseting password
    const error1 = "Account does not exist.";
    const error2 = "New password and old password should not match.";

    return res
      .status(201)
      .send(`Password successfully reset for ${body.email}!`);
  } else {
    return res
      .status(500)
      .send("Error: Something went wrong when reseting password for account");
  }
});

module.exports = authRouter;
