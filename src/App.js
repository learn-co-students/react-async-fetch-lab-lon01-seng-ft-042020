import React, {component, Component} from 'react'


export default class App extends Component {

    state = {
        people: []
    }

    componentDidMount(){
        let peopleArray = fetch('http://api.open-notify.org/astros.json')
                .then(resp => resp.json())

        this.setState({
            people: [...peopleArray]
        })
        }

    render(){
    }
}