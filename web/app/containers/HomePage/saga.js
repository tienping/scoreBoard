/**
 * Gets the repositories of the user from Github
 */

import { put, call, takeLatest } from 'redux-saga/effects';

import { ADD_TODO, COMPLETE_TODO, FETCH_TODO } from './constants';
import { fetchFirebaseSuccess } from './actions';
import { dataRef, databaseRef, getFirebaseSnapshot } from "./../../utils/firebase";

export function addToDo(newToDo) {
  dataRef.push().set(newToDo);
};

export function completeTodo(completeTodoId) {
  dataRef.child(completeTodoId).remove();
};

function* getDataSuccess(snapshot) {
  console.log('snapt obtain', snapshot);
  // dispatchEvent(fetchFirebaseSuccess(snapshot.val()));
}

export function* fetchToDo() {
  const res = yield call(getFirebaseSnapshot, dataRef);
  yield put(fetchFirebaseSuccess(res));
};

export default function* getFirebaseData() {
  yield takeLatest(ADD_TODO, addToDo);
  yield takeLatest(COMPLETE_TODO, completeTodo);
  yield takeLatest(FETCH_TODO, fetchToDo);
}
