import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {firebaseConfig} from "./firebaseConfig";
import { UserComponent } from "./UserComponent";
import { AuthComponent } from "./AuthComponent";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div>
      <h1>Firebase Auth Example with Redux</h1>
      <AuthComponent />
      <UserComponent />
    </div>
  );
}

export default App;
