const express = require('express')
const router = express.Router();
const usersControllers = require('../controllers/users.controller')
const middlewareJWT = require('../middleware/jwt')

router.get('/users', usersControllers.getUsers)
router.get('/user/:id', usersControllers.getOneUser)
router.post('/addUsers', usersControllers.addUsers)
router.delete('/deleteUser/:id', usersControllers.deleteUser)
router.put('/updateUser/:id', usersControllers.updateUser)
router.post('/inicioDeSesion', usersControllers.inicioDeSesion)

// router.get('/users', middlewareJWT.verificacionDeToken , usersControllers.getUsers)
module.exports =  router
