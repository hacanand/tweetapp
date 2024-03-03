const CrudRepository = require("./crud-repository");
const HashtagRepository = require("./hashtag-repository");
const LikeRepository = require("./like-repository");
const TweetRepository = require("./tweet-repository");
const UserRepository = require("./user-repository");
module.exports = {
  TweetRepository,
  HashtagRepository,
  CrudRepository,
  LikeRepository,
  UserRepository
};
