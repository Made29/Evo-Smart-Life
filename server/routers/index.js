const express = require("express")
const router = express.Router()
const products = require("./products")
const orders = require("./orders")

router.use(products)
router.use(orders)

module.exports = router