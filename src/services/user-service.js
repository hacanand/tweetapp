const { userRepository } = require("../repository/index");
class UserService {
    constructor() {
        this.userRepository = new userRepository();
    }
    async signUp(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    }
    async getUserByEmail(email) {
        try {
            const user = await this.userRepository.findBy({ email });
            return user;
        } catch (error) {
            throw error;
        }
    }
}
