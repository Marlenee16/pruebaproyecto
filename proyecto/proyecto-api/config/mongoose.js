const Mongoose = require("mongoose");
const debug = require("debug")("app:mongoose");

const dbhost = process.env.DBHOST || "localhost";
const dbport = process.env.DBPORT || "27017";
const dbname = process.env.DBNAME || "proyecto"

const dburi = process.env.DBURI || `mongodb://${dbhost}:${dbport}/${dbname}`;

const connect = async () => {
    debug(dburi);
    try{
        Mongoose.connect(dburi);
        debug("conexion a la base exitosa")
    }catch(error){
        debug("error en la conexion de la base");
        process.exit(1);
    }
}

module.exports = {
    connect
}