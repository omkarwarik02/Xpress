const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      trim: true,
      maxlength: 300
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Post', postSchema);
