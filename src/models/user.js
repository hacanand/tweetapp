const mongoose = require("mongoose");
const bcrypt=require("bcrypt")
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
  
);
userSchema.methods.createPassword = function compare(password) {
    return bcrypt.compareSync(password, this.password);
}
UserSchema.methods.getJWT = function generate() {
  return Jwt.sign({ id: this._id, email:this.email},'twt-secret', {
    expiresIn: "1d",
  });
  }
const User = mongoose.model("User", userSchema);
module.exports = User;
