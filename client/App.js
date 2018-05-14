
import React, { Component } from 'react'
import io from 'socket.io-client'
import { connect } from 'react-redux'
import fetchJsonp from 'fetch-jsonp'
import es6Promise from 'es6-promise'
import config from '../config.json'
import List from './components/molecules/List'
import * as connectionsActions from './actions/connections'
import style from './style.scss'

const { serverUrl, ipInfo } = config[process.env.NODE_ENV]
es6Promise.polyfill()

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      socket: io(serverUrl)
    }
  }

  componentDidMount () {
    this.initSocketListener()
    this.sendIpInfo()
  }

  initSocketListener () {
    const { socket } = this.state
    socket.on('connectionsUpdated', (activeConnections) => {
      connectionsActions.updateConnections(this.props.dispatch, activeConnections)
    })
  }

  sendIpInfo () {
    const { socket } = this.state
    fetchJsonp(ipInfo)
      .then(res => res.json())
      .then((json) => {
        socket.emit('newConnection', json)
      })
  }

  render () {
    return (
      <div className={style.list} >
        <List />
      </div>
    )
  }
}
export default connect()(App)
