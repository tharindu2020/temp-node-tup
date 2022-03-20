// that is the file async method

const {readFile, writeFile } = require('fs')

readFile('./content/first.txt','utf8', (err,result) => {
    if(err){
        console.log(err)
        return
    }

    const first = result

    readFile('./content/second.txt', 'utf8', (err,result) => {
        if(err){
            console.log(err)
            return
        }

        const second = result

        writeFile('./content/result-sysnt.txt', `The result is : ${first}, ${second}`, (err,result) => {
            if(err){
                console.log(err)
                return
            }

            console.log(result)
        })
    })
})