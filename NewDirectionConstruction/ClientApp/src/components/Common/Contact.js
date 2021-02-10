import React, { useState } from 'react';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ApiPaths } from './ApiPaths';
const axios = require('axios').default;

const Contact = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);
    const [isLoading, setLoading] = useState(false);
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
        setLoading(true);
        e.preventDefault();

        await axios.post(ApiPaths.PostContact, { customerName, customerPhone, customerEmail, customerMessage })
            .then(response => {
                toggle();
                setLoading(false);
                window.gtag('event', 'page_view', {
                    page_location: 'https://new-direction-construction.com/api/contact',
                    page_path: ApiPaths.PostContact,
                    page_title: 'ContactSent'
                });
            });
    }

    return (
        <div style={{ backgroundColor: "#808080", opacity: "0.9", padding: "17px", borderRadius: "17px", marginTop: "31px" }}>
            <h3 style={{ color: "white" }}>Please Tells Us About Your Needs</h3>
            <AvForm onSubmit={postContactInfo}>
                <AvGroup>
                    <Label style={{ color: "white" }} for="customerName">Name</Label>
                    <AvInput type="text" name="customerName" id="customerName" placeholder="Name" value={customerName} onChange={handleCustomerNameChange} required />
                    <AvFeedback>Name is required</AvFeedback>
                </AvGroup>
                <AvGroup>
                    <Label style={{ color: "white" }} for="customerPhone">Phone Number</Label>
                    <AvInput type="tel" name="customerPhone" id="customerPhone" placeholder="Phone" value={customerPhone} onChange={handleCustomerPhoneChange} required />
                    <AvFeedback>Please enter a valid phone number</AvFeedback>
                </AvGroup>
                <AvGroup>
                    <Label style={{ color: "white" }} for="customerEmail">Email</Label>
                    <AvInput type="email" name="customerEmail" id="customerEmail" placeholder="Email" value={customerEmail} onChange={handleCustomerEmailChange} required />
                    <AvFeedback>Please enter a valid email</AvFeedback>
                </AvGroup>
                <AvGroup>
                    <Label style={{ color: "white" }} for="customerConcern">Message</Label>
                    <AvInput type="textarea" name="customerMessage" id="customerMessage" placeholder="Message" value={customerMessage} onChange={handleCustomerMessageChange} required />
                    <AvFeedback>Message is required</AvFeedback>
                    <FormText>
                        <section style={{ color: "white" }}>Please let us know what you are interested in! For immediate inquires please call: <a href="tel:1-904-907-4474" style={{ color: "whitesmoke" }} ><b>904 907 4474</b></a></section>
                    </FormText>
                </AvGroup>
                <Button disabled={isLoading}>{isLoading ? 'Loading...' : 'Submit'}</Button>
            </AvForm>
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