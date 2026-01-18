const { default: router } = require("../routes/product")

exports.getProducts= (req, res, next) =>{
    res.json({
        success: true,
        message: `Get Products working`
    })
}

exports.getSingleProduct= (req, res, next) => {
    res.json({
        success: true,
        message:`Get Single Products working`
    })
}

module.exports = router;