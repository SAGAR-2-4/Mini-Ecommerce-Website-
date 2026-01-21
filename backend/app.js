//Backend application file

//install express 
const express = require(`express`);
const app = express();

const dotenv = require(`dotenv`);
const path = require(`path`)
dotenv.config({path:path.join(__dirname, 'config', '.env')})

const products = require(`./routes/product`);
const orders = require(`./routes/order`);

app.use(`/api/v1`, products);
app.use(`/api/v1`, orders);




app.listen(process.env.PORT, () => {
    console.log(`Server Listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`);

})