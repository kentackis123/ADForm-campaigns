import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import store from '../../redux/store';
import { Table, Status } from './styled';

const Campaigns = () => {
    const [campaignsState, setCampaigns] = useState([]);
    const [sorter, setSorter] = useState('');

    store.subscribe(() => {
        const { users, campaigns } = store.getState();
        const formatDate = date => moment(date).format();
        setCampaigns(
            campaigns.map(i => ({
                ...i,
                user: users.find(user => user.id === i.userId),
                status:
                    formatDate(i.startDate) > formatDate(i.endDate)
                        ? 'Invalid'
                        : formatDate(i.startDate) < new Date() &&
                          formatDate(i.endDate) > new Date()
                        ? 'Active'
                        : 'Inactive'
            }))
        );
    });

    const SortByCol = e => {
        const col = e.target.id;
        setSorter(col);
        if (col === 'user') {
            setCampaigns(
                [].concat(
                    campaignsState.sort((a, b) =>
                        a.user.name > b.user.name ? 1 : -1
                    )
                )
            );
        }
        if (col === 'startDate' || col === 'endDate') {
            setCampaigns(
                [].concat(
                    campaignsState.sort((a, b) =>
                        moment(a[col]).unix() > moment(b[col]).unix() ? 1 : -1
                    )
                )
            );
        } else {
            setCampaigns(
                [].concat(
                    campaignsState.sort((a, b) => (a[col] > b[col] ? 1 : -1))
                )
            );
        }
    };

    return (
        <Table sorter={sorter}>
            <p id="id" onClick={SortByCol}>
                ID
            </p>
            <p id="user" onClick={SortByCol}>
                User
            </p>
            <p id="startDate" onClick={SortByCol}>
                Start date
            </p>
            <p id="endDate" onClick={SortByCol}>
                End date
            </p>
            <p style={{ cursor: 'auto' }}>Status</p>
            <p id="Budget" onClick={SortByCol}>
                Budget
            </p>
            {campaignsState
                .filter(filt => filt.status !== 'Invalid')
                .map(camp => (
                    <React.Fragment key={camp.id}>
                        <span>#{camp.id}</span>
                        <span>
                            {camp.user ? camp.user.name : 'Unknown User'}
                        </span>
                        <span>{camp.startDate}</span>
                        <span>{camp.endDate}</span>
                        <Status status={camp.status}>{camp.status}</Status>
                        <span>
                            $
                            {camp.Budget > 1000
                                ? `${Math.round(camp.Budget / 1000)}k`
                                : camp.Budget}
                        </span>
                    </React.Fragment>
                ))}
        </Table>
    );
};

export default connect()(Campaigns);
