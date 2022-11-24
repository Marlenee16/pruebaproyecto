const { body, param } = require("express-validator")
const validators = {};

validators.createPostValidator = [
body("nombre")
  .notEmpty().withMessage("Debe elegir un nombre de usuario"),
body("email") 
  .notEmpty().withMessage("el email no debe estar vacio")
  .isEmail,
body("contraseña")
.notEmpty().withMessage("Debe tener una contraseña legal")  
   .isStrongPassword
];


validators.findPostByIdValidator = [
    param("identifier")
     .notEmpty().withMessage("El id no debe ir vacio")
     .isMongoId().withMessage("El id debe de ser de mongo")
]


//para cuadro de comentario=> .isLength({ max: 280 }). withMessage("la descripcion no debe superar 280 caracteres")
module.exports = validators;