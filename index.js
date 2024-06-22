const express = require("express")

const mongoose = require ("mongoose")

const user = require("./Routes/userRoute")
const product = require("./Routes/productRoute")

mongoose.connect("mongodb://localhost:27017/sampleProject")

const PORT = 4000

const app = express()

app.use(express.json())
app.use(user)
app.use(product)

app.listen(PORT,() => 
    {
        console.log(`Server is running on port:${PORT}`)
    }


)