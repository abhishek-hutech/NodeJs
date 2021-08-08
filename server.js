const express = require("express");
const dotenv = require("dotenv");
// const logger =  require('./middleware/logger')
const morgan  = require("morgan")
const  connectDB = require( "./config/db");
// Route files
const bootcamps  = require("./routes/bootcamps");
var colors = require('colors');
//load env vars
dotenv.config({path : "./config/config.env"});

connectDB();

const app = express();
// app.use(logger)

//DEv logginf middleware
if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));

}


// mountrouters
app.use('/api/v1/bootcamps', bootcamps)


//we dont have to stringfly express does that for us
app.get('/', (req,res)=> {
    //    res.send("<h1>Hello express(postman preview)</h1>")
    //    res.json({name:"Abhishek"})  or we use res.send both does same thing
          res.status(200).json({success:true, data: {id:1}})
});


const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, 
    console.log(`server running on ${process.env.PORT} node on port ${PORT}`.yellow.bold));

//Handle rejections

process.on('unhandledRejection', (err, promise ) => {
    console.log(`Unhandled rejection error ${err.message}`.red );
    //cose server and exit
    server.close(() => process.exit(1))
})
