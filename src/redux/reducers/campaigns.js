import { GET_CAMPAIGNS } from '../actionTypes';

const initialState = {
    campaigns: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CAMPAIGNS: {
            return { ...state, campaigns: action.payload};
        }
        default:
            return state;
    }
}
