// const add = (a, b) => {
//     return a + b;
// };

// const sub = (a, b) => {
//     return a - b;
// };

// module.exports = {add , sub} ;


const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
//1st way
//     fs.readFile("rewrite.txt", (err, data) => {
//         if (err) return console.log(err);
//         res.end(data.toString());
//     })
// })

//2nd way

// const rstream = fs.createReadStream('rewrit1e.txt')

// rstream.on("data", (chunkdata) => {
//     res.write(chunkdata)
// });
// rstream.on("end", () => {
//     res.end()
// });
// rstream.on("error", (err) => {
//     console.log(err);
//     res.end("page not found")
// });

//3rd way

const rstream = fs.createReadStream('rewrite.txt')

rstream.pipe(res)
});

server.listen(8000, "127.0.0.1")


