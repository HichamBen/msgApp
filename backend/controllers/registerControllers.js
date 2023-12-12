const User = require("../models/User");
const jwt = require("jsonwebtoken");

async function signupController(req, res, next) {
  const { username, email, password } = req.body;
  const picture = req.file;
  try {
    await User.register(username, email, password, picture);
    // To do
    // Send verification code to email address provided

    res.status(201).json("Verification code sent to your email.");
  } catch (err) {
    next(err);
  }
}

async function verifyAccount(req, res, next) {
  const { verifyCode } = req.body;
  // check if verify code was sended
  if (!verifyCode) {
    return res.status(400).json("Missing verification code.");
  }

  try {
    const user = await User.findById(req.userId).slelct(
      "_id verificationCode verifiedAccount"
    );

    jwt.verify(
      user.verificationCode,
      VERIFICATION_CODE_SECRETE,
      async function (err, decoded) {
        if (err)
          throw new Error("Expired verification code, resend a new one.");

        // verify the verification code.
        if (decoded !== verifyCode) {
          res.status(400).json("Invalid verification code");
        } else {
          user.verifiedAccount = true;
          await user.save();

          res.status(200).json("Account verified successfully!");
        }
      }
    );
  } catch (err) {
    next(err);
  }
}

async function sendNewVerificationCode(req, res, next) {
  try {
    const user = await User.findById(req.userId).slelct(
      "_id verificationCode verifiedAccount"
    );

    user.verificationCode = jwt.sign(
      generateCode(6).join(""),
      proccess.env.VERIFICATION_CODE_SECRETE,
      {
        expiresIn: 5 * 60,
      }
    );

    await user.save();

    // To do
    // Send verification code to email address provided

    res.status(200).json("Verification code sent to your email.");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signupController,
  verifyAccount,
  sendNewVerificationCode,
};
