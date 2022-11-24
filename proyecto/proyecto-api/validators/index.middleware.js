const { validationResult } = require("express-validator");

module.exports = (req, res, nex) => {
    //validar de forma generica
    const errors = validationResult(req);

    //verificar si hay error
    if (!errors.isEmpty()) {
    // retorno 400

     return res.status(400)
      .json({
       errors: errors.array.map(error => ({
        field: error.param,
        message: error.msg
       }))
      })
    }

    // pasar al siguiente funcion 
    nex();
}