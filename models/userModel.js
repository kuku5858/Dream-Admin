const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

const Users = mongoose.model("User", userSchema);

module.exports = Users;
