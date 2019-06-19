let http = require("http")

let url = process.argv[2]

http.get(url, (response =>{
    response.setEncoding("utf8")
    response.on("data", (data =>{
        console.log(data)
    }))
})).on("error", (e =>{
    console.log("Got an erro"+e.message)
}))

// Official solution

/*

    var http = require('http')

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)

*/