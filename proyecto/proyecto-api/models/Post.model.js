const mongoose = require("mongoose");
const { stringify } = require("querystring");
const { boolean } = require("webidl-conversions");
const Schema = mongoose.Schema;

const PostSchema = new Schema({ 
    nombre: {
        type: String,
        trim: true,
        required: true, 
    },
    email: {
        type: String,
        trim: true,
        required: true, 
    },
    contraseña: {
        type: String,
        trim: true,
        required: true, 
    },
    confirmPassword: {
        type: String,
        trim: true,
        required: true, 
    },
    checkbox: {
        type: Boolean,
        default: false,
        required: true,
    }
    
 }, { timestamps: true } );


module.exports = mongoose.model("Post", PostSchema);