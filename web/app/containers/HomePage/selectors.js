/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHomeDomain = state => state.get('home');

const makeSelectFirebaseData = () => createSelector(
  selectHomeDomain,
  (substate) => substate.get('data')
);

export { selectHomeDomain, makeSelectFirebaseData };
