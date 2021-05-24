require("dotenv").config();
const { PORT } = require("./api/config.js");
const server = require("./api/server.js");
const bodyParser = require("body-parser");

server.listen(PORT, () => console.log(`\n** Running on port ${PORT} **\n`));
