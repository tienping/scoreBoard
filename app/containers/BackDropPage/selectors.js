/**
 * BackDropPage selectors
 */

import { createSelector } from 'reselect';

const selectBackDropDomain = state => state.get('backdrop');

const makeSelectFirebaseData = () => createSelector(
    selectBackDropDomain,
    (substate) => substate.get('data')
);

export { selectBackDropDomain, makeSelectFirebaseData };
