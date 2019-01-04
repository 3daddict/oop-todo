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
        res.end(JSON.stringify(results));
    });
});

//update record into database
router.post('/update_list_items', function (req, res) {
    const updateId = req.body.update_id;
    const updateTitle = req.body.update_title;
    const updateDescription = req.body.update_description;
    const queryString = 'UPDATE `list_items` SET `title`=?,`description`=? WHERE `id`=?';
    
    con.query(queryString, [updateTitle, updateDescription, updateId], (err, results, fields) => {
        if(err) {
            console.log('Error failed to insert list item: ' + err);
            res.sendStatus(500);
            return
        }

        console.log('List Item updated with ID: ', updateId);
        res.end(JSON.stringify(results));
    });
 });

//delete record from database
router.delete('/delete_list_item', function (req, res) {
    const deleteId = req.body.update_id; //<---------- CHANGE TO DELETE BUTTON ID ON $THIS
    connection.query('DELETE FROM `list_Items` WHERE `id`=?', [deleteId], (err, results, fields) => {
        if(err) {
            console.log('Error failed to delete list item: ' + err);
            res.sendStatus(500);
            return
        }

        res.end('Record has been deleted!', JSON.stringify(results));
    });
 });



module.exports = router;