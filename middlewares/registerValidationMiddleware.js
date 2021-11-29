const path = require("path");
const { body } = require('express-validator');


const validateRegister = [ 
  
  body('avatar').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    
    
    if(!file) {
        throw new Error('Debes subir una imagen');
     }  else {
      let fileExtension = path.extname(file.originalname);
    if (!acceptedExtensions.includes(fileExtension)) {
      throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')} `)

    } 
  }
     return true
     
    }
   ),
   

    body("first_name").notEmpty().withMessage("You have to set your account's first name.").bail()
    .isLength({ min: 2 }).withMessage("You have to give a valid name for your account."),
    
    body("last_name").notEmpty().withMessage("You have to set your account's last name.").bail()
    .isLength({ min: 2 }).withMessage("You have to give a valid last name for your account.")
    ,
    
    body("username").notEmpty().withMessage("You have to set your account's username.").bail()
    .isLength({ min: 4 }).withMessage("You have to give a valid username for your account."),
    
    body("email").notEmpty().withMessage("You have to set your account's email.").bail()
    .isEmail().withMessage("You have to set a valid e-mail for your account.")/*.custom((value, {req}) => {
      let Email = req.email
      return Email.findUserByEmail(value).then(user => {
        if (user) {
          throw new Error('Email already in use');;
        }
      });
    })*/,
    
    body("password").notEmpty().withMessage("You have to set your account's password.").bail()
    .isLength( { min: 8 }).withMessage("Your password must be longer than 8 characters."),
    
    ];

    module.exports = validateRegister