const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { generateCode } = require("../utilities/generateCode");
const { sendEmail } = require("../utilities/sendEmail");

async function signupController(req, res, next) {
  const { username, email, password } = req.body;
  const picture = req.file;
  try {
    // genearte a random verification code
    const verificationCode = generateCode(6).join("");
    const verificationCodeSigned = jwt.sign(
      { code: verificationCode },
      process.env.VERIFICATION_CODE_SECRETE,
      {
        expiresIn: "5min",
      }
    );

    // register the user
    await User.register(
      username,
      email,
      password,
      verificationCodeSigned,
      picture
    );
    // Send verification code to email address provided
    const result = await sendEmail({
      to_email: email,
      d1: verificationCode[0],
      d2: verificationCode[1],
      d3: verificationCode[2],
      d4: verificationCode[3],
      d5: verificationCode[3],
      d6: verificationCode[3],
    });
    if (result) {
      return next({
        message: `Error when sending verification code: ${result}`,
      });
    }

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
        if (decoded.code !== verifyCode) {
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
      "_id email verificationCode verifiedAccount"
    );

    // genearte a random verification code
    const verificationCode = generateCode(6).join("");
    const verificationCodeSigned = jwt.sign(
      { code: verificationCode },
      proccess.env.VERIFICATION_CODE_SECRETE,
      {
        expiresIn: "5m",
      }
    );
    user.verificationCode = verificationCodeSigned;
    // save the verification code in db & send it to user email
    await Promise.all([
      user.save(),
      sendEmail({
        to_email: user.email,
        d1: verificationCode[0],
        d2: verificationCode[1],
        d3: verificationCode[2],
        d4: verificationCode[3],
        d5: verificationCode[3],
        d6: verificationCode[3],
      }),
    ]);

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
