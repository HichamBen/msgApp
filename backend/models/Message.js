const mongoose = require("mongoose");
const User = require("./User");

const msgSchema = new mongoose.Schema({
  content: String,
  sender: {
   type:mongoose.SchemaTypes.ObjectId,
   ref: User
  }
});

const Message = mongoose.model("Message", msgSchema);

module.exports = Message;