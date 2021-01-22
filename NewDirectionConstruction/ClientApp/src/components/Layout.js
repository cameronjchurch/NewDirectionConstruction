import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import Achievements from './Common/Achievements';
import { LoginMenu } from './api-authorization/LoginMenu';

export class Layout extends Component {   

    render() {
        return (
            <div>
                <NavMenu />
                <Container style={{ paddingTop: "131px", width: "100%" }}>
                    {this.props.children}
                </Container>
                <Achievements />
                <LoginMenu />
            </div>
        );
    }
}
