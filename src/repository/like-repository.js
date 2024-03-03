const Like = require("../models/like");
const CrudRepository = require("./crud-repository");
class LikeRepository extends CrudRepository {
  constructor() {
    super(Like);
    }
    async findByUserAndLikeable(data) {
        try {
            const like = await Like.findOne({ data });
        } catch (error) {
            console.log("inside like repository");
            throw error;
        }
    }
}
module.exports = LikeRepository;
