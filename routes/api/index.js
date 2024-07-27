const express = require('express');
const router = express.Router();
const v1Routes = require('./v1'); // Import the v1 routes

router.use('/v1', v1Routes); // Use the v1 routes under the /v1 path

module.exports = router; // Export the router correctly
