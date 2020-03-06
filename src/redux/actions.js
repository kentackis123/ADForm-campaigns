import { GET_CAMPAIGNS, GET_USERS } from './actionTypes';

export const getCampaigns = content => ({
    type: GET_CAMPAIGNS,
    payload: {
        content
    }
});

export const getUsers = content => ({
    type: GET_USERS,
    payload: {
        content
    }
});
