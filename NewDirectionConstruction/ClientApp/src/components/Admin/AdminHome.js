import React, { Component } from 'react';
import { Button } from 'reactstrap';
const axios = require('axios').default;

export class AdminHome extends Component {
    constructor(props) {
        super(props);

        this.getLogs = this.getLogs.bind(this);
        this.state = {
            logMessages: undefined
        }
    }

    async getLogs() {
        await axios.get('api/log').then((response) => {            
            this.setState({ logMessages: response.data });
        });
    }

    render() {
        const { logMessages } = this.state;        

        return (
            <div>
                <h1>Admin Home</h1>
                <h3>Logs</h3>
                {logMessages &&
                    <div>
                    {logMessages.map((e) => <li key={e.id}>{e.id} | {e.logTime} | {e.level} | {e.message} | {e.exception} | {e.logger} | {e.stackTrace}</li>)}
                    </div>
                }
                <Button onClick={this.getLogs}>Get Logs</Button>
            </div>
        );
    }
}