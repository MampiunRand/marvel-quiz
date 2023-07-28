import React from 'react';
import firebase from 'firebase/compat/app';

const config = {
    apiKey: "AIzaSyDthUo-7QPpdAqoHB0KgeJfpAxyUQj891g",
    authDomain: "marvel-quiz-2b867.firebaseapp.com",
    projectId: "marvel-quiz-2b867",
    storageBucket: "marvel-quiz-2b867.appspot.com",
    messagingSenderId: "1011243142745",
    appId: "1:1011243142745:web:9ef9f9253e675d8c042b48"
};

class Firebase{
    constructor() {
      firebase.initializeApp(config);
    }
}
export default Firebase;