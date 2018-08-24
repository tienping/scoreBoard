/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { ADD_TODO, COMPLETE_TODO, FETCH_TODO, FETCH_FIREBASE_SUCCSS } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function addTodo(response) {
  return {
    type: ADD_TODO,
    response,
  };
}

export function completeTodo(response) {
  return {
    type: COMPLETE_TODO,
    response,
  };
}

export function fetchTodo(response) {
  return {
    type: FETCH_TODO,
    response,
  };
}

export function fetchFirebaseSuccess(response) {
  return {
      type: FETCH_FIREBASE_SUCCSS,
      payload: response,
  };
}
