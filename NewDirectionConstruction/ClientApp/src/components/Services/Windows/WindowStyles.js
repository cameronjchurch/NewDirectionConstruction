import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import doubleHung from '../../../images/windowStyles/Double-Hung-3.jpg';
import singleHung from '../../../images/windowStyles/Single-Hung-Window1.jpg';
import sliderWindow from '../../../images/windowStyles/Slider-Window.jpg';
import casementWindow from '../../../images/windowStyles/Casement-Window.jpg';
import awningWindow from '../../../images/windowStyles/Awning-Window1a.jpg';
import bayWindow from '../../../images/windowStyles/Bay-Window1.jpg';
import pictureWindow from '../../../images/windowStyles/Picture-Window-2.jpg';
import geometricWindow from '../../../images/windowStyles/Geometric-Window.jpg';
import gardenWindow from '../../../images/windowStyles/Garden-Window3.jpg';

export class WindowStyles extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <h3>Window Styles</h3>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Double Hung Windows</h4>
                            <div>
                                <img src={doubleHung} width="150" height="150" />
                            </div>
                        </Col>
                        <Col>
                            <h4>Single Hung Windows</h4>
                            <div>
                                <img src={singleHung} width="150" height="150" />
                            </div>
                        </Col>
                        <Col>
                            <h4>Slider Windows</h4>
                            <div>
                                <img src={sliderWindow} width="150" height="150" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Casement Windows</h4>
                            <div>
                                <img src={casementWindow} width="150" height="150" />
                            </div>
                        </Col>
                        <Col>
                            <h4>Awning Windows</h4>
                            <div>
                                <img src={awningWindow} width="150" height="150" />
                            </div>
                        </Col>
                        <Col>
                            <h4>Bay or Bow Windows</h4>
                            <div>
                                <img src={bayWindow} width="150" height="150" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Picture Windows</h4>
                            <div>
                                <img src={pictureWindow} width="150" height="150" />
                            </div>
                        </Col>
                        <Col>
                            <h4>Geometric Windows</h4>
                            <div>
                                <img src={geometricWindow} width="150" height="150" />
                            </div>
                        </Col>
                        <Col>
                            <h4>Garden Windows</h4>
                            <div>
                                <img src={gardenWindow} width="150" height="150" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
