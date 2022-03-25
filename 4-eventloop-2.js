// console.log("first task")
// setInterval(() => {
//     console.log("Hello world")
// },2000)

// console.log("second task");

const http = require('http')

const server = http.createServer((req, res) => {
    console.log("requset event")
    res.end("hello saman")
})

server.listen(5000, () => {
    console.log("server is listing on 5000")
})