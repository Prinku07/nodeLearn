const fs = require("fs");
//const validator = require('validator')

// fs.writeFileSync("read.txt", 'Welocome priyanka')

// fs.appendFileSync ("read.txt", 'Welocome priyanka gohil')


// const a = fs.readFileSync("read.txt")

// const fileData = a.toString()

// console.log(fileData)

// fs.renameSync('read.txt', 'rewrite.txt')

// const {add, sub } = require('./export')
// console.log(add(5,5))
// console.log(sub(5,5))

// const res = validator.isEmail("pgmail.com")
// console.log(res)

// HTTP

// const http = require('http');

// const server = http.createServer((req, res) => {

//     const userapi = fs.readFileSync('josn.json', 'utf-8');
//     //const data = JSON.parse(userapi)

//     if (req.url == "/") {
//         res.end("Hello from home side")
//     } else if (req.url == "/about") {
//         res.end("Hello from about side")
//     } else if (req.url == "/contact") {
//         res.end("Hello from contact side")
//     } else if (req.url == "/userapi") {
//         res.writeHead(200, {"content-type" : "application/json"})
//         res.end(userapi)
//     }
//     else {
//         res.writeHead(404, { "content-type": "text/html" });
//         res.end("<h1> Error : 404 page not found </h1>")
//     }
// });

// server.listen(8000, "127.0.0.1", () => {
//     console.log("listling to the port 8000")
// })


// biodata = {
//     name : "priyanka Gohil",
//     age : 25,
//     designation : "developer"
// }

// const jsondata = JSON.stringify(biodata);
// fs.writeFile('josn.json', jsondata, (err) => {
//     console.log("done")
// });


// fs.readFile("josn.json", "utf-8", (err,data) => {
//     const orgData = JSON.parse(data)
//     console.log(orgData)
//     console.log(data)

// })

//events 

const EventEmitter  = require("events");

const event = new EventEmitter()
//normal 
// event.on("sayName", ()=> {
//     console.log("my name is priyanka")
// });

//event.emit('sayName')

//passing parameter
event.on('sayName', (status , msg) =>{
    console.log(`status is ${status}, and msg : ${msg}`)
} )
event.emit('sayName', 200 , "ok")


