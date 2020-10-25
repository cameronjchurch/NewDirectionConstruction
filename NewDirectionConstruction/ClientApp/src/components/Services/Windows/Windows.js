import React from 'react';
import { WindowStyles } from './WindowStyles';
import { WindowBrands } from './WindowBrands';
import Contact from '../../Common/Contact';

const Windows = (props) => {
    return (
        <div>
            <h1>Windows</h1>
            <section id="Windows">
                <h2 className="center">Vinyl Windows</h2>
                <p>Explore our selection of high-quality vinyl replacement windows & patio doors to find the best fit.
                Improve the energy efficiency of your home by ordering your windows and patio doors to meet ENERGY STAR&reg;
                guidelines for where you live. We offer endless customization options from neutral and dark bold colors to woodgrain
                interiors and custom grille patterns to hardware.</p>

                <WindowStyles />

                <WindowBrands />

                <br />
                <div>
                    <h3>Shop Windows</h3>
                    <Contact />
                </div>
            </section>
        </div>
    );
}

export default Windows;
