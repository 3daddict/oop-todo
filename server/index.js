const express = require('express');
const app = express();
const mysql = require('mysql');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'oop_todo'
});

//server error reporting
app.use(morgan('short'));
//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
//set client
app.use(express.static('../client/'));
//listening port
app.listen(3000, () => {
    console.log('Server is up and running on port 3000');
});

app.get('/', (req, res) => {
    const queryString = "SELECT * FROM list_items";

    con.query(queryString, (err, rows, fields) => {

        if(err) {
            console.log('Database Query Error: ' + err);
            res.sendStatus(500);
            return
        }

        console.log('Fetched todo items');

        res.json(rows);
    });

});

app.post('/create_list_item', (req, res) => {
    console.log('Trying to create a new user');
    const title = req.body.create_title;
    const description = req.body.create_description;

    const queryString = "INSERT INTO list_items (title, description) (?, ?)";
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


