import React, { Component } from 'react';

export class HomeUnderConstruction extends Component {
    componentDidMount() {
        document.title = 'Home';
    }
    render() {
        return (
            <div className="center">                
                <div className="construction" />
                <h1>Contact</h1>
                <h3>Phone: <a href="tel:1-904-907-4474" className="text-dark"><b>904 907 4474</b></a></h3>
            </div>
        );
    }
}
