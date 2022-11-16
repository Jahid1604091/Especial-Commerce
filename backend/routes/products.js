const express = require('express');
const router = express.Router();
const { getAllProducts, getProduct, deleteProduct, createProduct, updateProduct, reviewProduct, getTopProducts } = require('../controller/products');
const { protect, authorize } = require('../middleware/auth');


router.route('/')
    .post(protect, authorize('admin'), createProduct)
    .get(getAllProducts)
router.route('/top').get(getTopProducts)


router.route('/:id')
    .get(getProduct)
    .put(protect, authorize('admin'), updateProduct)
    .delete(protect, authorize('admin'), deleteProduct)

router.route('/:id/review').post(protect, reviewProduct)


module.exports = router;