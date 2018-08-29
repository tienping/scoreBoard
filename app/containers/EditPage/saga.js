import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { ADD_ENTRY } from './constants';
import { dataRef } from "./../../utils/firebase";

export function addingEntry(params) {
    const { groups, addScoreGroup, addScoreRemark, addScoreValue, index } = params.data
    const value = {
        group: eval(addScoreGroup),
        message: addScoreRemark,
        value: eval(addScoreValue),
    };
    dataRef.child("logs").child(index).set(value);

    const newValue = groups[value.group].data[0] + value.value;
    dataRef.child("groups").child(value.group).child('data').child(0).set(newValue);
};

export default function* editPageProcess() {
  yield takeLatest(ADD_ENTRY, addingEntry);
}
