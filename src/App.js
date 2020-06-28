// create your App component here
import React from 'react'

export default class App extends React.Component {
    state = {
      people: []
      }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => this.setState(data.people))
        .catch(error => console.log(error.message));
    }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
