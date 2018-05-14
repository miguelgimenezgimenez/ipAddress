import React from 'react'
import { connect } from 'react-redux'
import map from 'lodash.map'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Connection from 'material-ui/svg-icons/action/settings-input-antenna'

const ListComponent = props => (
  <List >
    <Subheader >
    Active Connections
    </Subheader>
    {map(props.connectionsList, connection =>
      (<ListItem
        key={connection.ip}
        primaryText={connection.ip}
        secondaryText={
          `${connection.city} ${connection.region} ${connection.country}`
        }
        leftIcon={<Connection color="blue" />}
      />))
    }
  </List>)

const mapStateToProps = state => ({
  connectionsList: state.connections.list
})
export default connect(mapStateToProps)(ListComponent)
