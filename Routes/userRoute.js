const express = require("express")

const User = require("../Models/Users")

const {user,createUser, updateUser, deleteUser} = require("../Controllers/userController")

const router = express.Router()

router.get("/user",user)

router.post("/createUser",createUser)

router.put("/updateUser/:id",updateUser)

router.put("/deleteUser/:id",deleteUser)
module.exports = router