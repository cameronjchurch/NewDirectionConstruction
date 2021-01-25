import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Contacts from './Contacts';
import Images from './Images';
import Logs from './Logs';

const AdminHome = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab)
            setActiveTab(tab);
    }

    return (
        <div>
            <h1>Admin</h1>
            <Nav tabs>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }} style={{ color: "Grey" }}>
                        Contacts
                        </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }} style={{ color: "Grey" }}>
                        Images
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }} style={{ color: "Grey" }}>
                        Logs
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Contacts />
                </TabPane>
                <TabPane tabId="2">
                    <Images />
                </TabPane>
                <TabPane tabId="3">
                    <Logs />
                </TabPane>
            </TabContent>
        </div>
    );

}

export default AdminHome;