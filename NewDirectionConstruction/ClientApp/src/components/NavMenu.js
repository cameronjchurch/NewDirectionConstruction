import React, { useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, Nav, NavLink, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './NavMenu.css';
import logo from '../images/logos11.png'

const NavMenu = (props) => {

    const { isAuthenticated } = props;

    const [collapsed, setCollapsed] = useState(false);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    const closeNavbar = () => {
        if (collapsed !== true) {
            toggleNavbar();
        }
    }    

    return (
        <Container>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm box-shadow mb-3 header" dark fixed="top">
                <Col>
                    <Row>
                        <Col sm="7" md="8">
                            <NavbarBrand tag={Link} to="/"><img src={logo} width="30" height="30" alt="NDC" />{' '}New Direction Construction</NavbarBrand>
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
                                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
                                    <ul className="navbar-nav flex-grow">
                                        <NavItem>
                                            <NavLink tag={HashLink} className="text-light" as={HashLink} to="/#Home" onClick={closeNavbar} scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -190) }}>Home</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={HashLink} className="text-light" as={HashLink} to="/Services/Windows#Windows" onClick={closeNavbar} scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -190) }}>Windows</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={HashLink} className="text-light" as={HashLink} to="/Services/AdditionalServices#Gutters" onClick={closeNavbar} scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -190) }}>Gutters</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={HashLink} className="text-light" as={HashLink} to="/Services/AdditionalServices#Roofing" onClick={closeNavbar} scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -150) }}>Roofing</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={HashLink} className="text-light" as={HashLink} to="/Services/AdditionalServices#SidingAndPaint" onClick={closeNavbar} scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -3) }}>Exterior Siding & Paint</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={HashLink} className="text-light" as={HashLink} to="/Services/Gallery#Gallery" onClick={closeNavbar} scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -190) }}>Gallery</NavLink>
                                        </NavItem>
                                        {isAuthenticated &&
                                            <NavItem>
                                                <NavLink tag={HashLink} className="text-light" as={HashLink} to="/Admin" onClick={closeNavbar} scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -190) }}>Admin</NavLink>
                                            </NavItem>
                                        }
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

export default NavMenu;