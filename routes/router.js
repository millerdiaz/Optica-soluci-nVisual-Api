const express =  require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/showProduct',productController.allProducts);
router.get('/showOne/:id',productController.getOneProduct);
router.post('/addProduct', productController.add);
router.put('/upDate/:id',productController.modify);
router.delete('/delete/:id',productController.deleteProduct);



module.exports = router;









module.exports =  router;
