import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Campaigns from './components/campaigns';
import { getCampaigns } from './redux/actions';

const App = props => {
    useEffect(() => {
        async function fetchData() {
            const result = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            );
            result.json().then(res => props.dispatch(getCampaigns(res)));
            // console.log('res', result);
        }
        fetchData();
    }, []);
    return <Campaigns />;
};

export default connect()(App);
