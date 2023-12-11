require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const errorHandler = require("./midlewares/errorHandler");
const User = require("./models/User");
const logRequest = require("./midlewares/logRequest");
const uploadFile = require("multer")();;

// initialze express app
const app = express();

/** middlewares
 * 1) express.urlencoded for parsing form fields.
 * 2) express.json for parsing application/json fields.
 * 2) logs of all req recieved from client-side
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logRequest);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

/** routes */
app.post("/user",uploadFile.single("picture"), async (req, res, next) => {
  const { username, email, password } = req.body;
  
  try {
    const newUser = await User.register(username, email, password, req.file);
    await newUser.save();
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
  
    res.status(200).json(user);
  } catch (error) {
    res.statusCode = error.code;
    next(error);
  }
});

/** Global Error handler */
app.use(errorHandler);

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