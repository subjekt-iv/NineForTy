const express = require('express');
const fs = require("fs");
const path = require("path");
const router = express.Router();
const usersController = require("../controller/usersController");
const multer = require("multer");
const validations = require('../middlewares/registerValidationMiddleware')

/*
const validateRegister = [ 
   /*check("first_name")
   .notEmpty().withMessage("You have to set your account's first name.").bail()
   .isLength({ min: 2 }).withMessage("You have to give a valid name for your account."),
   check("last_name").notEmpty().withMessage("You have to set your account's last name."),
   check("username")
   .notEmpty().withMessage("You have to set your account's username.").bail()
   .isLength({ min: 4 }).withMessage("You have to give a valid username for your account."),
   check("email")
   .notEmpty().withMessage("You have to set your account's email.").bail()
   .isEmail().withMessage("You have to set a valid e-mail for your account."),
   check("password")
   .notEmpty().withMessage("You have to set your account's password.")/*.bail()
   .isLength( { min: 5 }).withMessage("Your password must be longer than 8 characters."),
];

*/

const storage = multer.diskStorage({ 
   destination: function (req, file, cb) { 
      cb(null, './public/img/avatars'); 
   }, 
   filename: function (req, file, cb) { 
      cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
})
  
var uploadFile = multer({ storage: storage})


router.get("/login", usersController.login);
router.post("/login", usersController.processLogin);
router.get("/register", usersController.register);
//router.post("/register", uploadFile.single('avatar'), validations, usersController.processRegister);
router.post("/register", [validations, uploadFile.single("avatar")], usersController.createUSER);
router.get("/userList", usersController.userList);
router.get("/profile", usersController.profile);
router.get("/edit/:id", usersController.editProfile);
router.put("/edit/:id", usersController.updateProfile);


module.exports = router;