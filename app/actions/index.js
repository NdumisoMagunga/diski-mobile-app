import {
    FETCH_FIXTURES,
    FETCH_RESULTS,
    FETCH_TOURNAMENTS,
    FETCH_TOURNAMENT,
  FETCH_GROUPS
} from './types';

const base= 'http://portal.diskinine9.co.za/api';

export const fetchFixtures = (id) => async dispatch => {
    try {
        const res = await fetch(base+'/fixture/tournament/'+id);
        const data = await res.json();
        dispatch({
            type: FETCH_FIXTURES,
            payload: data
            });
        } catch (error) {
            console.error("LOG", error.message);

        }
};


export const fetchTournaments = () => async dispatch => {
try {
    const res = await fetch(base+'/tournament');
    const data = await res.json();
    dispatch({
        type: FETCH_TOURNAMENTS,
        payload: data
    });
    }catch(error){
        console.log("tournaments", error.message);
    }
};

export const fetchTournament = (id) => async dispatch => {
    try {
        const res = await fetch(base +'/tournament/'+id);
        const data = await res.json();
        dispatch({
            type: FETCH_TOURNAMENT,
            payload: data
        });
        }catch(error){
            console.log("tournament", error.message);
        }
    };

    export const fetchGroups = (id) => async dispatch => {
        try{
            const res = await fetch(base +'/group/'+id);
            const data = await res.json();
            dispatch({
                type:FETCH_GROUPS,
                 payload:data
            });
        }catch(error){
            console.log("logsss", error.message);
        }
    };