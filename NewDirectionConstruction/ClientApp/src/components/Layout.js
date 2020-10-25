import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import Achievements from './Common/Achievements';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu />
                <Container style={{ paddingTop: "131px", width: "100%" }}>
                    {this.props.children}
                </Container>
                <Achievements />
            </div>
        );
    }
}
