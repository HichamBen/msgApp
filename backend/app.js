require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const errorHandler = require("./midlewares/errorHandler");
const logRequest = require("./midlewares/logRequest");
const { corsOptions } = require("./config/corsConfig");

// initialze express app
const app = express(); 

// middleware for requests logs
app.use(logRequest);

/** middlewares
 * 1) cors: to prevent untrusted requests.
 * 2) helmet: for adding more layer of security to http req & res.
 * 3) express.urlencoded for parsing form fields.
 * 4) express.json for parsing application/json fields.
 * 5) cookieParser: make reading cookies easier (e.g: req.cookies)
 */
app.use(cors(corsOptions));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
/*_______________________ */

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})
/** routes */
// without credentials
app.use("/login", require("./routes/loginRouter"));
app.use("/signup", require("./routes/signupRouter"));
app.use("/refresh", require("./routes/refreshTokenRouter")); //

// with credentials
app.use("/user", require("./routes/api/userRoutes"));

// not found
app.all("*", (_req, res) => {
  res.status(404).send("Not found route!");
});
/*_______________________ */

/** Global Error handler */
app.use(errorHandler);

/** connect the db then the server */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(_client => {
    // gridFs = createGridBucket(client.connection.db, "media");
    app.listen(process.env.PORT, () => {
      console.log("The server is running on port: ", process.env.PORT);
    });
  })
  .catch(err => {
    console.log("error in db connection: ", err);
  });
/*_______________________ */
