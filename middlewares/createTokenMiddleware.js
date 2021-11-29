const path = require("path");
const { body } = require('express-validator');


const createTokenMiddleware = [ 
  
    
  body('botonupload').custom((value, { req }) => {
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
   

    body("price").notEmpty().withMessage("Price must be defined."),
    
    body("name").notEmpty().withMessage("Name must be defined.").bail()
    .isLength({ min: 1 }).withMessage("Name must be longer than 1 character.")
    ,
    
    body("keyword").notEmpty().withMessage("Keywords must be defined.").bail()
    .isLength({ min: 4 }).withMessage("Pleade type a longer Keyword."),
    
    body("description").notEmpty().withMessage("You must type a brief description.").bail()
    .withMessage("You have to set a valid e-mail for your account.")
    .isLength({ min: 15 }).withMessage("Pleade type a longer description.")
    
    
    /*.custom((value, {req}) => {
      let Email = req.email
      return Email.findUserByEmail(value).then(user => {
        if (user) {
          throw new Error('Email already in use');;
        }
      });
    })*/,
    
   
    
    ];

    module.exports = createTokenMiddleware