import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, Nav, NavLink, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './NavMenu.css';
import logo from '../images/logos11.png'


export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <Container>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3 header" dark fixed="top">
                    <Col>
                        <Row>
                            <Col sm="7" md="8">
                                <NavbarBrand tag={Link} to="/"><img src={logo} width="30" height="30" />{' '}New Direction Construction</NavbarBrand>
                            </Col>
                            <Col sm="5" md="4">
                                <Row>
                                    <div className="text-light text-right" style={{ width: "93%" }}>Call Today For A Free Estimate</div>
                                </Row>
                                <Row>
                                    <div className="text-right" style={{ width: "93%" }}><a href="tel:1-904-907-4474" className="text-light"><b>904 907 4474</b></a></div>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Nav>
                                <Container>
                                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                                        <ul className="navbar-nav flex-grow">
                                            <NavItem>
                                                <NavLink tag={HashLink} className="text-light" as={HashLink} to="/Services/Windows/Windows#Windows" scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -190) }}>Windows</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink tag={HashLink} className="text-light" as={HashLink} to="/Services/AdditionalServices#Gutters" scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -190) }}>Gutters</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink tag={HashLink} className="text-light" as={HashLink} to="/Services/AdditionalServices#Roofing" scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -150) }}>Roofing</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink tag={HashLink} className="text-light" as={HashLink} to="/Services/AdditionalServices#SidingAndPaint" scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -5) }}>Exterior Siding & Paint</NavLink>
                                            </NavItem>
                                        </ul>
                                    </Collapse>
                                </Container>
                            </Nav>
                        </Row>
                    </Col>
                </Navbar>
            </Container>
        );
    }
}
