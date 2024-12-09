const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/EMPLOYEE', (req, res) => {
  const query = 'SELECT * FROM EMPLOYEE';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching EMPLOYEE:', err);
      res.status(500).send('Error fetching EMPLOYEE');
      return;
    }
    res.json(results);
  });
});

module.exports = router;
