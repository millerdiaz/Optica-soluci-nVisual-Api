const { json } = require ('express');
const userModel = require('../Models/users.models');
const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.getUsers = async(req, res)=> {
    try {
        let usuario = req.usuario
        let dataUsers = await userModel.find()
        res.json(dataUsers)
    } catch (error) {
        console.log(error);
        res.send({error:"Información restringida"})
               
    }
}
exports.getOneUser = async (req, res)=> {
    try {
        const id = req.params.id
        let user = await userModel.findOne({_id: id})
        if (user) {
            res.json(user)
        } else {
            res.send({error: "Usuario no registrado"})
        }
    } catch (error) {
        
    }
}
exports.addUsers = async(req, res)=> {
    try {
        let data = req.body
        let nuevoUsuario = new userModel(data)
        let creado = await nuevoUsuario.save()
        res.status(200).json(creado)
        // if (!buscarusuario) {
        //     let nuevoUsuario = new userModel(user)
        //     await newUser.save()
        //     res,json(newUser)
        // }else {
        //     res.send ({error: "El usuario ya existe"})
        // }
    } catch (error) {
        console.log(error);
        res.send({error:"Necesitas ayuda? contactanos"})
        
        
    }
}
exports.deleteUser = async(req, res)=> {
    try {
        let id = req.params.id
        let borrado = await userModel.findOneAndDelete({_ID : id})
        res.status (200).json(borrado)
        // if (product) {
        //     let deleteUser = await userModel.findOneAndDelete({_id: id})
        //     res.json(deleteUser)

        // } else {
        //     res.send({error:"El usuario que intentas eliminarno se encuentra en la base de datos"})

        // } 
        
    } catch (error) {
        console.log(error);
        res.send({error:"ID incorrecto"})
        
    }
}
exports.updateUser = async(req, res)=> {
    try {
        let id = req.params.idt
        let data = req.body

        let user = await userModel.findById(id)

        Object.assign(user, data)

        let actualizado = await userModel.findOneAndUpdate({_id: id}, user)
        res.status(200).json(actualizado)


        // if (user){
        //     Object.assign(user, update)
        //     let updateUser = await userModel.updateOne({_id: id}, user)
        //     res.json(updateUser)
        // }else {
        //     res.send({error: "No fue posible actuaizar la informaión del usuario"})
        // }
    } catch (error) {
        console.log(error);
        res.send({error:"ha ocurrido un error"})
        
    }
}
exports.inicioDeSesion = async (req, res)=> {
    try {
        let data = req.body
        let user = await userModel.FindOne({email: data.email})

        if (user) {(user.password === data.password); {
            let payload = {
                id: user._id,
                roll: user.roll,
                nombre: `${user.nombre} ${user.apellido}`
            }
            let SECRET_KEY_JWT = process.env.SECRET_KEY_JWT
            let token = jwt.sign(payload, SECRET_KEY_JWT, {expiresIn: '24h'})
            res.status(200).send(token)
        }

        } else {
            res.status(400).send({error:"Credenciales invalidas (correo)"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"Ha ocurrido algo, comunicate con el admin"})
        
    }
}