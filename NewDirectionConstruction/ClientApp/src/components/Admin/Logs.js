import React, { useState } from 'react';
import { Button } from 'reactstrap';
const axios = require('axios').default;

const Logs = (props) => {

    const [pageNumber, setPageNumber] = useState(0);
    const [logEntries, setLogEntries] = useState([]);
    const [showClear, setShowClear] = useState(false);

    const clearLogs = () => {
        setLogEntries([]);
        setShowClear(false);
        setPageNumber(0);
    }

    const getLogs = async (e) => {
        let page = pageNumber + 1;
        setPageNumber(page);
        axios.get('api/log/' + page).then(response => {
            setLogEntries(response.data);
            setShowClear(true);
        });
    };

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
            {logEntries &&
                <div>
                    {logEntries.map((e) => <div>{e.id} | {e.logTime} | {e.level} | {e.message} | {e.exception} | {e.logger} | {e.stackTrace}</div>)}
                </div>
            }
            <ActionButtons />
        </div>
    );
}

export default Logs;