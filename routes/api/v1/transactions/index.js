const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Transactions route');
});

module.exports = router;
