const { TweetService } = require("../services/index");
const tweetService = new TweetService();

const createTweet = async (req, res) => {
    try {
        const response = await tweetService.create(req.body)
        return res.status(201).json({
            success: true,
            data:response,
            message: "Tweet created successfully",
        })
    } catch (error) {
        console.log('inside createTweet controller')
        return res.status(500).json({
            success: false,
            data:null,
            message: "Internal server error",
            err:error,
        })
    }
}
module.exports = {createTweet};