const app = express();

const logger = (req,res,next) => {
    req.hello = "Hello world"
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    console.log("Middleware ran");
    next();
}

app.use(logger)

///It will give full URL with method

//   GET http://localhost:5000/api/v1/bootcamps