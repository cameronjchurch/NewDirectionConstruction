import React, { useState } from 'react';
import { Button } from 'reactstrap';
import NdcTable from '../Common/NdcTable';
import { ApiPaths } from '../Common/ApiPaths';
const axios = require('axios').default;

const Contacts = (props) => {

    const [contacts, setContacts] = useState([]);

    const columns = React.useMemo(() => [
        { Header: 'Id', accessor: 'id' },
        { Header: 'Time', accessor: 'dateSent' },
        { Header: 'Name', accessor: 'customerName' },
        { Header: 'Phone', accessor: 'customerPhone' },
        { Header: 'Email', accessor: 'customerEmail' },
        { Header: 'Message', accessor: 'customerMessage' }
    ], []);

    const getContacts = async (e) => {
        axios.get(ApiPaths.GetContact).then(response => {
            setContacts(response.data);
        });
    }

    return (
        <div>
            <h3>Contacts</h3>
            <NdcTable columns={columns} data={contacts} />
            <Button onClick={getContacts}>Get Contacts</Button>
        </div>
    );
}

export default Contacts;