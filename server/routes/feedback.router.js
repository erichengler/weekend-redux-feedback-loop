const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET feedback list from database
router.get('/', (req, res) => {
    console.log('In GET request');
    let queryText = 'SELECT * from "feedback" ORDER BY id DESC;';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

// POST feedback to database
router.post('/', (req, res) => {
    console.log('In POST request');
    let queryText = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);';
    let { feeling, understanding, support, comments } = req.body;
    pool.query(queryText, [feeling, understanding, support, comments]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

// DELETE feedback from database
router.delete('/:id', (req, res) => {
    console.log('In DELETE request');
    let queryText = 'DELETE FROM "feedback" WHERE "id" = $1;';
    pool.query(queryText, [req.params.id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

module.exports = router;