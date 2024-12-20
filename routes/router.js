const express =  require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const loginProductController = require('../controllers/loginProduct.controller')
const usersControllers = require('../controllers/users.controller')
const middlewareJwt  = require('../middleware/jwt');
const citasController = require('../controllers/citas.controller')

//***********rutas para manejar los productos***********
router.get('/showProduct',productController.allProducts);
router.get('/showOne/:id',productController.getOneProduct);
router.post('/addProduct', productController.add); // verificar middleware para agregar en angular = middlewareJwt.verificacionToken,
router.put('/upDate/:id',productController.modify);
router.delete('/delete/:id',productController.deleteProduct);

//******** ingreso de admin con token******** */
router.post('/loginUser',loginProductController.login)

//***********rutas para manejar los usuarios***********
router.get('/users', usersControllers.getUsers)
router.get('/user/:id', usersControllers.getOneUser)
router.post('/addUsers', usersControllers.addUsers)
router.delete('/deleteUser/:id', usersControllers.deleteUser)
router.put('/updateUser/:id', usersControllers.updateUser)

//***********rutas para manejar las citas***********
router.post("/crear",citasController. createCitas);
router.get("/buscar",citasController.getCitas);
router.get("/buscarCita/:id", citasController.getOne);
router.post("/crearCita", citasController.addCitas);
router.delete("/eliminar/:id", citasController.deleteCitas);
router.put("/modificar/:id", citasController.modificarCitas);


module.exports =  router
