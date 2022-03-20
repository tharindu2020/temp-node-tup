const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('This is home page')
    }

    if(req.url === '/about'){
        res.end('This is about page')
    }

    res.end('Ooops some one goes wrong')
    // res.end(`
    //     <h1> Ooops!! </h1>
    //     <p>Some one goes to wrong</p>
    // `)
})

server.listen(3000)