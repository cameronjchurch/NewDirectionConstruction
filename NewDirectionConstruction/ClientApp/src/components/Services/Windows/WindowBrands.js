import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import pella from '../../../images/vendors/Pella-Windows-and-Doors.jpg';
import simonton from '../../../images/vendors/Simonton-Windows-smaller.jpg';
import cws from '../../../images/vendors/cws-logo-2.png';
import wincore from '../../../images/vendors/wincore.png';

export class WindowBrands extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <h3>Brands</h3>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Pella</h4>
                            <div>
                                <img src={pella} width="150" height="40" />
                            </div>
                        </Col>
                        <Col>
                            <h4>Simonton</h4>
                            <div>
                                <img src={simonton} width="150" height="40" />
                            </div>
                        </Col>
                        <Col>
                            <h4>CWS</h4>
                            <div>
                                <img src={cws} width="150" height="40" />
                            </div>
                        </Col>
                        <Col>
                            <h4>Wincore</h4>
                            <div>
                                <img src={wincore} width="150" height="40" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
