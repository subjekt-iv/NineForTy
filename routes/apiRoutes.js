const express= require ("express");
const router= express.Router();
const apiController= require ("../controller/api/apiController")

router.get("/users", apiController.userList);
router.get("/users/:id", apiController.givenUser);
router.get("/products", apiController.productsList);
router.get("/products/:id", apiController.givenProduct);

module.exports = router;