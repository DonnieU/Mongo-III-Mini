const mongoose = require('mongoose');

<<<<<<< HEAD
const Post = require('../models/post');
const Comment = require('../models/comment');
=======
const Post = mongoose.model('Post');
const Comment = mongoose.model('Comment');
>>>>>>> 37dd71f7f036164d2f3b4ebc1177bef3455b1875

const STATUS_USER_ERROR = 422;

/* Fill in each of the below controller methods */
const createPost = (req, res) => {
<<<<<<< HEAD
  const { title, text } = req.body;
  const newPost = new Post({ title, text });
  // newPost.save((err, createdPost) => {
  //   if (err) {
  //     res.status(STATUS_USER_ERROR);
  //     res.json(err);
  //     return;
  //   }
  //   res.json(createdPost);
  // });

  // Promise-like thanks to Mongoose...
  newPost
    .save()
    .then((createdPost) => {
      res.json(createdPost);
    })
    .catch((err) => {
      res
        .status(STATUS_USER_ERROR)
        .json({ errorMessage: err.message });
    });
};

const listPosts = (req, res) => {
  // Post.find({}, (err, posts) => {
  //   if (err) {
  //     res.status(500).json(err);
  //     return;
  //   }
  //   res.json(posts);
  // });
  // this way returns the text of the comment, not just the comment id...
  Post.find({})
    .populate('comments', 'text')
    .exec()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.status(STATUS_USER_ERROR).json(err);
    });
=======

};

const listPosts = (req, res) => {

>>>>>>> 37dd71f7f036164d2f3b4ebc1177bef3455b1875
};

const findPost = (req, res) => {

};

const addComment = (req, res) => {
<<<<<<< HEAD
  const { id } = req.params;
  const { text } = req.body;
  const newComment = new Comment({ _parent: id, text });
  newComment
    .save()
    .then((comment) => {
      Post.findById(id, (postErr, post) => {
        if (postErr || post === null) {
          res.status(STATUS_USER_ERROR).json({ message: `post not found at id ${id}` });
          return;
        }
        post.comments.push(comment);
        post.save();
        res.json({ success: 'comment added!' });
      });
    })
    .catch((err) => {
      res.status(STATUS_USER_ERROR).json({ errorMessage: err.message });
    });
=======

>>>>>>> 37dd71f7f036164d2f3b4ebc1177bef3455b1875
};

// In this function, we need to delete the comment document
// We also need to delete the comment's parent post's reference
// to the comment we just deleted
const deleteComment = (req, res) => {

};

// Similarly, in this function we need to delete the post document,
// along with any comments that are the children of this post
// We don't want any orphaned children in our database
const deletePost = (req, res) => {

};

module.exports = {
  createPost,
  listPosts,
  findPost,
  addComment,
  deleteComment,
  deletePost
};

