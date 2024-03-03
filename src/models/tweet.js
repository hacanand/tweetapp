const mongoose = require("mongoose");
const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [250, "content should be less than 250 characters"],
    },
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like",
   }]
  },
  { timestamps: true }
);
tweetSchema.virtual("contentWithEmail").get(function () {
  return this.content;
});
const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
