/**
 * Gets the repositories of the user from Github
 */

import { takeLatest } from 'redux-saga/effects';

import { ADD_TODO, COMPLETE_TODO } from './constants';
import { dataRef } from "./../../utils/firebase";

export function addToDo(newToDo) {
  dataRef.push().set(newToDo);
};

export function completeTodo(completeTodoId) {
  dataRef.child(completeTodoId).remove();
};

export default function* getFirebaseData() {
  yield takeLatest(ADD_TODO, addToDo);
  yield takeLatest(COMPLETE_TODO, completeTodo);
}
