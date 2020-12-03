import React, { Component } from 'react';
import Images from './Images';
import Contact from '../../Common/Contact';

export class Gallery extends Component {
    componentDidMount() {
        document.title = 'Gallery';
    }

    render() {
        return (
            <div>
                <h1>Gallery</h1>
                <section id="Gallery">
                    <br />
                    <Images />
                    <br />
                    <div>
                        <Contact />
                    </div>
                </section>
            </div>
        );
    }
}