const mongoose = require(`mongoose`);

const connectDb = () => {
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log(`DB is successfully connected to the host`+ con.connection.host)
    })



};


module.exports = connectDb