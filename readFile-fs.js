const {readFile} = require('fs')

console.log('start read file')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }

    console.log(result)
    console.log('file read completed')
})

console.log('start next task')