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
            
            
        }

        if (parsedUrl.pathname == '/api/unixtime') {

            let isoDate = Date.parse(parsedUrl.query.iso)
            
            res.end(isoDate)
        }
        
    }
  
}).listen(process.argv[2])