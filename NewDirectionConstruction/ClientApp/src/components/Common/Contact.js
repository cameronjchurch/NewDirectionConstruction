import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const axios = require('axios').default;

export class Contact extends Component {
    constructor() {
        super();
        this.state = {
            customerName: '',
            customerPhone: '',
            customerEmail: '',
            customerMessage: '',
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { customerName, customerPhone, customerEmail, customerMessage } = this.state;
        return (
            <div>
                <Form onSubmit={this.postContactInfo}>
                    <FormGroup>
                        <Label for="customerName">Name</Label>
                        <Input type="text" name="customerName" id="customerName" placeholder="Name" value={customerName} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="customerPhone">Phone Number</Label>
                        <Input type="tel" name="customerPhone" id="customerPhone" placeholder="Phone" value={customerPhone} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="customerEmail">Email</Label>                        
                        <Input type="email" name="customerEmail" id="customerEmail" placeholder="Email" value={customerEmail} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="customerConcern">Message</Label>
                        <Input type="textarea" name="customerMessage" id="customerMessage" placeholder="Message" value={customerMessage} onChange={this.onChange} />
                        <FormText>Please let us know what you are interested in!</FormText>
                    </FormGroup>                    
                    <Button>Submit</Button>
                </Form>
            </div>
        );
    }

    postContactInfo = (e) => {
        e.preventDefault();
        const { customerName, customerPhone, customerEmail, customerMessage } = this.state;

        const response = axios.post('api/contact', { customerName, customerPhone, customerEmail, customerMessage });
               
    }
}