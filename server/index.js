const path = require('path')
const express = require('express')

const port = process.env.PORT || 8000
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const handleConnections = require('./utils/handleConnections')

const DIST_DIR = path.join(__dirname, '..', 'dist')

app.use(express.static(DIST_DIR))

app.use('/', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'))
})

server.listen(port, () => {
  handleConnections(io)
  // eslint-disable-next-line
  console.log(`listening on ${port}`)
})
