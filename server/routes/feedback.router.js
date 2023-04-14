const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST feedback
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

module.exports = router;