const handleConnections = (io) => {
  io.on('connection', (socket) => {
    const ipAddress = socket.request.connection.remoteAddress
    console.log('clientip', ipAddress)
  })
}
module.exports = handleConnections
