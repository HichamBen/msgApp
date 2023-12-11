const crypto = require("node:crypto");

exports.generatePwd = password => {
  const salt = crypto.randomBytes(64).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 30000, 64, "sha512")
    .toString("hex");

  return `${hash}++${salt}`;
};

exports.isValidPwd = (password, cryptic) => {
  const [hash, salt] = cryptic.split("++");
  const pwd = crypto
    .pbkdf2Sync(password, salt, 30000, 64, "sha512")
    .toString("hex");

  return pwd === hash;
};
