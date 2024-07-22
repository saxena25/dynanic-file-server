const fs = require("fs");
const http = require("http");
const path = require("path");
const PORT = 8181;

let folder = fs.readdirSync(__dirname, "utf-8");
console.log(folder);
const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        folder.forEach((e)=>{
            // res.write(`<h1>${e}</h1>`)
            if(fs.statSync(path.join(__dirname, e)).isDirectory()){
                res.write(`<a href="${e}"><li>&#128193; ${e}</li></a>`)
            }
            else{
                res.write(`<a href="${e}"><li>&#128462; ${e}</li></a>`)
            }
        })
        res.end();
    }else{
        res.write(req.url);
        res.end();
    }
})

server.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})