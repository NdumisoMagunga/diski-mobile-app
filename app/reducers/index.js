import { combineReducers } from 'redux';
import fixturesReducer from './fixtureReducer';
import authReducer from './authReducer';
import tournamentsReducer from './tournamentsReducer';
import tournamentReducer from './tournamentReducer';
import groupsReducer from './groupsReducer';

export default combineReducers({
    auth: authReducer,
    fixtures: fixturesReducer,
    tournaments: tournamentsReducer,
    tournament: tournamentReducer,
    groups: groupsReducer,
});