// that is the file sync method

const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// console.log( first , second)

writeFileSync('./content/results-sysnt.txt', `here is the result : ${first} , ${second}`)