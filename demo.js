const http = require('http');
const server = http.createServer((req,res)=>{
    res.write('Welcome to first server');
    res.end();
});

server.listen(3000);

console.log("Server started at port 3000...")