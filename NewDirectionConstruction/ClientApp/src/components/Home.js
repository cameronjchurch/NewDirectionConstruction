import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import Contact from './Common/Contact';

import window1 from '../images/windowImages/window1.jpg';
import window2 from '../images/windowImages/window2.jpg';
import window3 from '../images/windowImages/window3.jpg';
import window4 from '../images/windowImages/window4.jpg';
import window5 from '../images/windowImages/window5.jpg';
import window6 from '../images/windowImages/window6.jpg';
import window7 from '../images/windowImages/window7.jpg';

import BackgroundSlider from 'react-background-slider'

export class Home extends Component {
    componentDidMount() {
        document.title = 'Home';
    }
    render() {
        return (
            <div>
                <section id="Home">
                    <Container>
                        <Row>
                            <Col xs="12" sm="6" md="8">
                                <div style={{ backgroundColor: "#808080", opacity: "0.7", padding: "17px", borderRadius: "17px", marginTop: "31px" }}>
                                    <h1 style={{ color: "whitesmoke" }}>About Us</h1>
                                    <p style={{ color: "whitesmoke" }}>
                                        At New Direction Construction, we offer residential remodeling with master consultants providing one off designs to create the right opportunity for each client on their budget.
                                        We have partnered with multiple manufacturers to create a shopping experience unlike anything available on the market, schedule a consultation today to feel and see the difference between shopping versus being sold.
                                        We are now offering free consultations for window and door replacement, siding, gutters and exterior painting.
                                    We look forward to assisting you with your project!</p>
                                </div>
                            </Col>
                            <Col xs="12" sm="6" md="4">
                                <Contact />
                            </Col>
                        </Row>
                    </Container>
                    <BackgroundSlider images={[window1, window2, window3, window4, window5, window6, window7]} duration={8} transition={2} />
                </section>
            </div>
        );
    }
}