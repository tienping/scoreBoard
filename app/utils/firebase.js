import * as firebase from 'firebase';
import { FirebaseConfig } from './firebaseConfig';

firebase.initializeApp(FirebaseConfig);

export const databaseRef = firebase.database().ref();
export const dataRef = databaseRef.child("data");
export const missionRef = databaseRef.child("mission");