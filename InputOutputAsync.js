let  fs = require('fs')

function readDocument(callback) {
    fs.readFile(process.argv[2], 'utf8', (err, data)=>{
        if (!err){
            numberOfLines(data)
        } else {
            console.log(err)
        }
    });
}

function numberOfLines (document){
    let  documentArr = document.split('\n')
    console.log(documentArr.length - 1)
}

readDocument(numberOfLines)

// Official solution

/*
    var fs = require('fs')
    var file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
*/

