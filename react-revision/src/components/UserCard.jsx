import React from "react";

function UserCard({ name, age, city }) {
  return (
    <div style={{border:"1px solid blue", padding:"10px", margin:"10px" }}>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default UserCard;
