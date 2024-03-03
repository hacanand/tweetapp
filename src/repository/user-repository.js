const User = require("../models/like");
const CrudRepository = require("./crud-repository");
class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }
  async findBy(data) {
    try {
      return User.findOne(data);
    } catch (error) {
      throw error;
    }
  }
}
module.exports = UserRepository;
