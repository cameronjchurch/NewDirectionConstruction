import React, { useState } from 'react';
import { Button } from 'reactstrap';
import NdcTable from '../Common/NdcTable';
const axios = require('axios').default;

const Logs = (props) => {

    const [pageNumber, setPageNumber] = useState(0);
    const [logMessages, setLogMessages] = useState([]);
    const [showClear, setShowClear] = useState(false);

    const columns = React.useMemo(() => [
        { Header: 'Id', accessor: 'id' },
        { Header: 'Time', accessor: 'logTime' },
        { Header: 'Level', accessor: 'level' },
        { Header: 'Message', accessor: 'message' },
        { Header: 'Exception', accessor: 'exception' },
        { Header: 'Logger', accessor: 'logger' },
        { Header: 'Stack Trace', accessor: 'stackTrace' }
    ], []);

    const clearLogs = () => {
        setLogMessages([]);
        setShowClear(false);
        setPageNumber(0);
    }

    const getLogs = async (e) => {
        let page = pageNumber + 1;
        setPageNumber(page);
        axios.get('api/log/' + page).then(response => {
            setLogMessages(response.data);
            setShowClear(true);
        });
    }

    const ActionButtons = () => {
        if (showClear) {
            return <div><Button onClick={clearLogs}>Clear Logs</Button> | <Button onClick={getLogs}>Get Logs</Button></div>
        }
        else {
            return <Button onClick={getLogs}>Get Logs</Button>;
        }
    }

    return (
        <div>
            <h3>Logs</h3>
            <NdcTable columns={columns} data={logMessages} />
            <ActionButtons />
        </div>
    );
}

export default Logs;