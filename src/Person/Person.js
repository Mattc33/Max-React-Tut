import React from 'react';
import './Person.css';

const person = props => {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }

    return (
        <div className="Person">
            <button 
                style={style}
                onClick={props.click}
                >Switch Name
            </button>
            <p>Hi, my name is {props.name} and I am {props.age} years old!</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;