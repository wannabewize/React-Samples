import { useSelector } from 'react-redux';
import { getAuth } from "firebase/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { FacebookAuthProvider, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";


export const AuthComponent = () => {
    const user = useSelector(state => state.user);

    const logOut = () => {
        getAuth().signOut();
    }

    const uiConfig = {
        signInFlow: 'popup',
        // redirect를 하면 reload가 발생하므로 callback 사용
        // signInSuccessUrl: '/',
        callbacks: {
            signInSuccessWithAuthResult: (ret) => {
                console.log('success', ret);
            }
        },
        signInOptions: [
            EmailAuthProvider.PROVIDER_ID,
            // FacebookAuthProvider.PROVIDER_ID,
            // GoogleAuthProvider.PROVIDER_ID,
        ]
    }

    return (
        <>
            {user
                ? <button onClick={logOut}>Log-Out</button>
                :  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={getAuth()} />
            }
        </>
    )
}