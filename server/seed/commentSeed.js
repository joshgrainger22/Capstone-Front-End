const db = require('../db')
const { Comment } = require ('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const comments = [
        {
                name: 'Joshua Grainger',
                text: 'This Lake Is Good For Fishing!'
            },
        ]
        await Comment.insertMany(comments)
        console.log('comments added')
        }
        const run = async () => {
            await main()
            db.close()
        }
        run()