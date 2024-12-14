const express =  require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const loginProductController = require('../controllers/loginProduct.controller')
// const middlewareJwt  = require('../middleware/jwt');


//***********rutas para manejar los productos***********
router.get('/showProduct',productController.allProducts);
router.get('/showOne/:id',productController.getOneProduct);
router.post('/addProduct', productController.add); // verificar middleware para agregar en angular = middlewareJwt.verificacionToken,
router.put('/upDate/:id',productController.modify);
router.delete('/delete/:id',productController.deleteProduct);

//******** ingreso de admin con token******** */
router.post('/loginUser',loginProductController.login)

module.exports = router;








// const express = require('express')
const usersControllers = require('../controllers/users.controller')
// const middlewareJWT = require('../middleware/jwt')

router.get('/users', usersControllers.getUsers)
router.get('/user/:id', usersControllers.getOneUser)
router.post('/addUsers', usersControllers.addUsers)
router.delete('/deleteUser/:id', usersControllers.deleteUser)
router.put('/updateUser/:id', usersControllers.updateUser)
// router.post('inicioDeSesion', middlewareJWT.verificacionDeToken, usersControllers.inicioDeSesion)

// router.get('/users', middlewareJWT.verificacionDeToken , usersControllers.getUsers)
module.exports =  router
