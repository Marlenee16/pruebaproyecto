const Post = require("../models/Post.model");
const debug = require("debug")("app:post-controller");

const controller = {};

controller.create = async (req, res) => {
    try {
    const { nombre, email, contraseña, confirmPassword, checkbox } = req.body;

    //validacion de los campos
    const post = new Post({
        nombre : nombre,
        email : email,
        contraseña: contraseña,
        confirmPassword: confirmPassword,
        checkbox: checkbox
    });

    const newPost = await post.save();

    if(!newPost){
        return res.status(409).json({ error: "paso un error inesperado"});
    }

    return res.status(201).json(newPost);    
    } catch (error) {
        debug({error})
        return res.status(500).json({ error: "Error interno del servidor"});
    }
    
}


controller.findAll = async (req, res) => {
    try {
      const posts =
      //cambiar por ckeckro
        await Post.find({ checkbox: false })
  
      return res.status(200).json({ posts });
    } catch (error) {
      debug({ error });
      return res.status(500).json({ error: "Error interno de servidor" });
    }
}

controller.findOneById = async (req, res) => {
    try {
      const { identifier } = req.params;
  
      const post = await Post
        .findById({ _id: identifier, checkbox: false })
  
      if (!post) {
        return res.status(404).json({ error: "Post no encontrado" });
      }
  
      return res.status(200).json(post);
    } catch (error) {
      debug({ error });
      return res.status(500).json({ error: "Error interno de servidor" });
    }
}


module.exports = controller; 