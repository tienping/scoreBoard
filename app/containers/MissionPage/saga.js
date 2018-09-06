import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { ADD_ENTRY } from './constants';
import { dataRef } from "./../../utils/firebase";

export function addingEntry(params) {
    const { groups, addScoreGroup, addScoreRemark, addScoreValue, index, time } = params.data
    const group =  eval(addScoreGroup);
    const log = {
        message: `任务: ${addScoreRemark}`,
        value: eval(addScoreValue),
        time,
    };

    const newValue = groups[group].y + log.value;
    dataRef.child("groups").child(group).child('y').set(newValue);
    dataRef.child("groups").child(group).child('log').child(index).set(log);
};

export default function* missionPageProcess() {
    yield takeLatest(ADD_ENTRY, addingEntry);
}
