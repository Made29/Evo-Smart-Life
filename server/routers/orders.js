const express = require("express")
const router = express.Router()
const Controller = require("../controllers/orders")

router.get("/orders", Controller.getAllOrders)
router.post("/buyProducts/:productId", Controller.buyProducts)

module.exports = router