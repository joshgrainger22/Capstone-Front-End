const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()


router.get('/lakes', controllers.getAllLakes)

router.get('/getAllPosts', controllers.getAllPost)

router.post('/createPost', controllers.createPost)

router.post('/createLake', controllers.createLake)

router.post('/createComment', controllers.createComment)

router.get('/getAllComments', controllers.getAllComments)

router.delete('/getAllComments/:id', controllers.deleteComment);

router.put('/getAllComments/:id', controllers.updateComment)


module.exports = router