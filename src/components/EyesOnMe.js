import React, { Component } from 'react';


export default class EyesOnMe extends Component {

    whenFocus = (event) => {
        console.log('Good!')
    }

    whenBlur = (event) => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button
                type="button"
                onFocus={this.whenFocus}
                onBlur={this.whenBlur}
            >Button</button>
        )
    }
}