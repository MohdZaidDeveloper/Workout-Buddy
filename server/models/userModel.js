const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

//Static method signup

userSchema.statics.signup = async (email, password) => {
  const exists = await User.findOne({ email });

  if (exists) {
    throw Error("Email already exists!");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await User.create({ email, password: hash });
  return user;
};

//Static method login

userSchema.statics.login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

const User = new mongoose.model("User", userSchema);

module.exports = User;
