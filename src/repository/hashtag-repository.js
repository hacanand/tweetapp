const Hashtag = require("../models/hashtags");
class HashtagRepository {
  async create(data) {
    try {
      const hashtag = await Hashtag.create(data);
      return hashtag;
    } catch (error) {
      console.log("inside hashtag repository");
      throw error;
    }
  }
  async bulkCreate(data) {
    try {
      const hashtag = await Hashtag.insertMany(data);
      return hashtag;
    } catch (error) {
      console.log("inside hashtag repository");
      throw error;
    }
  }
  async get(id) {
    try {
      const tweets = await Hashtag.findById(id);
      return tweets;
    } catch (error) {
      console.log("inside hashtag repository");
      throw error;
    }
  }

  async destroy(id) {
    try {
      const hashtag = await Hashtag.findByIdAndDelete(id);
      return hashtag;
    } catch (error) {
      console.log("inside hashtag repository");
      throw error;
    }
  }
  async findByName(nameList) {
    try {
      const hashtag = await Hashtag.find({ title: nameList }).select(
        "title -_id"
      );
      return hashtag;
    } catch (error) {
      console.log("inside hashtag repository");
      throw error;
    }
  }
}
module.exports = HashtagRepository;
