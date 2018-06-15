import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
        ],
        showList: false
    }

    switchNameHandler = (newName, newAge) => {
        this.setState( {
                persons: [
                    { name: newName, age: newAge }
                ]
            }
        )
    }

    onUserInputHandler = (event) => {
        this.setState(
            {
                persons: [
                    { name: event.target.value } 
                ]
            }
        )
    }

    hideListHandler = () => {
        const doesShow = this.state.showList;
        this.setState({showList: !doesShow});
    }

    render() {

        return (
            <div className="App">
                <h1> Hello World </h1>
                <button onClick={this.hideListHandler}>Toggle Content</button>
                {   this.state.showList === true ? 
                    <div className="list">
                        <Person 
                            name={this.state.persons[0].name} 
                            age={this.state.persons[0].age}
                            click={this.switchNameHandler.bind(this, 'Mateo!', 26)}
                            changed={this.onUserInputHandler}
                        />
                        <Person 
                            name={this.state.persons[1].name} 
                            age={this.state.persons[1].age}
                            click={this.switchNameHandler.bind(this, 'Mateo!', 26)}
                            changed={this.onUserInputHandler}
                        />
                        <Person 
                            name={this.state.persons[2].name} 
                            age={this.state.persons[2].age}
                            click={this.switchNameHandler.bind(this, 'Mateo!', 26)}
                            changed={this.onUserInputHandler}
                        />
                    </div> : null
                }
            </div>
        )
    }

}

export default App;

