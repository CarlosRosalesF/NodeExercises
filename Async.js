const http = require("http")
const bl = require("bl")

let count = 0
let responses = []
let urls = []

for(let i = 2; i < 5; i++){
    urls.push(process.argv[i])
}

function ReadResponse (index) {
    http.get(urls[index], (response =>{
        response.pipe(bl( (err, data) => {
            if(err){
                return console.error(err)
            }
            responses[index] = data.toString()
            count++
            if(count == 3){
                responses.forEach(response => {
                    console.log(response)
                });
            }
            
        }))
    })).on("error", console.error)
}

for(var i = 0; i <= 2; i++){
    ReadResponse(i)
}

/*
 Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }
*/