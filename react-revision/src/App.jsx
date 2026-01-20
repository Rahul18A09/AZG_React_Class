import "./App.css";
import Profile from "./components/Profile";
import UserCard from "./components/UserCard";

function App() {
  return (
    <>
      {/* <Profile name="Rahul" role="Frontend Developer" /> */}
      {/* <Profile name="Asha" role="Backend Developer" /> */}

      <UserCard name="Rahul" age={26} city="Keshod" />
    </>
  );
}

export default App;
