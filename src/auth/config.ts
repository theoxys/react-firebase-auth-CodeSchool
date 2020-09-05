import * as firebase from 'firebase/app';
import 'firebase/auth';

export const AuthConfig = firebase.initializeApp({
    apiKey: "AIzaSyD675pdHdRxCvUWMqdbdJSZy6WmhqbCL8A",
    authDomain: "react-auth-820fe.firebaseapp.com",
    databaseURL: "https://react-auth-820fe.firebaseio.com",
    projectId: "react-auth-820fe",
    storageBucket: "react-auth-820fe.appspot.com",
    messagingSenderId: "657884934103",
    appId: "1:657884934103:web:33af824924799d834d6592"
});

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();

export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
