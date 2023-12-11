const logger = require("../utilities/logger");

module.exports = async function (error, req, res, _next) {
  const logMsg = `${req.method}\t${req.headers?.origin}\t${req.url}\t${error.message}`;
  await logger(logMsg, "errors.log");

  // Check if error from client side or third party api.
  let statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({error:error.message});
};
