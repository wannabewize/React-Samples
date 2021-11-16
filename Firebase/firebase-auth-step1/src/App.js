import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {firebaseConfig} from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { FacebookAuthProvider, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const UserInfo = ({user}) => (
  <ul>
    <li>uid : {user.uid}</li>
    <li>email : {user.email}</li>
  </ul>
)

function App() {
  const [user, setUser] = useState(null);  
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
};  

  useEffect(() => {
    // 인증 상태 변경 옵저버
    onAuthStateChanged(getAuth(), (user) => {
        console.log('user auth state changed');        
        if (user) {
            setUser(user);
        } else {
            console.log('sign out');
            setUser(null);
        }
    });    
  }, []);

  const logOut = () => {
    getAuth().signOut();
  }

  return (
    <div>
      <h1>Firebase Auth Basic Example</h1>
      <h3>User</h3>
      {
        user
          ? <>
              <UserInfo user={user} />
              <button onClick={logOut}>Log-Out</button>  
            </>
          : <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={getAuth()}/> 
      }
    </div>
  );
}

export default App;
