import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import Images from './Images';
import Contact from '../../Common/Contact';
import { ApiPaths } from '../../Common/ApiPaths';
const axios = require('axios').default;

export class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            loading: false
        }
    }

    componentDidMount() {
        document.title = 'Gallery';
        this.setState({ loading: true });

        axios.get(ApiPaths.GetImage).then((response) => {
            this.setState({ images: response.data, loading: false });
        });
    }

    render() {
        const { images, loading } = this.state;
        return (
            <div>
                <h1>Gallery</h1>
                <section id="Gallery">
                    <br />
                    {loading && <div className="center"><Spinner size="lg" color="secondary" /></div>}
                    {!loading && <Images images={images} />}
                    <br />
                    <div>
                        <Contact />
                    </div>
                </section>
            </div>
        );
    }
}