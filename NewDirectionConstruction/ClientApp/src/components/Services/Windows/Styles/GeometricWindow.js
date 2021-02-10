import React, { useState } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import geometricWindow from '../../../../images/windowStyles/Geometric-Window.jpg';

const GeometricWindow = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <div id="geometricWindow" className="pointer">
            <h4>Geometric Windows</h4>
            <img src={geometricWindow} width="150" height="150" alt="GeometricWindow" />
            <Popover placement="bottom" isOpen={popoverOpen} target="geometricWindow" toggle={toggle}>
                <PopoverHeader>GEOMETRIC WINDOWS</PopoverHeader>
                <PopoverBody>
                    WHAT IS A GEOMETRIC WINDOW?
                    Geometric windows are made-to-order when you want a window not found in our standard offering. 
                    Whether you want larger sizes of window, special shapes, curved or angled frames, intricate grille designs or stained or beveled glass, the possibilities are endless.
                    </PopoverBody>
            </Popover>
            <div>Click for details...</div>
        </div>
    );
}

export default GeometricWindow;