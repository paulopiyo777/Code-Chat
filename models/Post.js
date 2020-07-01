const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  text: {
    type: String,
    required: true,
  },
  // username
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  likes: [
    {
      // get username who liked comment
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    },
  ],
  comments: [
    {
      // get username who made comment
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      text: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
      },
      // date comment was made by other user
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  // actual comment date
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Post = mongoose.model("post", PostSchema);
