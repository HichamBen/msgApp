const mongoose = require("mongoose");
const User = require("./User");

const contactSchema = new mongoose.Schema(
  {
    user1: {
      contact: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: User,
      },

      // status of the user1  according to user2
      status: {
        type: String,
        enum: ["wait","accept","block"],
        lowercase: true,
        default: "Wait",
      },
    },

    // status of the user2  according to user1
    user2: {
      contact: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: User,
      },
      status: {
        type: String,
        enum: ["wait","accept","block"],
        lowercase: true,
        default: "wait",
      },
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
