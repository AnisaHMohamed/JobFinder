const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const PORT = proces.env.PORT || 5000

app.listen(PORT, console.log("server started listenning on port {PORT}"));
