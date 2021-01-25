import React, { useState } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import awningWindow from '../../../../images/windowStyles/Awning-Window1a.jpg';

const AwningWindow = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <div id="awningWindow" className="pointer">
            <h4>Awning Windows</h4>
            <img src={awningWindow} width="150" height="150" alt="AwningWindow" />
            <Popover placement="bottom" isOpen={popoverOpen} target="awningWindow" toggle={toggle}>
                <PopoverHeader>AWNING WINDOWS</PopoverHeader>
                <PopoverBody>
                    WHAT IS AN AWNING WINDOW?
                    Awning windows are hinged at the top and swing out from the bottom, gliding open and shut with the turn of a handle. 
                    They are a great option for places that need extra ventilation and light. 
                    Discover our awning window product lines below and find inspiration for your next project.
                    </PopoverBody>
            </Popover>
            <div>Click for details...</div>
        </div>
    );
}

export default AwningWindow;