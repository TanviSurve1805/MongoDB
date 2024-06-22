const express = require("express")

const User = require("../Models/Orders")

const {order,createOrder,updateOrder,deleteOrder} = require("../Controllers/orderController")

const router = express.Router()

router.get("/order",order)

router.post("/createOrder",createOrder)

router.put("/updateOrder/:id",updateOrder)

router.delete("/deleteOrder/:id",deleteOrder)

module.exports = router