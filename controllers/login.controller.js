const usersModels = require("../Models/users.models");

exports.login = async (req, res) => {
    try {
        let inforUser = req.body
        let user = await usersModels.findOne({email: inforUser.email})
        
        if(user) {
            let clave = inforUser.contraseña
            if(user.password == contraseña){
                
                res.status(200).send({msj:"Ingreso correcto"})
            } else{
                res.status(400).send({msj:"Información invalida"})
            }
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"Información invalida"})
        
    }
}