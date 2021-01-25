import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Label, Input, FormText, Toast, ToastBody, ToastHeader, Card, CardTitle } from 'reactstrap';
import NdcTable from '../Common/NdcTable';
const axios = require('axios').default;

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
        axios.delete('api/image/' + e.target.id).then(response => { getImages(); });
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
            getImages();
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

    const columns = React.useMemo(() => [
        { Header: 'Id', accessor: 'id' },
        { Header: 'Title', accessor: 'title' },
        {
            Header: 'Image',
            accessor: 'contents',
            Cell: ({ cell }) => (<img src={`data:image/jpeg;base64,${cell.row.values.contents}`} />)
        },
        {
            Header: 'Delete',
            accessor: 'delete',
            Cell: ({ cell }) => (<Button onClick={deleteImage} id={cell.row.values.id}>Delete</Button>)
        }
    ], []);

    return (
        <div>
            <h3>Images</h3>
            <NdcTable columns={columns} data={images} />
            <Button onClick={getImages}>Get Images</Button>
            <Card outline color="secondary" style={{ margin: "17px" }}>
                <div style={{ padding: "17px" }}>
                    <CardTitle tag="h5">Image Upload</CardTitle>
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
                            <FormText>
                                <section>Please upload a jpg or png image</section>
                            </FormText>
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
            </Card>
        </div>
    );
}

export default Images;