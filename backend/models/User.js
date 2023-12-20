const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { generatePwd, isValidPwd } = require("../utilities/genValidPwd");
const {
  validName,
  validEmail,
  validPassword,
} = require("../utilities/validator");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      maxlength: 12,
      minlenght: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    picture: {
      fileName: String,
      encoding: String,
      mimetype: String,
      data: Buffer,
      size: Number,
    },

    verifiedAccount: {
      type: Boolean,
      default: false,
    },
    verificationCode: String,
  },
  { timestamps: true }
);

// statics methods
userSchema.statics.register = async function (
  username,
  email,
  password,
  verificationCode,
  picture = undefined
) {
  // check if username, email, and password are sended
  if (!username || !email || !password) {
    throw new Error("The username, the email, and the password are requried!");
  }

  // check if username, email, and password are valid
  const nameResult = validName(username);
  const emailResult = validEmail(email);
  const pwdResult = validPassword(password);

  if (!nameResult[1]) {
    throw new Error(nameResult[0]);
  }

  if (!emailResult[1]) {
    throw new Error(emailResult[0]);
  }

  if (!pwdResult[1]) {
    throw new Error(pwdResult[0]);
  }

  // if the user signup with profile picture
  if (picture) {
    if (picture.size > 1000000) {
      throw new Error("The picture size must be less than or equal 1MB.");
    }
    if (!picture.mimetype.includes("image")) {
      throw new Error("The picture type must be image/*.");
    }
  }

  const hash = generatePwd(password); // genearte a crypted password
  // create new User
  const newUser = this.create({
    username,
    email,
    password: hash,
    picture: picture
      ? {
          fileName: `${username.slice(0, 3)}-avatar`,
          encoding: picture.encoding,
          mimetype: picture.mimetype,
          data: picture.buffer,
          size: picture.size,
        }
      : null,
    verificationCode,
  });

  return newUser;
};

userSchema.statics.login = async function (email, password) {
  // check if email & password exists
  if (!email || !password) {
    throw { code: 400, message: "The email and the password are required!" };
  }

  const emailResult = validEmail(email);
  const pwdResult = validPassword(password);

  if (!emailResult[1]) {
    throw new Error(emailResult[0]);
  }

  if (!pwdResult[1]) {
    throw new Error(pwdResult[0]);
  }

  // check if the email exists in the DB
  const user = await this.findOne({ email });
  if (!user) {
    throw { code: 403, message: "The email address provided doesn't exist!" };
  }

  if (!isValidPwd(password, user.password)) {
    throw { code: 403, message: "Invalid password!" };
  }

  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
