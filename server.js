// api mock server
const fs = require('fs')
const https = require('https')
const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const log4js = require('log4js')
const cors = require('cors')
const port = 8081

// allow cors
server.use(cors())
// logging
log4js.configure ({
  appenders: {
    access: { type: 'console' }
  },
  categories: {
    default: { appenders: ['access'], level: 'info' }
  }
})
const accessLogger = log4js.getLogger('access')
server.use(log4js.connectLogger(accessLogger))

// ssl support
const sslOptions = {
  key: fs.readFileSync('cert/server.key'),
  cert: fs.readFileSync('cert/server.crt')
}

const readJson = (filePath) => {
  return new Promise(resolve => {
    fs.readFile(filePath, (err, data) => {
      resolve(JSON.parse(data))
    })
  })
}

server.get ('/test', (req, res) => {
  readJson('db/test.json').then(data => { res.json(data) })
})

https.createServer (sslOptions, server).listen(port, () => {
  console.log('api server started on port ' + port)
})
