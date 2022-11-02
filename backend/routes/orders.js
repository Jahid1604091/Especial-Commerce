
const express = require('express');
const router = express.Router();
const { createOrder, getAllOrders, getMyOrders, getMyOrder } = require('../controller/orders');
const { protect, authorize } = require('../middleware/auth');

router.route('/').post(protect, createOrder)
    .get(protect, authorize('admin'), getAllOrders)

router.route('/myorders').get(protect, getMyOrders)
router.route('/myorders/:id').get(protect, getMyOrder)




module.exports = router;