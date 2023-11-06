const express = require("express")
const router = express.Router()
const { verifyUser} = require("../utils/utils")


let login = require("../controller/user").login
let signup = require("../controller/user").signup

let getUser = require("../controller/user").getUser
let updateUser = require("../controller/user").updateUser



//auth routes
router.post('/login',login)
router.post('/signup',signup)

//Admin Routes
router.get('/users/:id',verifyUser,getUser)
router.patch('/users/:id',verifyUser,updateUser)


exports.router = router