const db = require('../db')

const lakes = [
    {
        name: '',
        location: '',
        description: '',
        image: ''
    },
    {
        name: '',
        location: '',
        description: '',
        image: ''
    },
    {
    name: '',
        location: '',
        description: '',
        image: ''
    },
    {
    name: '',
        location: '',
        description: '',
        image: ''
    },
    {
        name: '',
        location: '',
        description: '',
        image: ''
    },
    {
        name: '',
        location: '',
        description: '',
        image: ''
    },
    {
    name: '',
        location: '',
        description: '',
        image: ''
    },
    {
    name: '',
        location: '',
        description: '',
        image: ''
    },        
]




await Lakes.insertMany(lakes)
console.log('Lake created')

const run = async () => {
await main()
db.close()
}

run()