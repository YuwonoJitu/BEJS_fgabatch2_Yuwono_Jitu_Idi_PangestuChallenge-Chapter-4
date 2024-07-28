const express = require('express');
const router = express.Router();

const ACCOUNT_CONTROLLER = require('../../../../controllers/account.controller')

router.get('/', ACCOUNT_CONTROLLER.getAccounts);
router.get('/', ACCOUNT_CONTROLLER.getAccountById);
router.post('/', ACCOUNT_CONTROLLER.createAccount);

module.exports = router;
