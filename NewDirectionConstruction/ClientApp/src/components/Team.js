import React, { Component } from 'react';

export class Team extends Component {  

    render() {
        return (
            <div>
                <h1>Team</h1>                
                <div>
                    <h3>Services</h3>
                    <ul>
                        <li>Windows</li>
                        <li>Gutters</li>
                        <li>Roofing</li>
                        <li>Exterior Paint & Siding</li>                        
                    </ul>
                </div>
                <div>
                    <h3>Reviews</h3>
                    <ul>
                        <li>FB</li>
                        <li>BBB</li>
                        <li>Angie's list</li>
                        <li>Home Advisor</li>
                    </ul>
                </div>
                <div>
                    <h3>Vendors</h3>
                    <ul>
                        <li>Pella</li>
                        <li>Simonton</li>
                        <li>Etc...</li>
                    </ul>
                </div>
            </div>
        );
    }
}
