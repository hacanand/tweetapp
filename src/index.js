const express = require("express");
const connect = require("./config/database");
const bodyParser = require("body-parser");
const app = express();
const apiRoutes=require("./routes/index");
const {TweetService} = require("./services/index");
const { UserRepository, TweetRepository } = require("./repository");
const LikeService = require("./services/like-service");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

app.listen(3000, async () => {
  console.log("server is running on port 3000");
  await connect();
  console.log("connected to database");
  const userRepo = new UserRepository();
  const tweetRepo = new TweetRepository();
  const tweet = await tweetRepo.getAll(0, 10);
  const user =   userRepo.create({ name: 'hac', email: 'hac', password: 'hac' });
  this.service = new LikeService();
  this.service.toggleLike(tweet[0].id,"Tweet",user.id);
});
