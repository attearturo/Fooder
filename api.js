const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'working'
    });
});

router.route('/personas')
    .get((req, res) => {
        res.json(database.personas);
    });
