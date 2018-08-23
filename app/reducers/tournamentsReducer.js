import {FETCH_TOURNAMENTS} from '../actions/types';

export default (state = [], action) => {
    switch(action.type){
        case FETCH_TOURNAMENTS:
        return action.payload || false;
        default:
        return state;
    }
}