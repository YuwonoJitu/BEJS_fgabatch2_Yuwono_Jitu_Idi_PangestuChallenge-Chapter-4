var express = require('express');
var router = express.Router();

const USER_CONTROLLER = require('../../../../controllers/user.controller');

router.get('/', USER_CONTROLLER.getUser);      
router.get('/:userid', USER_CONTROLLER.getUserById);   // Rute untuk untuk mendapatkan pengguna berdasarkan ID
router.post('/', USER_CONTROLLER.createUser);       // rute untuk detail informasi user (tampilkan juga profilnya).

module.exports = router;
