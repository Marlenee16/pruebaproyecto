const express = require("express");
const router = express.Router();

//const ROLES = require("../../data/roles.constants.json");
const posts = require("../../data/posts.example.json");
const postController = require("../../controllers/post.controller");

const postValidators = require("../../validators/post.validators");
const runValidations = require("../../validators/index.middleware");


router.get("/", postController.findAll);

router.get("/:identifier", 
  postValidators.findPostByIdValidator,
  runValidations,
  postController.findOneById);

router.post("/", 
postValidators.createPostValidator,
 runValidations, 
 postController.create)

module.exports = router;