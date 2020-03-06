import { GET_CAMPAIGNS, GET_USERS } from '../actionTypes';

const initialState = {
    campaigns: [],
    users: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CAMPAIGNS: {
            return { ...state, campaigns: action.payload.content };
        }
        case GET_USERS: {
            return { ...state, users: action.payload.content };
        }
        default:
            return state;
    }
}
