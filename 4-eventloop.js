// asynconize task
console.log('first task')
setTimeout(() => {
    console.log('second Task')
},0)

console.log('next task')
console.log('')

// synconize task
console.log('first task')
console.time()
for(let i=0; i<10; i++){
    console.log("Hey,everyone")
}
console.timeEnd()

console.log('next Task')
