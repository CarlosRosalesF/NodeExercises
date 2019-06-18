let fs = require('fs')

let textFile = fs.readFileSync(process.argv[2]).toString()

let  textFileArr = textFile.split('\n')

console.log(textFileArr.length - 1)