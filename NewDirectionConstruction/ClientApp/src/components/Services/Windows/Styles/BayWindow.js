import React, { useState } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import bayWindow from '../../../../images/windowStyles/Bay-Window1.jpg';

const BayWindow = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <div id="bayWindow" className="pointer">
            <h4>Bay and Bow Windows</h4>
            <img src={bayWindow} width="150" height="150" />
            <Popover placement="bottom" isOpen={popoverOpen} target="bayWindow" toggle={toggle}>
                <PopoverHeader>BAY and BOW WINDOWS</PopoverHeader>
                <PopoverBody>
                    WHAT IS A BAY OR BOW WINDOW?
                    Bay and bow windows are combinations of windows joined together to create a curve that extends beyond the walls of your home. 
                    Bay windows consist of three windows – two angled, operable windows with one central fixed panel – while bow windows are typically four or more windows.
                    </PopoverBody>
            </Popover>
            <div>Click for details...</div>
        </div>
    );
}

export default BayWindow;