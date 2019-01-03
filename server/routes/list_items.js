const express = require('express');
const con = require('../config/db_creds.js');
const router = express.Router();

//get todo items
router.get('/get_list_items', (req, res) => {
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


//create todo item
router.post('/create_list_item', (req, res) => {
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

module.exports = router;