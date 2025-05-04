const http=require("http");
const server=http.createServer((req,res)=>{
    res.end("hello from node js to the webpage");
});
server.listen(3000,()=>{
    console.log("server is running at http://localhost:3000");

});