const mongoose = require("mongoose");
const User = require("./User");
const Message = require("./Message");

const chatSchema = new mongoose.Schema(
  {
    chatTitle: String,
    isGroup: {
      type: Boolean,
      default: false,
    },
    participants: [
      {
        participant: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: User,
        },
        // date of the server
        deletedAt: {
          type: Date,
          default: null,
        },
      },
    ],

    groupAdmin: mongoose.SchemaTypes.ObjectId,
    latestMsg: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: Message,
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
