let ipConnections = {}
const _ = require('lodash')

const handleConnections = (io) => {
  io.on('connection', (socket) => {
    const ipAddress = socket.request.connection.remoteAddress
    const { id } = socket
    ipConnections[ipAddress] = id
    io.emit('connectionsUpdated', ipConnections)

    socket.on('disconnect', () => {
      ipConnections = _.reduce(io.sockets.connected, (curr, acc, key) => {
        const currentIps = Object.values(ipConnections)
        const index = currentIps.indexOf(key)
        if (index >= 0) {
          curr[currentIps[index]] = key
        }
        return curr
      }, {})
      socket.broadcast.emit('connectionsUpdated', ipConnections)
    })
  })
}
module.exports = handleConnections
