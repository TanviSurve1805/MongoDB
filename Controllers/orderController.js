const Order = require("../Models/Orders")
const { param } = require("../Routes/userRoute")

const order = (req,res) => {
    res.send("Your order will be dispatched soon!!!")  
 }

 const createOrder = async (req,res) =>{
    const order = new Order(req.body)
    await order.save()
    res.send(order)
 }
 const updateOrder = async(req,res) => {

    const params = req.params.id
    const order = await Order.findByIdAndUpdate(params,req.body)
 
    if(!order){
        res.send("No order present,update not available")
    }
    res.json({ message: "Order updated!!!", order })
 }
 
 const deleteOrder = async(req,res) => {
    const params = req.params.id
    const order = await Order.findByIdAndDelete(req.params.id)
    if(!order){
        res.send("No order present,delete not available")
    }
    res.send(order).json("The delete has been successful!!!")
 }
 module.exports = {order,createOrder,updateOrder,deleteOrder}