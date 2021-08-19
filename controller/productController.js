const productController = {
    create: (req,res) =>{
        res.render("products/create")
    },

    edit: (req,res) =>{
        res.render("products/edit")
    },

    list: (req,res) =>{
        res.render("products/tokens")
    },  

}

module.exports = productController;