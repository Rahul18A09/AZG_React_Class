// import {getDatabase, ref ,set} from "firebase/database";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {app} from "./firebase";
import './App.css'
import Signup from "./Pages/Signup";

// const db = getDatabase(app);

const auth = getAuth(app);

function App() {

  // const putData = () => {
  //   set(ref(db, "users/rahul"), {
  //     id:1,
  //     name:"Rahul Bharada",
  //     age:25,
  //   });
  // }

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, "rahulbharda@gmail.com", "rahul@123").then((value) => console.log(value));
  };

  
  return (
  <div className='App'>
    <h1>Firebase React App</h1>
    {/* <button onClick={putData}>Put data</button> */}
    {/* <button onClick={signupUser}>Create User</button> */}

    <Signup/>
  </div>
  )
}

export default App
