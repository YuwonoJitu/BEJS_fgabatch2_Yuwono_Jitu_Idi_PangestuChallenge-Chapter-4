const express = require('express');
const router = express.Router();

// Example middleware function
const exampleMiddleware = (req, res, next) => {
    console.log('Example middleware');
    next();
};

// Example route
router.get('/example', (req, res) => {
    res.send('Example route');
});

// Use middleware function correctly
router.use(exampleMiddleware);

module.exports = router;
