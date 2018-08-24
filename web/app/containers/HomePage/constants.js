/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const ADD_TODO = 'scoreboard/Home/ADD_TODO';
export const COMPLETE_TODO = 'scoreboard/Home/COMPLETE_TODO';
export const FETCH_TODO = 'scoreboard/Home/FETCH_TODO';
export const FETCH_FIREBASE_SUCCSS = 'scoreboard/Home/FETCH_FIREBASE_SUCCSS';
