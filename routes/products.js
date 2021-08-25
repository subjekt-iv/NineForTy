const express = require("express");
const router = express.Router()
const productController = require("../controller/productController");

router.get("/create", productController.create);
router.get("/edit/:id", productController.edit);
router.get("/detail/:id", productController.detail);
router.get("/:id", productController.detail);



/*router.post("/create", productController.store);
router.put("/edit/:id", productController.update);
router.delete("/delete/:id" , productController.destroy);*/
module.exports = router;