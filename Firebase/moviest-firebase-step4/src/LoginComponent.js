import React from 'react';
import { useHistory } from "react-router-dom";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';



const LoginComponent = () => {
    const history = useHistory();
    const uiConfig = {
        signInFlow: 'popup',
        // redirect를 하면 reload가 발생하므로 callback 사용
        // signInSuccessUrl: '/',    
        callbacks: {
            signInSuccessWithAuthResult: () => {
                history.push('/');            
            }
        },    
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ]
    };

    return (
        <div>
            <h3>Firebase Auth</h3>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
    )
}

export default LoginComponent;