const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
//DATABASE
const db = require('./config/database')
//TEST DATABASE
db.authenticate()
.then(()=>console.log('Database Connected ....'))
.catch(err => console.log('Error' + err))

const app = express();

app.get('/',(req,res) => res.send('INDEX'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started listening on port ${PORT}`));
