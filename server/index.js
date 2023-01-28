const mysql = require('mysql2')
const cors = require('cors')
const config = require('./config/config')


const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// OLD parse requests of content-type - application/x-www-form-urlencoded
//app.use(express.urlencoded({ extended: true }))

require('dotenv').config()

app.listen(config.port, () => console.log(`Server started on port ${config.port}`))
