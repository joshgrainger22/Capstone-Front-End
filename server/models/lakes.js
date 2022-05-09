const { Schema } = require ('mongoose')

const Lakes = new Schema(
    {
        name: { type: String, required: true},
        location: { type: String, required: true},
        description: { type: String, required: true},
        image: { type: String, required: true},

    },
    {timestamps: true}
)

module.exports = Lakes
