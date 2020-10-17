import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

import DoubleHungWindow from './Styles/DoubleHungWindow';
import SingleHungWindow from './Styles/SingleHungWindow';
import SlidingWindow from './Styles/SlidingWindow';
import CasementWindow from './Styles/CasementWindow';
import AwningWindow from './Styles/AwningWindow';
import BayWindow from './Styles/BayWindow';
import PictureWindow from './Styles/PictureWindow';
import GeometricWindow from './Styles/GeometricWindow';

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
                        <Col xs="12" sm="6" md="3">                            
                            <DoubleHungWindow />
                        </Col>
                        <Col xs="12" sm="6" md="3">
                            <SingleHungWindow />
                        </Col>
                        <Col xs="12" sm="6" md="3">
                            <SlidingWindow />
                        </Col>
                        <Col xs="12" sm="6" md="3">
                            <PictureWindow />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" sm="6" md="3"> 
                            <CasementWindow />
                        </Col>
                        <Col xs="12" sm="6" md="3">
                            <AwningWindow />
                        </Col>
                        <Col xs="12" sm="6" md="3">
                            <BayWindow />
                        </Col>
                        <Col xs="12" sm="6" md="3">
                            <GeometricWindow />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
