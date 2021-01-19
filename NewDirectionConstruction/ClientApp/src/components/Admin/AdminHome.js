import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Label, Input, FomrText, Toast, ToastBody, ToastHeader } from 'reactstrap';
const axios = require('axios').default;

export class AdminHome extends Component {
    constructor(props) {
        super(props);

        this.getLogs = this.getLogs.bind(this);
        this.clearLogs = this.clearLogs.bind(this);
        this.getContacts = this.getContacts.bind(this);
        this.getImages = this.getImages.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.selectFile = this.selectFile.bind(this);
        this.enterTitle = this.enterTitle.bind(this);
        this.toggleToast = this.toggleToast.bind(this);
        this.deleteFile = this.deleteFile.bind(this);
        this.getNextLogs = this.getNextLogs.bind(this);

        this.state = {
            logMessages: undefined,
            showClear: false,
            contacts: undefined,
            images: undefined,
            files: undefined,
            title: "",
            isUploading: false,
            showToast: false,
            pageNumber: 0
        }
    }

    async getLogs() {
        await axios.get('api/log').then((response) => {
            this.setState({ logMessages: response.data, showClear: true });
        });
    }

    async getNextLogs() {
        let pageNumber = this.state.pageNumber + 1;
        await axios.get('api/log/' + pageNumber).then(response => {
            this.setState({ logMessages: response.data, pageNumber: pageNumber });
        });
    }

    clearLogs() {
        this.setState({ logMessages: undefined, showClear: false });
    }

    async getContacts() {
        await axios.get('api/contact').then((response) => {
            this.setState({ contacts: response.data });
        });
    }

    async getImages() {
        await axios.get('api/image').then((response) => {
            this.setState({ images: response.data });
        });
    }

    async uploadFile(e) {
        this.setState({ isUploading: true });
        e.preventDefault();
        const { files, title } = this.state;
        let file = files[0];
        let formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);

        await axios.post('api/image', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(response => {
            this.setState({ isUploading: false, showToast: true });
        });
    }

    toggleToast() {
        this.setState({ showToast: !this.state.showToast });
    }

    enterTitle(e) {
        this.setState({ title: e.target.value });
    }

    selectFile(e) {
        this.setState({ files: e.target.files });
    }

    async deleteFile(i) {
        await axios.delete('api/image/' + i.target.id).then(response => { });
    }

    render() {
        const { logMessages, showClear, contacts, images, isUploading, showToast } = this.state;

        return (
            <div>
                <h1>Admin Home</h1>
                <h3>Logs</h3>
                {showClear && <Button onClick={this.clearLogs}>Clear Logs</Button>}
                {logMessages &&
                    <div>
                        {logMessages.map((e) => <div>{e.id} | {e.logTime} | {e.level} | {e.message} | {e.exception} | {e.logger} | {e.stackTrace}</div>)}
                    </div>
                }
                <Button onClick={this.getLogs}>Get Logs</Button> | <Button onClick={this.getNextLogs}>Get Next Logs</Button>
                <h3>Contacts</h3>
                {contacts &&
                    <div>
                        {contacts.map((c) => <div>{c.id} | {c.dateSent} | {c.customerName} | {c.customerPhone} | {c.customerEmail} | {c.customerMessage}</div>)}
                    </div>
                }
                <Button onClick={this.getContacts}>Get Contacts</Button>

                <h3>Images</h3>
                {images &&
                    <div>
                        {images.map((i) => <div>{i.id} | {i.title} | <img src={`data:image/jpeg;base64,${i.contents}`} /> | <Button onClick={this.deleteFile} id={i.id}>Delete</Button></div>)}
                    </div>
                }
                <Button onClick={this.getImages}>Get Images</Button>

                <Form onSubmit={this.uploadFile}>
                    <FormGroup row>
                        <Label for="title" sm={2}>Title</Label>
                        <Col sm={10}>
                            <Input type="text" name="title" id="title" onChange={this.enterTitle} placeholder="Image Title" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="file" sm={2}>File</Label>
                        <Col sm={10}>
                            <Input type="file" name="file" id="file" onChange={this.selectFile} />
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2}}>
                            <Button disabled={isUploading}>{isUploading ? 'Loading...' : 'Submit'}</Button>
                        </Col>
                    </FormGroup>
                    <Toast isOpen={showToast}>
                        <ToastHeader toggle={this.toggleToast}>Image Upload</ToastHeader>
                        <ToastBody>Upload Complete</ToastBody>
                    </Toast>
                </Form>
            </div>
        );
    }
}