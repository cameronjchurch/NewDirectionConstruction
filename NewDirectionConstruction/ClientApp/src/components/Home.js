import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div className="center">
                <h1>Coming Soon!</h1>
                <div className="construction" />
                <h1>Contact</h1>
            </div>
        );
    }
}
