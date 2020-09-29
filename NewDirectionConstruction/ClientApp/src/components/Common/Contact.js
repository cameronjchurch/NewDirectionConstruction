﻿import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const axios = require('axios').default;

const Contact = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerMessage, setCustomerMessage] = useState("");

    const handleCustomerNameChange = ({ target: { value } }) => {
        setCustomerName(value);
    }

    const handleCustomerPhoneChange = ({ target: { value } }) => {
        setCustomerPhone(value);
    }

    const handleCustomerEmailChange = ({ target: { value } }) => {
        setCustomerEmail(value);
    }

    const handleCustomerMessageChange = ({ target: { value } }) => {
        setCustomerMessage(value);
    }

    const toggle = () => setModal(!modal);

    const postContactInfo = async (e) => {
        e.preventDefault();

        await axios.post('api/contact', { customerName, customerPhone, customerEmail, customerMessage })
            .then((response) => {
                toggle();
            });
    }

    return (
        <div>
            <Form onSubmit={postContactInfo}>
                <FormGroup>
                    <Label for="customerName">Name</Label>
                    <Input type="text" name="customerName" id="customerName" placeholder="Name" value={customerName} onChange={handleCustomerNameChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="customerPhone">Phone Number</Label>
                    <Input type="tel" name="customerPhone" id="customerPhone" placeholder="Phone" value={customerPhone} onChange={handleCustomerPhoneChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="customerEmail">Email</Label>
                    <Input type="email" name="customerEmail" id="customerEmail" placeholder="Email" value={customerEmail} onChange={handleCustomerEmailChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="customerConcern">Message</Label>
                    <Input type="textarea" name="customerMessage" id="customerMessage" placeholder="Message" value={customerMessage} onChange={handleCustomerMessageChange} />
                    <FormText>Please let us know what you are interested in! For immediate inquires please call: <b>904 907 4474</b></FormText>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Thank You!</ModalHeader>
                <ModalBody>
                    <p>
                        Thank you for your message. A representative will get in touch with you as soon as possible.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>OK</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Contact;