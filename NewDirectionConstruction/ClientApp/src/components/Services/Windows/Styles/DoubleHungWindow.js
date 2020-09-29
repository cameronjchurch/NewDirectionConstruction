import React, { useState } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import doubleHung from '../../../../images/windowStyles/Double-Hung-3.jpg';

const DoubleHungWindow = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <div>
            <h4>Double Hung Windows</h4>
            <img src={doubleHung} id="doubleHungWindow" width="150" height="150" />
            <Popover placement="bottom" isOpen={popoverOpen} target="doubleHungWindow" toggle={toggle}>
                <PopoverHeader>DOUBLE-HUNG WINDOWS</PopoverHeader>
                <PopoverBody>
                    WHAT IS A DOUBLE-HUNG WINDOW?
                    Double-hung windows feature two sliding sashes for efficient ventilation.
                    They can be raised from the bottom or lowered from the top with sashes that tilt in for easy cleaning.
                    From traditional and classic to contemporary and modern, Discover our double-hung window product lines below and find inspiration for your next project.
                    </PopoverBody>
            </Popover>
            <div>Click for details...</div>
        </div>
    );
}

export default DoubleHungWindow;