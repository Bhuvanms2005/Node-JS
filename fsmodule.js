const fs=require("fs");
    fs.writeFile("a.txt","Hello from text file\n",(err)=>{
        if(err) throw err;
        console.log("File has been created successfully");
    });
    fs.readFile("a.txt","utf8",(err,data)=>{
        if(err) throw err;
        console.log("The data is:",data);
    });
    fs.appendFile("a.txt","This is a an appended text",(err)=>{
        if(err) throw err;
        console.log("File has been appended Successfully");
    });
    /*code for deleting the file
    fs.unlink("a.txt",(err)=>{
        if(err)throw err;
        console.log("File has been deleted successfully");
    });*/