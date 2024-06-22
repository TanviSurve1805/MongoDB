const express = require("express")

const User = require("../Models/Product")

const {product, createProduct, updateProduct, deleteProduct} = require("../Controllers/productController")

const router = express.Router()

router.get("/product",product)

router.post("/addProduct",createProduct)

router.put("/updateProduct/:id",updateProduct)

router.delete("/deleteProduct/:id",deleteProduct)

module.exports = router