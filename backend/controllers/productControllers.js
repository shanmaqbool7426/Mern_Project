const { status } = require("express/lib/response")
const Product = require("../Models/productModel")
const Apifeatures = require("../utils/apifeatures")
const ErrorHandler = require("../utils/errorHandler")
//just Admin add create product
exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json({
            success: true,
            product
        })
    } catch (err) {
        next()
        res.status(400).send(err.errors);

    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const apifeatures = new Apifeatures(Product.find(), req.query).serch();
        const product = await apifeatures.query
        res.status(201).json({ success: true, product })
    } catch (error) {
        console.log(error)
        res.status(400).send(error);

    }
}

//admin can update product

exports.updateProduct = async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return next(new ErrorHandler("product not found", 404))
        }
        product = await Product.findOneAndUpdate(req.params.id, req.body, { new: true })

        res.status(201).json({ success: true, product })
    } catch (error) {
        res.status(400).send(error);

        next()
    }

}
exports.deleteProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id)
        if (!product) {
            return next(new ErrorHandler("product not found", 404))
        }
        await product.remove();
        res.status(500).json({ success: true, message: "successfully deleted" })
    } catch (error) {
        console.log(error)
    }
}

//detail product
exports.detailProduct = async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id)
        if (!product) {
            // return res.status(500).json({success:false,message:"product not found."})
            return next(new ErrorHandler("product not found", 404))
        }
        res.status(201).json({ success: true, product })

    } catch (error) {
        return next(new ErrorHandler("product not found", 404))
    }
}