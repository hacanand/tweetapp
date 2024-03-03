const Tweet = require("../models/tweet");
const CrudRepository = require("./crud-repository");
class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log("inside tweet repository");
      throw error;
    }
  }

  async getWithComments(id) {
    try {
      const tweet = await Tweet.findById(id)
        .populate({ path: "comments" })
        .lean();
      return tweet;
    } catch (error) {
      console.log("inside tweet repository");
      throw error;
    }
  }

  async getAll(offset, limit) {
    try {
      const tweet = await Tweet.find().limit(limit).skip(offset);

      return tweet;
    } catch (error) {
      console.log("inside tweet repository");
      throw error;
    }
  }
}
module.exports = TweetRepository;
