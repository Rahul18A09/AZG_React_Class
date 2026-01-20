import React from "react";

function Profile(props) {
  return (
    <>
      <div>
        <h1>{props.name}</h1>
        <h2>{props.role}</h2>
      </div>
    </>
  );
}

export default Profile;
