import { fromJS } from 'immutable';
import missionPageReducer from '../reducer';

describe('missionPageReducer', () => {
  it('returns the initial state', () => {
    expect(missionPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
