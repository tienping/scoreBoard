import { fromJS } from 'immutable';

import { makeSelectFirebaseData } from '../selectors';

describe('makeSelectFirebaseData', () => {
  const firebaseDataSelector = makeSelectFirebaseData();
  it('should select the username', () => {
    const username = 'mxstbr';
    const mockedState = fromJS({
      backdrop: {
        username,
      },
    });
    expect(makeSelectFirebaseData(mockedState)).toEqual(username);
  });
});
