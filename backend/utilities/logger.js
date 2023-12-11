const path = require("node:path");
const fs = require("node:fs");
const fsPromise = require("node:fs/promises");
const crypto = require("node:crypto");

module.exports = async (message, fileName) => {
  const timestamps = new Date()
    .toLocaleString("fr", {
      dateStyle: "short",
      timeStyle: "short",
    })
    .split(" ")
    .join("T");

  try {
    const logId = `[${crypto.randomBytes(8).toString("hex")}]\t${timestamps}`;

    const logText = `${logId}\t${message}\n`;
    let logsPath = path.join(__dirname, "..", "logs");

    if (!fs.existsSync(logsPath)) {
      await fsPromise.mkdir(logsPath);
    }
    await fsPromise.appendFile(path.join(logsPath, fileName), logText, "utf-8");
  } catch (err) {
    console.log(err.message);
  }
};
