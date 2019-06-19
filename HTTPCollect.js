const http = require("http")
// This library is use to concat the buffer response for the http.get, until the event Response.end
const bl = require("bl")

http.get(process.argv[2], (response =>{
    response.pipe(bl( (err, data) => {
        if(err){
            
            return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})).on("error", console.error)

