import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Label, Input, FomrText, Toast, ToastBody, ToastHeader } from 'reactstrap';
import Contacts from './Contacts';
import Images from './Images';
import Logs from './Logs';

export class AdminHome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Admin Home</h1>
                <Logs />
                <Contacts />
                <Images />
            </div>
        );
    }
}