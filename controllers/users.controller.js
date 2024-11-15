const { json } = require('express');
const userModel = require('../Models/users.models');

exports.getUsers = async(req, res)=> {
    try {
        let dataUsers = await userModel.find()
        res.json(userModel)
    } catch (error) {
        console.log(error);
        res.send({error:"Informaci"})        
    }
}