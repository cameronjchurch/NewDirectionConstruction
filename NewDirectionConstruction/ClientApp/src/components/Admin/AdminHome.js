import React, { Component } from 'react';
import { Button } from 'reactstrap';
const axios = require('axios').default;

export class AdminHome extends Component {
    constructor(props) {
        super(props);

        this.getLogs = this.getLogs.bind(this);
        this.clearLogs = this.clearLogs.bind(this);
        this.getContacts = this.getContacts.bind(this);

        this.state = {
            logMessages: undefined,
            showClear: false,
            contacts: undefined
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

    async getContacts() {
        await axios.get('api/contact').then((response) => {
            this.setState({ contacts: response.data });
        });
    }

    render() {
        const { logMessages, showClear, contacts } = this.state;

        return (
            <div>
                <h1>Admin Home</h1>
                <h3>Logs</h3>
                {showClear && <Button onClick={this.clearLogs}>Clear Logs</Button>}
                {logMessages &&
                    <div>
                        {logMessages.map((e) => <div>{e.id} | {e.logTime} | {e.level} | {e.message} | {e.exception} | {e.logger} | {e.stackTrace}</div>)}
                    </div>
                }
                <Button onClick={this.getLogs}>Get Logs</Button>
                <h3>Contacts</h3>
                {contacts &&
                    <div>
                        {contacts.map((c) => <div>{c.id} | {c.dateSent} | {c.customerName} | {c.customerPhone} | {c.customerEmail} | {c.customerMessage}</div>)}
                    </div>
                }
                <Button onClick={this.getContacts}>Get Contacts</Button>
            </div>
        );
    }
}