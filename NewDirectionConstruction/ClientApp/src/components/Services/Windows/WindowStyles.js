import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import DoubleHungWindow from './Styles/DoubleHungWindow';
import SingleHungWindow from './Styles/SingleHungWindow';
import SlidingWindow from './Styles/SlidingWindow';
import CasementWindow from './Styles/CasementWindow';
import AwningWindow from './Styles/AwningWindow';
import BayWindow from './Styles/BayWindow';
import PictureWindow from './Styles/PictureWindow';
import GeometricWindow from './Styles/GeometricWindow';

//import gardenWindow from '../../../images/windowStyles/Garden-Window3.jpg';

export class WindowStyles extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h3 className="center">Window Styles</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>                            
                            <DoubleHungWindow />
                        </Col>
                        <Col>
                            <SingleHungWindow />
                        </Col>
                        <Col>
                            <SlidingWindow />
                        </Col>
                        <Col>
                            <PictureWindow />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CasementWindow />
                        </Col>
                        <Col>
                            <AwningWindow />
                        </Col>
                        <Col>
                            <BayWindow />
                        </Col>
                        <Col>
                            <GeometricWindow />
                        </Col>
                    </Row>
                    <Row>


                        {
                        /*<Col>
                            <h4>Garden Windows</h4>
                            <div>
                                <img src={gardenWindow} width="150" height="150" />
                            </div>
                        </Col>
                        */
                        }
                    </Row>
                </Container>
            </div>
        );
    }
}
