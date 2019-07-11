const http = require('http')
const url = require('url')

http.createServer(function(req, res) {

    if (req.method === 'GET') {
        
        res.writeHead(200, { 'Content-Type': 'application/json' })

        let parsedUrl = url.parse (req.url, true)

        if (parsedUrl.pathname == '/api/parsetime') {

            let isoDate = new Date(parsedUrl.query.iso)
            let jsonDate = {}

            jsonDate.hour = isoDate.getHours()
            jsonDate.minute = isoDate.getMinutes()
            jsonDate.second = isoDate.getSeconds()
            
            res.end(JSON.stringify(jsonDate))
        }

        if (parsedUrl.pathname == '/api/unixtime') {

            let isoDate = Date.parse(parsedUrl.query.iso)
            let jsonDate = {}

            jsonDate.unixtime = isoDate
            
            res.end(JSON.stringify(jsonDate))
        }
    }

    return res.end('Send me a GET\n')
}).listen(process.argv[2])

/*
 Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var url = require('url')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime: time.getTime() }
    }

    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result

      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
*/
