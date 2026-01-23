// Backend application file

// install express
const express = require("express");
const app = express();
const cors = require(`cors`);

const dotenv = require("dotenv");
const path = require("path");

FrontendRendering/HomePage/Header/Footer
const connectDb = require("./config/connectDatabase");
connectDb();

// Load environment variables
dotenv.config({ path: path.join(__dirname, "config", ".env") });

// Routes
const products = require("./routes/product");
const orders = require("./routes/order");

// Middleware
app.use(express.json());
FrontendRendering/HomePage/Header/Footer

app.use(cors());

// API routes
app.use("/api/v1", products);
app.use("/api/v1", orders);

// Start server
app.listen(process.env.PORT, () => {
  console.log(
    `Server listening on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

// API routes
app.use("/api/v1", products);
app.use("/api/v1", orders);

// Start server
app.listen(process.env.PORT, () => {
  console.log(
    `Server listening on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

