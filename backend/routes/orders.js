
const express = require('express');
const router = express.Router();
const { createOrder, getAllOrders, getMyOrders, getMyOrder, updateOrderToPaid, updateOrderToDelivered } = require('../controller/orders');
const { protect, authorize } = require('../middleware/auth');

router.route('/').post(protect, createOrder)
    .get(protect, authorize('admin'), getAllOrders)
router.route('/:id/mark-as-delivered').get(protect, authorize('admin'), updateOrderToDelivered)

router.route('/myorders').get(protect, getMyOrders)
router.route('/myorders/:id').get(protect, getMyOrder)
router.route('/myorders/:id/pay').get(protect, updateOrderToPaid)


module.exports = router;