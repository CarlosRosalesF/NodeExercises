let filteredLS = require('./lib/FilteredLSModule')


filteredLS (process.argv[2],process.argv[3], (err, arr)=>{

    if(err){
        console.error("There was an error",err)
        return
    }

    arr.forEach(file => {
        console.log(file)
    });
})