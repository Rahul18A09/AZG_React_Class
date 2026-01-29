import { getAuth } from "firebase/auth";
import { app } from "./firebase";
import "./App.css";
import Signup from "./Pages/Signup";
import SignIn from "./Pages/SignIn";

const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <h1>Firebase React App</h1>
      <hr />
      <h2>SignUp Page</h2>
      <Signup />
      <hr />
      <h2>SignIn Page</h2>
      <SignIn />
    </div>
  );
}

export default App;
