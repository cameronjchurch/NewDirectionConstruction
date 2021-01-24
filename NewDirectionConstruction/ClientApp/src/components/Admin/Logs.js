import React, { useState } from 'react';
import { Button, Table } from 'reactstrap';
import { useTable } from 'react-table';
const axios = require('axios').default;

const Logs = (props) => {

    const [pageNumber, setPageNumber] = useState(0);
    const [logEntries, setLogEntries] = useState([]);
    const [showClear, setShowClear] = useState(false);

    const columns = React.useMemo(() => [
        { Header: 'Log Id', accessor: 'id' },
        { Header: 'Time', accessor: 'logTime' },
        { Headder: 'Level', accessor: 'level' },
        { Header: 'Message', accessor: 'message' },
        { Header: 'Exception', accessor: 'exception' },
        { Header: 'Logger', accessor: 'logger' },
        { Header: 'Stack Trace', accessor: 'stackTrace' }
    ], []);

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
    }

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, logEntries })

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
            <Table {...getTableProps()} dark responsive>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                    style={{
                                        borderBottom: 'solid 3px red',
                                        background: 'aliceblue',
                                        color: 'black',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                padding: '10px',
                                                border: 'solid 1px gray',
                                                background: 'papayawhip',
                                            }}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            }
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