const express =  require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const loginProductController = require('../controllers/loginProduct.controller')
const middlewareJwt  = require('../middleware/jwt');


//***********rutas para manejar los productos***********
router.get('/showProduct',productController.allProducts);
router.get('/showOne/:id',productController.getOneProduct);
router.post('/addProduct',middlewareJwt.verificacionToken, productController.add);
router.put('/upDate/:id',productController.modify);
router.delete('/delete/:id',productController.deleteProduct);

//******** ingreso de admin con token******** */
router.post('/loginUser',loginProductController.login)

module.exports = router;









module.exports =  router;
