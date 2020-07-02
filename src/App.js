import React, {Component} from 'react'

export default class App extends Component {
    
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => this.setState({astros: data}))
        .catch(error => console.log(error.message));
      }
    
    render() {
        return{}
    }
}