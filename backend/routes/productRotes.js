const express=require("express");
const {getAllProducts,createProduct,updateProduct,deleteProduct,detailProduct}=require("../controllers/productControllers.js");

const router= express.Router();
console.log(">>>")
router.route("/products").get(getAllProducts )
router.route("/product/new").post(createProduct )
router.route("/product/:id").put(updateProduct ).delete(deleteProduct).get(detailProduct)




module.exports=router