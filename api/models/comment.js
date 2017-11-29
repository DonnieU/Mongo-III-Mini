const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  _parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
<<<<<<< HEAD
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
=======
>>>>>>> 37dd71f7f036164d2f3b4ebc1177bef3455b1875
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Comment', CommentSchema);
