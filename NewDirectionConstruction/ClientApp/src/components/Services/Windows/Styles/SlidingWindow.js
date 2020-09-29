import React, { useState } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import sliderWindow from '../../../../images/windowStyles/Slider-Window.jpg';

const SlidingWindow = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <div>
            <h4>Sliding Windows</h4>
            <img src={sliderWindow} id="sliderWindow" width="150" height="150" />
            <Popover placement="bottom" isOpen={popoverOpen} target="sliderWindow" toggle={toggle}>
                <PopoverHeader>SLIDING WINDOWS</PopoverHeader>
                <PopoverBody>
                    WHAT IS A SLIDING WINDOW?
                    Sliding windows glide open horizontally from one side, providing easy access to fresh air.
                    Sliding windows are popular in contemporary-style homes as well as in basements, tight spaces or rooms that need extra ventilation.
                    Discover our sliding window product lines below and find inspiration for your next project.
                    </PopoverBody>
            </Popover>
            <div>Click for details...</div>
        </div>
    );
}

export default SlidingWindow;