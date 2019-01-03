const express = require('express');
const con = require('../config/db_creds.js');
const router = express.Router();


router.get('/list_items', (req, res) => {
    console.log('Router get called Success');
    res.end();
});

router.get('/test', (req, res) => {
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


module.exports = router;