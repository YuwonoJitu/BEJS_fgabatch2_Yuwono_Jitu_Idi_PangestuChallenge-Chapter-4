const express = require('express');
const router = express.Router();

const TRANSACTION_CONTROLLER = require('../../../../controllers/transaction.controller')

router.get('/', TRANSACTION_CONTROLLER.getTransactions);                    // Rute untuk mendapatkan daftar transaksi
router.get('/:transactionId', TRANSACTION_CONTROLLER.getTransactionById);   // Rute untuk mendapatkan transaksi berdasarkan ID
router.post('/', TRANSACTION_CONTROLLER.createTransaction);                 // Rute untuk membuat/mengirim transaksi

module.exports = router;
