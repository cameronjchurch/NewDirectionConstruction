import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";

import image1 from '../../../images/work/2020-05-12.jpg';
import image2 from '../../../images/work/2020-06-01.jpg';
import image3 from '../../../images/work/2020-06-13.jpg';
import image4 from '../../../images/work/2020-06-18.jpg';
import image5 from '../../../images/work/2020-06-26.jpg';
import image6 from '../../../images/work/2020-07-15.jpg';
import image7 from '../../../images/work/2020-07-16.jpg';
import image8 from '../../../images/work/2020-09-02.jpg';
import image9 from '../../../images/work/2020-10-23.jpg';
import image10 from '../../../images/work/2020-11-19.jpg';
import image11 from '../../../images/work/profile picture.jpg';
import image12 from '../../../images/work/unnamed.jpg';

const items = [
    {
        src: image1,
        width: 1,
        height: 1,
        title: 'Doors and Windows'
    },
    {
        src: image2,
        width: 1,
        height: 1,
        title: 'Siding andd Paint'
    },
    {
        src: image3,
        width: 1,
        height: 1,
        title: 'Windows'
    },
    {
        src: image4,
        width: 1,
        height: 1,
        title: 'Pella Window'
    },
    {
        src: image5,
        width: 1,
        height: 1,
        title: 'New Windows'
    },
    {
        src: image6,
        width: 1,
        height: 1,
        title: 'Window Install'
    },
    {
        src: image7,
        width: 1,
        height: 1,
        title: 'Customer Review'
    },
    {
        src: image8,
        width: 1,
        height: 1,
        title: 'Roofing'
    },
    {
        src: image9,
        width: 1,
        height: 1,
        title: 'Simonton Window'
    },
    {
        src: image10,
        width: 1,
        height: 1,
        title: 'New Bedroom Windows'
    },
    {
        src: image11,
        width: 1,
        height: 1,
        title: 'Our Logo'
    },
    {
        src: image12,
        width: 1,
        height: 1,
        title: 'Thank You!'
    }
];

const Images = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <Gallery photos={items} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={items.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}

export default Images;