import React, { Component } from 'react';
import Gutters from './Gutters/Gutters';
import Roofing from './Roofing/Roofing';
import SidingAndPaint from './SidingAndPaint/SidingAndPaint';
import Contact from '../Common/Contact';

export class AdditionalServices extends Component {
    componentDidMount() {
        document.title = 'AdditionalServices';
    }
    render() {
        return (
            <div>
                <h1>Additional Services</h1>
                <br/>
                <section id="Gutters">
                    <Gutters />
                </section>
                <section id="Roofing">
                    <Roofing />
                </section>
                <section id="SidingAndPaint">
                    <SidingAndPaint />
                </section>
                <div>
                    <h3>Shop Additional Services</h3>
                    <Contact />
                </div>
            </div>
        );
    }
}