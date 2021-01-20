import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Label, Input, FomrText, Toast, ToastBody, ToastHeader } from 'reactstrap';

const Images = (props) => {

    const [images, setImages] = useState([]);
    const [files, setFiles] = useState([]);
    const [title, setTitle] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const getImages = async (e) => {
        axios.get('api/image').then(response => {
            setImages(response.data);
        });
    }

    const deleteImage = async (e) => {
        axios.delete('api/image/' + e.target.id).then(response => { });
    }

    const uploadImage = async (e) => {
        e.preventDefault();
        setIsUploading(true);
        let formData = new FormData();
        formData.append("file", files[0]);
        formData.append("title", title);

        await axios.post('api/image', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(response => {
            setIsUploading(false);
            setShowToast(true);
        });
    }

    const handleTitleChange = ({ target: { value } }) => {
        setTitle(value);
    }

    const handleFileSelect = ({ target: { files } }) => {
        setFiles(files);
    }

    const toggleToast = () => {
        setShowToast(false);
    }

    return (
        <div>
            <h3>Images</h3>
            {images &&
                <div>
                    {images.map((i) => <div>{i.id} | {i.title} | <img src={`data:image/jpeg;base64,${i.contents}`} /> | <Button onClick={deleteImage} id={i.id}>Delete</Button></div>)}
                </div>
            }
            <Button onClick={getImages}>Get Images</Button>

            <Form onSubmit={uploadImage}>
                <FormGroup row>
                    <Label for="title" sm={2}>Title</Label>
                    <Col sm={10}>
                        <Input type="text" name="title" id="title" onChange={handleTitleChange} placeholder="Image Title" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="file" sm={2}>File</Label>
                    <Col sm={10}>
                        <Input type="file" name="file" id="file" onChange={handleFileSelect} />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button disabled={isUploading}>{isUploading ? 'Loading...' : 'Submit'}</Button>
                    </Col>
                </FormGroup>
                <Toast isOpen={showToast}>
                    <ToastHeader toggle={toggleToast}>Image Upload</ToastHeader>
                    <ToastBody>Upload Complete</ToastBody>
                </Toast>
            </Form>
        </div>
    );
}

export default Images;