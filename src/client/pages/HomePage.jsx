import React from 'react'
import axios from 'axios'

class Home extends React.Component {

  sendOrder = () => {
    axios.post('/send_order')
      .then(response => {
        alert(`API route example - response from route: ${response.data}`);
      })
  }

  render() {
    return (
      <div>
        Home page sdfsdf dfg fff sdf
        <button
          onClick={ this.sendOrder }>
          Click me
        </button>
      </div>
    )
  }
}

export default Home;
