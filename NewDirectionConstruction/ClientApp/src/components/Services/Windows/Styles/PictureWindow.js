import React, { useState } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import pictureWindow from '../../../../images/windowStyles/Picture-Window-2.jpg';

const PictureWindow = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <div>
            <h4>Picture Windows</h4>
            <img src={pictureWindow} id="pictureWindow" width="150" height="150" />
            <Popover placement="bottom" isOpen={popoverOpen} target="pictureWindow" toggle={toggle}>
                <PopoverHeader>PICTURE WINDOWS</PopoverHeader>
                <PopoverBody>
                    WHAT IS A PICTURE WINDOW?
                    Let more light into your home with a picture window. 
                    Picture, or fixed frame, windows are non-operable windows that pair beautifully with your standard operable windows.
                    </PopoverBody>
            </Popover>
            <div>Click for details...</div>
        </div>
    );
}

export default PictureWindow;