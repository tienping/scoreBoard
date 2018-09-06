import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { ADD_ENTRY } from './constants';
import { dataRef } from "./../../utils/firebase";

export function addingEntry(params) {
    const { groups, addScoreGroup, addScoreRemark, addScoreValue, index } = params.data
    const group =  eval(addScoreGroup);
    const log = {
        message: addScoreRemark,
        value: eval(addScoreValue),
    };

    const newValue = groups[group].data[0] + log.value;
    dataRef.child("groups").child(group).child('data').child(0).set(newValue);
    dataRef.child("groups").child(group).child('log').child(index).set(log);
};

export default function* editPageProcess() {
    yield takeLatest(ADD_ENTRY, addingEntry);
}
