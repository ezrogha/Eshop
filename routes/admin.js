const express = require('express')

const router = express.Router()
const adminController = require('../controllers/admin');

router.get('/add-product', adminController.getAddProducts)

router.post('/add-product', adminController.postAddProducts)

router.get('/products', adminController.getAdminProducts)

module.exports = router;
