const productModel = require('../models/productModel')

exports.getProducts = async(req, res, next) => {
    const products = await productModel.find({});
    if(!products){
        return res.status(404).json({
            success:false,
            message:`No products exist`
        });
    }
    res.status(200).json({
        success: true,
        products
    })
}

exports.getSingleProduct = async(req, res, next) => {
    const getProductId = await productModel.findById(req.params.id);

    if(!getProductId){
        return res.status(404).json({
            success: false,
            message:`Product is not found`
        });
    }
    res.status(200).json({
        success: true,
        getProductId
        
    })
}

