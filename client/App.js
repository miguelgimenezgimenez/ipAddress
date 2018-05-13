
import React, { Component } from 'react'
import io from 'socket.io-client'

export default class App extends Component {
  componentDidMount () {
    this.initSocket()
  }

  initSocket () {
    const socket = io('http://localhost:8000')
    socket.on('connectionsUpdated', (msg) => {
      console.log(msg)
    })
    socket.emit('message', 'message')
  }

  render () {
    return (
      <div />
    )
  }
}
