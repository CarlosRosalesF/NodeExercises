let fs = require('fs')

function filteredLS (path, ext, callback) {
    fs.readdir(path, (err, data)=>{
        if(!err){
            filteredArr = data.filter(file => file.includes('.'+ext))
            return callback (null, filteredArr)
        } else {
            return callback(err)
        }
    })
}


module.exports = filteredLS