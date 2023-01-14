const express = require('express');

// import router
const router = express.Router();

const {
  getAllProductsStatic,
  getAllProducts,
} = require('../controllers/products.js');

router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic);

module.exports = router;
