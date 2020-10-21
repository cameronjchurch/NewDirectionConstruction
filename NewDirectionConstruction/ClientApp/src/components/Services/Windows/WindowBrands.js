import React, { Component } from 'react';
import { Row, Col, Container, ListGroup, ListGroupItem } from 'reactstrap';

import pella from '../../../images/vendors/Pella-Windows-and-Doors.jpg';
import simonton from '../../../images/vendors/Simonton-Windows-smaller.jpg';
import cws from '../../../images/vendors/cws-logo-2.png';
import wincore from '../../../images/vendors/wincore.png';

import pellaEncompass from '../../../images/windowBrochures/1- pella emcompass.pdf';
import pella250 from '../../../images/windowBrochures/2- pella 250.pdf';
import pella350 from '../../../images/windowBrochures/3- pella 350.pdf';

import simontonPro from '../../../images/windowBrochures/ProFinish-Master-Contractor-Builder-Brochure.pdf';
import simonton5050 from '../../../images/windowBrochures/Simonton_Reflections_5050_Brochure.pdf';
import simonton5500 from '../../../images/windowBrochures/Simonton_Reflections_5500_Style_Guide.pdf';
import simontonStormBreaker from '../../../images/windowBrochures/StormBreaker-Plus-Double-Hung-Flier.pdf';

import cws610 from '../../../images/windowBrochures/CWS Aria-Series-610-Single-Hung.pdf';
import cws6100 from '../../../images/windowBrochures/CWS L6006-CWS-StormStrong-Sell-Sheet-6100-SH.pdf';
import cws8100 from '../../../images/windowBrochures/CWS 8100 IMPACT.pdf';

import wincore400 from '../../../images/windowBrochures/wincore-windows-400.pdf';
import wincore500 from '../../../images/windowBrochures/wincore-windows-500.pdf';
import wincore5400 from '../../../images/windowBrochures/wincore-windows-5400.pdf';
import wincore7700 from '../../../images/windowBrochures/wincore-windows-7700.pdf';
import wincore8800 from '../../../images/windowBrochures/wincore-windows-8800.pdf';

export class WindowBrands extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h3 className="center">Vendors</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" sm="6" md="3">                            
                            <div>
                                <img src={pella} width="150" height="40" />
                            </div>
                            <ListGroup flush>
                                <ListGroupItem tag="a" href={pellaEncompass} target="_blank">Encompass</ListGroupItem>
                                <ListGroupItem tag="a" href={pella250} target="_blank">250 Series</ListGroupItem>
                                <ListGroupItem tag="a" href={pella350} target="_blank">350 Series</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col xs="12" sm="6" md="3">                            
                            <div>
                                <img src={simonton} width="150" height="40" />
                            </div>
                            <ListGroup flush>
                                <ListGroupItem tag="a" href={simontonPro} target="_blank">Pro Series</ListGroupItem>
                                <ListGroupItem tag="a" href={simonton5050} target="_blank">5050 Series</ListGroupItem>
                                <ListGroupItem tag="a" href={simonton5500} target="_blank">5500 Series</ListGroupItem>
                                <ListGroupItem tag="a" href={simontonStormBreaker} target="_blank">Storm Breaker</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col xs="12" sm="6" md="3">                            
                            <div>
                                <img src={cws} width="150" height="40" />
                            </div>
                            <ListGroup flush>
                                <ListGroupItem tag="a" href={cws610} target="_blank">610 Series</ListGroupItem>
                                <ListGroupItem tag="a" href={cws6100} target="_blank">6100 Series</ListGroupItem>
                                <ListGroupItem tag="a" href={cws8100} target="_blank">8100 Series</ListGroupItem>                                
                            </ListGroup>
                        </Col>
                        <Col xs="12" sm="6" md="3">                            
                            <div>
                                <img src={wincore} width="150" height="40" />
                            </div>
                            <ListGroup flush>
                                <ListGroupItem tag="a" href={wincore400} target="_blank">400 Series</ListGroupItem>
                                <ListGroupItem tag="a" href={wincore500} target="_blank">500 Series</ListGroupItem>
                                <ListGroupItem tag="a" href={wincore5400} target="_blank">5400 Series</ListGroupItem>
                                <ListGroupItem tag="a" href={wincore7700} target="_blank">7700 Series</ListGroupItem>
                                <ListGroupItem tag="a" href={wincore8800} target="_blank">8800 Series</ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
