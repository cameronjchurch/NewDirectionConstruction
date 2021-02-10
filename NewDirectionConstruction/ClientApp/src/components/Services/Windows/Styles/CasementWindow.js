import React, { useState } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import casementWindow from '../../../../images/windowStyles/Casement-Window.jpg';

const CasementWindow = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <div id="casementWindow" className="pointer">
            <h4>Casement Windows</h4>
            <img src={casementWindow} width="150" height="150" alt="CasementWindow" />
            <Popover placement="bottom" isOpen={popoverOpen} target="casementWindow" toggle={toggle}>
                <PopoverHeader>CASEMENT WINDOWS</PopoverHeader>
                <PopoverBody>
                    WHAT IS A CASEMENT WINDOW?
                    Casement windows are hinged at the sides and swing outward. 
                    Easily opening and closing with a crank that folds away when not in use, casement windows are a great option for hard-to-reach spaces, like over the kitchen sink. 
                    Discover our casement window product lines below and find inspiration for your next project.
                    </PopoverBody>
            </Popover>
            <div>Click for details...</div>
        </div>
    );
}

export default CasementWindow;