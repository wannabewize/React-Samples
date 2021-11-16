import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, FacebookAuthProvider, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";

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
            EmailAuthProvider.PROVIDER_ID,
            // FacebookAuthProvider.PROVIDER_ID,
            // GoogleAuthProvider.PROVIDER_ID,
        ]
    };

    return (
        <div>
            <h3>Firebase Auth</h3>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={getAuth()}/>
        </div>
    )
}

export default LoginComponent;