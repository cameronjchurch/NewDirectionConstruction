import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Label, Input, FormText, Card, CardTitle } from 'reactstrap';
import NdcTable from '../Common/NdcTable';
import { ApiPaths } from '../Common/ApiPaths';
const axios = require('axios').default;

const Images = (props) => {

    const [images, setImages] = useState([]);
    const [files, setFiles] = useState([]);
    const [title, setTitle] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    
    const getImages = async (e) => {
        axios.get(ApiPaths.GetImage).then(response => {
            setImages(response.data);
        });
    }

    const deleteImage = React.useCallback(async (e) => {
        e.preventDefault();
        axios.delete(ApiPaths.DeletImage + e.target.id).then(response => { getImages(); });
    }, [])

    const uploadImage = async (e) => {
        e.preventDefault();
        setIsUploading(true);
        let formData = new FormData();
        formData.append("file", files[0]);
        formData.append("title", title);

        await axios.post(ApiPaths.PostImage, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(response => {
            getImages();
            setIsUploading(false);            
        });
    }

    const handleTitleChange = ({ target: { value } }) => {
        setTitle(value);
    }

    const handleFileSelect = ({ target: { files } }) => {
        setFiles(files);
    }

    const columns = React.useMemo(() => [
        { Header: 'Id', accessor: 'id' },
        { Header: 'Title', accessor: 'title' },
        {
            Header: 'Image',
            accessor: 'contents',
            Cell: ({ cell }) => (<img src={`data:image/jpeg;base64,${cell.row.values.contents}`} alt={cell.row.values.id} />)
        },
        {
            Header: 'Delete',
            accessor: 'delete',
            Cell: ({ cell }) => (<Button onClick={deleteImage} id={cell.row.values.id}>Delete</Button>)
        }
    ], [deleteImage]);

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
                    </Form>
                </div>
            </Card>
        </div>
    );
}

export default Images;