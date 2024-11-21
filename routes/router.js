const express = require('express')
const router = express.Router();
const usersControllers = require('../controllers/users.controller')
const middlewareJWT = require('../middleware/jwt')

router.get('/users', middlewareJWT.verificacionDeToken , usersControllers.getUsers)
router.get('/user/:id', usersControllers.getOneUser)
router.post('/addUsers', usersControllers.addUsers)
router.delete('/deleteUsers/:id', usersControllers.deleteUser)
router.put('/updateUsers/:id', usersControllers.updateUser)
router.post('inicioDeSesion', usersControllers.inicioDeSesion)


module.exports =  router
