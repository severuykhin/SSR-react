import React, { Component } from 'react'
import { connect } from 'react-redux'
import ClientRoutes from '../../ClientRoutes'

class App extends Component {
  render() {
    return (
      <div className='App'>
        place header here
        <hr/>
        <ClientRoutes />
        <hr/>
        place footer here
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
