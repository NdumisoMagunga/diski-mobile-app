import { FETCH_FIXTURES } from '../actions/types';

export default (state=[], action) => {
    switch(action.type) {
        case FETCH_FIXTURES:
        return action.payload || false;
        default:
        return state;
    }
};
