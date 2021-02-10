import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import Achievements from './Common/Achievements';
import LoginMenu from './api-authorization/LoginMenu';
import authService from './api-authorization/AuthorizeService';

export class Layout extends Component {   
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            userName: null
        };
    }

    componentDidMount() {
        this._subscription = authService.subscribe(() => this.populateState());
        this.populateState();
    }

    componentWillUnmount() {
        authService.unsubscribe(this._subscription);
    }

    async populateState() {
        const [isAuthenticated, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()])
        this.setState({
            isAuthenticated,
            userName: user && user.name
        });
    }

    render() {
        const { isAuthenticated, userName } = this.state;
        return (
            <div>
                <NavMenu isAuthenticated={isAuthenticated} />
                <Container style={{ paddingTop: "131px", width: "100%" }}>
                    {this.props.children}
                </Container>
                {!isAuthenticated && < Achievements />}
                <LoginMenu isAuthenticated={isAuthenticated} userName={userName} />
            </div>
        );
    }
}
