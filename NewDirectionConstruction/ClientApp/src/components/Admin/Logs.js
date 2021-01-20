import React, { useState } from 'react';
import { Button } from 'reactstrap';
const axios = require('axios').default;

const Logs = (props) => {

    const [pageNumber, setPageNumber] = useState(0);
    const [logEntries, setLogEntries] = useState([]);

    const getLogs = async (e) => {
        axios.get('api/log/' + pageNumber).then(response => {
            setLogEntries(response.data);
            setPageNumber(pageNumber++);
        });
    };

    return (
        <div>
            <h3>Logs</h3>
            {//showClear && <Button onClick={this.clearLogs}>Clear Logs</Button>
            }
            {logEntries &&
                <div>
                    {logEntries.map((e) => <div>{e.id} | {e.logTime} | {e.level} | {e.message} | {e.exception} | {e.logger} | {e.stackTrace}</div>)}
                </div>
            }
            <Button onClick={getLogs}>Get Logs</Button>
        </div>
    );
}

export default Logs;