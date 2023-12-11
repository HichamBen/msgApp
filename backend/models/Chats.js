const mongoose = require("mongoose");
const User = require("./User");
const Message = require("./Message");

const chatSchema = new mongoose.Schema({
  users: [{ type: mongoose.SchemaTypes.ObjectId, ref: User }],
  latestMsg: {
   type:mongoose.SchemaTypes.ObjectId,
   ref: Message
  }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
