const mongoose = require('mongoose')
const LakeSchema = require ('./allLakes')
const CommentSchema = require ('./Comments')


const AllLakes = mongoose.model('AllLakes', LakeSchema)
const Comment = mongoose.model('Comment', CommentSchema)

module.exports = {
    AllLakes,
    Comment
}