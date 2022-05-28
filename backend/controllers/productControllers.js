const { status } = require("express/lib/response")
const Product=require("../Models/productModel")
const ErrorHandler = require("../utils/errorHandler")
//just Admin add create product
exports.createProduct=async (req,res,rext)=>{
const product= await Product.create(req.body)
res.status(201).json({
    success:true,
    product
})
}

exports.grtAllProducts=async (req,res)=>{
    const product= await Product.find();
    res.status(201).json({success:true,product})
}

//admin can update product

exports.updateProduct=async (req,res)=>{
    let product= await Product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({status:false,message:"product not found.."})
    }
     product= await Product.findOneAndUpdate(req.params.id,req.body,{new:true})

    res.status(201).json({success:true,product})
}
exports.deleteProduct= async (req,res)=>{
    let product= await Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({success:false,message:"product not found."})
    }
    await product.remove();
    res.status(500).json({success:true,message:"successfully deleted"})
}

//detail product
exports.detailProduct= async (req,res,next)=>{
    let product= await Product.findById(req.params.id)
    if (!product) {
        // return res.status(500).json({success:false,message:"product not found."})
        return next(new ErrorHandler("product not found",404))     
    }
    res.status(201).json({success:true,product})
}