const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    // connect and keep the connection object for logging
    const con = await mongoose.connect(process.env.DB_URL);

    console.log(`DB successfully connected to host: ${con.connection.host}`);
  } catch (error) {
    console.error("DB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDb;
