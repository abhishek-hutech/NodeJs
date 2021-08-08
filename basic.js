const http = require("http");


const todos = [
    { id:1,text:"todo1" },
    { id:2,text:"todo 2" },
    { id:3,text:"todo 3" }

]

const server  =  http.createServer((req,res) => {
    console.log("started");
    res.setHeader("Content-type", 'application/json');
    // res.setHeader("Content-type", 'text/html');
    // res.setHeader("Content-type", 'text/plain'); 
    // res.write("<h1>send something</h1>")
    
    // PART 1
    // res.end(JSON.stringify({
    //     success:true,
    //     data:todos
    // }));

    // PART 2
    //  res.statusCode = 404
    //  res.end(JSON.stringify({
    //     success:false,
    //     error: "not found",
    //     data:null
    // }));

    console.log(req.headers.authorization);
    // PART 3
        res.end(JSON.stringify({
                success:true,
                data:todos
         }));
})

const PORT = 5000;

server.listen(PORT, () => console.log("SERVER STARTED"))