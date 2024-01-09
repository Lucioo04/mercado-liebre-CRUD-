const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userController.js')
const {check} = require('express-validator');


const validateRegister = [
    check('name')
    .notEmpty().withMessage('Debes completar el nombre').bail()
    .isLength({ min: 4 }).withMessage('El nombre debe tener al menos 5 caracteres'),
    check('apellido')
    .notEmpty().withMessage('Debes completar el apellido').bail()
    .isLength({ min: 4 }).withMessage('El apellido debe tener al menos 5 caracteres'),
    check('email')
    .notEmpty().withMessage('Debes completar el email').bail()
    .isEmail().withMessage('Debes ingresar un email válido').bail(),
    check('password')
    .notEmpty().withMessage('Debes completar la contraseña').bail()
    .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres')
]

router.get('/registro', userControllers.registro); 
router.post('/registro', validateRegister, userControllers.register)

module.exports =router;