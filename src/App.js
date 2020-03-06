import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Campaigns from './components/Campaigns';
import { getCampaigns, getUsers } from './redux/actions';

const App = props => {
    const [error, setError] = useState('');
    useEffect(() => {
        async function fetchCampaigns() {
            const result = await fetch(
                'https://my-json-server.typicode.com/kentackis123/ADForm-campaigns/campaigns'
            );
            const result1 = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            );
            result
                .json()
                .then(res => props.dispatch(getCampaigns(res)))
                .catch(err => setError(err));
            result1
                .json()
                .then(res => props.dispatch(getUsers(res)))
                .catch(err => setError(err));
        }
        fetchCampaigns();
    }, []);
    return error ? (
        <p>There was an error retrieving data, please try again later</p>
    ) : (
        <Campaigns />
    );
};

export default connect()(App);
