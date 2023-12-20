const mongoose = require("mongoose");
const User = require("./User");
const Chat = require("./Chats");

const msgSchema = new mongoose.Schema(
  {
    chatId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: Chat,
    },

    senderId: mongoose.SchemaTypes.ObjectId,
    content: {
      type: {
        type: String,
        enum: ["text", "image", "audio", "video", "pdf", "txt", "other"],
      },
      message: String,
      label: String,
    },

    status: {
      type: String,
      enum: ["waited", "saved", "recieved", "viewed"],
    },
    sendAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", msgSchema);

module.exports = Message;
