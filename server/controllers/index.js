const { AllLakes, Comment } = require('../models')


const getAllLakes = async (req, res) => {
    try {
      const allLakes = await AllLakes.find()
      return res.status(200).json({ allLakes })
    } catch (err) {
      return res.status(500).send(err.message)
    }
    }
const getAllComments = async (req, res) => {
    try {
      const comments = await Comment.find()
      return res.status(200).json({ comments }) 
    } catch (err) {
      return res.status(500).send(err.message)
    }
  }
  const createPost = async (req, res) => {
    try {
      const post = await new Post(req.body)
      console.log(req.body)
      await post.save()
      return res.status(201).json({
        post
      })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
  const createLake = async (req, res) => {
    try {
      const allLakes = await new AllLakes(req.body)
      console.log(req.body)
      await allLakes.save()
      return res.status(201).json({
        post
      })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
  const createComment = async (req, res) => {
    try {
      const comment = await new Comment(req.body)
      console.log(req.body)
      await comment.save()
      res.send(comment)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
  const getAllPost = async (req, res) => {
    try {
      const posts = await Post.find()
      return res.status(200).json({ posts })
    } catch (err) {
      return res.status(500).send(err.message)
    }
  }
  const deleteComment = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Comment.findByIdAndDelete(id);
      if (deleted) {
        return res.status(200).send('Data deleted');
      }
      throw new Error('Data not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const updateComment = async (req, res) => {
    try {
      const { id } = req.params;
      await Comment.findByIdAndUpdate(id, req.body, { new: true }, (err, data) => {
        return res.status(200).json(data);
      });
    } catch (error) {}
  };



module.exports = {
    getAllLakes,
    getAllPost,
    createComment,
    createPost,
    getAllComments,
    deleteComment,
    updateComment,
    createLake
  }