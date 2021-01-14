import React, { Component } from 'react';
import { Button } from 'reactstrap';
const axios = require('axios').default;

export class AdminHome extends Component {
    constructor(props) {
        super(props);

        this.getLogs = this.getLogs.bind(this);
        this.clearLogs = this.clearLogs.bind(this);
        this.state = {
            logMessages: undefined,
            showClear: false
        }
    }

    async getLogs() {
        await axios.get('api/log').then((response) => {
            this.setState({ logMessages: response.data, showClear: true });
        });
    }

    clearLogs() {
        this.setState({ logMessages: undefined, showClear: false });
    }

    render() {
        const { logMessages, showClear } = this.state;        

        return (
            <div>
                <h1>Admin Home</h1>
                <h3>Logs</h3>
                {showClear && <Button onClick={this.clearLogs}>Clear Logs</Button>}
                {logMessages &&
                    <div>
                    {logMessages.map((e) => <div key={e.id}>{e.id} | {e.logTime} | {e.level} | {e.message} | {e.exception} | {e.logger} | {e.stackTrace}</div>)}
                    </div>
                }
                <Button onClick={this.getLogs}>Get Logs</Button>
            </div>
        );
    }
}