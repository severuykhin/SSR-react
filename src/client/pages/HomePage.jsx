import React from 'react'
import axios from 'axios'
import HelmetMeta from '../components/HelmetMeta/HelmetMeta.jsx'


class Home extends React.Component {

  sendOrder = () => {
    axios.post('/send_order')
      .then(response => {
        alert(`API route example - response from route: ${response.data}`);
      })
  }

  render() {

    const meta = {
      title : 'React Server Side rendering template'
    };
    
    return (
      <div>

        <HelmetMeta meta={ meta } />
        
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
