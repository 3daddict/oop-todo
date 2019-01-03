require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/list_items.js');

//server error reporting
app.use(morgan('short'));
//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
//set client
app.use(express.static('../client/'));
//router
app.use(router);

//listening port
app.listen(port, () => {
    console.log('Server is up and running on port: ', port);
});