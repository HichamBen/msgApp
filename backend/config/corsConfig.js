const allowedList = ["http://localhost:5173"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

module.exports = {
  corsOptions,
  allowedList,
};
