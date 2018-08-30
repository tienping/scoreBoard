import { fromJS } from 'immutable';

import backDropReducer from '../reducer';
import { changeUsername } from '../actions';

describe('backDropReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      username: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(backDropReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeUsername action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('username', fixture);

    expect(backDropReducer(state, changeUsername(fixture))).toEqual(expectedResult);
  });
});
