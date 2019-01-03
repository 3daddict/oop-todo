require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/list_items.js');
const con = require('./config/db_creds.js');

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

app.post('/create_list_item', (req, res) => {
    
    console.log('Trying to create a new user');
    const title = req.body.create_title;
    const description = req.body.create_description;
    const queryString = "INSERT INTO `list_items`(`title`, `description`) VALUES (?,?)";

    con.query(queryString, [title, description], (err, results, fields) => {
        if(err) {
            console.log('Error failed to insert list item: ' + err);
            res.sendStatus(500);
            return
        }

        console.log('Inserted new list item with id: ', results.insertId);
        res.end();

    });
    
});


