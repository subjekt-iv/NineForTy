const express = require('express');
//const fs = require("fs");
const path = require("path");
const router = express.Router();
const validateRegister = require('../middlewares/registerValidationMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')
//const { body } = require('express-validator');
const usersController = require("../controller/usersController");
const multer = require("multer");



const storage = multer.diskStorage({ 
   destination: function (req, file, cb) { 
      cb(null, './public/img/avatars'); 
   }, 
   filename: function (req, file, cb) { 
   let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;  
   cb(null, fileName)

} 
})
  
var uploadFile = multer({ storage: storage})

router.get("/register", guestMiddleware, usersController.register);
router.post("/register", [uploadFile.single("avatar"), validateRegister], usersController.createUSER);
router.get("/login", guestMiddleware, usersController.login);
router.post("/login", usersController.processLogin);
router.get("/userList", usersController.userList);
router.get("/profile", authMiddleware, usersController.profile);
router.get("/edit/:id", authMiddleware, usersController.editProfile);
router.post("/edit/:id",[uploadFile.single("avatar"), validateRegister ], usersController.updateProfile);



module.exports = router;






/*
const validateRegister = [
   body('first_name').notEmpty().withMessage('You have to set your first name'),
   body('last_name').notEmpty().withMessage('You have to set your accounts last name'),
   body('email').isEmail().withMessage('You have to set your accounts email.'),
   body('username').notEmpty().withMessage('You have to set your accounts username.'),
   body('password').notEmpty().withMessage('You have to set your accounts password.'),
   body('password2').notEmpty().withMessage('You have to repeat your accounts password.')

]
*/
/*

const validateRegister = [ 
   body("first_name").notEmpty().withMessage("You have to set your account's first name.").bail()
   .isLength({ min: 2 }).withMessage("You have to give a valid name for your account."),
   
   body("last_name").notEmpty().withMessage("You have to set your account's last name."),
   
   body("username").notEmpty().withMessage("You have to set your account's username.").bail()
   .isLength({ min: 4 }).withMessage("You have to give a valid username for your account."),
   
   body("email").notEmpty().withMessage("You have to set your account's email.").bail()
   .isEmail().withMessage("You have to set a valid e-mail for your account."),
   
   body("password").notEmpty().withMessage("You have to set your account's password.").bail()
   .isLength( { min: 8 }).withMessage("Your password must be longer than 8 characters."),
   
   body('avatar').custom((value, { req }) => {
       let file = req.file;
       let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        
       if(!file) {
           throw new Error('Debes subir una imagen');
        } else {
          let fileExtension = path.extname(file.originalname);
          if(!acceptedExtensions.includes(fileExtension)) {
              throw new Error('Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')} ');
          }
        }
       }
     )];
*/


