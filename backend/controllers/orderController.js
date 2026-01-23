const orderModel = require("../models/orderModel");

exports.createOrder = async (req, res) => {
  try {
    const { cartItems } = req.body;

    // ✅ Validate cartItems
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({
        success: false,
        message: "cartItems must be a non-empty array"
      });
    }

    // ✅ Calculate total amount using reduce
    const amount = cartItems.reduce((acc, item) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 0;
      return acc + price * quantity;
    }, 0);

    const order = await orderModel.create({
      cartItems,
      amount: String(amount), // because schema uses String
      status: "pending",
      createdAt: new Date()
    });

    res.status(201).json({
      success: true,
      order
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
