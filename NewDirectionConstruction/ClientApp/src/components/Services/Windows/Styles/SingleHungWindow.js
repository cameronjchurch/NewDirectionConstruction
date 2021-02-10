import React, { useState } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import singleHung from '../../../../images/windowStyles/Single-Hung-Window1.jpg';

const SingleHungWindow = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <div id="singleHungWindow" className="pointer">
            <h4>Single Hung Windows</h4>
            <img src={singleHung} width="150" height="150" alt="SingleHungWindow" />
            <Popover placement="bottom" isOpen={popoverOpen} target="singleHungWindow" toggle={toggle}>
                <PopoverHeader>SINGLE-HUNG WINDOWS</PopoverHeader>
                <PopoverBody>
                    WHAT IS A SINGLE-HUNG WINDOW?
                    Single-hung windows feature a single movable sash, raised from the bottom for ventilation, while the top stays stationary. 
                    Pella single-hung windows are available in wood, fiberglass and vinyl. Discover our single-hung window product lines below and find inspiration for your next project.
                    </PopoverBody>
            </Popover>
            <div>Click for details...</div>
        </div>
    );
}

export default SingleHungWindow;