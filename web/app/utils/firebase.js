import * as firebase from 'firebase';
import { FirebaseConfig } from './firebaseConfig';

firebase.initializeApp(FirebaseConfig);

export const databaseRef = firebase.database().ref();
export const dataRef = databaseRef.child("data");

export function getFirebaseSnapshot(ref) {
    return new Promise((resolve) => {
        ref.on('value', function(snapshot) {
            if (snapshot.exists()) {
                resolve(snapshot.val());
            }
            resolve(null);
        });
    });
}