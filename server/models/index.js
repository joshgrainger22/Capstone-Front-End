const { model } = require ('mongoose')
const LakeSchema = require ('./lakes')



const Lakes = model('lakes', LakeSchema)

module.exports = {
    Lakes,

}