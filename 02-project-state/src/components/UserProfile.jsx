import { useState } from "react";

const UserProfile = () => {
  const [name, SetName] = useState("Guest");
  const [age, SetAge] = useState(18);

  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Age:{age}</h3>
      <button onClick={() => SetName("Rahul")}>Change Name</button>
      <button onClick={() => SetAge(age + 1)}>Change Age</button>
    </div>
  );
};

export default UserProfile;
