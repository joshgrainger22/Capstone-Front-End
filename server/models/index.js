const mongoose = require('mongoose')
const LakeSchema = require ('./allLakes')
const CommentSchema = require ('./Comments')
const PostSchema = require ('./Post')




const AllLakes = mongoose.model('AllLakes', LakeSchema)
const Comment = mongoose.model('Comment', CommentSchema)
const Post = mongoose.model('Post', PostSchema)

module.exports = {
    AllLakes,
    Comment,
    Post
}