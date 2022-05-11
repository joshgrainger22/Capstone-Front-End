const { model } = require ('mongoose')
const LakeSchema = require ('./lakes')
const CommentSchema = require ('./comment')


const Lakes = model('lakes', LakeSchema)
const Comment = model('comment', CommentSchema)

module.exports = {
    Lakes,
    Comment
}