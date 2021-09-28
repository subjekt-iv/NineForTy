const path = require("path");
const {check} = require('express-validator');

const validateRegister = [ 
    check("first_name")
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
    .notEmpty().withMessage("You have to set your account's password.").bail()
    .isLength( { min: 5 }).withMessage("Your password must be longer than 8 characters."),
    check('image').custom((value, { req }) => {
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

    module.exports = validateRegister