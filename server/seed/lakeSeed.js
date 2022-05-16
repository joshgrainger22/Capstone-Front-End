const db = require('../db')
const { AllLakes } = require ('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
const allLakes = [
    {
        name: 'Crawford State Lake',
        location: 'Farlington, Kansas',
        description: 'Crawford State Park is a state park in Crawford County, Kansas, United States, located 9 miles north of Girard. The 500-acre park, resides on a 150-acre lake built by the Civilian Conservation Corps in the 1930s',
        image: 'https://d3qvqlc701gzhm.cloudfront.net/thumbs/4807bdb34d38690cb9f77a6e0d67dd812ea049c26efbc81639d2591e3abc8c28-750.jpg'
    },
    {
        name: 'Dale Hollow Reservoir',
        location: 'Tennessee ',
        description: 'The Dale Hollow Reservoir is a reservoir situated on the Kentucky/Tennessee border. The lake is formed by the damming of the Obey River, 7.3 miles above its juncture with the Cumberland River at river mile 380. Portions of the lake also cover the Wolf River.',
        image: 'https://dalehollowlake.org/wp-content/uploads/2017/04/BufordLakePic-1024x559.jpeg'
    },
    {
        name: 'Lake Tahoe',
        location: 'Tahoe, Nevada',
        description: 'Lake Tahoe is a large freshwater lake in the Sierra Nevada Mountains, straddling the border of California and Nevada. It’s known for its beaches and ski resorts.',
        image: 'https://www.tripsavvy.com/thmb/UBsTBfIQV4O8-DT0gktUTddwdAA=/2868x2868/smart/filters:no_upscale()/sand-harbor-state-park--lake-tahoe--nevada-453331363-1840f205e0584fb9867559c2f2179e12.jpg'
    },
    {
        name: 'Lake of the Ozarks',
        location: 'Missouri',
        description: 'A manmade lake created by impounding the Osage River in central Missouri, Lake of the Ozarks is a popular summer vacation destination. It is known for its boating scene, and speedboats are especially popular here since there are no horsepower or speed restrictions on the lake. There is also good fishing, with bass and catfish the predominant species.',
        image: 'https://www.planetware.com/wpimages/2021/03/us-best-lakes-lake-of-the-ozarks-missouri.jpg'
    },
    {
        name: 'Lake Superior',
        location: 'Michigan, Minnesota, and Wisconsin',
        description: 'One of the five great lakes, Lake Superior is the largest freshwater lake by surface area in the entire world, with 2,700 miles of shoreline covering three states: Michigan, Minnesota, and Wisconsin, and crossing over into Canada in Ontario.',
        image: 'https://www.planetware.com/wpimages/2021/03/us-best-lakes-lake-superior.jpg'
    },
    {
        name: 'Lake Havasu,',
        location: 'Arizona, California',
        description: 'Located on the border between Arizona and California, the lake is especially popular with college students who come for spring break celebrations. The water is warm, and there are some gorgeous side canyons, with crystal-clear turquoise water, sandstone cliffs, and waterfalls that you can explore on a stand up paddleboard or kayak.',
        image: 'https://www.planetware.com/wpimages/2021/03/us-best-lakes-lake-havasu-arizona.jpg'
    },
    {
        name: 'Lake Winnipesaukee',
        location: 'New Hampshire',
        description: `Head to New Hampshire's Lakes Regions at the edge of the White Mountains to see the largest lake in the US. Lake Winnipesaukee is around 21 miles long and varies from one to nine miles in width depending on what part of the shoreline you are at.`,
        image: 'https://www.planetware.com/wpimages/2021/03/us-best-lakes-lake-winnipesauke-new-hampshire.jpg'
    },
    {
        name: 'Hanging Lake',
        location: 'Colorado',
        description: `When a major wildfire shut down the interstate for weeks and ravished the forest around it, Colorado residents feared the state's most beautiful lake would never look the same again. But despite the damage to the area surrounding it, Hanging Lake was spared.`,
        image: 'https://www.planetware.com/wpimages/2021/03/us-best-lakes-hanging-lake-colorado-waterfall.jpg'
    },        
]

await AllLakes.insertMany(allLakes)
console.log('Lakes Added')
}
const run = async () => {
    await main()
    db.close()
}
run()