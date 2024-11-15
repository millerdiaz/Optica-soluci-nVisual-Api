const productsModel = require("../Models/products.model")


exports.allProducts = async (req,res) => {
    try {
        let data = await productsModel.find()
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Se ha generado un error, comunícate con tu administrador" });
    }
};

exports.getOneProduct = async (req,res)=>{
    try {
        const id = req.params.id
        if (id.length === 24) {
            let producto = await productsModel.findById(id);
            if (producto) {
                res.status(200).json(producto);
            } else {
                res.status(404).json({ error: "Producto no encontrado en la base de datos" });
            }
        } else {
            res.status(400).json({ error: "El ID no cumple con la longitud de 24 caracteres" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Se ha generado un error, comunícate con tu administrador" });
    }
};

exports.add = async (req,res) => {
    try {
        let product = req.body
        let modelo = product.modelo
        let buscarProducto = await productsModel.findOne({modelo:modelo})
        if (!buscarProducto) {
            let newProduct = new productsModel(product)
            await newProduct.save()
            res.status(201).json(newProduct);
        } else {
            res.status(409).json({ error: "El producto ya existe en la base de datos" });
        }         
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Se ha generado un error, comunícate con tu administrador" });
    }
};

exports.deleteProduct = async (req,res) => {
    try {
        let id = req.params.id
        let product = await productsModel.findById(id)

        if (product) {
            const deleteProduct = await productsModel.findByIdAndDelete({_id:id})
            res.status(200).json(deleteProduct);

        } else {
            res.status(404).json({ error: "Producto no encontrado en la base de datos" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Se ha generado un error, comunícate con tu administrador" });
    }
};

exports.modify = async (req,res) => {
    let id = req.params.id
    const update = req.body;  

    if (id.length === 24) {
        let product = await productsModel.findById(id);
        if (product) {
            const existingProduct = await productsModel.findOne({ marca: update.marca, _id: { $ne: id } });
            if (existingProduct) {
                res.status(409).json({ error: "Ya existe un producto con ese nombre" });
            }
            else{
                Object.assign(product,update)
                let updateProduct = await productsModel.updateOne({_id:id},product);
                res.status(200).json(updateProduct);
            }
        }
    }
};