const server = require("./Api/server.js");

const port = 5000;

// server production link or development localhost on port specified
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
