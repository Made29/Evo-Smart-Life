const express = require("express")
const Controller = require("../controllers/products")
const router = express.Router()

router.get("/products", Controller.getAllProducts)

module.exports = router