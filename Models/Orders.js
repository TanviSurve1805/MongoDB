const mongoose = require("mongoose")

const orderScheme = new mongoose.Schema({
_id : Number,
customer_name : String,
order_date : Date,
product_id : Number,
quantity : Number,
total_amount : Number,
order_status : String
})

const Order = mongoose.model("Order",orderScheme)

module.exports = Order