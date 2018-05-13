
const handleConnections = (io) => {
  const ipConnections = {}

  io.on('connection', (socket) => {
    const ipAddress = socket.request.connection.remoteAddress
    const { id } = socket
    ipConnections[id] = ipAddress
    socket.broadcast.emit('connectionsUpdated', ipConnections)
    socket.on('disconnect', () => {
      delete ipConnections[socket.id]
      socket.broadcast.emit('connectionsUpdated', ipConnections)
    })
  })
}
module.exports = handleConnections
