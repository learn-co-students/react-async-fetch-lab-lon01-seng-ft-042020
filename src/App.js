// create your App component here
import React from 'react';

class App extends React.Component {

  state = {
    peopleInSpace: [],
  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
  }

  getPeople = () => {
    return fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => data.people)
  }
  componentDidMount() {
    this.getPeople()
      .then(people => this.setState({ peopleInSpace: people }))
  }

}

export default App


// import React, { Component } from 'react'

// const url = `http://api.open-notify.org/astros.json`

// class App extends Component {

//   state = {
//     peopleInSpace: []
//   }

//   render() {
//     return (
//       <div>
//         {/* //DIFFERENT ???*/}
//         {/* {this.state.peopleInSpace.map((person, idx) => <h1 key={idx}>{person.name}</h1>)} */}
//         {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
//       </div>
//     )
//   }

//   componentDidMount() {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => this.setState({ peopleInSpace: data.people }))
//   }
// }

// export default App
