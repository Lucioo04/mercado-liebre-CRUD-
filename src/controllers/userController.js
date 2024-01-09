const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const {validationResult} = require('express-validator');
const controller = {

registro: (req,res) => res.render('register.ejs',{}),
register: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
        const usuario ={
            id:usuarios[usuarios.length - 1].id + 1,
            name: req.body.name.trim(),
            apellido:req.body.apellido.trim(),
            email:req.body.email,
            password:req.body.password, 
        
        } 
            
            usuarios.push(usuario);
            const json = JSON.stringify(usuarios);
            fs.writeFileSync(usersFilePath,json,"utf-8");
            res.redirect("/")
    } else {
        res.render('register', {errors:errors.mapped(),old:req.body});
        // res.send (errors.mapped());
    }
    },
}  


module.exports = controller;

