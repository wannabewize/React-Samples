import React from 'react';
import firebase from "firebase";
import {FnComponent} from "./FnComponent";
import {ClassComponent} from "./ClassComponent";
import {firebaseConfig} from "./firebaseConfig";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function App() {
    console.log('App Rendering!');
    return (
        <div>
            <h1>Moviest by Firebase</h1>
            <FnComponent db={db} />
            <ClassComponent db={db} />
        </div>
    );
}

export default App;

