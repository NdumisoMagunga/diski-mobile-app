import {FETCH_GROUPS} from '../actions/types';

export default (state=[], action) => {
    switch(action.type){
        case FETCH_GROUPS:
        return action.payload || false
        default:
        return state
    }
}