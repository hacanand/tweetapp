const { LikeRepository, TweetRepository } = require("../repository/index");
class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }
  async toggleLike(modelId, modelType, userId) {
    if (modelType == "Tweet") {
      var likable = await this.tweetRepository.get(modelId);
      likable.populate({ path: "likes" });
    } else if (modelType == "Comment")
      var likeable = await this.commentRepository.get(modelId);
    else throw new error("unknown model type");
    const exists = await this.likeRepository.findByUserAndLikeable({
      user: userId,
      onModel: modelType,
      likeable: modelId,
    });
    if (exists) {
      likeable.likes.pull(exists.id);
      await likeable.save();
      await exists.remove();
      var isAdded = false;
    } else {
      const newLike = await this.likeRepository.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });
      likeable.likes.push(newLike);
      await likeable.save();
      var isAdded = true;
    }
    return isAdded;
  }
}

module.exports = LikeService;
