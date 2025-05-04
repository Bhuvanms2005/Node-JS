const fs=require("fs");
fs.writeFile("welcome.txt","Hello from Node.js",(err)=>{
    if(err) throw err;
console.log("File created successfully");
})