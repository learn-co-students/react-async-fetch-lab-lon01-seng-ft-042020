// create your App component here
import React, { Component } from 'react'

const URL = `http://api.open-notify.org/astros.json`

export default class App extends Component {

    state = {
        people: []
    }

    componentDidMount() {
        fetch(URL)
          .then(res => res.json())
          .then(data => this.setState({people: data.people}));
    }

    renderPeopleInSpace = () => this.state.people.map((person, idx) => <h1 key={idx}> Name: {person.name} </h1>)
    

    render() {
        return (
            <div>
                {this.renderPeopleInSpace()}
            </div>
        )
    }
}
