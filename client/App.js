
import React, { Component } from 'react'
import io from 'socket.io-client'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      socket: io('http://localhost:8000')
    }
  }

  componentDidMount () {
    this.initSocketListener()
  }

  initSocketListener () {
    const { socket } = this.state
    socket.on('connectionsUpdated', (msg) => {
      console.log(msg)
    })
  }

  render () {
    return (
      <div />
    )
  }
}
