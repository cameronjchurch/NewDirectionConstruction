import React from 'react';
import Gutters from './Gutters/Gutters';
import Roofing from './Roofing/Roofing';
import SidingAndPaint from './SidingAndPaint/SidingAndPaint';

const AdditionalServices = (props) => {
    
        return (
            <div>
                <h1>Additional Services</h1>
                <section id="Gutters">
                    <Gutters />
                </section>
                <section id="Roofing">
                    <Roofing />
                </section>
                <section id="SidingAndPaint">
                    <SidingAndPaint />
                </section>
            </div>
        );

}

export default AdditionalServices;
