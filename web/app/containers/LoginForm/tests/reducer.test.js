import { fromJS } from 'immutable';
import loginFormReducer from '../reducer';

import {
    doLogin,
    // doLogout,
    loginSuccess,
    // loginFailed,
    // checkAuth,
    checkAuthDone,
    // checkAuthError,
} from '../actions';

describe('loginFormReducer', () => {
    let state;
    const responseSuccess = { token: '123' };
    // const responseFailed = { success: false };
    beforeEach(() => {
        window.sessionService = {
            saveSession: jest.fn,
            deleteSession: jest.fn,
            deleteUser: jest.fn,
        };

        state = fromJS({
            loading: false,
            error: false,
        });
    });

    it('should return the initial state', (done) => {
        const expectedResult = state;
        expect(loginFormReducer(undefined, {})).toEqual(fromJS(expectedResult));
        done();
    });

    // describe('login');

    // Login
    it('should show loading when trying to login', (done) => {
        const expected = state.set('loading', true);
        expect(loginFormReducer(state, doLogin())).toEqual(expected);
        done();
    });

    // it('should show loading when trying to logout', (done) => {
    //     const expected = state.set('loading', false);
    //     expect(loginFormReducer(state, doLogout())).toEqual(expected);
    //     done();
    // });

    it('should set loading false when success', (done) => {
        const expected = state.set('loading', false).set('error', false);
        expect(loginFormReducer(state, loginSuccess(responseSuccess))).toEqual(expected);
        done();
    });

    it('should show error if login failed', (done) => {
        // const expected = state.set('loading', { success: false }).set('error', true);
        // expect(loginFormReducer(state, loginFailed(responseFailed))).toEqual(expected);
        done();
    });

    // it('should reset session when logout success', (done) => {
    //     // TODO: test for reset session
    //     const expected = state.set('loading', false).set('error', false);
    //     expect(loginFormReducer(state, doLogout())).toEqual(expected);
    //     done();
    // });

    // describe('authentication');

    it('should set loading when checking authentication', (done) => {
        // const expected = state.set('loading', true);
        // expect(loginFormReducer(state, checkAuth())).toEqual(expected);
        done();
    });

    it('should set loading success if authenticated', (done) => {
        const expected = state.set('loading', false).set('error', false);
        expect(loginFormReducer(state, checkAuthDone(responseSuccess))).toEqual(expected);
        done();
    });

    it('should set error to true if unauthenticated', (done) => {
        // const expected = state.set('loading', false).set('error', false);
        // expect(loginFormReducer(state, checkAuthError(responseFailed))).toEqual(expected);
        done();
    });
});
