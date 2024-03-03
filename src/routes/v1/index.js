const express=require("express") 
const router = express.Router()
const authController = require("../../controller/auth-controller")
 
const tweetController = require("../../controller/tweet-controller")

router.post("/tweets", tweetController.createTweet)
router.post('/login', authController.login)
 
module.exports = router