import React, { useState } from 'react';
import { Button } from 'reactstrap';
const axios = require('axios').default;

const Contacts = (props) => {

    const [contacts, setContacts] = useState([]);
    
    const getContacts = async (e) => {
        axios.get('api/contact').then(response => {
            setContacts(response.data);
        });
    }

    return (
        <div>
            <h3>Contacts</h3>
            {contacts &&
                <div>
                    {contacts.map((c) => <div>{c.id} | {c.dateSent} | {c.customerName} | {c.customerPhone} | {c.customerEmail} | {c.customerMessage}</div>)}
                </div>
            }
            <Button onClick={getContacts}>Get Contacts</Button>
        </div>
    );
}

export default Contacts;