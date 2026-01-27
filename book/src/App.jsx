import {getDatabase, ref ,set} from "firebase/database";
import {app} from "./firebase";
import './App.css'

const db = getDatabase(app);

function App() {

  const putData = () => {
    set(ref(db, "users/rahul"), {
      id:1,
      name:"Rahul Bharada",
      age:25,
    });
  }
 
  return (
  <div className='App'>
    <h1>Firebase React App</h1>
    <button onClick={putData}>Put data</button>
  </div>
  )
}

export default App
