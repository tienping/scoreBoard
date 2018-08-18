import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');
const selectRoute = (state) => state.get('route');
const selectSession = (state) => state.get('session');

const makeSelectAuthenticated = () => createSelector(
    selectSession,
    (substate) => substate.get('authenticated')
);

const makeSelectChecked = () => createSelector(
    selectSession,
    (substate) => substate.get('checked')
);

const makeSelectUserData = () => createSelector(
    selectSession,
    (substate) => substate.get('user')
);

const makeSelectLocation = () => createSelector(
    selectRoute,
    (routeState) => routeState.get('location')
);

export {
    selectGlobal,
    selectRoute,
    selectSession,
    makeSelectAuthenticated,
    makeSelectChecked,
    makeSelectUserData,
    makeSelectLocation,
};
