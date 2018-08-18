import { fromJS } from 'immutable';
import {
    selectGlobal,
    selectRoute,
    selectSession,
    makeSelectAuthenticated,
    makeSelectChecked,
    makeSelectUserData,
    makeSelectLocation,
} from '../selectors';

describe('Global Selector', () => {
    it('should select the global state', () => {
        const globalState = fromJS({});
        const mock = fromJS({ global: globalState });
        expect(selectGlobal(mock)).toEqual(globalState);
    });
});

describe('Routes Selector', () => {
    it('should select the routes state', () => {
        const routeState = fromJS({
            location: {},
        });
        const mock = fromJS({ route: routeState });
        expect(selectRoute(mock)).toEqual(routeState);
    });

    it('should select the location', () => {
        const selector = makeSelectLocation();
        const d = fromJS({
            location: {
                pathname: '/test_path',
            },
        });

        const mock = fromJS({
            route: d,
        });
        expect(d.get('location')).toEqual(selector(mock));
    });
});

describe('Session Selector', () => {
    it('should select the session state', () => {
        const sessionState = fromJS({
            authenticated: false,
            checked: false,
            user: {},
        });
        const mock = fromJS({
            session: sessionState,
        });
        expect(selectSession(mock)).toEqual(sessionState);
    });

    it('should select the checked', () => {
        const selectChecked = makeSelectChecked();
        const checkedState = fromJS({
            checked: false,
        });
        const mock = fromJS({
            session: checkedState,
        });

        expect(checkedState.get('checked')).toEqual(selectChecked(mock));
    });

    it('should select authentication status', () => {
        const selectAuth = makeSelectAuthenticated();
        const authState = fromJS({
            authenticated: true,
        });
        const mock = fromJS({
            session: authState,
        });

        expect(authState.get('authenticated')).toEqual(selectAuth(mock));
    });

    it('should select user data', () => {
        const selectUser = makeSelectUserData();
        const userState = fromJS({
            user: {},
        });
        const mock = fromJS({
            session: userState,
        });

        expect(userState.get('user')).toEqual(selectUser(mock));
    });
});
