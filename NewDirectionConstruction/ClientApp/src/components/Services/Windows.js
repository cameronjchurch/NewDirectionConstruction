import React, { Component } from 'react';
import Florida from '../../images/GM2016-01-code.png';
import { Row, Col, Container } from 'react-bootstrap'; 

import pella from '../../images/vendors/pella.jpg'
import simonton from '../../images/vendors/simonton.jpg'
import cws from '../../images/vendors/CWS.jpg'
import wincore from '../../images/vendors/wincore.png'


export class Windows extends Component {    

    render() {
        return (
            <div>
                <h1>Windows</h1>

                <h2>Vinal Windows</h2>
                <p>Explore our selection of high-quality vinyl replacement windows & patio doors to find the best fit.
                Improve the energy efficiency of your home by ordering your windows and patio doors to meet ENERGY STAR&reg;
                guidelines for where you live. We offer endless customization options from neutral and dark bold colors to woodgrain
                interiors and custom grille patterns to hardware.</p>

                <div>
                    <Container>
                        <Row>
                            <h3>Window Styles</h3>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Double Hung Windows</h4>
                            </Col>
                            <Col>
                                <h4>Single Hung Windows</h4>
                            </Col>
                            <Col>
                                <h4>Slider Windows</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Casement Windows</h4>
                            </Col>
                            <Col>
                                <h4>Awning Windows</h4>
                            </Col>
                            <Col>
                                <h4>Bay or Bow Windows</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Picture Windows</h4>
                            </Col>
                            <Col>
                                <h4>Geometric Windows</h4>
                            </Col>
                            <Col>
                                <h4>Garden Windows</h4>
                            </Col>
                        </Row>                        
                    </Container>
                </div>

                <div>
                    <Container>
                        <Row>
                            <h3>Brands</h3>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Pella</h4>                                
                                <div>
                                    <img src={pella} width="130" height="130" />
                                </div>
                            </Col>
                            <Col>
                                <h4>Simonton</h4>
                                <div>
                                    <img src={simonton} width="130" height="60" />
                                </div>
                            </Col>
                            <Col>
                                <h4>CWS</h4>
                                <div>
                                    <img src={cws} width="130" height="90" />
                                </div>
                            </Col>
                            <Col>
                                <h4>Wincore</h4>
                                <div>
                                    <img src={wincore} width="130" height="45" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <h3>Shop Windows</h3>
            </div>
        );
    }
}
