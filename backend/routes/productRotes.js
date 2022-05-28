const express=require("express");
const {grtAllProducts,createProduct,updateProduct,deleteProduct,detailProduct}=require("../controllers/productControllers.js");

const router= express.Router();
console.log(">>>")
router.route("/products").get(grtAllProducts )
router.route("/product/new").post(createProduct )
router.route("/product/:id").put(updateProduct ).delete(deleteProduct).get(detailProduct)




module.exports=router