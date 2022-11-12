
const express = require('express');
const router = express.Router();
const { createOrder, getAllOrders, getMyOrders, getMyOrder, updateOrderToPaid } = require('../controller/orders');
const { protect, authorize } = require('../middleware/auth');

router.route('/').post(protect, createOrder)
    .get(protect, authorize('admin'), getAllOrders)

router.route('/myorders').get(protect, getMyOrders)
router.route('/myorders/:id').get(protect, getMyOrder)
router.route('/myorders/:id/pay').get(protect, updateOrderToPaid)


module.exports = router;