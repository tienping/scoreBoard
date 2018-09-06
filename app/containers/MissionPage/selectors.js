import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the missionPage state domain
 */

const selectMissionPageDomain = state => state.get('missionPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MissionPage
 */

const makeSelectMissionPage = () =>
  createSelector(selectMissionPageDomain, substate => substate.toJS());

export default makeSelectMissionPage;
export { selectMissionPageDomain };
