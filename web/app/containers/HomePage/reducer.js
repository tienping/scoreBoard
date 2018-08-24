/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { ADD_TODO, COMPLETE_TODO, FETCH_TODO, FETCH_FIREBASE_SUCCSS } from './constants';

// The initial state of the App
export const initialState = fromJS({
  data: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FIREBASE_SUCCSS:
      return state.set('data', action.payload || { entry: 'no data' });
    default:
      return state;
  }
}

export default homeReducer;
