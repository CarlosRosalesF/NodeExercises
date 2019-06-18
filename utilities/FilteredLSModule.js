let fs = require('fs')


fs.readdir(process.argv[2], (err, data)=>{
    if(!err){
        filteredArr = data.filter(file => file.includes('.'+process.argv[3]))
        filteredArr.forEach(file => {
            console.log(file)
        });
    } else {
        console.log(err)
    }
})