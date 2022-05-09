const db = require ('./db')
const { Lakes } = require ('./models')

const findLakes = async () => {
    const lakes = await Lakes.find()
    console.log ('Lakes: ', lakes)
}

const run = async () => {
    try {
    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
 }
