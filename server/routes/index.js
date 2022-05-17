const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()


router.get('/lakes', controllers.getAllLakes)

router.post('/createLake', controllers.createLake)

router.get('/getAllPosts', controllers.getAllPost)

router.post('/createPost', controllers.createPost)

router.post('/createComment', controllers.createComment)

router.get('/getAllComments', controllers.getAllComments)

router.delete('/getAllComments/:id', controllers.deleteComment);

router.put('/getAllComments/edit/:id', controllers.updateComment)


module.exports = router