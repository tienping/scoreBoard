/*
 *
 * MissionPage reducer
 *
 */

import { fromJS } from 'immutable';
import { ADD_ENTRY } from './constants';

export const initialState = fromJS({});

function missionPageReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ENTRY:
            return state;
        default:
            return state;
    }
}

export default missionPageReducer;
