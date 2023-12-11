const logger = require("../utilities/logger")
module.exports = (req, _res, next) => {
   logger(`${req.method}\t${req.headers.origin}\t${req.url}`, "requests.log");
  next();
};
