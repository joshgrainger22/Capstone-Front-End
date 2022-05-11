const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()


router.get('/topscorers', controllers.getAllTopScorers)

router.get('/getAllPosts', controllers.getAllPost)

router.post('/createPost', controllers.createPost)

router.post('/createComment', controllers.createComment)

router.get('/getAllComments', controllers.getAllComments)

router.delete('/getAllComments/:id', controllers.deleteComment);

router.put('/getAllComments/:id', controllers.updateComment)


module.exports = router