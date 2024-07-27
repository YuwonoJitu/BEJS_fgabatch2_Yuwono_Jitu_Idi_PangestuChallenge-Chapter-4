// E:\Latihan\be-library-shs\routes\api\v1\index.js
const express = require('express');
const router = express.Router();

const accountsRoutes = require('./accounts');
const profilesRoutes = require('./profiles');
const transactionsRoutes = require('./transactions');
const usersRoutes = require('./users');

router.use('/accounts', accountsRoutes);
router.use('/profiles', profilesRoutes);
router.use('/transactions', transactionsRoutes);
router.use('/users', usersRoutes);

module.exports = router;
