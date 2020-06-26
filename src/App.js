import React from 'react'

class App extends React.Component{

    constructor(){
        super()
        this.state = {
            allPeople: {}
        }
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json)
        .then(data => {this.setState(
            {allPeople: data}
        )})
    }

    render(){
        return(
            <div>
                {this.state.allPeople}
            </div>
        )
    }
}

export default App