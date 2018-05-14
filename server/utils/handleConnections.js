
const handleConnections = (io) => {
  const ipConnections = {}

  io.on('connection', (socket) => {
    /* The ip address could have been saved this way
     const ipAddress = socket.request.connection.remoteAddress
     const { id } = socket
     ipConnections[id] = ipAddress
     */
    socket.on('newConnection', (connection) => {
      const { id } = socket
      ipConnections[id] = connection
      socket.broadcast.emit('connectionsUpdated', ipConnections)
    })
    socket.on('disconnect', () => {
      delete ipConnections[socket.id]
      socket.broadcast.emit('connectionsUpdated', ipConnections)
    })
  })
}
module.exports = handleConnections
