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
        showList: false,
        showPersons: false
    }

    switchNameHandler = (newName, newAge) => {
        this.setState( {
                persons: [
                    { name: newName, age: newAge },
                    { name: newName, age: newAge },
                    { name: newName, age: newAge }
                ]
            }
        )
    }

    onUserInputHandler = (e) => {
        this.setState(
            {
                persons: [
                    { name: e.target.value },
                    { name: e.target.value },
                    { name: e.target.value }
                ]
            }
        )
    }

    hideListHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {

        const style = {
            backgroundColor: 'green',
            color: 'white',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null;

        if ( this.state.showPersons ) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                click={ () => this.deletePersonHandler(index) }
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={(event) => this.nameChangedHandler(event, persons)}
                            />
                        })
                    }
                </div>
            );

            style.backgroundColor = 'red';
        }

        return (
            <div className="App">
                <button onClick={this.hideListHandler} style={style}>Toggle Content</button>
                {persons}
            </div>
        )
    }

}

export default App;

